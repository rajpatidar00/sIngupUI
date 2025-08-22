import React from "react";
import img from "../assets/photo.png";
export default function Profile() {
  return (
    <>
      <div className="bg-[#F7F8F9] text-black h-[812px] w-[375px] flex flex-col items-start justify-start border border-[#F7F8F9]">
        <div className="bg-white w-[373px] pl-[15px] pt-[27px] pb-[20px]">
          <h2 className="flex text-left font-[400]  text-3xl mb-1 font-rubik">
            Account Setting
          </h2>
        </div>
        <div className="flex items-center pl-[20px]">
          <div className=" mt-[30px]">
            <img
              className="rounded-[100%]"
              height={70}
              width={76}
              src={img}
              alt="image"
            />
          </div>
          <div className="flex flex-col items-start justify-start ml-[20px]">
            <p className="font-bold">Marry Doe</p>
            <p>Marry@gmail.com</p>
          </div>
        </div>
        <div className="pl-[20px] dot-border">
          <p className="text-left mt-[30px] pb-5">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
      </div>
    </>
  );
}
