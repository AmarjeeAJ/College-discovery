import { useState, useEffect } from 'react';
import SEO from '../../components/common/SEO';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import SectionHeading from '../../components/common/SectionHeading';
import CourseCard from '../../components/course/CourseCard';
import { apiService } from '../../services/api';

export default function CoursesHubPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function loadCourses() {
      const res = await apiService.getCourses();
      if (res.success) setCourses(res.data);
    }
    loadCourses();
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <SEO
        title="Higher Education Courses & Degree Programs in India (2026 Guide)"
        description="Explore top undergraduate and postgraduate degree courses across engineering, management, IT, law, and medical sciences in India."
      />

      <Breadcrumbs items={[{ label: 'Courses Hub' }]} />

      <div className="border-b border-brand-border pb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block mb-1">
          Degree Programs & Career Pathways
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
          Explore Higher Education Courses in India
        </h1>
        <p className="text-sm sm:text-base text-brand-gray mt-2 max-w-3xl leading-relaxed">
          Comprehensive guides covering course duration, eligibility, entrance examinations, salary potential, and top recruiting sectors across professional disciplines.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
