import { bulletPoints } from "../assets/assets";
import BulletPointCard from "./BulletPointCard";

const BulletPoints = () => {
  return (
    <div className="grid gap-y-[16px] gap-x-[40px] grid-cols-2">
      {bulletPoints.map((bulletPoint) => (
        <BulletPointCard bulletPoint={bulletPoint} />
      ))}
    </div>
  );
};

export default BulletPoints;
