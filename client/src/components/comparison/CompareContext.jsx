import { createContext, useContext, useState, useEffect } from 'react';
import { collegesData } from '../../data/colleges';

const CompareContext = createContext();

export function CompareProvider({ children }) {
  // Initialize with 2 default colleges so the compare page has immediate demonstration value
  const [selectedColleges, setSelectedColleges] = useState(() => {
    try {
      const saved = localStorage.getItem('compare_colleges');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // fallback
    }
    return [collegesData[0], collegesData[1]]; // MNIT Jaipur and MUJ
  });

  useEffect(() => {
    try {
      localStorage.setItem('compare_colleges', JSON.stringify(selectedColleges));
    } catch (e) {
      // ignore
    }
  }, [selectedColleges]);

  const addCollege = (college) => {
    if (selectedColleges.some((c) => c.id === college.id)) return false;
    if (selectedColleges.length >= 4) {
      alert('You can compare a maximum of 4 colleges at a time.');
      return false;
    }
    setSelectedColleges((prev) => [...prev, college]);
    return true;
  };

  const removeCollege = (collegeId) => {
    setSelectedColleges((prev) => prev.filter((c) => c.id !== collegeId));
  };

  const clearCompare = () => {
    setSelectedColleges([]);
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
