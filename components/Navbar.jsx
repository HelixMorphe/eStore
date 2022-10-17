import React from "react";
import Search from "../atoms/Search";
import Link from "next/link";
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
    <div className="sticky top-0 z-99 bg-white">
      <div className="py-4 md:py-5 flex items-center">
        <div className="flexItem font-bold text-3xl">NIKE</div>
        <div className="flexItem text-center flex">
          {navItems.map((item) => (
            <Link key={item.id} href={item.link}>
              <p className="flex-1 cursor-pointer hover:text-slate-600">
                {item.label}
              </p>
            </Link>
          ))}
        </div>
        <div className="flexItem">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
