import mongoose from "mongoose";
const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is missing"],
  },
  subTitle: {
    type: String,
  },
  description: {
    type: String,
  },
  price: { type: Number },
  sizes: [String],
  images: [
    {
      url: { type: String },
      description: { type: String },
    },
  ],
  filters: {
    gender: {
      type: String,
    },
    colors: {
      type: String,
    },
  },
  category: { type: String },
});

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
