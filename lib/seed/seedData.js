import mongoose from 'mongoose';
import connectToDatabase from '../mongodb.js';
import College from '../models/College.js';
import { collegesData } from '../data/colleges.js';

export async function seedDatabase() {
  const db = await connectToDatabase();
  if (!db) {
    console.log('Skipping database seeding: No active MongoDB connection.');
    return { success: false, message: 'No MongoDB URI configured.' };
  }

  try {
    console.log('Seeding colleges into MongoDB...');
    for (const college of collegesData) {
      await College.findOneAndUpdate(
        { slug: college.slug },
        college,
        { upsert: true, new: true }
      );
    }
    const count = await College.countDocuments();
    console.log(`Seeding complete: ${count} colleges in database.`);
    return { success: true, count };
  } catch (err) {
    console.error('Error seeding database:', err);
    return { success: false, error: err.message };
  }
}

// If executed directly via CLI
if (process.argv[1]?.includes('seedData')) {
  seedDatabase().then(() => {
    process.exit(0);
  });
}
