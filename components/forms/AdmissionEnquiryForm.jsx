'use client';

import { useState } from 'react';
import { Send, CheckCircle2, Shield } from 'lucide-react';
import Button from '../common/Button';
import { apiService } from '@/lib/apiService';

export default function AdmissionEnquiryForm({ defaultCollege = '', defaultCourse = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: defaultCourse || 'B.Tech / Engineering',
    preferredLocation: 'Jaipur',
    preferredCollege: defaultCollege || '',
    message: ''
  });

  const [status, setStatus] = useState({ loading: false, success: false, error: null, enquiryId: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please provide your name and contact phone number.');
      return;
    }

    setStatus({ loading: true, success: false, error: null, enquiryId: null });
    try {
      const response = await apiService.submitEnquiry(formData);
      if (response.success) {
        setStatus({ loading: false, success: true, error: null, enquiryId: response.enquiryId });
      } else {
        setStatus({ loading: false, success: false, error: 'Failed to submit enquiry. Please try again.', enquiryId: null });
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: 'Network error. Please try again later.', enquiryId: null });
    }
  };

  if (status.success) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded p-6 text-center space-y-3">
        <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
        <h4 className="text-lg font-bold text-emerald-950">
          Enquiry Submitted Successfully
        </h4>
        <p className="text-xs text-emerald-800 max-w-md mx-auto">
          Thank you, <span className="font-semibold">{formData.name}</span>. An authorized educational counselor will review your profile and contact you on <span className="font-semibold">{formData.phone}</span> within 2 hours.
        </p>
        <div className="text-[11px] text-emerald-700 bg-emerald-100/70 inline-block px-3 py-1 rounded">
          Reference ID: {status.enquiryId}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white border border-brand-border rounded p-6">
      <div className="border-b border-brand-border pb-3">
        <h3 className="text-base font-bold text-brand-dark tracking-tight">
          Request Admission & Fee Guidance
        </h3>
        <p className="text-xs text-brand-gray mt-1">
          Get verified fee structures, cutoff assessments, and direct admission eligibility for 2026.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label className="block text-xs font-semibold text-brand-dark mb-1">
            Full Name *
          </label>
          <input
            type="text"
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Rahul Sharma"
            className="w-full border border-gray-300 rounded px-3 py-2 text-xs text-brand-dark focus:border-brand-teal focus:ring-1 focus:ring-brand-teal focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-brand-dark mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. 9876543210"
            className="w-full border border-gray-300 rounded px-3 py-2 text-xs text-brand-dark focus:border-brand-teal focus:ring-1 focus:ring-brand-teal focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label className="block text-xs font-semibold text-brand-dark mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. rahul@example.com"
            className="w-full border border-gray-300 rounded px-3 py-2 text-xs text-brand-dark focus:border-brand-teal focus:ring-1 focus:ring-brand-teal focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-brand-dark mb-1">
            Interested Program
          </label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 text-xs text-brand-dark focus:border-brand-teal focus:ring-1 focus:ring-brand-teal focus:outline-none bg-white"
          >
            <option value="B.Tech / Engineering">B.Tech / Engineering</option>
            <option value="Computer Science (CSE)">Computer Science (CSE)</option>
            <option value="MBA / PGDM">MBA / PGDM</option>
            <option value="Medical (MBBS)">Medical (MBBS)</option>
            <option value="Law (BA LLB)">Law (BA LLB)</option>
            <option value="BCA / MCA">BCA / MCA</option>
            <option value="BBA / Management">BBA / Management</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label className="block text-xs font-semibold text-brand-dark mb-1">
            Preferred Location
          </label>
          <select
            name="preferredLocation"
            value={formData.preferredLocation}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 text-xs text-brand-dark focus:border-brand-teal focus:ring-1 focus:ring-brand-teal focus:outline-none bg-white"
          >
            <option value="Jaipur">Jaipur (Rajasthan)</option>
            <option value="Delhi NCR">Delhi NCR</option>
            <option value="Bangalore">Bangalore (Karnataka)</option>
            <option value="Mumbai / Pune">Mumbai / Pune</option>
            <option value="Any Top City">Any Top City in India</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-brand-dark mb-1">
            Specific Target College (Optional)
          </label>
          <input
            type="text"
            name="preferredCollege"
            value={formData.preferredCollege}
            onChange={handleChange}
            placeholder="e.g. MNIT Jaipur, MUJ..."
            className="w-full border border-gray-300 rounded px-3 py-2 text-xs text-brand-dark focus:border-brand-teal focus:ring-1 focus:ring-brand-teal focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-brand-dark mb-1">
          Your Question or Current 12th / Entrance Score
        </label>
        <textarea
          rows={2}
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="e.g. scored 86% in 12th PCM, looking for top CSE options with hostel under ₹2.5L/year."
          className="w-full border border-gray-300 rounded px-3 py-2 text-xs text-brand-dark focus:border-brand-teal focus:ring-1 focus:ring-brand-teal focus:outline-none resize-none"
        />
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
          <Shield className="w-3.5 h-3.5 text-brand-teal" />
          <span>Zero spam. Data protected under student privacy guidelines.</span>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={status.loading}
          icon={Send}
          iconPosition="right"
          className="w-full sm:w-auto"
        >
          {status.loading ? 'Submitting...' : 'Submit Free Enquiry'}
        </Button>
      </div>
    </form>
  );
}
