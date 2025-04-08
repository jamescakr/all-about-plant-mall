import React from "react";
import logo from "../assets/logo.png";
import { Search, CircleUserRound } from "lucide-react";

const menuList = ["About", "Find Plants", "Order Tracking", "Contact"];

const Header = () => {
  return (
    <header>
      <div className="flex justify-end p-8">
        <CircleUserRound className="mr-1" />
        Sign-in
      </div>

      <div className="flex justify-center">
        <img src={logo} alt="logo" className="w-80 h-auto" />
      </div>

      <div className="relative flex justify-center mt-10">
        <nav className="absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex gap-x-5 text-xl list-none cursor-pointer">
            {menuList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </nav>

        <form className="flex items-center ml-auto pr-10" role="search">
          <Search className="w-6 h-6 text-green-700" />
          <input
            className="border-b-2 border-green-700 w-30 h-10 pl-2 focus:outline-none"
            placeholder="Search plants"
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
