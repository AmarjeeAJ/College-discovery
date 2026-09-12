import { NextResponse } from 'next/server';
import { coursesData } from '@/lib/data/courses';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');

  if (slug) {
    const course = coursesData.find((c) => c.slug === slug);
    if (!course) {
      return NextResponse.json({ success: false, error: 'Course not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: course });
  }

  return NextResponse.json({ success: true, count: coursesData.length, data: coursesData });
}
