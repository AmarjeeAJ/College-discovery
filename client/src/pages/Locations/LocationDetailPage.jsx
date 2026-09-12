import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Building2, Wallet, CheckCircle, HelpCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import Button from '../../components/common/Button';
import CollegeCard from '../../components/college/CollegeCard';
import AdmissionEnquiryForm from '../../components/forms/AdmissionEnquiryForm';
import { apiService } from '../../services/api';

export default function LocationDetailPage() {
  const { city } = useParams();
  const [location, setLocation] = useState(null);
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLocationData() {
      setLoading(true);
      const targetCity = city || 'jaipur';
      const locRes = await apiService.getLocationBySlug(targetCity);
      if (locRes.success) {
        setLocation(locRes.data);
        // Find colleges in this city
        const collegesRes = await apiService.getColleges({ city: locRes.data.name });
        if (collegesRes.success) {
          setColleges(collegesRes.data);
        }
      }
      setLoading(false);
      window.scrollTo(0, 0);
    }
    loadLocationData();
  }, [city]);

  if (loading) {
    return (
      <div className="py-28 text-center text-brand-gray">
        <div className="w-8 h-8 border-2 border-brand-teal border-t-transparent rounded-full animate-spin mx-auto mb-2" />
        <span>Loading educational hub profile...</span>
      </div>
    );
  }

  if (!location) {
    return (
      <div className="mx-auto max-w-3xl py-20 px-4 text-center space-y-4">
        <h2 className="text-2xl font-bold text-brand-dark">Location Not Found</h2>
        <Button to="/locations" variant="primary">
          Back to Locations
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <SEO
        title={`Best Colleges in ${location.name}, ${location.state} (2026 Rankings, Fees & Cutoffs)`}
        description={`Discover top engineering, management and university colleges in ${location.name}. Comprehensive guide to fee structures, hostels, REAP/state counselling, and placements.`}
        canonical={`https://theshineeducation.com/locations/${location.slug}`}
      />

      <Breadcrumbs
        items={[
          { label: 'Locations', link: '/locations' },
          { label: `Colleges in ${location.name}` }
        ]}
      />

      {/* Hero Banner with Location Photography */}
      <header className="border border-brand-border bg-white rounded overflow-hidden">
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img
            src={location.coverImage}
            alt={`Colleges in ${location.name}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/images/locations/delhi.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal-light">
              Higher Education in {location.state}
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Best Colleges & Universities in {location.name}
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 max-w-3xl">
              {location.tagline}
            </p>
          </div>
        </div>

        {/* Quick Location Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-5 bg-brand-teal-subtle text-xs">
          <div>
            <span className="text-brand-gray block text-[11px]">Institutions Profiled</span>
            <span className="font-bold text-brand-dark text-sm sm:text-base">{location.collegeCount}+ Colleges</span>
          </div>
          <div>
            <span className="text-brand-gray block text-[11px]">Monthly Student Living Cost</span>
            <span className="font-bold text-emerald-700 text-sm sm:text-base">{location.averageLivingCost}</span>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <span className="text-brand-gray block text-[11px]">Primary Disciplines</span>
            <span className="font-semibold text-brand-dark">{location.popularStreams.slice(0, 2).join(', ')}</span>
          </div>
        </div>
      </header>

      {/* Main Grid with Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <main className="lg:col-span-8 space-y-8">
          {/* Editorial Overview */}
          <section className="border border-brand-border bg-white rounded p-6 space-y-3">
            <h2 className="text-xl font-bold text-brand-dark">
              Education Ecosystem in {location.name}
            </h2>
            <p className="text-sm text-brand-gray leading-relaxed">
              {location.description}
            </p>
          </section>

          {/* Why Study Here */}
          <section className="border border-brand-border bg-white rounded p-6 space-y-4">
            <h2 className="text-xl font-bold text-brand-dark">
              Why Choose {location.name} for Higher Education?
            </h2>
            <div className="space-y-3 text-xs sm:text-sm">
              {location.whyStudyHere.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-brand-gray">
                  <CheckCircle className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Student Life */}
          <section className="border border-brand-border bg-white rounded p-6 space-y-3">
            <h2 className="text-xl font-bold text-brand-dark">
              Student Life, Accommodation & Transit
            </h2>
            <p className="text-sm text-brand-gray leading-relaxed">
              {location.studentLife}
            </p>
          </section>

          {/* Colleges List in Location */}
          <section className="space-y-4 pt-4 border-t border-brand-border">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-brand-dark">
                Top Colleges in {location.name} ({colleges.length})
              </h2>
              <Link to="/colleges" className="text-xs font-semibold text-brand-teal hover:underline">
                All Colleges in India →
              </Link>
            </div>

            {colleges.length === 0 ? (
              <div className="p-8 text-center text-brand-gray border border-brand-border rounded bg-white">
                No colleges currently listed under this location filter.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {colleges.map((c) => (
                  <CollegeCard key={c.id} college={c} />
                ))}
              </div>
            )}
          </section>

          {/* Location FAQs */}
          <section className="border border-brand-border bg-white rounded p-6 space-y-4">
            <h2 className="text-xl font-bold text-brand-dark">
              Frequently Asked Questions: Studying in {location.name}
            </h2>
            {location.faqs.map((faq, i) => (
              <div key={i} className="border-b border-brand-border/60 pb-3 last:border-0 last:pb-0 space-y-1">
                <h3 className="font-bold text-xs sm:text-sm text-brand-dark flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs text-brand-gray pl-6 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </section>
        </main>

        {/* Lead Sidebar */}
        <aside className="lg:col-span-4 sticky top-24 space-y-6">
          <AdmissionEnquiryForm defaultCourse={`Colleges in ${location.name}`} />

          {/* Other Locations */}
          <div className="border border-brand-border bg-white rounded p-5 space-y-3">
            <h3 className="font-bold text-sm text-brand-dark border-b border-brand-border pb-2">
              Other Education Hubs
            </h3>
            <div className="space-y-2 text-xs">
              {['Jaipur', 'Delhi', 'Bangalore', 'Mumbai'].map((cityName, idx) => (
                <Link
                  key={idx}
                  to={`/locations/${cityName.toLowerCase()}`}
                  className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-brand-teal-light text-brand-dark hover:text-brand-teal transition-colors"
                >
                  <span className="font-medium">Colleges in {cityName}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-gray" />
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
