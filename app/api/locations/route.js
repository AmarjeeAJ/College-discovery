import { NextResponse } from 'next/server';
import { locationsData } from '@/lib/data/locations';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city');

  if (city) {
    const loc = locationsData.find((l) => l.slug.toLowerCase() === city.toLowerCase());
    if (!loc) {
      return NextResponse.json({ success: false, error: 'Location not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: loc });
  }

  return NextResponse.json({ success: true, count: locationsData.length, data: locationsData });
}
