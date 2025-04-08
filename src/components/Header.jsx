import React from "react";
import logo from "../assets/logo.png";
import { Search, CircleUserRound } from "lucide-react";

const menuList = ["About", "Find Plants", "Order Tracking", "Contact"];

const Header = () => {
  return (
    <header>
      <div className="flex justify-end">
        <form className="flex items-center" role="search">
          <Search className="w-6 h-6 sm:w-8 sm:h-8 text-green-700" />
          <input
            className="border-b-2 border-green-700 w-30 h-10 pl-2 focus:outline-none"
            placeholder="Search plants"
          />
        </form>
        <div className="flex items-center p-8 text-base sm:text-2xl text-gray-700">
          <CircleUserRound className="mr-1 w-8 h-8" />
          Sign-in
        </div>
      </div>

      <div className="flex justify-center">
        <img src={logo} alt="logo" className="w-50 h-auto sm:w-80" />
      </div>

      <div className="flex justify-center mt-10">
        <nav>
          <ul className="flex gap-x-5 text-base sm:text-2xl list-none cursor-pointer">
            {menuList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
