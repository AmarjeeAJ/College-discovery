import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import Button from '../../components/common/Button';
import { apiService } from '../../services/api';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', subject: 'General Enquiry', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false });
    const res = await apiService.submitContact(formData);
    if (res.success) {
      setStatus({ loading: false, success: true });
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <SEO
        title="Contact Our Admissions Desk in Jaipur & Delhi: Phone, Email, Office Location"
        description="Get in touch with educational counselors at College Leadership. Visit our Jaipur advisory office or call +91 98765 43210."
        canonical="https://theshineeducation.com/contact"
      />

      <Breadcrumbs items={[{ label: 'Contact Us' }]} />

      <header className="border-b border-brand-border pb-8 space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block">
          Get in Touch
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight">
          Contact Our Admissions Advisory Desk
        </h1>
        <p className="text-sm sm:text-base text-brand-gray max-w-3xl leading-relaxed">
          Whether you have an immediate admission question, need verification on a fee schedule, or want to book an in-person counselling slot, our team is here to assist.
        </p>
      </header>

      {/* Grid: Contact Details & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Office Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="border border-brand-border bg-white rounded p-6 space-y-4">
            <h2 className="text-lg font-bold text-brand-dark border-b border-brand-border pb-3">
              Regional Advisory Offices
            </h2>

            {/* Jaipur Office */}
            <div className="space-y-1.5 text-xs text-brand-gray">
              <div className="flex items-center gap-2 font-bold text-sm text-brand-dark">
                <MapPin className="w-4 h-4 text-brand-teal shrink-0" />
                <span>Jaipur Head Office (Rajasthan)</span>
              </div>
              <p className="pl-6">
                Plot No. 42, Apex Mall Commercial Complex, Tonk Road & Malviya Nagar, Jaipur, Rajasthan 302017
              </p>
            </div>

            {/* Delhi Office */}
            <div className="space-y-1.5 text-xs text-brand-gray pt-3 border-t border-brand-border/60">
              <div className="flex items-center gap-2 font-bold text-sm text-brand-dark">
                <MapPin className="w-4 h-4 text-brand-teal shrink-0" />
                <span>Delhi NCR Liaison Desk</span>
              </div>
              <p className="pl-6">
                Level 3, Connaught Place Outer Circle, New Delhi 110001
              </p>
            </div>
          </div>

          {/* Quick Communication Card */}
          <div className="border border-brand-border bg-brand-teal-subtle rounded p-6 space-y-3 text-xs">
            <h3 className="font-bold text-sm text-brand-dark">Direct Helpline & Working Hours</h3>
            <div className="space-y-2 text-brand-gray">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-teal shrink-0" />
                <span>+91 98765 43210 / +91 0141 2780000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-teal shrink-0" />
                <span>admissions@theshineeducation.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-teal shrink-0" />
                <span>Monday - Saturday: 9:30 AM to 7:00 PM IST</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 text-white hover:bg-emerald-700 px-4 py-2 rounded text-xs font-semibold transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat with Counselor on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Message Form */}
        <div className="lg:col-span-7">
          {status.success ? (
            <div className="border-2 border-brand-teal bg-white rounded p-8 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-brand-teal mx-auto" />
              <h3 className="text-xl font-bold text-brand-dark">Message Sent Successfully</h3>
              <p className="text-xs sm:text-sm text-brand-gray max-w-md mx-auto">
                Thank you for contacting College Leadership. An admissions advisor will review your query and reply to your provided email or phone shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="border border-brand-border bg-white rounded p-6 sm:p-8 space-y-4">
              <h2 className="text-lg font-bold text-brand-dark border-b border-brand-border pb-3">
                Send an Admissions Inquiry
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-brand-dark mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full name"
                    className="w-full border border-gray-300 rounded px-3 py-2 text-xs text-brand-dark focus:border-brand-teal focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-brand-dark mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile"
                    className="w-full border border-gray-300 rounded px-3 py-2 text-xs text-brand-dark focus:border-brand-teal focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-brand-dark mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full border border-gray-300 rounded px-3 py-2 text-xs text-brand-dark focus:border-brand-teal focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-brand-dark mb-1">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-xs text-brand-dark focus:border-brand-teal focus:outline-none bg-white"
                  >
                    <option value="General Enquiry">General Admission Query</option>
                    <option value="Engineering Admissions">B.Tech / Engineering Admissions</option>
                    <option value="MBA Admissions">MBA / Management Guidance</option>
                    <option value="College Partnership">College Verification / Listing</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-dark mb-1">Your Message or Query *</label>
                <textarea
                  rows={4}
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can our admissions counselors assist you?"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-xs text-brand-dark focus:border-brand-teal focus:outline-none"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="md"
                disabled={status.loading}
                icon={Send}
                iconPosition="right"
              >
                {status.loading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
