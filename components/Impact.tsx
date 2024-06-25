import React from "react";
import CreatorCard from "./CreatorCard";

const Impact = () => {
  return (
    <div className="bg-[#eccc7b] py-[90px] h-full">
      <div className="w-[96%] lg:w-[90%] mx-auto">
        <h1 className="text-[40px] md:text-[58px] lg:text-[72px] font-medium text-center">
          For people
          making impact
        </h1>
        <div className="mt-5 flex items-center lg:justify-between gap-5 flex-wrap w-full lg:w-[90%] mx-auto">
          <div className="py-[12px] px-[40px] rounded-[40px] text-[16px] bg-[#f8f7f2] text-[#000] hover:bg-[#000] hover:text-[#fff] cursor-pointer leading-10 w-fit">
            Data
          </div>
          <div className="py-[12px] px-[40px] rounded-[40px] text-[16px] bg-[#f8f7f2] text-[#000] hover:bg-[#000] hover:text-[#fff] cursor-pointer leading-10 w-fit">
            Mental Health
          </div>
          <div className="py-[12px] px-[40px] rounded-[40px] text-[16px] bg-[#f8f7f2] text-[#000] hover:bg-[#000] hover:text-[#fff] cursor-pointer leading-10 w-fit">
            Study Abroad
          </div>
          <div className="py-[12px] px-[40px] rounded-[40px] text-[16px] bg-[#f8f7f2] text-[#000] hover:bg-[#000] hover:text-[#fff] cursor-pointer leading-10 w-fit">
            Technology
          </div>
          <div className="py-[12px] px-[40px] rounded-[40px] text-[16px] bg-[#f8f7f2] text-[#000] hover:bg-[#000] hover:text-[#fff] cursor-pointer leading-10 w-fit">
            Career
          </div>
          <div className="py-[12px] px-[40px] rounded-[40px] text-[16px] bg-[#f8f7f2] text-[#000] hover:bg-[#000] hover:text-[#fff] cursor-pointer leading-10 w-fit">
            Creators
          </div>
        </div>
        <div className="mt-10 w-full flex lg:w-[90%] gap-10 overflow-auto mx-auto hide">
          <CreatorCard />
          <CreatorCard />
          <CreatorCard />
          <CreatorCard />
          <CreatorCard />
        </div>
      </div>
    </div>
  );
};

export default Impact;
