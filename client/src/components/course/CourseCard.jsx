import { Link } from 'react-router-dom';
import { Clock, GraduationCap, ArrowRight, IndianRupee } from 'lucide-react';
import Badge from '../common/Badge';

export default function CourseCard({ course }) {
  return (
    <div className="group border border-brand-border bg-white rounded hover:border-brand-teal hover:shadow-subtle transition-all duration-200 p-5 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <Badge variant="teal" size="xs">
            {course.degreeLevel}
          </Badge>
          <span className="text-[11px] text-brand-gray flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {course.duration}
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-brand-dark group-hover:text-brand-teal transition-colors mb-2">
          <Link to={`/courses/${course.slug}`}>
            {course.name}
          </Link>
        </h3>

        <p className="text-xs sm:text-sm text-brand-gray line-clamp-3 mb-4 leading-relaxed">
          {course.overview}
        </p>

        {/* Specializations preview */}
        <div className="space-y-1.5 mb-4 text-xs">
          <span className="text-[11px] font-semibold text-brand-dark block">
            Popular Specializations:
          </span>
          <div className="flex flex-wrap gap-1">
            {course.specializations.slice(0, 3).map((spec, i) => (
              <span
                key={i}
                className="bg-gray-50 border border-gray-200 text-gray-700 px-2 py-0.5 rounded-sm text-[11px]"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

        {/* Salary & Fees metrics */}
        <div className="pt-3 border-t border-brand-border/60 grid grid-cols-2 gap-2 text-xs">
          <div>
            <span className="text-[11px] text-brand-gray block">Average CTC</span>
            <span className="font-bold text-emerald-700">{course.averageSalary}</span>
          </div>
          <div>
            <span className="text-[11px] text-brand-gray block">Typical Fees</span>
            <span className="font-bold text-brand-dark">{course.averageFees.split('-')[0]}</span>
          </div>
        </div>
      </div>

      <div className="mt-5 pt-3 border-t border-brand-border/60 flex items-center justify-between">
        <span className="text-xs text-brand-gray">
          {course.entranceExams.slice(0, 2).join(', ')}
        </span>
        <Link
          to={`/courses/${course.slug}`}
          className="text-xs font-semibold text-brand-teal hover:text-brand-teal-dark flex items-center gap-1"
        >
          <span>Explore Course</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
