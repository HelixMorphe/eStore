import Image from "next/image";
import React from "react";
import Link from "next/link";
const ProductCheckout = ({ product }) => {
  const { title, size, price, imageUrl, itemId } = product;

  return (
    <div>
      <div className="flex gap-14 px-4 py-4 border-t border-b">
        <div className="h-[100px] w-[100px] bg-[#f6f6f6] rounded-lg">
          <Link href={`/product/${itemId}`}>
            <img
              src={imageUrl}
              className="rounded-lg object-contain h-[100px] w-[100px] cursor-pointer"
              layout="fill"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className="flex items-start justify-center flex-col">
          <p className="text-lg font-semibold">{title}</p>
          <p className="text-xs text-gray-600 my-1">
            Size:
            <span className="text- p-2 text-black">{size}</span>
          </p>
          <p className="text-md font-semibold">Rs.{price.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCheckout;
