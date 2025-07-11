import PlanSwitcher from "./PlanSwitcher";
import MonthlyPackage from "./MonthlyPackage";
import YearlyPackage from "./YearlyPackage";
import { motion } from "motion/react";

const Pricing = ({ activePlan, setPlan }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
      }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      className="bg-white my-[60px] lg:my-[75px] flex flex-col mx-auto items-center"
      style={{
        backgroundImage: 'url("Background.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "1440px 693px",
      }}
    >
      <div className="flex flex-col gap-[25px] pt-[70px] lg:pt-[93px] justify-center items-center">
        <p className="text-white text-[14px] lg:text-[16px]">Our pricing</p>
        <h4 className="text-white font-semibold max-w-[250px] lg:max-w-[300px] text-[18px] md:text-[24px] text-center">
          Choose From Our Lowest Plans and Prices
        </h4>
        <PlanSwitcher activePlan={activePlan} setPlan={setPlan} />

        <div className="mt-3 lg:mt-0">
          {activePlan === "monthly" ? <MonthlyPackage /> : <YearlyPackage />}
        </div>
      </div>
    </motion.div>
  );
};

export default Pricing;
