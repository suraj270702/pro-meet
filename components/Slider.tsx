"use client";
import React, { useEffect, useState } from "react";
import womenImage from "../img/Woman1 (1).png";
import manImg from "../img/Man1 (1).png";
import heroBg from "../img/hero-bg/img-landing-hero-bg-1.svg";
import heroBg1 from "../img/hero-bg/img-landing-hero-bg-2.svg";
import heroBg2 from "../img/hero-bg/img-landing-hero-bg-3.svg";
import menImg2 from '../img/Man2 (1).png'


import Image, { StaticImageData } from "next/image";

const Slider = () => {
  const imgData: { bgImg: StaticImageData; heroImg: StaticImageData }[] = [
    {
      heroImg: womenImage,
      bgImg: heroBg,
    },
    {
      bgImg: heroBg1,
      heroImg: manImg,
    },{
        bgImg:heroBg2,
        heroImg:menImg2
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === imgData.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [imgData.length]); 

  return (
    <div className="bg-red-500">
      <div className="relative -top-10 left-10">
        <div className="absolute">
          <Image src={imgData[index]?.bgImg} alt="" />
        </div>
        <div className="absolute top-16 left-[30%]">
          <Image src={imgData[index]?.heroImg} alt="" height={300} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
