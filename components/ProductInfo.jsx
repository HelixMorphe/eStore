import React, { useEffect } from "react";
import { useState } from "react";

const ProductInfo = ({ info, id }) => {
  const { title, subTitle, sizes, price, description, image } = info;
  const [quantity, setQuantity] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const [product, setProduct] = useState({
    id: id,
  });
  const handleSelect = (size) => {
    setSelectedSize(size);
  };
  const handleAdd = () => {
    setProduct({ ...product, size: selectedSize });
  };
  useEffect(() => {
    // console.log(selectedSize);
    console.log(product);
  }, [product]);
  return (
    <div className="flex flex-col md:flex-row">
      <div className="productFlexItem2"></div>
      <div className="productFlexItem">
        <div>
          <p className="text-4xl">{title}</p>
          <p className="pt-2">{subTitle}</p>
          <p className=" pt-4 font-semibold text-2xl">Rs.{price}</p>
        </div>
        <div className="pt-3">
          <p>Select Size</p>
          <div className="flex flex-wrap gap-2 w-[60%]">
            {sizes.map((size) => (
              <p
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
        <div className="my-5 flex flex-col w-[50%] md:w-[70%] gap-2">
          <p
            onClick={handleAdd}
            className="p-4 rounded-sm bg-black text-center flexItem text-white cursor-pointer"
          >
            Add to bag
          </p>
          <p className="p-4 rounded-sm bg-white text-center flexItem text-black border-black border cursor-pointer">
            Wishlist
          </p>
        </div>
        <div className="w-[70%]">{description}</div>
      </div>
    </div>
  );
};

export default ProductInfo;
