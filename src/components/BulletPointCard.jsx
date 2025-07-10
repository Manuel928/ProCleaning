import { CheckIcon } from "lucide-react";

const BulletPointCard = ({ bulletPoint }) => {
  return (
    <div className="bg-[#F5F4F4] flex items-center p-[5px] lg:p-[10px] gap-[8px] w-full lg:w-[214px] h-[39px] rounded-[4px]">
      <a className="flex h-5 w-5 items-center justify-center rounded-full bg-[#36B864]">
        <CheckIcon className="h-[10px] w-[10px] text-white" />
      </a>
      <p className="text-[12px] lg:text-sm">{bulletPoint.title}</p>
    </div>
  );
};

export default BulletPointCard;
