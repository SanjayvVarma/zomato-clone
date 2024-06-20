import mongoose from 'mongoose';

const ImageSchema = new mongoose.Schema({
  cloudinary_id: { type: String },
  image_url: { type: String },
}, {
  timestamps: true
});

export const ImageModel = mongoose.model("images", ImageSchema);