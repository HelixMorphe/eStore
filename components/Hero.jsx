import React from "react";
import Image from "next/image";
const heroImage =
  "https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg";
const Hero = () => {
  return (
    <div className="flex flex-col justify-between md:flex-row items-center">
      {/* <div className="relative w-full h-[80vh] md:flex-[2_2_0]">
        <Image src={heroImage} layout="fill" objectFit="contain" />
      </div> */}
      <div className="md:flex-1 relative text-4xl font-semibold text-center flex items-center justify-center h-[90vh]">
        <Image src={heroImage} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default Hero;
