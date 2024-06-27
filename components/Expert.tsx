import React from "react";
import hiImg from "../img/hiImage.png";
import Image from "next/image";
const Expert = () => {
  return (
    <div className="bg-[#0e1116] py-[50px] lg:py-[100px]">
      <div className="w-[96%] lg:w-[90%] mx-auto">
        <h1 className="text-[40px] md:text-[58px] lg:text-[72px] font-medium text-center text-[#fff]">
          Find the right expert
        </h1>
        <div className="text-[20px] md:text-[24px] font-normal text-[#fff] text-center mt-5">
          Get Personalized advice from top experts to your specific questions
        </div>
        <div className="mt-10 h-[56px] md:h-[72px] rounded-[36px] bg-[#fff]  py-4 pl-5 pr-2 flex items-center justify-between">
          <input
            className=" focus:outline-none text-[14px] md:text-[24px] text-gray-300 w-full "
            placeholder="Try I'm looking for Product Manager working in Google"
          />
          <button className="bg-[#8a60f6] rounded-[56px] md:h-[56px] h-full md:py-[15px] md:px-[20px] text-[#fff] font-bold flex items-center gap-3 min-w-[60px]">
          <svg stroke="currentColor" fill="currentColor" stroke-width="1" viewBox="0 0 24 24" font-size="20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>
          <span className="hidden lg:block">Search</span>
          </button>
        </div>
        <div className="mt-10">
          <div className="w-full lg:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-[16px] border mb-[24px] rounded-[12px] border-[#b0afaf] cursor-pointer hover:bg-[rgba(0,0,0,0.5)] transition-all duration-300 ease-in-out">
              <h1 className="text-[16px] font-bold text-[#fff]">
                Find people from a company
              </h1>
              <h1 className="text-[14px] text-[#b0afaf]">
                I &apos; m looking for software engineers working in Google
              </h1>
            </div>
            <div className="p-[16px] border mb-[24px] rounded-[12px] border-[#b0afaf] cursor-pointer hover:bg-[rgba(0,0,0,0.5)] transition-all duration-300 ease-in-out">
              <h1 className="text-[16px] font-bold text-[#fff]">
                Find people from a company
              </h1>
              <h1 className="text-[14px] text-[#b0afaf]">
                I'm looking for software engineers working in Google
              </h1>
            </div>
            <div className="p-[16px] border mb-[24px] rounded-[12px] border-[#b0afaf] cursor-pointer hover:bg-[rgba(0,0,0,0.5)] transition-all duration-300 ease-in-out">
              <h1 className="text-[16px] font-bold text-[#fff]">
                Find people from a company
              </h1>
              <h1 className="text-[14px] text-[#b0afaf]">
                I'm looking for software engineers working in Google
              </h1>
            </div>
            <div className="p-[16px] border mb-[24px] rounded-[12px] border-[#b0afaf] cursor-pointer hover:bg-[rgba(0,0,0,0.5)] transition-all duration-300 ease-in-out">
              <h1 className="text-[16px] font-bold text-[#fff]">
                Find people from a company
              </h1>
              <h1 className="text-[14px] text-[#b0afaf]">
                I'm looking for software engineers working in Google
              </h1>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="w-full lg:w-[60%] mx-auto bg-[hsla(0,0%,100%,.14)] py-[4px] pl-[4px] pr-[40px] rounded-[70px]">
            <div className="flex items-center justify-between gap-5">
            <Image src={hiImg} alt="" height={120} className="" />
            <div className="hidden lg:block">
            <h1 className="text-[#fff] text-[16px] md:text-[24px] font-bold">Are you an expert?</h1>
            <h1 className="text-[#fff] text-[12px] md:text-[20px] font-normal">let people find you</h1>

            </div>
            <div className="flex flex-col items-start lg:hidden">
              <h1 className="text-[#fff] text-[16px] md:text-[24px] font-bold">Let people find you and seek help</h1>
               <button className="mt-[10px] rounded-[3px] bg-[#fff] text-[14px] text-center px-5 py-3">Get Listed</button>
            </div>
            <button className="hidden lg:block px-6 py-4 bg-[#fff] rounded-lg text-[24px] font-bold">Get Listed</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expert;
