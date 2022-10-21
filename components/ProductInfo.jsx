import React, { useEffect } from "react";
import { useState } from "react";
import { useUser } from "../hooks/useUser";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ProductGrid from "../atoms/ProductGrid";
import axios from "axios";

const ProductInfo = ({ info, id }) => {
  const { title, subTitle, sizes, price, description, images } = info;
  const [flag, setFlag] = useState(false);
  const [selectedSize, setSelectedSize] = useState(0);
  const [wish, setWish] = useState(0);
  const [product, setProduct] = useState({
    id: id,
  });
  const handleSelect = (size) => {
    setSelectedSize(size);
  };
  const { isLoggedIn, email } = useUser();
  const handleAdd = async () => {
    if (!isLoggedIn) {
      setFlag(true);
    } else {
      setProduct({ ...product, size: selectedSize, email });
      const items = await axios.post(
        "http://localhost:3000/api/cart/modifyCart",
        {
          email: email,
          item: {
            itemId: product.id,
            size: selectedSize,
          },
        }
      );
      console.log(items, "items");
    }
  };
  const handleWish = () => {
    setWish((wish) => !wish);
  };
  useEffect(() => {
    // console.log(selectedSize);
    console.log(product, "CART");
  }, [product]);
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
            className="p-4 rounded-sm bg-black text-center flexItem text-white cursor-pointer"
          >
            Add to bag
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
        {flag ? <p className="text-red-500 text-sm">* Please Login</p> : ""}
        <div className="w-[90%] leading-8">{description}</div>
      </div>
    </div>
  );
};

export default ProductInfo;
