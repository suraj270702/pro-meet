import React from "react";
import logoImg from "../img/logo-promeet-light-9f47740a.webp";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="mb-5 lg:mb-10 py-5">
      <div className="flex items-center justify-between">
      <Image src={logoImg} alt="" width={170} height={200} />
      <div className="hidden lg:flex items-center gap-x-10">
      <Link href={"/"} className="text-[#141414] text-[16px] font-bold hover:border-b-2 hover:border-b-[#141414] transition-all duration-300 ease-in-out">Creators</Link>
        <Link href={"/"} className="text-[#141414] text-[16px] font-bold hover:border-b-2 hover:border-b-[#141414] transition-all duration-300 ease-in-out">Pricing</Link>
        <Link href={"/"} className="text-[#141414] text-[16px] font-bold hover:border-b-2 hover:border-b-[#141414] transition-all duration-300 ease-in-out">Earnings Calculator</Link>
      </div>
      <div className="hidden lg:flex items-center gap-x-5">
        <button className="bg-[#8a60f6] rounded-[56px] text-[#fff] text-[16px] flex items-center p-[11px] gap-x-3">
        <span className="ant-btn-icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg></span>
        Search
        
        </button>
        
        <button className="py-3 px-4 rounded-lg text-center bg-white border border-gray-300">
            Login
        </button>
        <button className="py-3 px-4 rounded-lg text-center bg-[#000] text-[#fff] font-bold">
            Signup free
        </button>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
