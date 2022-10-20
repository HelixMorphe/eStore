import dbConnect from "../../../utils/dbConnect";
import User from "../../../models/userSchema";
export default async function handler(req, res) {
  const { method } = req;
  const item = req.body.item;
  const email = req.body.email;
  await dbConnect();
  switch (method) {
    case "POST":
      try {
        const updatedItems = await User.findOneAndUpdate(
          { email: email },
          { $push: { cart: item } },
          { new: true }
        );

        res.status(200).json({ success: true, data: updatedItems });
      } catch (e) {
        res.status(300).json({ success: false, reason: e });
      }
    case "DELETE":
      try {
        const updatedItems = await User.findOneAndUpdate(
          { email: email },
          { $pull: { cart: { itemId: req.body.itemId } } },
          { new: true, safe: true, multi: false }
        );
        res.status(200).json({ success: true, data: updatedItems });
      } catch (e) {
        res.status(300).json({ success: false, message: e });
      }
  }
}
