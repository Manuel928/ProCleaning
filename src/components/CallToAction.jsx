import React from "react";
import Button from "./Button";
import { assets } from "../assets/assets";
import BulletPoints from "./BulletPoints";

const CallToAction = () => {
  return (
    <div id="cta" className="pt-[60px] pb-[60px] md:pt-[110px] flex flex-col items-center gap-2.5 md:gap-5 mx-auto px-6 md:px-12 xl:px-[135px]">
      <div className="pt-[25px] md:pt-[75px] flex flex-col items-center lg:flex-row gap-[70px] lg:gap-[110px] overflow-visible">
        {/* Image Container */}
        <div className="relative max-w-[535px] overflow-visible">
          <div className="relative w-[378px] h-[379px] overflow-visible">
            <img
              className="w-[365.63px] h-[394px]"
              src={assets.Image6}
              alt=""
            />
            <img
              className="w-[230.76px] h-[265px] absolute -bottom-10 left-[200px] lg:left-[230px] z-50"
              src={assets.Image7}
              alt=""
            />
          </div>
        </div>
        <div className="max-w-[525px] px-6 md:px-12 flex flex-col space-y-2 md:space-y-4">
          <h1 className="font-semibold text-[18px] leading-[124%] text-left md:text-[24px] lg:text-[24px] text-[#111D15]">
            Welcome To Our <br /> Pro-cleaning Company!
          </h1>
          <p className="text-[#666666] text-[14px] max-w-[525px]">
            We make your space shine! Professional and reliable cleaning service
            company providing top-notch solutions for homes and businesses.
            Satisfaction guaranteed!"
          </p>
          <BulletPoints />

          <div className="flex flex-row pt-[25px] lg:pt-[40px] items-center gap-3 md:gap-6">
            <Button bg="green" border="green" buttonTextColor="white" size="md">
              Book Now
            </Button>
            <Button
              bg="outline"
              border="darkGreen"
              buttonTextColor="darkGreen"
              size="md"
            >
              Know More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
