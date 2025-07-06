import { StarIcon } from "lucide-react";
import { assets } from "../assets/assets";

const TeamsCard = ({ member }) => {
  return (
    <div className="flex flex-col rounded-[20px] hover:border hover:border-[#83A790] duration-300 transition items-start justify-center">
      <div>
        <img src={member.image} alt="" srcset="" />
      </div>
      <div className="pt-[24px] pb-[20px]">
        <div className="flex flex-col px-3 gap-3 pb-2">
          <h4 className="font-semibold text-[16px]">{member.name}</h4>
          <div className="flex gap-[2.67px] flex-row">
            {Array.from({ length: member.rating }, (_, i) => (
              <StarIcon fill="#FF9800" stroke="#FF9800" className="w-4 h-4" />
            ))}
          </div>
          <p className="text-[#666666] text-[14px]">{member.description}</p>
        </div>
        <div className="flex gap-[3px] md:gap-[8px] px-3 flex-row">
          <a href="">
            <img src={assets.Facebook} alt="" srcset="" />
          </a>
          <a href="">
            <img src={assets.X} alt="" srcset="" />
          </a>
          <a href="">
            <img src={assets.Instagram} alt="" srcset="" />
          </a>
          <a href="">
            <img src={assets.Linkedin} alt="" srcset="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamsCard;
