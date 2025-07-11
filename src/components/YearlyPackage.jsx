import { yearlyPricing } from "../assets/assets";
import PackageCard from "./PackageCard";

const YearlyPackage = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-[30px] gap-y-[36px]">
      {yearlyPricing.map((pricing) => (
        <PackageCard
          activePlan={"yearly"}
          pricing={pricing}
          key={pricing.title}
        />
      ))}
    </div>
  );
};

export default YearlyPackage;
