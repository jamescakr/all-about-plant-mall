import React from "react";
import logo from "../assets/logo.png";
import { Search, CircleUserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";

const menuList = ["About", "Find Plants", "Order Tracking", "Contact"];

const Header = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();

  const goToSignin = () => {
    navigate("/signin");
  };

  const goToMain = () => {
    navigate("/");
  };

  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <header>
      <div className="flex justify-end">
        <div className="flex items-center" role="search">
          <Search className="w-6 h-6 sm:w-8 sm:h-8 text-green-700" />
          <input
            type="text"
            className="border-b-2 border-green-700 w-30 h-10 pl-2 focus:outline-none"
            placeholder="Search plants"
            onKeyDown={(event) => search(event)}
          />
        </div>
        <div
          className="flex items-center p-8 text-base sm:text-xl text-gray-700 cursor-pointer"
          onClick={() => {
            if (authenticate) {
              setAuthenticate(false);
              navigate("/");
            } else {
              goToSignin();
            }
          }}
        >
          <CircleUserRound className="mr-1 w-5 h-5 sm:w-7 sm:h-7" />
          {authenticate ? <div>Sign-out</div> : <div>Sign-in</div>}
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src={logo}
          alt="logo"
          onClick={goToMain}
          className="w-50 h-auto sm:w-80"
        />
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
