import dbConnect from "../../../utils/dbConnect";
import User from "../../../models/userSchema";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();
  if (method === "POST") {
    try {
      const { email, orderDetails } = req.body;
      const order = await User.findOneAndUpdate(
        { email: email },
        { $push: { orders: orderDetails } },
        { new: true }
      );
      res.status(200).json({ success: true, data: order.orders });
    } catch (e) {
      res.status(300).json({ success: false, message: e });
    }
  }
}
