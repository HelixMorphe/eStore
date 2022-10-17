import React from "react";
import Image from "next/image";
const heroImage =
  "https://images.pexels.com/photos/1456737/pexels-photo-1456737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const Hero = () => {
  return (
    <div className="flex flex-col justify-between md:flex-row items-center">
      {/* <div className="relative w-full h-[80vh] md:flex-[2_2_0]">
        <Image src={heroImage} layout="fill" objectFit="contain" />
      </div> */}
      <div className="md:flex-1 text-4xl font-semibold text-center flex items-center justify-center border border-red-600 h-[70vh]">
        FLAT 60% OFF
      </div>
    </div>
  );
};

export default Hero;
