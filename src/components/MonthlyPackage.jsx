import { monthlyPricing } from "../assets/assets";
import PackageCard from "./PackageCard";
const MonthlyPackage = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-x-[30px] gap-y-[36px] mx-auto px-6 md:px-12">
      {monthlyPricing.map((pricing) => (
        <PackageCard
          activePlan={"monthly"}
          pricing={pricing}
          key={pricing.title}
        />
      ))}
    </div>
  );
};

export default MonthlyPackage;
