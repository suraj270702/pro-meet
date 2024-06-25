import React from "react";
import expertBg1 from "../img/hero-bg/expert-bg1.svg";
import heroImg from '../img/Man1 (1).png'
import Image from "next/image";

const CreatorCard = () => {
  return (
    <div className="min-w-[254px] ">
      <div className="relative">
        <Image src={expertBg1} alt="" />
        <div className="bg-white rounded-full flex items-center justify-center w-[100px] h-[100px] absolute left-[30%] top-16">
            <Image src={heroImg} alt="" height={50} />

        </div>
      </div>
      <div className="bg-white pt-[50px] pb-[20px] px-[20px] rounded-bl-lg rounded-br-lg">
        <div className="text-[20px] leading-[22px] h-[44px] text-center">John Doe</div>
        <div className="text-[16px] leading-[20px] mt-[8px] font-medium text-center">
          Helps to build a career in technology
        </div>
      </div>
    </div>
  );
};

export default CreatorCard;
