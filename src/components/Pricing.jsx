import { useState } from "react";
import PlanSwitcher from "./PlanSwitcher";
import MonthlyPackage from "./MonthlyPackage";
import YearlyPackage from "./YearlyPackage";

const Pricing = ({ activePlan, togglePlan }) => {
  return (
    <div
      className="bg-white mt-[60px] flex flex-col mb-[60px] gap-[16px] lg:gap-[36px] pt-[93px] md:mt-[75px] items-center mx-auto px-6 md:px-12 xl:px-[135px]"
      style={{
        backgroundImage: 'url("Background.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "1440px 693px",
        height: "693px",
      }}
    >
      <div className="flex flex-col gap-[4px] px-[103px] lg:gap-[12px] lg:px-[309px] items-center">
        <p className="text-white text-[14px] lg:text-[16px]">Our pricing</p>
        <h4 className="text-white font-semibold text-[18px] md:text-[24px] text-center">
          Choose From Our Lowest Plans and Prices
        </h4>
      </div>

      <PlanSwitcher activePlan={activePlan} setPlan={togglePlan} />

      <div className="">
        {activePlan === "monthly" ? <MonthlyPackage /> : <YearlyPackage />}
      </div>
    </div>
  );
};

export default Pricing;
