import dbConnect from "../../../utils/dbConnect";
import User from "../../../models/userSchema";
export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();
  switch (method) {
    case "GET":
      try {
        const user = await User.find();
        console.log(user);
        res.status(200).json({ success: true, data: user });
      } catch (e) {
        console.log(e);
        res.status(500).json({ success: false, reason: e });
      }
      break;
    case "POST":
      try {
        const user = req.body;
        const isExist = await User.findOne({ email: user.email });
        if (isExist)
          res.json({ success: false, reason: "email already exist" });
        else {
          const newUser = await User.create(user);
          res.status(200).json({ success: true, newUser: newUser });
        }
      } catch (e) {
        res.status(300).json({ success: false, reason: e });
      }
      break;
    default:
      res.status(300).json({ success: false });
      break;
  }
}
