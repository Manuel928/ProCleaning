import React from "react";

const Services = () => {
  return (
    <div className="pt-[60px] md:pt-[110px] flex flex-col gap-5 mx-auto px-6 md:px-12 xl:px-[135px]">
      <div className="flex flex-col md:flex-row max-w-[1170px] justify-between gap-3 md:gap-[201px] items-start md:items-center">
        <h1 className="font-semibold text-[20px] max-w-[536px] leading-[120%] md:text-[36px] text-[#111D15]">
          We Always Provide The Best Service
        </h1>
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-[14px] max-w-[536px] md:text-[20px] text-[#111D15]">
            Services
          </h4>
          <p className="text-[#666666] text-[14px] md:text-[16px]">
            While we can customize your cleaning plan to suit your needs, most
            clients schedule regular cleaning services:
          </p>
        </div>
      </div>
      <hr className="text-[#83A790]" />
      {/* Services Cards */}
      dummy cards
    </div>
  );
};

export default Services;
