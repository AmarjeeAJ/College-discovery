import mongoose from 'mongoose';

const EnquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  course: { type: String, default: '' },
  preferredLocation: { type: String, default: '' },
  preferredCollege: { type: String, default: '' },
  message: { type: String, default: '' },
  status: { 
    type: String, 
    enum: ['new', 'contacted', 'counselled', 'enrolled'],
    default: 'new' 
  }
}, {
  timestamps: true
});

export default mongoose.models.Enquiry || mongoose.model('Enquiry', EnquirySchema);
