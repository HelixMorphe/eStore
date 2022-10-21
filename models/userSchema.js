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
      },
    ],
  },
  orders: {
    type: [String],
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
