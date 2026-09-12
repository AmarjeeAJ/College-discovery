import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import College from '@/lib/models/College';
import { collegesData } from '@/lib/data/colleges';

export async function GET(request, { params }) {
  const { slug } = await params;

  try {
    const db = await connectToDatabase();
    if (db) {
      const college = await College.findOne({ slug }).lean();
      if (college) {
        return NextResponse.json({ success: true, data: college });
      }
    }
  } catch (err) {
    console.warn('MongoDB query fallback for college detail:', err.message);
  }

  const college = collegesData.find((c) => c.slug === slug);
  if (!college) {
    return NextResponse.json({ success: false, error: 'College not found' }, { status: 404 });
  }

  return NextResponse.json({ success: true, data: college });
}
