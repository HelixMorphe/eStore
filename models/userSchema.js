import mongoose from "mongoose";
console.log(mongoose.Types);
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
        quantity: { type: Number },
      },
    ],
  },
  orders: {
    type: [String],
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
