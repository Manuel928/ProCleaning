import Button from "./Button";
import { ArrowUpRightIcon } from "lucide-react";

const ServicesCard = ({ service }) => {
  return (
    <div className="flex flex-col gap-4 items-start justify-center">
      <div>
        <img src={service.image} alt="" srcset="" />
      </div>
      <div className="pb-2">
        <h4 className="font-semibold text-[16px]">{service.title}</h4>
        <p className="text-[#666666] text-[14px]">{service.description}</p>
      </div>
      <Button
        bg="outline"
        hover="green"
        border="gray"
        buttonTextColor="darkGreen"
        font="regular"
        size="md"
      >
        Book now
        <ArrowUpRightIcon className="" />
      </Button>
    </div>
  );
};

export default ServicesCard;
