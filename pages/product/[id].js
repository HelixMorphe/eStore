import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import ProductInfo from "../../components/ProductInfo";

const product = {
  id: 1,
  title: "Nike React Pegasus Trail 4 GORE-TEX",
  subTitle: "Men's Waterproof Trail-Running Shoes",
  price: "12000",
  sizes: ["UK 7", "UK 8", "UK 9", "UK 10", "UK 11", "UK 12", "UK 13"],
  description:
    "The Nike React Pegasus Trail 4 GORE-TEX is made for those moments when you don't want to turn back, no matter what. Feel confident in even the most unforeseen weather conditions with waterproof GORE-TEX helping you stay dry. Plus, a higher ankle gaiter gives you extra coverage to help keep water out. Responsive Nike React foam lets you take your wet run from the road to the trail without breaking your stride.",
  image: "#",
};
const ProductItem = () => {
  const router = useRouter();
  const id = router.query.id;
  if (!id) return <div>Loading</div>;
  return (
    <div className="wrapper">
      <Navbar />
      <div className="mt-10">
        <ProductInfo info={product} id={id} />
      </div>
    </div>
  );
};

export default ProductItem;