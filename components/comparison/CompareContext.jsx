'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { collegesData } from '@/lib/data/colleges';

const CompareContext = createContext();

export function CompareProvider({ children }) {
  const [selectedColleges, setSelectedColleges] = useState([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('compare_colleges');
      if (saved) {
        setSelectedColleges(JSON.parse(saved));
      } else if (collegesData && collegesData.length >= 2) {
        setSelectedColleges([collegesData[0], collegesData[1]]);
      }
    } catch (e) {
      if (collegesData && collegesData.length >= 2) {
        setSelectedColleges([collegesData[0], collegesData[1]]);
      }
    }
  }, []);

  const addCollege = (college) => {
    if (selectedColleges.some((c) => c.id === college.id)) return false;
    if (selectedColleges.length >= 4) {
      alert('You can compare a maximum of 4 colleges at a time.');
      return false;
    }
    const updated = [...selectedColleges, college];
    setSelectedColleges(updated);
    try {
      localStorage.setItem('compare_colleges', JSON.stringify(updated));
    } catch (e) {}
    return true;
  };

  const removeCollege = (collegeId) => {
    const updated = selectedColleges.filter((c) => c.id !== collegeId);
    setSelectedColleges(updated);
    try {
      localStorage.setItem('compare_colleges', JSON.stringify(updated));
    } catch (e) {}
  };

  const clearCompare = () => {
    setSelectedColleges([]);
    try {
      localStorage.removeItem('compare_colleges');
    } catch (e) {}
  };

  const isSelected = (collegeId) => {
    return selectedColleges.some((c) => c.id === collegeId);
  };

  return (
    <CompareContext.Provider
      value={{
        selectedColleges,
        addCollege,
        removeCollege,
        clearCompare,
        isSelected,
        maxLimit: 4
      }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error('useCompare must be used within a CompareProvider');
  }
  return context;
}
