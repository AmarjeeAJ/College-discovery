import { Link } from 'react-router-dom';
import { Compass, Home, Search, ArrowRight } from 'lucide-react';
import SEO from '../../components/common/SEO';
import Button from '../../components/common/Button';

export default function NotFoundPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center space-y-6">
      <SEO
        title="Page Not Found (404)"
        description="The educational page or college profile you requested does not exist or has been moved."
      />

      <div className="w-16 h-16 rounded bg-brand-teal-light text-brand-teal flex items-center justify-center mx-auto">
        <Compass className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
          Error 404
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">
          Page Not Found
        </h1>
        <p className="text-xs sm:text-sm text-brand-gray max-w-md mx-auto leading-relaxed">
          The college profile, course guide, or resource link you followed may have been updated, relocated, or temporarily archived.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 pt-2">
        <Button to="/" variant="primary" size="md" icon={Home} iconPosition="left">
          Return to Homepage
        </Button>
        <Button to="/colleges" variant="outline" size="md" icon={Search} iconPosition="left">
          Browse College Directory
        </Button>
      </div>

      <div className="pt-8 border-t border-brand-border text-xs text-brand-gray space-y-2">
        <span className="font-semibold text-brand-dark block">Popular Destinations:</span>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/colleges/btech" className="hover:text-brand-teal underline">B.Tech Colleges</Link>
          <Link to="/locations/jaipur" className="hover:text-brand-teal underline">Colleges in Jaipur</Link>
          <Link to="/compare" className="hover:text-brand-teal underline">Comparison Tool</Link>
          <Link to="/counselling" className="hover:text-brand-teal underline">Free Counselling</Link>
        </div>
      </div>
    </div>
  );
}
