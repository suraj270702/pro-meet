import React from "react";
import womenImage from "../img/Woman1.png";
import manImg from "../img/Man1 (1).png";
import heroBg from "../img/hero-bg/img-landing-hero-bg-1.svg";
import Image from "next/image";
import Slider from "./Slider";
import bannerImg from "../img/hero-bg/mental-health-banner.svg";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <div className="bg-[#f8f7f2] pb-10">
      <div className="w-[96%] lg:w-[90%] mx-auto">
        <Navbar />
       <div className="flex">
       <div className="w-full lg:w-1/2">
          <Image src={bannerImg} alt="" />
          <div className="flex flex-col">
            <span className="text-[48px] lg:text-[86px] font-medium">
              Start your
            </span>
            <span className="text-[48px] lg:text-[86px] font-bold leading-none -mt-3">
              side hustle
            </span>
            <span className="text-[48px] lg:text-[86px] font-bold -mt-3">
              today
            </span>
          </div>
          <div className="mt-[25px] text-[16px] lg:text-[22px] leading-[30px]">
            Turn your passion and knowledge into a thriving business. Help your
            audience get ahead in life
          </div>
          <div className="mt-[25px] flex flex-col lg:flex-row gap-5">
            <button className="h-[60px] rounded-[6px] text-[20px] leading-[20px] font-bold text-center text-[#fff] bg-[#000] w-full lg:w-[50%]">Start My Page</button>
            <button className="h-[60px] rounded-[6px] text-[20px] leading-[20px] font-bold text-center text-[#fff] bg-[#000] w-full lg:w-[50%]">Start My Page</button>
          </div>
        </div>
        <div className="hidden lg:block w-full lg:w-1/2">
          <Slider />
        </div>
       </div>
      </div>
    </div>
  );
};

export default HomePage;
