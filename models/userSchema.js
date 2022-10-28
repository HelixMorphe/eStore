import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
    required: [true, "name missing"],
  },
  email: {
    type: String,
    required: [true, "email missing"],
  },
  image: {
    type: String,
    required: [false, "profileImageMissing"],
  },
  wishlist: {
    type: [String],
  },
  cart: {
    type: [
      {
        itemId: { type: String },
        size: { type: String },
        price: { type: Number },
        imageUrl: { type: String },
        title: { type: String },
      },
    ],
  },
  orders: [
    {
      address: { type: String },
      mobile: { type: String },
      city: { type: String },
      state: { type: String },
      country: { type: String },
      pincode: { type: String },
      items: [
        {
          itemId: { type: String },
          size: { type: String },
          price: { type: Number },
          imageUrl: { type: String },
          title: { type: String },
        },
      ],
    },
  ],
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
