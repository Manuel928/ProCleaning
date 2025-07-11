import Button from "./Button";
import { ArrowUpRightIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesCard = ({ service }) => {
  return (
    <Card className="w-[370px] py-0 gap-16 pb-[30px] rounded-2xl">
      <CardContent className="flex flex-col items-start gap-4 h-full">
        <div className="w-full">
          <img
            src={service.image}
            alt={service.title}
            className=" h-[262px] object-cover rounded-[30px]"
          />
        </div>

        <div className="flex flex-col gap-[24px]">
          <h4 className="font-semibold text-[18px] leading-snug">
            {service.title}
          </h4>
          <p className="text-[#666666] text-[14px] leading-relaxed">
            {service.description}
          </p>
          <div className="w-[155px]">
            <Button
              bg="outline"
              hover="green"
              border="gray"
              buttonTextColor="darkGreen"
              font="regular"
              size="md"
              className="flex items-center gap-2 mt-auto"
            >
              Book now
              <ArrowUpRightIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServicesCard;
