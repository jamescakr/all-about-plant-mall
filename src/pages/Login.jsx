import React from "react";
// import googleIcon from "../assets/googleIcon.png";
import googleLogo from "../assets/googleLogo.svg";
import loginImage from "../assets/loginImage.png";

const Login = () => {
  return (
    <div>
      <div className="flex">
        {/* sign in 60% */}
        <div className="w-[60%] flex flex-col justify-center items-center h-screen">
          <div className="w-80 text-left">
            <div className="text-left text-4xl font-bold">Welcome back</div>
            <div className="text-base text-gray-500 mb-4">
              Please enter your detail
            </div>

            <button className="flex justify-center items-center border border-gray-300 rounded-sm w-80 h-12 gap-x-3 cursor-pointer mb-3">
              <img src={googleLogo} className="w-10 h-10 border-none shadow-none" />
              <div>Sign in with Google</div>
            </button>

            {/* ---or--- */}
            <div className="flex items-center mb-3">
              <div className="flex-grow border-b border-gray-300"></div>
              <span className="mx-5 font-sm">or</span>
              <div className="flex-grow border-b border-gray-300"></div>
            </div>

            <div className="text-base">Email address</div>
            <input className="border border-gray-300 w-80 h-12 rounded-sm mb-3" />
            <div className="text-base">Password</div>
            <input className="border border-gray-300 w-80 h-12 rounded-sm mb-3" />

            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="mr-1 cursor-pointer"
                />
                <label htmlFor="remember" className="text-sm cursor-pointer">
                  Remember for 30 days
                </label>
              </div>
              <div className="text-blue-500 text-sm underline cursor-pointer">
                Forgot password
              </div>
            </div>
            <button className="bg-black text-white text-center w-80 h-12 rounded-sm mb-3 cursor-pointer">
              Sign in
            </button>
            <div className="flex justify-center">
              <div className="text-sm mr-3">Don't have an account?</div>
              <div className="text-blue-500 text-sm underline cursor-pointer">
                Sign up
              </div>
            </div>
          </div>
        </div>

        {/* image 40% */}
        <div className="w-1/2 h-screen">
          <img src={loginImage} className="w-[80%] h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Login;
