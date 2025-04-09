import React from "react";
import googleLogo from "../assets/googleLogo.svg";
import loginImage2 from "../assets/loginImage2.jpg";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        {/* sign in */}
        <div className="order-2 lg:order-1 lg:col-span-1 flex flex-col justify-center items-center h-screen ">
          <div>
            <div className="flex justify-center mb-10">
              <img
                src={logo}
                className="w-[50%] h-auto cursor-pointer"
                onClick={goToMain}
              />
            </div>

            <div className="text-left text-2xl lg:text-4xl font-bold mb-2">
              Sign up to explore more!
            </div>
            <div className="text-base lg:text-lg text-gray-500 mb-8">
              Please enter your detail
            </div>

            <button className="flex justify-center items-center border border-gray-300 rounded-sm w-80 lg:w-100 h-14 gap-x-3 cursor-pointer mb-3">
              <img src={googleLogo} className="w-10 h-10 border-none shadow-none" />
              <div>Sign in with Google</div>
            </button>

            {/* ---or--- */}
            <div className="flex items-center mb-3 w-80 lg:w-100">
              <div className="flex-grow border-b border-gray-300"></div>
              <span className="mx-5 font-sm">or</span>
              <div className="flex-grow border-b border-gray-300"></div>
            </div>

            <div className="text-base mb-1">Email address</div>
            <input
              placeholder="Enter your email"
              className="border border-gray-300 w-80 lg:w-100 h-12 rounded-sm mb-3 pl-2"
            />
            <div className="text-base mb-1">Password</div>
            <input
              placeholder="Enter your password"
              className="border border-gray-300 w-80 lg:w-100 h-12 rounded-sm mb-3 pl-2"
            />

            <div className="flex justify-between items-center mb-10 w-80 lg:w-100">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="mr-1 cursor-pointer"
                />
                <label
                  htmlFor="remember"
                  className="text-sm lg:text-base cursor-pointer"
                >
                  Remember for 30 days
                </label>
              </div>
              <div className="text-blue-500 text-sm lg:text-base underline cursor-pointer">
                Forgot password
              </div>
            </div>
            <button className="bg-black text-white text-center w-80 lg:w-100 h-12 rounded-sm mb-3 cursor-pointer">
              Sign in
            </button>
            <div className="flex justify-center text-sm lg:text-base">
              <div className=" mr-3">Don't have an account?</div>
              <div className="text-blue-500 underline cursor-pointer">Sign up</div>
            </div>
          </div>
        </div>

        {/* image */}
        <div className="relative order-1 lg:order-2 h-screen lg:col-span-1 flex items-center justify-center ">
          <img
            src={loginImage2}
            className="rounded-sm md:w-[80%] md:h-auto lg:w-[100%] lg:h-auto"
          />
          <div className="absolute z-30 text-white ">
            <div className="text-2xl sm:text-3xl font-bold mb-3">
              Bring nature indoors, effortlessly.
            </div>
            <div className="text-base sm:text-lg w-100">
              Sign up free and discover handpicked plants for every corner of your
              home.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
