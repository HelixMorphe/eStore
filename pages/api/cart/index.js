import dbConnect from "../../../utils/dbConnect";
import User from "../../../models/userSchema";
export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();
  switch (method) {
    case "POST":
      try {
        const user = await User.findOne({ email: req.body.email });
        res.status(200).json({ success: true, data: user.cart });
      } catch (e) {
        res.status(300).json({ success: false, reason: e });
      }
  }
}
