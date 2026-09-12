import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items = [] }) {
  if (!items.length) return null;

  return (
    <nav aria-label="Breadcrumb" className="py-3 text-xs sm:text-sm text-brand-gray border-b border-brand-border/60 mb-6">
      <ol className="flex items-center flex-wrap gap-1.5 list-none p-0 m-0">
        <li className="flex items-center">
          <Link to="/" className="inline-flex items-center gap-1 hover:text-brand-teal transition-colors text-brand-gray">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center">
              <ChevronRight className="w-3.5 h-3.5 mx-1 text-gray-400 shrink-0" />
              {item.link && !isLast ? (
                <Link to={item.link} className="hover:text-brand-teal transition-colors text-brand-gray">
                  {item.label}
                </Link>
              ) : (
                <span className="font-semibold text-brand-dark line-clamp-1" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
