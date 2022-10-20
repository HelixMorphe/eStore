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
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
