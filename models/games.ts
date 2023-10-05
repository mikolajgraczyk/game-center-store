import mongoose from "mongoose";

const { Schema } = mongoose;

const gamesSchema = new Schema(
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
      required: true,
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
  { timestamps: true }
);

export default mongoose.models.Post || mongoose.model("Post", gamesSchema);
