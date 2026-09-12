import { NextResponse } from 'next/server';
import { collegesData } from '@/lib/data/colleges';
import { coursesData } from '@/lib/data/courses';
import { locationsData } from '@/lib/data/locations';
import { examsData } from '@/lib/data/exams';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q') || '';
  const term = q.trim().toLowerCase();

  if (!term) {
    return NextResponse.json({
      success: true,
      data: { colleges: [], courses: [], locations: [], exams: [] },
    });
  }

  const matchedColleges = collegesData
    .filter(
      (c) =>
        c.name.toLowerCase().includes(term) ||
        (c.shortName && c.shortName.toLowerCase().includes(term)) ||
        c.city.toLowerCase().includes(term) ||
        c.state.toLowerCase().includes(term) ||
        c.stream.some((s) => s.toLowerCase().includes(term))
    )
    .slice(0, 10);

  const matchedCourses = coursesData
    .filter(
      (c) =>
        c.name.toLowerCase().includes(term) ||
        c.code.toLowerCase().includes(term) ||
        c.stream.toLowerCase().includes(term)
    )
    .slice(0, 5);

  const matchedLocations = locationsData
    .filter(
      (l) =>
        l.name.toLowerCase().includes(term) ||
        l.state.toLowerCase().includes(term)
    )
    .slice(0, 5);

  const matchedExams = examsData
    .filter(
      (e) =>
        e.name.toLowerCase().includes(term) ||
        e.code.toLowerCase().includes(term) ||
        e.stream.toLowerCase().includes(term)
    )
    .slice(0, 5);

  return NextResponse.json({
    success: true,
    data: {
      colleges: matchedColleges,
      courses: matchedCourses,
      locations: matchedLocations,
      exams: matchedExams,
    },
  });
}
