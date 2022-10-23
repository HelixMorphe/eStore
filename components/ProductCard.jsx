import React from "react";
import Image from "next/image";
import Link from "next/link";
const ProductCard = ({ product }) => {
  return (
    <Link href={`/product/${product._id}`}>
      <div className="cursor-pointer">
        {/* Image */}
        <div className="relative h-[400px] bg-[#f6f6f6]">
          <Image
            src={product.images[0].url}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex justify-between mt-4">
          <div>
            <p className="text-lg">{product.title}</p>
            <p className="text-gray-600">{product.subTitle}</p>
          </div>
          <p className="text-lg">Rs.{product.price.toLocaleString("en-US")}</p>
        </div>
        {/* Price */}
      </div>
    </Link>
  );
};

export default ProductCard;
