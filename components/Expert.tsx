import React from "react";

const Expert = () => {
  return (
    <div className="bg-[#0e1116] py-[50px] lg:py-[100px]">
      <div className="w-[96%] lg:w-[90%] mx-auto">
      <h1 className="text-[40px] md:text-[58px] lg:text-[72px] font-medium text-center text-[#fff]">
          Find the
          right expert
        </h1>
        <div className="text-[20px] md:text-[24px] font-normal text-[#fff] text-center mt-5">
          Get Personalized advice from top experts to your specific questions
        </div>
        <div className="mt-10 h-[36px] md:h-[72px] rounded-[36px] bg-[#fff]  py-4 pl-5 pr-2 flex items-center justify-between">
          <input className=" focus:outline-none text-[24px] text-gray-300 w-full " placeholder="Try I'm looking for Product Manager working in Google" />
          <button className="bg-[#8a60f6] rounded-[56px] md:h-[56px] h-full md:py-[15px] md:px-[20px] text-[#fff] font-bold">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Expert;
