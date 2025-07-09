import { monthlyPricing } from "../assets/assets";
import PackageCard from "./PackageCard";
const MonthlyPackage = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-[30px] mx-auto px-6 md:px-12 xl:px-[135px]">
      {monthlyPricing.map((pricing) => (
        <PackageCard activePlan={"monthly"} pricing={pricing} key={pricing.title} />
      ))}
    </div>
  );
};

export default MonthlyPackage;
