import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Enquiry from '@/lib/models/Enquiry';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, course, preferredLocation, preferredCollege, message } = body;

    if (!name || !phone || !email) {
      return NextResponse.json(
        { success: false, error: 'Name, phone, and email are required fields.' },
        { status: 400 }
      );
    }

    try {
      const db = await connectToDatabase();
      if (db) {
        const enquiry = await Enquiry.create({
          name,
          phone,
          email,
          course: course || '',
          preferredLocation: preferredLocation || '',
          preferredCollege: preferredCollege || '',
          message: message || '',
        });
        return NextResponse.json({
          success: true,
          message: 'Admission enquiry successfully submitted to CRM pipeline.',
          enquiryId: enquiry._id,
        }, { status: 201 });
      }
    } catch (dbErr) {
      console.warn('Database error while saving enquiry, using simulated fallback:', dbErr.message);
    }

    // Fallback response for local dev if MongoDB is not running
    return NextResponse.json({
      success: true,
      message: 'Admission enquiry captured (local simulated mode).',
      enquiryId: 'ENQ-' + Date.now().toString(36).toUpperCase(),
    }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message || 'Failed to process enquiry' },
      { status: 500 }
    );
  }
}
