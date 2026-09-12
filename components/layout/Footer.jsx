import Link from 'next/link';
import { Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-brand-black text-white border-t border-brand-dark">
      {/* Upper Advisory Banner */}
      <div className="bg-brand-dark border-b border-gray-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded bg-brand-teal/20 border border-brand-teal flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-brand-teal" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Authentic, Unbiased Student Counselling
              </h3>
              <p className="text-xs sm:text-sm text-gray-400">
                100% verified institutional data, audited placement figures, and transparent fee documentation.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/counselling"
              className="bg-brand-teal text-white hover:bg-brand-teal-dark px-5 py-2.5 rounded text-xs sm:text-sm font-semibold transition-colors"
            >
              Talk to a Counselor
            </Link>
            <Link
              href="/compare"
              className="border border-gray-700 hover:border-gray-500 text-gray-200 px-4 py-2.5 rounded text-xs sm:text-sm font-medium transition-colors"
            >
              Compare Colleges
            </Link>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Directory */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand Info & Contact */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <img
                src="/logo-white.png"
                alt="College Leadership Logo"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              College Leadership is an educational discovery portal connecting students with verified colleges and transparent admission guidance, while providing higher-education institutions with premium search visibility and dedicated profiles to reach prospective applicants.
            </p>
            <div className="space-y-2 pt-2 text-xs sm:text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-teal shrink-0" />
                <span>Malviya Nagar & Tonk Road, Jaipur, Rajasthan 302017</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-teal shrink-0" />
                <span>+91 98765 43210 / +91 0141 2780000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-teal shrink-0" />
                <span>admissions@theshineeducation.com</span>
              </div>
            </div>
          </div>

          {/* Colleges */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-teal mb-4">
              Colleges
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400 list-none p-0 m-0">
              <li>
                <Link href="/colleges" className="hover:text-white transition-colors">
                  All Colleges Directory
                </Link>
              </li>
              <li>
                <Link href="/colleges/btech" className="hover:text-white transition-colors">
                  Engineering & B.Tech
                </Link>
              </li>
              <li>
                <Link href="/colleges/mba" className="hover:text-white transition-colors">
                  Management & MBA
                </Link>
              </li>
              <li>
                <Link href="/colleges/medical" className="hover:text-white transition-colors">
                  Medical Colleges
                </Link>
              </li>
              <li>
                <Link href="/colleges/law" className="hover:text-white transition-colors">
                  Law Colleges
                </Link>
              </li>
              <li>
                <Link href="/universities" className="hover:text-white transition-colors">
                  Universities in India
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-teal mb-4">
              Courses
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400 list-none p-0 m-0">
              <li>
                <Link href="/courses/btech" className="hover:text-white transition-colors">
                  B.Tech / B.E.
                </Link>
              </li>
              <li>
                <Link href="/courses/computer-science" className="hover:text-white transition-colors">
                  Computer Science
                </Link>
              </li>
              <li>
                <Link href="/courses/mba" className="hover:text-white transition-colors">
                  MBA / PGDM
                </Link>
              </li>
              <li>
                <Link href="/courses/bca" className="hover:text-white transition-colors">
                  BCA
                </Link>
              </li>
              <li>
                <Link href="/courses/bba" className="hover:text-white transition-colors">
                  BBA
                </Link>
              </li>
              <li>
                <Link href="/courses/mca" className="hover:text-white transition-colors">
                  MCA
                </Link>
              </li>
            </ul>
          </div>

          {/* Study Locations */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-teal mb-4">
              Locations
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400 list-none p-0 m-0">
              <li>
                <Link href="/locations/jaipur" className="hover:text-white transition-colors">
                  Colleges in Jaipur
                </Link>
              </li>
              <li>
                <Link href="/locations/delhi" className="hover:text-white transition-colors">
                  Colleges in Delhi NCR
                </Link>
              </li>
              <li>
                <Link href="/locations/bangalore" className="hover:text-white transition-colors">
                  Colleges in Bangalore
                </Link>
              </li>
              <li>
                <Link href="/locations/mumbai" className="hover:text-white transition-colors">
                  Colleges in Mumbai
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-white transition-colors">
                  All Locations
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links & Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-teal mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400 list-none p-0 m-0">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/college-listing" className="text-brand-teal hover:text-white font-medium transition-colors">
                  List Your College
                </Link>
              </li>
              <li>
                <Link href="/college-listing" className="hover:text-white transition-colors">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link href="/counselling" className="hover:text-white transition-colors">
                  Free Counselling
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-white transition-colors">
                  Admissions 2026
                </Link>
              </li>
              <li>
                <Link href="/exams" className="hover:text-white transition-colors">
                  Entrance Exams
                </Link>
              </li>
              <li>
                <Link href="/rankings" className="hover:text-white transition-colors">
                  College Rankings
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Education Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Popular Searches Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
            Popular Educational Searches:
          </div>
          <div className="flex flex-wrap gap-2 text-xs text-gray-400">
            <Link href="/colleges/btech" className="hover:text-brand-teal transition-colors">
              B.Tech Colleges in India
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/locations/jaipur" className="hover:text-brand-teal transition-colors">
              Engineering Colleges in Jaipur
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/colleges/mba" className="hover:text-brand-teal transition-colors">
              Top MBA Colleges
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/locations/delhi" className="hover:text-brand-teal transition-colors">
              B.Tech Colleges in Delhi NCR
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/locations/bangalore" className="hover:text-brand-teal transition-colors">
              Private Engineering Colleges Bangalore
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/courses/computer-science" className="hover:text-brand-teal transition-colors">
              Computer Science Placements
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/exams" className="hover:text-brand-teal transition-colors">
              JEE Main 2026 Cutoff
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/compare" className="hover:text-brand-teal transition-colors">
              College Comparison Tool
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/college-listing" className="text-brand-teal hover:underline transition-colors font-medium">
              List Your Institution
            </Link>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {currentYear} College Leadership. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
