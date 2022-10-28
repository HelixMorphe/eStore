import dbConnect from "../../../utils/dbConnect";
import Product from "../../../models/productSchema";
export default async function handler(req, res) {
  const { method } = req;
  const productId = req.query?.productId;
  await dbConnect();
  if (method === "GET") {
    if (productId) {
      try {
        const product = await Product.findById(productId);
        res.status(200).json({ success: true, data: product });
      } catch (e) {
        res.status(310).json({ success: false, message: e });
      }
    } else {
      try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products });
      } catch (e) {
        res.status(300).json({ success: false, message: e });
      }
    }
  }
  if (method === "POST") {
    try {
      const product = req.body;
      const newProduct = await Product.create(product);
      res.status(200).json({ success: true, data: newProduct });
    } catch (e) {
      res.status(300).json({ success: false, message: e });
    }
  }
}
