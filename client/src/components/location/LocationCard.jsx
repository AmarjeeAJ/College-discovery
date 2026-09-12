import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Building2, ArrowRight } from 'lucide-react';

export default function LocationCard({ location }) {
  const [imgSrc, setImgSrc] = useState(
    location?.coverImage || '/images/locations/delhi.jpg'
  );

  useEffect(() => {
    if (location?.coverImage) {
      setImgSrc(location.coverImage);
    }
  }, [location?.coverImage]);

  return (
    <div className="group border border-brand-border bg-white rounded hover:border-brand-teal hover:shadow-subtle transition-all duration-200 overflow-hidden flex flex-col justify-between">
      <div>
        <div className="relative h-40 overflow-hidden bg-gray-100">
          <img
            src={imgSrc}
            alt={`Higher education colleges in ${location?.name || 'India'}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            onError={() => {
              setImgSrc('/images/colleges/campus-fallback.jpg');
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 text-white">
            <span className="text-[11px] font-semibold tracking-wider uppercase text-brand-teal-light">
              {location.state}
            </span>
            <h3 className="text-lg font-bold">
              {location.name}
            </h3>
          </div>
          <div className="absolute top-2.5 right-2.5 bg-brand-black/80 text-white text-[11px] font-bold px-2 py-0.5 rounded-sm flex items-center gap-1">
            <Building2 className="w-3 h-3 text-brand-teal" />
            <span>{location.collegeCount}+ Colleges</span>
          </div>
        </div>

        <div className="p-4 sm:p-5">
          <p className="text-xs text-brand-gray line-clamp-2 mb-3">
            {location.description}
          </p>

          <div className="text-xs space-y-1">
            <span className="font-semibold text-brand-dark block text-[11px]">
              Top Universities:
            </span>
            <ul className="text-brand-gray space-y-0.5 list-none p-0">
              {location.topUniversities.slice(0, 2).map((u, i) => (
                <li key={i} className="line-clamp-1">
                  • {u}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 border-t border-brand-border/50 flex items-center justify-between mt-auto">
        <span className="text-[11px] text-brand-gray">
          Living: {location.averageLivingCost.split('(')[0]}
        </span>
        <Link
          to={`/locations/${location.slug}`}
          className="text-xs font-semibold text-brand-teal hover:text-brand-teal-dark flex items-center gap-1"
        >
          <span>Explore Hub</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
