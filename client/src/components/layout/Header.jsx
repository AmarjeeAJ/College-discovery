import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Search, GraduationCap } from 'lucide-react';
import Button from '../common/Button';

export default function Header({ onOpenCounselling }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [collegesDropdown, setCollegesDropdown] = useState(false);
  const [coursesDropdown, setCoursesDropdown] = useState(false);
  const [locationsDropdown, setLocationsDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setCollegesDropdown(false);
    setCoursesDropdown(false);
    setLocationsDropdown(false);
  }, [location.pathname]);

  // Handle scroll state for subtle border elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-white transition-shadow duration-200 border-b ${
        scrolled ? 'border-brand-border shadow-sm' : 'border-brand-border/70'
      }`}
    >
      {/* Top Advisory Strip */}
      <div className="bg-brand-black text-white py-1.5 px-4 text-xs">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-medium text-gray-200">
              <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-brand-teal text-white rounded-sm">2026</span>
              <span>Admissions Open</span>
            </span>
            <span className="hidden sm:inline text-gray-400">|</span>
            <span className="hidden sm:inline text-gray-300">
              Verified Fees, Cutoffs & 1-on-1 Student Guidance
            </span>
          </div>
          <div className="flex items-center gap-4 text-gray-300">
            <a href="tel:+919876543210" className="hover:text-brand-teal transition-colors flex items-center gap-1">
              <Phone className="w-3 h-3 text-brand-teal" />
              <span className="hidden sm:inline font-medium">+91 98765 43210</span>
              <span className="sm:hidden">Helpdesk</span>
            </a>
            <Link to="/compare" className="hover:text-white transition-colors">
              Compare Tool
            </Link>
            <span className="hidden md:inline text-gray-500">|</span>
            <Link to="/college-listing" className="hidden md:inline hover:text-brand-teal transition-colors font-medium text-gray-200">
              For Institutions: List Your College
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between gap-3 xl:gap-4">
          {/* Official Brand Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0 py-2">
            <img
              src="/logo.png"
              alt="College Leadership Logo"
              className="h-10 sm:h-11 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/emblem.png";
              }}
            />
            <div className="hidden lg:block border-l border-brand-border pl-3">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-brand-teal">
                Educational Discovery
              </span>
              <span className="block text-[11px] text-brand-gray font-medium">
                Admissions & Counselling
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 2xl:gap-2 text-sm font-medium text-brand-dark">
            {/* Colleges Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCollegesDropdown(true)}
              onMouseLeave={() => setCollegesDropdown(false)}
            >
              <button
                className={`flex items-center gap-1 px-2.5 py-2 hover:text-brand-teal transition-colors rounded ${
                  location.pathname.startsWith('/colleges') || location.pathname === '/universities'
                    ? 'text-brand-teal font-semibold'
                    : ''
                }`}
              >
                <span>Colleges</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {collegesDropdown && (
                <div className="absolute left-0 top-full w-64 bg-white border border-brand-border rounded shadow-lg py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-brand-gray border-b border-brand-border/50">
                    Browse By Discipline
                  </div>
                  <Link to="/colleges" className="block px-3 py-2 text-xs hover:bg-brand-teal-light hover:text-brand-teal-dark font-medium">
                    All Colleges Directory
                  </Link>
                  <Link to="/colleges/btech" className="block px-3 py-2 text-xs hover:bg-brand-teal-light hover:text-brand-teal-dark">
                    Engineering & B.Tech
                  </Link>
                  <Link to="/colleges/mba" className="block px-3 py-2 text-xs hover:bg-brand-teal-light hover:text-brand-teal-dark">
                    Management & MBA
                  </Link>
                  <Link to="/colleges/medical" className="block px-3 py-2 text-xs hover:bg-brand-teal-light hover:text-brand-teal-dark">
                    Medical & Healthcare
                  </Link>
                  <Link to="/colleges/law" className="block px-3 py-2 text-xs hover:bg-brand-teal-light hover:text-brand-teal-dark">
                    Law & Legal Studies
                  </Link>
                  <Link to="/universities" className="block px-3 py-2 text-xs hover:bg-brand-teal-light hover:text-brand-teal-dark font-semibold border-t border-brand-border/50 text-brand-teal-dark">
                    Universities in India
                  </Link>
                  <Link to="/college-listing" className="block px-3 py-2 text-xs hover:bg-brand-teal-light text-brand-teal font-semibold border-t border-brand-border/50">
                    Partner With Us: List Your College →
                  </Link>
                </div>
              )}
            </div>

            {/* Courses Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCoursesDropdown(true)}
              onMouseLeave={() => setCoursesDropdown(false)}
            >
              <button
                className={`flex items-center gap-1 px-2.5 py-2 hover:text-brand-teal transition-colors rounded ${
                  location.pathname.startsWith('/courses') ? 'text-brand-teal font-semibold' : ''
                }`}
              >
                <span>Courses</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {coursesDropdown && (
                <div className="absolute left-0 top-full w-60 bg-white border border-brand-border rounded shadow-lg py-2 z-50">
                  <Link to="/courses" className="block px-3 py-2 text-xs hover:bg-brand-teal-light hover:text-brand-teal-dark font-medium border-b border-brand-border/50">
                    All Courses Overview
                  </Link>
                  <Link to="/courses/btech" className="block px-3 py-2 text-xs hover:bg-brand-teal-light hover:text-brand-teal-dark">
                    B.Tech Course Guide
                  </Link>
                  <Link to="/courses/computer-science" className="block px-3 py-2 text-xs hover:bg-brand-teal-light hover:text-brand-teal-dark">
                    Computer Science (CSE)
                  </Link>
                  <Link to="/courses/mba" className="block px-3 py-2 text-xs hover:bg-brand-teal-light hover:text-brand-teal-dark">
                    MBA Course Guide
                  </Link>
                  <Link to="/courses/bca" className="block px-3 py-2 text-xs hover:bg-brand-teal-light hover:text-brand-teal-dark">
                    BCA Program
                  </Link>
                  <Link to="/courses/bba" className="block px-3 py-2 text-xs hover:bg-brand-teal-light hover:text-brand-teal-dark">
                    BBA Program
                  </Link>
                  <Link to="/courses/mca" className="block px-3 py-2 text-xs hover:bg-brand-teal-light hover:text-brand-teal-dark">
                    MCA Program
                  </Link>
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLocationsDropdown(true)}
              onMouseLeave={() => setLocationsDropdown(false)}
            >
              <button
                className={`flex items-center gap-1 px-2.5 py-2 hover:text-brand-teal transition-colors rounded ${
                  location.pathname.startsWith('/locations') ? 'text-brand-teal font-semibold' : ''
                }`}
              >
                <span>Locations</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {locationsDropdown && (
                <div className="absolute left-0 top-full w-56 bg-white border border-brand-border rounded shadow-lg py-2 z-50">
                  <Link to="/locations" className="block px-3 py-2 text-xs hover:bg-brand-teal-light hover:text-brand-teal-dark font-medium border-b border-brand-border/50">
                    All Education Hubs
                  </Link>
                  <Link to="/locations/jaipur" className="block px-3 py-2 text-xs hover:bg-brand-teal-light hover:text-brand-teal-dark">
                    Colleges in Jaipur
                  </Link>
                  <Link to="/locations/delhi" className="block px-3 py-2 text-xs hover:bg-brand-teal-light hover:text-brand-teal-dark">
                    Colleges in Delhi NCR
                  </Link>
                  <Link to="/locations/bangalore" className="block px-3 py-2 text-xs hover:bg-brand-teal-light hover:text-brand-teal-dark">
                    Colleges in Bangalore
                  </Link>
                  <Link to="/locations/mumbai" className="block px-3 py-2 text-xs hover:bg-brand-teal-light hover:text-brand-teal-dark">
                    Colleges in Mumbai
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/exams"
              className={`px-2.5 py-2 hover:text-brand-teal transition-colors ${
                location.pathname === '/exams' ? 'text-brand-teal font-semibold' : ''
              }`}
            >
              Exams
            </Link>

            <Link
              to="/admissions"
              className={`px-2.5 py-2 hover:text-brand-teal transition-colors ${
                location.pathname === '/admissions' ? 'text-brand-teal font-semibold' : ''
              }`}
            >
              Admissions
            </Link>

            <Link
              to="/rankings"
              className={`px-2.5 py-2 hover:text-brand-teal transition-colors ${
                location.pathname === '/rankings' ? 'text-brand-teal font-semibold' : ''
              }`}
            >
              Rankings
            </Link>

            <Link
              to="/resources"
              className={`px-2.5 py-2 hover:text-brand-teal transition-colors ${
                location.pathname === '/resources' || location.pathname.startsWith('/blog') ? 'text-brand-teal font-semibold' : ''
              }`}
            >
              Resources
            </Link>

            <Link
              to="/about"
              className={`px-2.5 py-2 hover:text-brand-teal transition-colors ${
                location.pathname === '/about' ? 'text-brand-teal font-semibold' : ''
              }`}
            >
              About
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5">
            <Link
              to="/search"
              aria-label="Open Search"
              className="p-2 text-brand-dark hover:text-brand-teal hover:bg-brand-teal-light/40 rounded transition-colors border border-brand-border/60"
            >
              <Search className="w-4 h-4" />
            </Link>

            {/* Compact Editorial Button */}
            <Button
              to="/counselling"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex shrink-0 font-semibold"
            >
              Free Counselling
            </Button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="xl:hidden p-2 text-brand-dark hover:bg-gray-100 rounded border border-brand-border"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-brand-border bg-white px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto">
          <div className="space-y-1">
            <div className="py-2 border-b border-gray-100 font-bold text-xs uppercase tracking-wider text-brand-teal">
              Colleges
            </div>
            <Link to="/colleges" className="block px-3 py-2 text-sm text-brand-dark hover:bg-brand-teal-light rounded">
              All Colleges Directory
            </Link>
            <div className="grid grid-cols-2 gap-1 pl-2">
              <Link to="/colleges/btech" className="block px-2 py-1.5 text-xs text-brand-gray hover:text-brand-teal">
                • Engineering (B.Tech)
              </Link>
              <Link to="/colleges/mba" className="block px-2 py-1.5 text-xs text-brand-gray hover:text-brand-teal">
                • Management (MBA)
              </Link>
              <Link to="/colleges/medical" className="block px-2 py-1.5 text-xs text-brand-gray hover:text-brand-teal">
                • Medical & MBBS
              </Link>
              <Link to="/colleges/law" className="block px-2 py-1.5 text-xs text-brand-gray hover:text-brand-teal">
                • Law & Legal
              </Link>
              <Link to="/universities" className="block px-2 py-1.5 text-xs text-brand-gray hover:text-brand-teal">
                • Universities
              </Link>
              <Link to="/college-listing" className="block px-2 py-1.5 text-xs text-brand-teal font-semibold hover:underline col-span-2">
                • For Institutions: List Your College →
              </Link>
            </div>

            <div className="py-2 border-b border-gray-100 font-bold text-xs uppercase tracking-wider text-brand-teal pt-3">
              Courses
            </div>
            <div className="grid grid-cols-2 gap-1 pl-2">
              <Link to="/courses" className="block px-2 py-1.5 text-xs text-brand-gray hover:text-brand-teal">
                • All Courses
              </Link>
              <Link to="/courses/btech" className="block px-2 py-1.5 text-xs text-brand-gray hover:text-brand-teal">
                • B.Tech Guide
              </Link>
              <Link to="/courses/computer-science" className="block px-2 py-1.5 text-xs text-brand-gray hover:text-brand-teal">
                • Computer Science
              </Link>
              <Link to="/courses/mba" className="block px-2 py-1.5 text-xs text-brand-gray hover:text-brand-teal">
                • MBA
              </Link>
              <Link to="/courses/bca" className="block px-2 py-1.5 text-xs text-brand-gray hover:text-brand-teal">
                • BCA
              </Link>
              <Link to="/courses/bba" className="block px-2 py-1.5 text-xs text-brand-gray hover:text-brand-teal">
                • BBA
              </Link>
            </div>

            <div className="py-2 border-b border-gray-100 font-bold text-xs uppercase tracking-wider text-brand-teal pt-3">
              Locations
            </div>
            <div className="grid grid-cols-2 gap-1 pl-2">
              <Link to="/locations/jaipur" className="block px-2 py-1.5 text-xs text-brand-gray hover:text-brand-teal">
                • Jaipur
              </Link>
              <Link to="/locations/delhi" className="block px-2 py-1.5 text-xs text-brand-gray hover:text-brand-teal">
                • Delhi NCR
              </Link>
              <Link to="/locations/bangalore" className="block px-2 py-1.5 text-xs text-brand-gray hover:text-brand-teal">
                • Bangalore
              </Link>
              <Link to="/locations/mumbai" className="block px-2 py-1.5 text-xs text-brand-gray hover:text-brand-teal">
                • Mumbai
              </Link>
            </div>

            <div className="pt-3 space-y-1">
              <Link to="/compare" className="block px-3 py-2 text-sm text-brand-dark hover:bg-brand-teal-light rounded font-medium">
                Compare Colleges
              </Link>
              <Link to="/admissions" className="block px-3 py-2 text-sm text-brand-dark hover:bg-brand-teal-light rounded font-medium">
                Admissions 2026
              </Link>
              <Link to="/exams" className="block px-3 py-2 text-sm text-brand-dark hover:bg-brand-teal-light rounded font-medium">
                Entrance Exams
              </Link>
              <Link to="/rankings" className="block px-3 py-2 text-sm text-brand-dark hover:bg-brand-teal-light rounded font-medium">
                College Rankings
              </Link>
              <Link to="/resources" className="block px-3 py-2 text-sm text-brand-dark hover:bg-brand-teal-light rounded font-medium">
                Resources & Blog
              </Link>
              <Link to="/about" className="block px-3 py-2 text-sm text-brand-dark hover:bg-brand-teal-light rounded font-medium">
                About Us
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-sm text-brand-dark hover:bg-brand-teal-light rounded font-medium">
                Contact
              </Link>
            </div>

            <div className="pt-4 mt-3 border-t border-brand-border">
              <Button
                to="/counselling"
                variant="primary"
                size="lg"
                className="w-full text-center"
              >
                Get Free Counselling
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
