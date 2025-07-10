import PlanSwitcher from "./PlanSwitcher";
import MonthlyPackage from "./MonthlyPackage";
import YearlyPackage from "./YearlyPackage";

const Pricing = ({ activePlan, setPlan }) => {
  return (
    <div
      className="bg-white my-[60px] xl:mt-[75px] flex flex-col gap-[16px] lg:gap-[36px] md:mt-[75px] items-center mx-auto px-6 md:px-12 xl:px-[135px]"
      style={{
        backgroundImage: 'url("Background.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "1440px 693px",
      }}
    >
      <div className="flex flex-col gap-[4px] px-[103px] lg:gap-[12px] pt-[70px] lg:pt-[93px] lg:px-[309px] items-center">
        <p className="text-white text-[14px] lg:text-[16px]">Our pricing</p>
        <h4 className="text-white font-semibold max-w-[250px] xl:max-w-[300px] text-[18px] md:text-[24px] text-center">
          Choose From Our Lowest Plans and Prices
        </h4>
      </div>

      <PlanSwitcher activePlan={activePlan} setPlan={setPlan} />

      <div className="mt-5 md:mt-0">
        {activePlan === "monthly" ? <MonthlyPackage /> : <YearlyPackage />}
      </div>
    </div>
  );
};

export default Pricing;
