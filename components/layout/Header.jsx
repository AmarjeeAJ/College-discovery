'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone, Search, GraduationCap } from 'lucide-react';
import Button from '../common/Button';

export default function Header({ onOpenCounselling }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [collegesDropdown, setCollegesDropdown] = useState(false);
  const [coursesDropdown, setCoursesDropdown] = useState(false);
  const [locationsDropdown, setLocationsDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const closeAll = () => {
    setMobileMenuOpen(false);
    setCollegesDropdown(false);
    setCoursesDropdown(false);
    setLocationsDropdown(false);
  };

  // Close menus on route change
  useEffect(() => {
    closeAll();
  }, [pathname]);

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
            <a href="tel:+919358939090" className="hover:text-brand-teal transition-colors flex items-center gap-1">
              <Phone className="w-3 h-3 text-brand-teal" />
              <span className="hidden sm:inline font-medium">+91 93589 39090</span>
              <span className="sm:hidden">Helpdesk</span>
            </a>
            <Link href="/compare" prefetch={true} className="hover:text-white transition-colors">
              Compare Tool
            </Link>
            <span className="hidden md:inline text-gray-500">|</span>
            <Link href="/college-listing" prefetch={true} className="hidden md:inline hover:text-brand-teal transition-colors font-medium text-gray-200">
              For Institutions: List Your College
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between gap-3 xl:gap-4">
          {/* Official Brand Logo */}
          <Link href="/" prefetch={true} className="flex items-center gap-3 shrink-0 py-2">
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
                  pathname.startsWith('/colleges') || pathname === '/universities'
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
                  <Link href="/colleges" prefetch={true} onClick={closeAll} className="block px-3 py-2 text-xs hover:bg-brand-teal-light hover:text-brand-teal-dark font-medium">
                    All Colleges Directory
                  </Link>
                  <Link href="/colleges/btech" prefetch={true} onClick={closeAll} className="block px-3 py-2 text-xs hover:bg-brand-teal-light hover:text-brand-teal-dark">
                    Engineering & B.Tech
                  </Link>
                  <Link href="/colleges/mba" prefetch={true} onClick={closeAll} className="block px-3 py-2 text-xs hover:bg-brand-teal-light hover:text-brand-teal-dark">
                    Management & MBA
                  </Link>
                  <Link href="/colleges/medical" prefetch={true} onClick={closeAll} className="block px-3 py-2 text-xs hover:bg-brand-teal-light hover:text-brand-teal-dark">
                    Medical & Healthcare
                  </Link>
                  <Link href="/colleges/law" prefetch={true} onClick={closeAll} className="block px-3 py-2 text-xs hover:bg-brand-teal-light hover:text-brand-teal-dark">
                    Law & Legal Studies
                  </Link>
                  <Link href="/universities" prefetch={true} onClick={closeAll} className="block px-3 py-2 text-xs hover:bg-brand-teal-light hover:text-brand-teal-dark font-semibold border-t border-brand-border/50 text-brand-teal-dark">
                    Universities in India
                  </Link>
                  <Link href="/college-listing" prefetch={true} onClick={closeAll} className="block px-3 py-2 text-xs hover:bg-brand-teal-light text-brand-teal font-semibold border-t border-brand-border/50">
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
                  pathname.startsWith('/courses') ? 'text-brand-teal font-semibold' : ''
                }`}
              >
                <span>Courses</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {coursesDropdown && (
                <div className="absolute left-0 top-full w-60 bg-white border border-brand-border rounded shadow-lg py-2 z-50">
                  <Link href="/courses" prefetch={true} onClick={closeAll} className="block px-3 py-2 text-xs hover:bg-brand-teal-light hover:text-brand-teal-dark font-medium border-b border-brand-border/50">
                    All Courses Overview
                  </Link>
                  <Link href="/courses/btech" prefetch={true} onClick={closeAll} className="block px-3 py-2 text-xs hover:bg-brand-teal-light hover:text-brand-teal-dark">
                    B.Tech Course Guide
                  </Link>
                  <Link href="/courses/computer-science" prefetch={true} onClick={closeAll} className="block px-3 py-2 text-xs hover:bg-brand-teal-light hover:text-brand-teal-dark">
                    Computer Science (CSE)
                  </Link>
                  <Link href="/courses/mba" prefetch={true} onClick={closeAll} className="block px-3 py-2 text-xs hover:bg-brand-teal-light hover:text-brand-teal-dark">
                    MBA Course Guide
                  </Link>
                  <Link href="/courses/bca" prefetch={true} onClick={closeAll} className="block px-3 py-2 text-xs hover:bg-brand-teal-light hover:text-brand-teal-dark">
                    BCA Program
                  </Link>
                  <Link href="/courses/bba" prefetch={true} onClick={closeAll} className="block px-3 py-2 text-xs hover:bg-brand-teal-light hover:text-brand-teal-dark">
                    BBA Program
                  </Link>
                  <Link href="/courses/mca" prefetch={true} onClick={closeAll} className="block px-3 py-2 text-xs hover:bg-brand-teal-light hover:text-brand-teal-dark">
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
                  pathname.startsWith('/locations') ? 'text-brand-teal font-semibold' : ''
                }`}
              >
                <span>Locations</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {locationsDropdown && (
                <div className="absolute left-0 top-full w-56 bg-white border border-brand-border rounded shadow-lg py-2 z-50">
                  <Link href="/locations" prefetch={true} onClick={closeAll} className="block px-3 py-2 text-xs hover:bg-brand-teal-light hover:text-brand-teal-dark font-medium border-b border-brand-border/50">
                    All Education Hubs
                  </Link>
                  <Link href="/locations/jaipur" prefetch={true} onClick={closeAll} className="block px-3 py-2 text-xs hover:bg-brand-teal-light hover:text-brand-teal-dark">
                    Colleges in Jaipur
                  </Link>
                  <Link href="/locations/delhi" prefetch={true} onClick={closeAll} className="block px-3 py-2 text-xs hover:bg-brand-teal-light hover:text-brand-teal-dark">
                    Colleges in Delhi NCR
                  </Link>
                  <Link href="/locations/bangalore" prefetch={true} onClick={closeAll} className="block px-3 py-2 text-xs hover:bg-brand-teal-light hover:text-brand-teal-dark">
                    Colleges in Bangalore
                  </Link>
                  <Link href="/locations/mumbai" prefetch={true} onClick={closeAll} className="block px-3 py-2 text-xs hover:bg-brand-teal-light hover:text-brand-teal-dark">
                    Colleges in Mumbai
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/exams"
              prefetch={true}
              onClick={closeAll}
              className={`px-2.5 py-2 hover:text-brand-teal transition-colors ${
                pathname === '/exams' ? 'text-brand-teal font-semibold' : ''
              }`}
            >
              Exams
            </Link>

            <Link
              href="/admissions"
              prefetch={true}
              onClick={closeAll}
              className={`px-2.5 py-2 hover:text-brand-teal transition-colors ${
                pathname === '/admissions' ? 'text-brand-teal font-semibold' : ''
              }`}
            >
              Admissions
            </Link>

            <Link
              href="/rankings"
              prefetch={true}
              onClick={closeAll}
              className={`px-2.5 py-2 hover:text-brand-teal transition-colors ${
                pathname === '/rankings' ? 'text-brand-teal font-semibold' : ''
              }`}
            >
              Rankings
            </Link>

            <Link
              href="/resources"
              prefetch={true}
              onClick={closeAll}
              className={`px-2.5 py-2 hover:text-brand-teal transition-colors ${
                pathname === '/resources' || pathname.startsWith('/blog') ? 'text-brand-teal font-semibold' : ''
              }`}
            >
              Resources
            </Link>

            <Link
              href="/about"
              prefetch={true}
              onClick={closeAll}
              className={`px-2.5 py-2 hover:text-brand-teal transition-colors ${
                pathname === '/about' ? 'text-brand-teal font-semibold' : ''
              }`}
            >
              About
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5">
            <Link
              href="/search"
              aria-label="Open Search"
              className="p-2 text-brand-dark hover:text-brand-teal hover:bg-brand-teal-light/40 rounded transition-colors border border-brand-border/60"
            >
              <Search className="w-4 h-4" />
            </Link>

            {/* Compact Editorial Button */}
            <Button
              href="/counselling"
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
            <Link href="/colleges" prefetch={true} onClick={closeAll} className="block px-3 py-2 text-sm text-brand-dark hover:bg-brand-teal-light rounded">
              All Colleges Directory
            </Link>
            <div className="grid grid-cols-2 gap-1 pl-2">
              <Link href="/colleges/btech" prefetch={true} onClick={closeAll} className="block px-2 py-1.5 text-xs text-brand-gray hover:text-brand-teal">
                • Engineering (B.Tech)
              </Link>
              <Link href="/colleges/mba" prefetch={true} onClick={closeAll} className="block px-2 py-1.5 text-xs text-brand-gray hover:text-brand-teal">
                • Management (MBA)
              </Link>
              <Link href="/colleges/medical" prefetch={true} onClick={closeAll} className="block px-2 py-1.5 text-xs text-brand-gray hover:text-brand-teal">
                • Medical & MBBS
              </Link>
              <Link href="/colleges/law" prefetch={true} onClick={closeAll} className="block px-2 py-1.5 text-xs text-brand-gray hover:text-brand-teal">
                • Law & Legal
              </Link>
              <Link href="/universities" prefetch={true} onClick={closeAll} className="block px-2 py-1.5 text-xs text-brand-gray hover:text-brand-teal">
                • Universities
              </Link>
              <Link href="/college-listing" prefetch={true} onClick={closeAll} className="block px-2 py-1.5 text-xs text-brand-teal font-semibold hover:underline col-span-2">
                • For Institutions: List Your College →
              </Link>
            </div>

            <div className="py-2 border-b border-gray-100 font-bold text-xs uppercase tracking-wider text-brand-teal pt-3">
              Courses
            </div>
            <div className="grid grid-cols-2 gap-1 pl-2">
              <Link href="/courses" prefetch={true} onClick={closeAll} className="block px-2 py-1.5 text-xs text-brand-gray hover:text-brand-teal">
                • All Courses
              </Link>
              <Link href="/courses/btech" prefetch={true} onClick={closeAll} className="block px-2 py-1.5 text-xs text-brand-gray hover:text-brand-teal">
                • B.Tech Guide
              </Link>
              <Link href="/courses/computer-science" prefetch={true} onClick={closeAll} className="block px-2 py-1.5 text-xs text-brand-gray hover:text-brand-teal">
                • Computer Science
              </Link>
              <Link href="/courses/mba" prefetch={true} onClick={closeAll} className="block px-2 py-1.5 text-xs text-brand-gray hover:text-brand-teal">
                • MBA
              </Link>
              <Link href="/courses/bca" prefetch={true} onClick={closeAll} className="block px-2 py-1.5 text-xs text-brand-gray hover:text-brand-teal">
                • BCA
              </Link>
              <Link href="/courses/bba" prefetch={true} onClick={closeAll} className="block px-2 py-1.5 text-xs text-brand-gray hover:text-brand-teal">
                • BBA
              </Link>
            </div>

            <div className="py-2 border-b border-gray-100 font-bold text-xs uppercase tracking-wider text-brand-teal pt-3">
              Locations
            </div>
            <div className="grid grid-cols-2 gap-1 pl-2">
              <Link href="/locations/jaipur" prefetch={true} onClick={closeAll} className="block px-2 py-1.5 text-xs text-brand-gray hover:text-brand-teal">
                • Jaipur
              </Link>
              <Link href="/locations/delhi" prefetch={true} onClick={closeAll} className="block px-2 py-1.5 text-xs text-brand-gray hover:text-brand-teal">
                • Delhi NCR
              </Link>
              <Link href="/locations/bangalore" prefetch={true} onClick={closeAll} className="block px-2 py-1.5 text-xs text-brand-gray hover:text-brand-teal">
                • Bangalore
              </Link>
              <Link href="/locations/mumbai" prefetch={true} onClick={closeAll} className="block px-2 py-1.5 text-xs text-brand-gray hover:text-brand-teal">
                • Mumbai
              </Link>
            </div>

            <div className="pt-3 space-y-1">
              <Link href="/compare" prefetch={true} onClick={closeAll} className="block px-3 py-2 text-sm text-brand-dark hover:bg-brand-teal-light rounded font-medium">
                Compare Colleges
              </Link>
              <Link href="/admissions" prefetch={true} onClick={closeAll} className="block px-3 py-2 text-sm text-brand-dark hover:bg-brand-teal-light rounded font-medium">
                Admissions 2026
              </Link>
              <Link href="/exams" prefetch={true} onClick={closeAll} className="block px-3 py-2 text-sm text-brand-dark hover:bg-brand-teal-light rounded font-medium">
                Entrance Exams
              </Link>
              <Link href="/rankings" prefetch={true} onClick={closeAll} className="block px-3 py-2 text-sm text-brand-dark hover:bg-brand-teal-light rounded font-medium">
                College Rankings
              </Link>
              <Link href="/resources" prefetch={true} onClick={closeAll} className="block px-3 py-2 text-sm text-brand-dark hover:bg-brand-teal-light rounded font-medium">
                Resources & Blog
              </Link>
              <Link href="/about" prefetch={true} onClick={closeAll} className="block px-3 py-2 text-sm text-brand-dark hover:bg-brand-teal-light rounded font-medium">
                About Us
              </Link>
              <Link href="/contact" prefetch={true} onClick={closeAll} className="block px-3 py-2 text-sm text-brand-dark hover:bg-brand-teal-light rounded font-medium">
                Contact
              </Link>
            </div>

            <div className="pt-4 mt-3 border-t border-brand-border">
              <Button
                href="/counselling"
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
