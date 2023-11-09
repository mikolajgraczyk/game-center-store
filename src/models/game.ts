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
    id: {
      type: String || Number,
      required: true,
    },
    cover_photo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.models.Game || mongoose.model('Game', gameSchema);
