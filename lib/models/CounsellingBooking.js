import mongoose from 'mongoose';

const CounsellingBookingSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  parentName: { type: String, default: '' },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  currentStatus: { type: String, default: '' },
  stream: { type: String, default: '' },
  preferredSlot: { type: String, default: '' },
  mode: { type: String, default: 'online' },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'cancelled'],
    default: 'pending'
  }
}, {
  timestamps: true
});

export default mongoose.models.CounsellingBooking || mongoose.model('CounsellingBooking', CounsellingBookingSchema);
