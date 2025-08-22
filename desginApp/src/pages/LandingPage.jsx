import React from "react";
import { NavLink } from "react-router-dom";
function LandingPage() {
  return (
    <div>
      <div className="bg-[#F7F8F9] text-black h-[812px] w-full flex flex-col items-start justify-end p-3 py-10">
        <div>
          <h2 className="flex font-[400] font-semibold text-2xl mb-1 font-rubik">
            {" "}
            Welcome to popX
          </h2>
          <p className="text-[#1D2226] opacity-[60%] flex text-left w-[238px] mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
          <div className="buttons flex flex-col items-center justify-center gap-2">
            <NavLink to="/signup">
              <button className="bg-[#6C25FF] text-white w-[335px] h-[46px]">
                Create Account
              </button>
            </NavLink>
            <NavLink to="/login">
              <button className="text-black bg-[#6C25FF4B] w-[335px] h-[46px]">
                Already Registered? Login
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
