import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import College from '@/lib/models/College';
import { collegesData } from '@/lib/data/colleges';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const stream = searchParams.get('stream');
  const city = searchParams.get('city');
  const state = searchParams.get('state');
  const type = searchParams.get('type');
  const maxFee = searchParams.get('maxFee');
  const q = searchParams.get('q');
  const featured = searchParams.get('featured');

  try {
    const db = await connectToDatabase();
    if (db) {
      const query = {};
      if (stream) {
        const cleanStream = stream.toLowerCase();
        let sPattern = stream;
        if (cleanStream.includes('btech')) sPattern = 'b\\.?tech|engineering';
        else if (cleanStream.includes('engineering')) sPattern = 'engineering|b\\.?tech';
        else if (cleanStream.includes('mba')) sPattern = 'mba|management';
        else if (cleanStream.includes('management')) sPattern = 'management|mba';
        query.stream = { $regex: new RegExp(sPattern, 'i') };
      }
      if (city) query.city = { $regex: new RegExp(`^${city}$`, 'i') };
      if (state) query.state = { $regex: new RegExp(`^${state}$`, 'i') };
      if (type) query.type = { $regex: new RegExp(type, 'i') };
      if (maxFee) query.annualFeeNumeric = { $lte: Number(maxFee) };
      if (featured === 'true') query.featured = true;
      if (q) {
        query.$or = [
          { name: { $regex: new RegExp(q, 'i') } },
          { shortName: { $regex: new RegExp(q, 'i') } },
          { city: { $regex: new RegExp(q, 'i') } },
          { state: { $regex: new RegExp(q, 'i') } },
        ];
      }

      const colleges = await College.find(query).lean();
      if (colleges.length > 0) {
        return NextResponse.json({ success: true, count: colleges.length, data: colleges });
      }
    }
  } catch (err) {
    console.warn('MongoDB query fallback to local dataset:', err.message);
  }

  // Graceful fallback to rich local dataset
  let results = [...collegesData];
  if (stream) {
    const target = stream.toLowerCase().replace(/[\.\s-]/g, '');
    results = results.filter((c) =>
      c.stream.some((s) => {
        const norm = s.toLowerCase().replace(/[\.\s-]/g, '');
        return (
          norm.includes(target) ||
          target.includes(norm) ||
          (target === 'btech' && norm.includes('engineering')) ||
          (target === 'engineering' && norm.includes('btech')) ||
          (target === 'mba' && norm.includes('management')) ||
          (target === 'management' && norm.includes('mba'))
        );
      })
    );
  }
  if (city) {
    const target = city.toLowerCase();
    results = results.filter((c) => c.city.toLowerCase() === target);
  }
  if (state) {
    const target = state.toLowerCase();
    results = results.filter((c) => c.state.toLowerCase() === target);
  }
  if (type) {
    const target = type.toLowerCase();
    results = results.filter((c) => c.type.toLowerCase().includes(target));
  }
  if (maxFee) {
    results = results.filter((c) => c.annualFeeNumeric <= Number(maxFee));
  }
  if (featured === 'true') {
    results = results.filter((c) => c.featured);
  }
  if (q) {
    const target = q.toLowerCase();
    results = results.filter(
      (c) =>
        c.name.toLowerCase().includes(target) ||
        (c.shortName && c.shortName.toLowerCase().includes(target)) ||
        c.city.toLowerCase().includes(target) ||
        c.state.toLowerCase().includes(target)
    );
  }

  return NextResponse.json({ success: true, count: results.length, data: results });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const db = await connectToDatabase();
    if (!db) {
      return NextResponse.json(
        { success: false, error: 'Database connection unavailable' },
        { status: 503 }
      );
    }
    const college = await College.create(body);
    return NextResponse.json({ success: true, data: college }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 400 });
  }
}
