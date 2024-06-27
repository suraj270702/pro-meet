"use client";
import React, { useState } from "react";
import featureImg from "../img/hero-bg/feature-2-1.svg";
import feature1Img from "../img/hero-bg/feature-2-2.svg";
import feature2Img from "../img/hero-bg/feature-2-3.svg";

import feature3Img from "../img/hero-bg/feature-2-4.svg";
import feature4Img from "../img/hero-bg/feature-2-5.svg";
import feature5Img from "../img/hero-bg/feature-2-6.svg";

import Image, { StaticImageData } from "next/image";

const FeaturesSlider = () => {
  const [faqArray, setFaqArray] = useState<
    { name: string; description: string }[]
  >([
    {
      name: "Offer 1:1 sessions",
      description:
        "Mentorship sessions, consultations, discovery calls - do what you do best. We take care of everything else",
    },
    {
      name: "Setup Priority DM in seconds",
      description:
        "Let your followers ask text based Priority DM. Then answer as per your convenience",
    },
    {
      name: "Host a webinar",
      description:
        "Connect with 100s of followers at once. Classes, group calls, workshops - do them all",
    },
    {
      name: "Bundle your services",
      description:
        "Create packages of all your services. Perfect for high-ticket and long term engagements",
    },
    {
      name: "Sell courses & products",
      description:
        "Sell courses, exclusive content, guides, ebooks, templates and everything else. Start earning passively",
    },
    {
      name: "Sell a subscription",
      description:
        "Sell monthly subscriptions to your services. Build recurring revenue sources",
    },
  ]);

  const [imgArray, setImgArray] = useState<{ img: StaticImageData }[]>([
    {
      img: featureImg,
    },
    {
      img: feature1Img,
    },
    {
      img: feature2Img,
    },
    {
      img: feature3Img,
    },
    {
      img: feature4Img,
    },
    {
      img: feature5Img,
    },
  ]);

  const [selectedIndex, setSelectedIndex] = useState(
    Array.from({ length: faqArray.length }, (_, i) => (i === 0 ? true : false))
  );

  const [selectedImgIndex, setSelectedImgIndex] = useState(0);

  const handleIndex = (index: number) => {
    let copyOfSelectedIndex = [...selectedIndex];
    copyOfSelectedIndex = copyOfSelectedIndex.map((_, i) =>
      i === index ? true : false
    );
    setSelectedImgIndex(index);

    setSelectedIndex(copyOfSelectedIndex);
  };

  return (
    <div className="w-[96%] lg:w-[90%] mx-auto mt-10">
      <div className="py-[50px] lg:py-[100px] flex flex-col-reverse lg:flex-row gap-10">
        <div className="w-full lg:w-1/2">
          <Image src={imgArray[selectedImgIndex].img} alt="" />
        </div>
        <div className="w-full lg:w-1/2">
          {faqArray.map((item, i) => (
            <div
              onClick={() => handleIndex(i)}
              className="px-3 py-5 md:py-8  hover:bg-gray-100 transition-all duration-300 ease-in-out cursor-pointer border-b border-b-gray-500"
              key={i}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <h1 className="text-[#b3490c] text-[14px] leading-7 font-[500]">
                    0{i + 1}
                  </h1>
                  <h1
                    className={`text-[20px] md:text-[30px] leading-[22px] md:leading-[30px] ${
                      selectedIndex[i] ? "text-[#b3490c] font-bold" : ""
                    }`}
                  >
                    {item.name}
                  </h1>
                </div>
                <div>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    color="#C95230"
                    font-size="20"
                    style={{ color: "#C95230" }}
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                  </svg>
                </div>
              </div>
              {selectedIndex[i] && (
                <div className="mt-[10px] text-[16px] font-[500] leading-6">
                  {item.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSlider;
