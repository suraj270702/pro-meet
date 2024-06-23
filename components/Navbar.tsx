import React from "react";
import logoImg from "../img/logo-promeet-light-9f47740a.webp";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="mb-5 lg:mb-10 py-5 lg:py-10">
      <div>
      <Image src={logoImg} alt="" width={170} height={200} />
      </div>
    </div>
  );
};

export default Navbar;
