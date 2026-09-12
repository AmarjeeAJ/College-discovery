import { useState } from 'react';
import { Calendar, Clock, User, Phone, CheckCircle2, Award } from 'lucide-react';
import Button from '../common/Button';
import { apiService } from '../../services/api';

export default function CounsellingBookingForm() {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    currentStatus: 'Class 12th Appearing',
    stream: 'Engineering (PCM)',
    preferredDate: '',
    preferredSlot: 'Morning (10 AM - 1 PM)',
    mode: 'Telephonic & Video Call'
  });

  const [status, setStatus] = useState({ loading: false, success: false, bookingId: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.studentName || !formData.phone) {
      alert('Please fill in required fields.');
      return;
    }

    setStatus({ loading: true, success: false, bookingId: null });
    try {
      const res = await apiService.submitCounselling(formData);
      if (res.success) {
        setStatus({ loading: false, success: true, bookingId: res.bookingId });
      }
    } catch (err) {
      setStatus({ loading: false, success: false, bookingId: null });
    }
  };

  if (status.success) {
    return (
      <div className="bg-white border-2 border-brand-teal p-8 rounded text-center space-y-4">
        <CheckCircle2 className="w-12 h-12 text-brand-teal mx-auto" />
        <h3 className="text-xl font-bold text-brand-dark">
          Counselling Appointment Reserved!
        </h3>
        <p className="text-xs sm:text-sm text-brand-gray max-w-md mx-auto">
          Dear <span className="font-semibold text-brand-dark">{formData.studentName}</span>, our senior counselor will connect with you on <span className="font-semibold text-brand-dark">{formData.phone}</span> for your scheduled slot ({formData.preferredSlot}).
        </p>
        <div className="text-xs font-mono bg-brand-teal-light text-brand-teal-dark px-3 py-1.5 rounded inline-block font-semibold">
          Appointment Reference: {status.bookingId}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-brand-border rounded p-6 sm:p-8 space-y-4">
      <div className="border-b border-brand-border pb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block mb-1">
          1-on-1 Guidance
        </span>
        <h3 className="text-xl font-bold text-brand-dark">
          Book Free Counselling Session
        </h3>
        <p className="text-xs text-brand-gray mt-1">
          Personalized college matching with an experienced academic advisor.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-brand-dark mb-1">
            Student Name *
          </label>
          <input
            type="text"
            required
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            placeholder="Student's full name"
            className="w-full border border-gray-300 rounded px-3 py-2 text-xs text-brand-dark focus:border-brand-teal focus:ring-1 focus:ring-brand-teal focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-brand-dark mb-1">
            Parent / Guardian Name (Optional)
          </label>
          <input
            type="text"
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
            placeholder="Parent name"
            className="w-full border border-gray-300 rounded px-3 py-2 text-xs text-brand-dark focus:border-brand-teal focus:ring-1 focus:ring-brand-teal focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-brand-dark mb-1">
            Mobile Number (WhatsApp) *
          </label>
          <input
            type="tel"
            required
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="10-digit phone number"
            className="w-full border border-gray-300 rounded px-3 py-2 text-xs text-brand-dark focus:border-brand-teal focus:ring-1 focus:ring-brand-teal focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-brand-dark mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email@example.com"
            className="w-full border border-gray-300 rounded px-3 py-2 text-xs text-brand-dark focus:border-brand-teal focus:ring-1 focus:ring-brand-teal focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-brand-dark mb-1">
            Current Academic Status
          </label>
          <select
            name="currentStatus"
            value={formData.currentStatus}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 text-xs text-brand-dark focus:border-brand-teal focus:ring-1 focus:ring-brand-teal focus:outline-none bg-white"
          >
            <option value="Class 12th Appearing">Class 12th Appearing</option>
            <option value="Class 12th Passed (Dropper)">Class 12th Passed (Dropper)</option>
            <option value="Undergraduate Final Year">Undergraduate Final Year</option>
            <option value="Graduate Working Professional">Graduate Working Professional</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-brand-dark mb-1">
            Target Stream
          </label>
          <select
            name="stream"
            value={formData.stream}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 text-xs text-brand-dark focus:border-brand-teal focus:ring-1 focus:ring-brand-teal focus:outline-none bg-white"
          >
            <option value="Engineering (PCM)">B.Tech / Engineering</option>
            <option value="Management (MBA/BBA)">Management (MBA / BBA)</option>
            <option value="Medical (NEET/MBBS)">Medical (NEET / MBBS)</option>
            <option value="Law (CLAT/LLB)">Law (CLAT / BA LLB)</option>
            <option value="Computer Applications">Computer Applications (BCA/MCA)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-brand-dark mb-1">
            Preferred Time Slot
          </label>
          <select
            name="preferredSlot"
            value={formData.preferredSlot}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 text-xs text-brand-dark focus:border-brand-teal focus:ring-1 focus:ring-brand-teal focus:outline-none bg-white"
          >
            <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
            <option value="Afternoon (1 PM - 4 PM)">Afternoon (1 PM - 4 PM)</option>
            <option value="Evening (4 PM - 7 PM)">Evening (4 PM - 7 PM)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-brand-dark mb-1">
            Mode of Counselling
          </label>
          <select
            name="mode"
            value={formData.mode}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 text-xs text-brand-dark focus:border-brand-teal focus:ring-1 focus:ring-brand-teal focus:outline-none bg-white"
          >
            <option value="Telephonic & Video Call">Telephonic & Video Call</option>
            <option value="In-Person (Jaipur Office)">In-Person (Jaipur Office)</option>
          </select>
        </div>
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={status.loading}
          className="w-full"
        >
          {status.loading ? 'Booking Session...' : 'Confirm Free Appointment'}
        </Button>
      </div>
    </form>
  );
}
