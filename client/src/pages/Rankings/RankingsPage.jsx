import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Award, Star, ExternalLink, HelpCircle } from 'lucide-react';
import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import { apiService } from '../../services/api';

export default function RankingsPage() {
  const [rankings, setRankings] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('All');

  useEffect(() => {
    async function loadRankings() {
      const res = await apiService.getRankings();
      if (res.success) setRankings(res.data);
    }
    loadRankings();
  }, []);

  const categories = ['All', 'Engineering', 'Management', 'Medical', 'Law'];

  const filteredRankings = categoryFilter === 'All'
    ? rankings
    : rankings.filter((r) => r.category.toLowerCase().includes(categoryFilter.toLowerCase()));

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <SEO
        title="College Rankings 2026: NIRF Top 100 Engineering, MBA, Medical & Law"
        description="Official National Institutional Ranking Framework (NIRF) rankings for 2026. Review teaching scores, research output, and perception scores."
        canonical="https://theshineeducation.com/rankings"
      />

      <Breadcrumbs items={[{ label: 'College Rankings' }]} />

      <header className="border-b border-brand-border pb-6 space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block">
          Government of India Benchmarks
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
          NIRF College Rankings 2026
        </h1>
        <p className="text-sm sm:text-base text-brand-gray max-w-3xl leading-relaxed">
          The National Institutional Ranking Framework (NIRF) outlines five broad parameters: Teaching, Learning & Resources (TLR), Research and Professional Practice (RP), Graduation Outcomes (GO), Outreach & Inclusivity (OI), and Perception.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 pt-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors border ${
                categoryFilter === cat
                  ? 'bg-brand-teal text-white border-brand-teal'
                  : 'bg-white text-brand-dark border-brand-border hover:border-brand-teal'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* Rankings Table */}
      <div className="border border-brand-border rounded bg-white overflow-hidden shadow-subtle">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-xs sm:text-sm">
            <thead className="bg-gray-50 border-b border-brand-border font-bold text-brand-dark">
              <tr>
                <th className="p-3.5 w-16 text-center">Rank</th>
                <th className="p-3.5">Institution Name</th>
                <th className="p-3.5">Location</th>
                <th className="p-3.5">Stream Category</th>
                <th className="p-3.5 text-center">Overall Score</th>
                <th className="p-3.5 text-center">TLR Score</th>
                <th className="p-3.5 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border text-brand-gray">
              {filteredRankings.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50/70 transition-colors">
                  <td className="p-3.5 text-center font-extrabold text-brand-dark">
                    <span className="w-7 h-7 rounded-sm bg-brand-teal-light text-brand-teal-dark inline-flex items-center justify-center font-bold text-xs">
                      #{row.rank}
                    </span>
                  </td>
                  <td className="p-3.5 font-bold text-brand-dark">
                    <Link to={`/college/${row.slug}`} className="hover:text-brand-teal transition-colors">
                      {row.college}
                    </Link>
                  </td>
                  <td className="p-3.5 text-xs">
                    {row.city}, {row.state}
                  </td>
                  <td className="p-3.5 text-xs font-medium text-brand-dark">
                    {row.category}
                  </td>
                  <td className="p-3.5 text-center font-bold text-emerald-700">
                    {row.score} / 100
                  </td>
                  <td className="p-3.5 text-center font-medium text-brand-dark">
                    {row.tlr}
                  </td>
                  <td className="p-3.5 text-center">
                    <Link
                      to={`/college/${row.slug}`}
                      className="text-xs font-semibold text-brand-teal hover:underline inline-flex items-center gap-1"
                    >
                      <span>Profile</span>
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
