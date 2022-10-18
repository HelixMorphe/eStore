import React from "react";
import Search from "../atoms/Search";
import Link from "next/link";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
// import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
const navItems = [
  {
    id: 1,
    label: "Men",
    link: "/men",
  },
  {
    id: 2,
    label: "Women",
    link: "/women",
  },
  {
    id: 3,
    label: "Kids",
    link: "/kids",
  },
];
const Navbar = () => {
  return (
    <div className="z-99 bg-white">
      <div className="py-4 md:py-5 flex items-center justify-between">
        <div className="md:flex-1 font-bold text-3xl">NIKE</div>
        <div className="md:flex-1 md:gap-10 justify-center text-center hidden md:flex">
          {navItems.map((item) => (
            <Link key={item.id} href={item.link}>
              <p className="cursor-pointer hover:text-slate-600">
                {item.label}
              </p>
            </Link>
          ))}
        </div>
        <div className="hidden md:flex-1 md:flex items-center justify-center gap-6">
          <Search />
          <Link href="/login">
            <PersonOutlineOutlinedIcon className="cursor-pointer" />
          </Link>
          <Link href="/wishlist">
            <FavoriteBorderIcon className="cursor-pointer" />
          </Link>
          <Link href="/cart">
            <LocalMallOutlinedIcon className="cursor-pointer" />
          </Link>
        </div>
        <div className="md:hidden">S</div>
      </div>
    </div>
  );
};

export default Navbar;
