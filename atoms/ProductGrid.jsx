import Image from "next/image";
import React from "react";

const ProductGrid = ({ images }) => {
  return (
    <div className="z-[-1] grid md:grid-cols-2 gap-8 w-[95%]">
      {images.map((image) => (
        <div key={image.id} className="relative h-[550px] z-0">
          <Image src={image.url} layout="fill" objectFit="cover" />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
