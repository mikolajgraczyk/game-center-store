import mongoose from 'mongoose';

const { Schema } = mongoose;

const gameSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: false,
    },
    cover_photo: {
      type: String,
      required: true,
    },
    preview_photos: {
      type: [String],
      validate: (v: []) => Array.isArray(v) && v.length > 0,
    },
    variant: {
      type: String,
      enum: ['BASE GAME', 'DLC', 'DEMO'],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    genres: {
      type: [String],
      validate: (v: []) => Array.isArray(v) && v.length > 0,
    },
    features: {
      type: [String],
      validate: (v: []) => Array.isArray(v) && v.length > 0,
    },
    details: {
      type: {
        dev: { type: String, required: true },
        publisher: { type: String, required: true },
        releaseDate: { type: Date, required: true },
        platforms: {
          type: [{ type: String, enum: ['windows', 'mac'] }],
          validate: (v: []) => Array.isArray(v) && v.length > 0,
        },
      },
      required: true,
    },
    reviews: {
      type: [
        {
          userId: { type: String, required: true },
          score: { type: Number, min: 1, max: 5, required: true },
        },
      ],
      validate: (v: []) => Array.isArray(v) && v.length > 0,
    },
    highlightedFeatures: {
      type: [
        {
          type: String,
        },
      ],
    },
  },
  { timestamps: true },
);

export default mongoose.models.Game || mongoose.model('Game', gameSchema);
