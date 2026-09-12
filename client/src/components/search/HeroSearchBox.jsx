import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, BookOpen, ArrowRight } from 'lucide-react';
import Button from '../common/Button';

export default function HeroSearchBox() {
  const [query, setQuery] = useState('');
  const [stream, setStream] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.append('q', query.trim());
    if (stream) params.append('stream', stream);
    if (location) params.append('city', location);

    navigate(`/search?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Rectangular Editorial Search Form */}
      <form
        onSubmit={handleSearch}
        className="bg-white border border-[#2E333D] shadow-sm hover:shadow-md transition-shadow rounded-sm p-1.5 sm:p-2 flex flex-col md:flex-row items-stretch md:items-center gap-1.5 sm:gap-2"
      >
        {/* Keyword Search */}
        <div className="relative flex-[1.4] flex items-center border-b md:border-b-0 md:border-r border-brand-border px-3 py-2 min-w-0">
          <Search className="w-4 h-4 text-brand-teal shrink-0 mr-2.5" />
          <input
            type="text"
            placeholder="Search colleges, courses, exams..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-xs sm:text-sm text-brand-dark placeholder-gray-400 focus:outline-none bg-transparent"
          />
        </div>

        {/* Stream Dropdown */}
        <div className="flex items-center border-b md:border-b-0 md:border-r border-brand-border px-2.5 py-2 md:w-36 shrink-0">
          <BookOpen className="w-4 h-4 text-brand-gray shrink-0 mr-1.5" />
          <select
            value={stream}
            onChange={(e) => setStream(e.target.value)}
            className="w-full text-xs sm:text-sm text-brand-dark bg-transparent focus:outline-none cursor-pointer truncate"
          >
            <option value="">All Streams</option>
            <option value="btech">B.Tech / Engg</option>
            <option value="mba">MBA / Mgmt</option>
            <option value="medical">Medical (MBBS)</option>
            <option value="law">Law</option>
            <option value="bca">BCA / MCA</option>
          </select>
        </div>

        {/* City Dropdown */}
        <div className="flex items-center px-2.5 py-2 md:w-36 shrink-0">
          <MapPin className="w-4 h-4 text-brand-gray shrink-0 mr-1.5" />
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full text-xs sm:text-sm text-brand-dark bg-transparent focus:outline-none cursor-pointer truncate"
          >
            <option value="">All Cities</option>
            <option value="jaipur">Jaipur</option>
            <option value="delhi">Delhi NCR</option>
            <option value="bangalore">Bangalore</option>
            <option value="mumbai">Mumbai</option>
          </select>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="md"
          icon={ArrowRight}
          iconPosition="right"
          className="shrink-0 px-6 font-semibold"
        >
          Search
        </Button>
      </form>

      {/* Popular Quick Searches Tag Row */}
      <div className="mt-3 flex flex-wrap items-center gap-1.5 text-xs text-brand-gray">
        <span className="font-semibold text-brand-dark">Quick Searches:</span>
        <button
          type="button"
          onClick={() => navigate('/colleges/btech')}
          className="border border-brand-border bg-white hover:border-brand-teal hover:text-brand-teal px-2.5 py-1 rounded-sm text-xs transition-colors"
        >
          B.Tech Colleges
        </button>
        <button
          type="button"
          onClick={() => navigate('/locations/jaipur')}
          className="border border-brand-border bg-white hover:border-brand-teal hover:text-brand-teal px-2.5 py-1 rounded-sm text-xs transition-colors"
        >
          Colleges in Jaipur
        </button>
        <button
          type="button"
          onClick={() => navigate('/colleges/mba')}
          className="border border-brand-border bg-white hover:border-brand-teal hover:text-brand-teal px-2.5 py-1 rounded-sm text-xs transition-colors"
        >
          Top MBA Colleges
        </button>
        <button
          type="button"
          onClick={() => navigate('/locations/delhi')}
          className="border border-brand-border bg-white hover:border-brand-teal hover:text-brand-teal px-2.5 py-1 rounded-sm text-xs transition-colors"
        >
          Colleges in Delhi
        </button>
        <button
          type="button"
          onClick={() => navigate('/locations/bangalore')}
          className="border border-brand-border bg-white hover:border-brand-teal hover:text-brand-teal px-2.5 py-1 rounded-sm text-xs transition-colors"
        >
          Colleges in Bangalore
        </button>
      </div>
    </div>
  );
}
