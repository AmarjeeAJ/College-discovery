import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Scale, X, Plus, Check, Star, ArrowRight, ExternalLink } from 'lucide-react';
import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import Button from '../../components/common/Button';
import Modal from '../../components/common/Modal';
import { useCompare } from '../../components/comparison/CompareContext';
import { collegesData } from '../../data/colleges';
import { formatPackage } from '../../utils/formatters';

export default function ComparePage() {
  const { selectedColleges, removeCollege, addCollege, clearCompare, maxLimit } = useCompare();
  const [selectorModalOpen, setSelectorModalOpen] = useState(false);

  // Available colleges not yet selected
  const availableColleges = collegesData.filter(
    (c) => !selectedColleges.some((sel) => sel.id === c.id)
  );

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <SEO
        title="Compare Colleges Side-by-Side: Fees, Cutoffs & Placement Packages"
        description="Compare up to 4 top Indian universities across NIRF rankings, average packages, hostel charges, and entrance exams."
        canonical="https://theshineeducation.com/compare"
      />

      <Breadcrumbs items={[{ label: 'College Comparison' }]} />

      {/* Header */}
      <div className="border-b border-brand-border pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block mb-1">
            Data Matrix Tool
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-dark tracking-tight">
            Side-by-Side College Comparison
          </h1>
          <p className="text-xs sm:text-sm text-brand-gray mt-1 max-w-2xl">
            Compare key parameters across accredited institutions to make an objective, data-driven admission choice.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {selectedColleges.length < maxLimit && (
            <Button
              onClick={() => setSelectorModalOpen(true)}
              variant="outline"
              size="sm"
              icon={Plus}
              iconPosition="left"
            >
              Add College ({selectedColleges.length}/{maxLimit})
            </Button>
          )}
          {selectedColleges.length > 0 && (
            <button
              onClick={clearCompare}
              className="text-xs text-brand-gray hover:text-red-600 underline font-medium"
            >
              Clear Comparison
            </button>
          )}
        </div>
      </div>

      {selectedColleges.length === 0 ? (
        /* Empty State */
        <div className="border border-brand-border bg-white rounded p-12 text-center space-y-4 max-w-xl mx-auto my-12">
          <div className="w-12 h-12 rounded bg-brand-teal-light text-brand-teal flex items-center justify-center mx-auto">
            <Scale className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-brand-dark">No Colleges Selected for Comparison</h3>
          <p className="text-xs sm:text-sm text-brand-gray">
            Select up to 4 colleges from our directory or click below to choose colleges from our verified list.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Button onClick={() => setSelectorModalOpen(true)} variant="primary" size="md">
              Choose Colleges
            </Button>
            <Button to="/colleges" variant="outline" size="md">
              Browse Directory
            </Button>
          </div>
        </div>
      ) : (
        /* Desktop & Mobile Responsive Comparison Table */
        <div className="border border-brand-border rounded bg-white overflow-hidden shadow-subtle">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-brand-border bg-gray-50">
                  <th className="p-4 text-left font-bold text-brand-dark min-w-[160px] sm:min-w-[200px] w-1/5 border-r border-brand-border">
                    Metrics & Parameters
                  </th>
                  {selectedColleges.map((col) => (
                    <th
                      key={col.id}
                      className="p-4 text-left font-bold text-brand-dark min-w-[220px] sm:min-w-[260px] border-r border-brand-border last:border-r-0 relative"
                    >
                      <button
                        onClick={() => removeCollege(col.id)}
                        className="absolute top-2 right-2 p-1 text-gray-400 hover:text-red-600 rounded"
                        title="Remove from comparison"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      <div className="h-28 rounded overflow-hidden mb-3 border border-brand-border">
                        <img
                          src={col.coverImage}
                          alt={col.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <Link
                        to={`/college/${col.slug}`}
                        className="text-sm font-bold text-brand-dark hover:text-brand-teal transition-colors line-clamp-2"
                      >
                        {col.name}
                      </Link>
                      <span className="text-xs text-brand-gray font-normal block mt-0.5">
                        {col.city}, {col.state}
                      </span>
                    </th>
                  ))}
                  {/* Add College Placeholder if < 4 */}
                  {Array.from({ length: maxLimit - selectedColleges.length }).map((_, i) => (
                    <th
                      key={i}
                      className="p-4 text-center min-w-[180px] border-r border-brand-border last:border-r-0 bg-gray-50/50"
                    >
                      <button
                        onClick={() => setSelectorModalOpen(true)}
                        className="w-full h-36 border-2 border-dashed border-gray-300 rounded hover:border-brand-teal flex flex-col items-center justify-center gap-1.5 text-xs text-brand-gray hover:text-brand-teal transition-colors"
                      >
                        <Plus className="w-5 h-5" />
                        <span className="font-semibold">Add College</span>
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border">
                {/* NIRF Rank */}
                <tr className="hover:bg-gray-50/50">
                  <td className="p-3.5 font-semibold text-brand-dark bg-gray-50/70 border-r border-brand-border">
                    NIRF Ranking (2026)
                  </td>
                  {selectedColleges.map((col) => (
                    <td key={col.id} className="p-3.5 border-r border-brand-border last:border-r-0 font-bold text-brand-dark">
                      {col.nirfRanking ? `Rank #${col.nirfRanking}` : 'Ranked in Top 150'}
                    </td>
                  ))}
                </tr>

                {/* Rating */}
                <tr className="hover:bg-gray-50/50">
                  <td className="p-3.5 font-semibold text-brand-dark bg-gray-50/70 border-r border-brand-border">
                    Student Rating
                  </td>
                  {selectedColleges.map((col) => (
                    <td key={col.id} className="p-3.5 border-r border-brand-border last:border-r-0">
                      <div className="flex items-center gap-1 font-bold text-amber-600">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
                        <span>{col.rating} / 5</span>
                        <span className="text-gray-400 font-normal text-xs">({col.reviewsCount})</span>
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Average CTC */}
                <tr className="hover:bg-gray-50/50 bg-brand-teal-light/20">
                  <td className="p-3.5 font-semibold text-brand-dark bg-gray-50/70 border-r border-brand-border">
                    Average Package (CTC)
                  </td>
                  {selectedColleges.map((col) => (
                    <td key={col.id} className="p-3.5 border-r border-brand-border last:border-r-0 font-extrabold text-emerald-700 text-base">
                      {formatPackage(col.averagePackage)}
                    </td>
                  ))}
                </tr>

                {/* Highest CTC */}
                <tr className="hover:bg-gray-50/50">
                  <td className="p-3.5 font-semibold text-brand-dark bg-gray-50/70 border-r border-brand-border">
                    Highest Placement Offer
                  </td>
                  {selectedColleges.map((col) => (
                    <td key={col.id} className="p-3.5 border-r border-brand-border last:border-r-0 font-bold text-brand-dark">
                      {formatPackage(col.highestPackage)}
                    </td>
                  ))}
                </tr>

                {/* Annual Tuition Fees */}
                <tr className="hover:bg-gray-50/50 bg-brand-teal-light/20">
                  <td className="p-3.5 font-semibold text-brand-dark bg-gray-50/70 border-r border-brand-border">
                    Annual Tuition Fees
                  </td>
                  {selectedColleges.map((col) => (
                    <td key={col.id} className="p-3.5 border-r border-brand-border last:border-r-0 font-bold text-brand-teal-dark">
                      {col.feesRange}
                    </td>
                  ))}
                </tr>

                {/* Ownership Type */}
                <tr className="hover:bg-gray-50/50">
                  <td className="p-3.5 font-semibold text-brand-dark bg-gray-50/70 border-r border-brand-border">
                    Institute Ownership
                  </td>
                  {selectedColleges.map((col) => (
                    <td key={col.id} className="p-3.5 border-r border-brand-border last:border-r-0 text-brand-gray">
                      {col.type}
                    </td>
                  ))}
                </tr>

                {/* Established Year */}
                <tr className="hover:bg-gray-50/50">
                  <td className="p-3.5 font-semibold text-brand-dark bg-gray-50/70 border-r border-brand-border">
                    Established Year
                  </td>
                  {selectedColleges.map((col) => (
                    <td key={col.id} className="p-3.5 border-r border-brand-border last:border-r-0 text-brand-gray">
                      {col.establishedYear}
                    </td>
                  ))}
                </tr>

                {/* Accreditations */}
                <tr className="hover:bg-gray-50/50">
                  <td className="p-3.5 font-semibold text-brand-dark bg-gray-50/70 border-r border-brand-border">
                    Accreditations
                  </td>
                  {selectedColleges.map((col) => (
                    <td key={col.id} className="p-3.5 border-r border-brand-border last:border-r-0 text-brand-dark font-medium">
                      {col.accreditation}
                    </td>
                  ))}
                </tr>

                {/* Accepted Entrance Exams */}
                <tr className="hover:bg-gray-50/50">
                  <td className="p-3.5 font-semibold text-brand-dark bg-gray-50/70 border-r border-brand-border">
                    Entrance Examinations
                  </td>
                  {selectedColleges.map((col) => (
                    <td key={col.id} className="p-3.5 border-r border-brand-border last:border-r-0 text-xs">
                      {col.entranceExams.join(', ')}
                    </td>
                  ))}
                </tr>

                {/* Hostel Accommodation */}
                <tr className="hover:bg-gray-50/50">
                  <td className="p-3.5 font-semibold text-brand-dark bg-gray-50/70 border-r border-brand-border">
                    Hostel & Accommodation
                  </td>
                  {selectedColleges.map((col) => (
                    <td key={col.id} className="p-3.5 border-r border-brand-border last:border-r-0 text-brand-gray">
                      {col.hostelFee}
                    </td>
                  ))}
                </tr>

                {/* Campus Area */}
                <tr className="hover:bg-gray-50/50">
                  <td className="p-3.5 font-semibold text-brand-dark bg-gray-50/70 border-r border-brand-border">
                    Campus Size
                  </td>
                  {selectedColleges.map((col) => (
                    <td key={col.id} className="p-3.5 border-r border-brand-border last:border-r-0 text-brand-gray">
                      {col.campusArea}
                    </td>
                  ))}
                </tr>

                {/* Top Corporate Recruiters */}
                <tr className="hover:bg-gray-50/50">
                  <td className="p-3.5 font-semibold text-brand-dark bg-gray-50/70 border-r border-brand-border">
                    Key Recruiters
                  </td>
                  {selectedColleges.map((col) => (
                    <td key={col.id} className="p-3.5 border-r border-brand-border last:border-r-0 text-xs text-brand-gray">
                      {col.recruiters.slice(0, 5).join(', ')}
                    </td>
                  ))}
                </tr>

                {/* Direct Action Row */}
                <tr className="bg-gray-50">
                  <td className="p-4 font-bold text-brand-dark bg-gray-100 border-r border-brand-border">
                    Next Step
                  </td>
                  {selectedColleges.map((col) => (
                    <td key={col.id} className="p-4 border-r border-brand-border last:border-r-0">
                      <div className="space-y-2">
                        <Button
                          to={`/college/${col.slug}`}
                          variant="primary"
                          size="sm"
                          className="w-full text-center"
                        >
                          View Full Profile
                        </Button>
                        <Button
                          to={`/college/${col.slug}#enquiry-section`}
                          variant="outline"
                          size="sm"
                          className="w-full text-center text-xs"
                        >
                          Enquire for {col.shortName}
                        </Button>
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* College Selection Modal */}
      <Modal
        isOpen={selectorModalOpen}
        onClose={() => setSelectorModalOpen(false)}
        title="Select College to Compare"
        maxWidth="max-w-2xl"
      >
        <div className="space-y-4 max-h-[60vh] overflow-y-auto">
          <p className="text-xs text-brand-gray">
            Choose a college from our verified institutions list to add to your side-by-side comparison.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {availableColleges.map((c) => (
              <div
                key={c.id}
                className="border border-brand-border rounded p-3 hover:border-brand-teal transition-colors flex items-center justify-between gap-2"
              >
                <div>
                  <h4 className="font-bold text-xs text-brand-dark line-clamp-1">{c.name}</h4>
                  <span className="text-[11px] text-brand-gray">{c.city} • NIRF #{c.nirfRanking}</span>
                </div>
                <button
                  onClick={() => {
                    addCollege(c);
                    setSelectorModalOpen(false);
                  }}
                  className="bg-brand-teal text-white hover:bg-brand-teal-dark px-2.5 py-1 rounded text-xs font-semibold shrink-0"
                >
                  Add
                </button>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
}
