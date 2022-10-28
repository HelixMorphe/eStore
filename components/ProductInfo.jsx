import React, { useEffect } from "react";
import { useState } from "react";
import { useUser } from "../hooks/useUser";
import { useRouter } from "next/router";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ProductGrid from "../atoms/ProductGrid";
import axios from "axios";

const ProductInfo = ({ info, id }) => {
  const router = useRouter();
  const { title, subTitle, sizes, price, description, images } = info;
  const [flag, setFlag] = useState(false);
  const [selectedSize, setSelectedSize] = useState(0);
  const [wish, setWish] = useState(0);
  const [product, setProduct] = useState({
    id: id,
  });
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [error, setError] = useState({
    status: false,
    message: "",
  });
  const handleSelect = (size) => {
    setError({ ...error, status: false, message: "" });
    setSelectedSize(size);
  };
  const { isLoggedIn, email } = useUser();
  const handleAdd = async () => {
    if (!isLoggedIn) {
      setError({ ...error, status: true, message: "Please Login." });
    } else if (selectedSize === 0) {
      setError({ ...error, status: true, message: "Please select size." });
      console.log(error);
    } else if (isAdded) {
      router.push("/cart");
    } else {
      setIsAdding(true);
      setProduct({ ...product, size: selectedSize, email });
      const items = await axios.post(
        "http://localhost:3000/api/cart/modifyCart",
        {
          email: email,
          item: {
            itemId: product.id,
            size: selectedSize,
            price: info.price,
            title: info.title,
            imageUrl: info.images[0].url,
          },
        }
      );
      console.log(items.data.success, "ITEMS");
      setIsAdding(false);
      if (items.data.success) {
        setIsAdded(true);
      }
    }
  };
  const handleWish = () => {
    setWish((wish) => !wish);
  };
  useEffect(() => {}, [product]);
  return (
    <div className="flex flex-col-reverse md:flex-row">
      <div className="productFlexItem2">
        <ProductGrid images={images} />
      </div>
      <div className="productFlexItem">
        <div>
          <p className="text-4xl">{title}</p>
          <p className="pt-2">{subTitle}</p>
          <p className=" pt-4 font-semibold text-2xl">Rs.{price}</p>
        </div>
        <div className="pt-3">
          <p>Select Size</p>
          <div className="mt-2 flex flex-wrap gap-2 w-[90%] md:w-[60%]">
            {sizes.map((size, index) => (
              <p
                key={index}
                onClick={() => handleSelect(size)}
                className={`${
                  selectedSize === size ? "selectedSize" : ""
                } border border-gray-500 px-6 py-2 rounded-md hover:border-black cursor-pointer`}
              >
                {size}
              </p>
            ))}
          </div>
        </div>
        <div className="my-5 flex w-[90%] md:w-[70%] gap-2">
          <p
            onClick={handleAdd}
            className={`p-4 rounded-sm text-center flexItem cursor-pointer ${
              isAdding
                ? "bg-white text-black cursor-not-allowed"
                : isAdded
                ? "bg-white text-black"
                : "bg-black text-white "
            } border border-black`}
          >
            {isAdding ? "Adding..." : isAdded ? "Go to Bag" : "Add to Bag"}
          </p>
          <p
            onClick={handleWish}
            className="cursor-pointer py-4 px-5 border border-black"
          >
            {wish ? (
              <FavoriteIcon className="text-red-600" />
            ) : (
              <FavoriteBorderIcon />
            )}
          </p>
        </div>
        {error.status ? (
          <p className="text-red-500 text-sm">* {error.message}</p>
        ) : (
          ""
        )}
        <div className="w-[90%] leading-8">{description}</div>
      </div>
    </div>
  );
};

export default ProductInfo;
