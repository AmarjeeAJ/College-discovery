import { useState, useEffect } from 'react';
import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import SectionHeading from '../../components/common/SectionHeading';
import LocationCard from '../../components/location/LocationCard';
import { apiService } from '../../services/api';

export default function LocationsHubPage() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function loadLocations() {
      const res = await apiService.getLocations();
      if (res.success) setLocations(res.data);
    }
    loadLocations();
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <SEO
        title="Study by Location: Top College Cities in India (Jaipur, Delhi, Bangalore)"
        description="Compare premier educational hubs across India. Understand student living costs, industrial recruitment advantages, and campus safety."
      />

      <Breadcrumbs items={[{ label: 'Study Locations' }]} />

      <div className="border-b border-brand-border pb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block mb-1">
          Geographic Directory
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
          Explore Colleges by Location
        </h1>
        <p className="text-sm sm:text-base text-brand-gray mt-2 max-w-3xl leading-relaxed">
          Evaluate colleges in India's leading educational and corporate centers. Discover living costs, metro connectivity, local state quota regulations, and city-specific tech recruitment pipelines.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {locations.map((loc) => (
          <LocationCard key={loc.id} location={loc} />
        ))}
      </div>
    </div>
  );
}
