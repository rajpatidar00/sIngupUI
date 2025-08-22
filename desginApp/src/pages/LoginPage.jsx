import React from "react";
import { NavLink } from "react-router-dom";
function LoginPage() {
  return (
    <>
      <div className="bg-[#F7F8F9] text-black h-[812px] w-full flex flex-col items-start justify-start p-4 py-10">
        <h2 className="flex w-[188px] text-left font-[400] font-bold text-2xl mb-1 font-rubik">
          Signin to your PopX account
        </h2>
        <p className="text-[#1D2226] opacity-[60%] flex text-left w-[238px] mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <form className="flex flex-col gap-3" action="submit">
          <div className="flex flex-col relative">
            <label
              className="flex text-left text-[#6C25FF] absolute index text-xs ml-2 bg-[#F7F8F9] p-1 font-semibold"
              htmlFor="name"
            >
              Email address
            </label>
            <input
              className="w-[335px] h-[40px] opacity-[70%] relative mt-3.5 border p-2 rounded text-sm border-[#CBCBCB] font-semibold"
              type="text"
              placeholder="Enter Email Address"
            />
          </div>
          <div className="flex flex-col relative">
            <label
              className="flex text-left text-[#6C25FF] absolute index text-xs ml-2 bg-[#F7F8F9] p-1 font-semibold"
              htmlFor="name"
            >
              Password
            </label>
            <input
              className="w-[335px] h-[40px] opacity-[70%] relative mt-3.5 border p-2 rounded text-sm border-[#CBCBCB] font-semibold"
              type="Password"
              placeholder="Enter Password"
            />
          </div>
        </form>
        <NavLink to="/profile">
          <button className="bg-[#CBCBCB] text-white w-[335px] h-[46px] mt-5">
            Login
          </button>
        </NavLink>
      </div>
    </>
  );
}

export default LoginPage;
