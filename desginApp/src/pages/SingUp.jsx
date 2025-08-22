import React from "react";
import { NavLink } from "react-router-dom";

function SingUp() {
  return (
    <>
      <div className="bg-[#F7F8F9] text-black h-[812px] w-full flex flex-col items-start justify-start p-4 py-10">
        <h2 className="flex w-[188px] text-left font-[400] font-bold text-2xl mb-1 font-rubik">
          Create your PopX acoount
        </h2>
        <form className="flex flex-col gap-3" action="submit">
          <div className="flex flex-col relative">
            <label
              className="flex text-left text-[#6C25FF] absolute index text-xs ml-2 bg-[#F7F8F9] p-1 font-semibold"
              htmlFor="name"
            >
              Full Name <p className="text-red-700">*</p>
            </label>
            <input
              className="w-[335px] h-[40px] opacity-[70%] relative mt-3.5 border p-2 rounded text-sm border-[#CBCBCB] font-semibold"
              type="text"
              placeholder="marry Deo"
            />
          </div>
          <div className="flex flex-col relative">
            <label
              className="flex text-left text-[#6C25FF] absolute index text-xs ml-2 bg-[#F7F8F9] p-1 font-semibold"
              htmlFor="name"
            >
              Phone number <p className="text-red-700">*</p>
            </label>
            <input
              className="w-[335px] h-[40px] opacity-[70%] relative mt-3.5 border p-2 rounded text-sm border-[#CBCBCB] font-semibold"
              type="text"
              placeholder="Your Phone Number"
            />
          </div>
          <div className="flex flex-col relative">
            <label
              className="flex text-left text-[#6C25FF] absolute index text-xs ml-2 bg-[#F7F8F9] p-1 font-semibold"
              htmlFor="name"
            >
              Email address <p className="text-red-700">*</p>
            </label>
            <input
              className="w-[335px] h-[40px] opacity-[70%] relative mt-3.5 border p-2 rounded text-sm border-[#CBCBCB] font-semibold"
              type="text"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="flex flex-col relative">
            <label
              className="flex text-left text-[#6C25FF] absolute index text-xs ml-2 bg-[#F7F8F9] p-1 font-semibold"
              htmlFor="name"
            >
              Password <p className="text-red-700">*</p>
            </label>
            <input
              className="w-[335px] h-[40px] opacity-[70%] relative mt-3.5 border p-2 rounded text-sm border-[#CBCBCB] font-semibold"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex flex-col relative">
            <label
              className="flex text-left text-[#6C25FF] absolute index text-xs ml-2 bg-[#F7F8F9] p-1 font-semibold"
              htmlFor="name"
            >
              Company name <p className="text-red-700">*</p>
            </label>
            <input
              className="w-[335px] h-[40px] opacity-[70%] relative mt-3.5 border p-2 rounded text-sm border-[#CBCBCB] font-semibold"
              type="text"
              placeholder="Company Name"
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <p>Are you there? </p>
            <div className="flex gap-3">
              <input type="radio" name="yes" id="yes" />
              <label htmlFor="yes">Yes</label>
              <input type="radio" name="no" id="no" color="blue" />
              <label htmlFor="no">no</label>
            </div>
          </div>
        </form>
        <NavLink to="/profile">
          <button className="bg-[#6C25FF] text-white w-[335px] h-[46px] mt-62">
            Create Account
          </button>
        </NavLink>
      </div>
    </>
  );
}

export default SingUp;
