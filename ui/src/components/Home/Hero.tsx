"use client";
import React from "react";
import "../../app/globals.css";


import { SlideText } from "@/components/SlideText";
import { CheckIcon } from "@heroicons/react/16/solid";

const Hero = () => {
  return (
    <div className="max-w-[1600px] mx-0 my-auto px-0 py-0 w-[100%] bg-[#fffdf9]">
      <div className="w-full flex justify-center items-center mt-10 md:mt-20 py-20">
        <div className="w-full max-w-[1170px] flex  flex-col item-start justify-start pt-20 px-2 md:px-0">
          <div className="text-4xl md:text-[55px] font-bold text-secondary-color text-center font-secondary tracking-wider">

            <div className="py-px md:py-7">Buy the Latest Devices from</div>
            <div className="text-primary-color">
              <span className="text-secondary-color">top Brands like&nbsp;</span>
              <SlideText />
            </div>
          </div>
          <div className="text-lg md:text-2xl font-medium  text-[#201515] leading-[25px] md:leading-[30px] font-primary text-center mt-10 md:mt-12 px-4 md:px-0">
            Discover the Latest Mobile Deals at Your Fingertips{" "}
            <br className="hidden md:block" /> Shop the Best Smartphones and Enjoy Seamless Shopping!
          </div>
          <div className="w-full flex flex-col item-center justify-center mt-10">
            <div className="w-full flex item-center justify-center">
              <button
                className="px-6 py-3 text-secondary-color bg-white border border-secondary-color rounded-full hover:bg-primary-color hover:text-white hover:border-primary-color text-sm md:text-xl leading-2 font-semibold font-primary">
                Buy Now</button>

            </div>
            <div className="w-full flex flex-col md:flex-row items-center justify-center mt-10">
              <div className="text-[15px] flex items-center font-medium text-[#2D2E2E] leading-6 text-left font-primary">
                <CheckIcon className="w-6 h-6 text-primary-color" />
                <span className="font-bold text-secondary-color">
                  No contracts&nbsp;
                </span>
                or minimums
              </div>
              <div className="ml-2 text-[15px] flex items-center font-medium text-[#2D2E2E] leading-6 text-left font-primary">
                <CheckIcon className="w-6 h-6 text-primary-color" />
                Cutting-edge&nbsp;
                <span className="font-bold text-secondary-color">
                  AI features
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
