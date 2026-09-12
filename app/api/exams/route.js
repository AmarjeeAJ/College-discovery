import { NextResponse } from 'next/server';
import { examsData } from '@/lib/data/exams';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');

  if (slug) {
    const exam = examsData.find((e) => e.slug.toLowerCase() === slug.toLowerCase());
    if (!exam) {
      return NextResponse.json({ success: false, error: 'Exam not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: exam });
  }

  return NextResponse.json({ success: true, count: examsData.length, data: examsData });
}
