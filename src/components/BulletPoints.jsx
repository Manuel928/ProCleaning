import { bulletPoints } from "../assets/assets";
import BulletPointCard from "./BulletPointCard";

const BulletPoints = () => {
  return (
    <div className="grid grid-cols-2 gap-y-[16px] gap-[12px] lg:gap-x-[40px]">
      {bulletPoints.map((bulletPoint) => (
        <BulletPointCard bulletPoint={bulletPoint} />
      ))}
    </div>
  );
};

export default BulletPoints;
