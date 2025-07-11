import { StarIcon } from "lucide-react";
import { assets } from "../assets/assets";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialCard = ({ testimonial }) => {
  return (
    <Card className="py-0 mx-auto w-full h-full lg:w-[600px] lg:h-[284px] border-t-4 border-r-4 border-l-0 border-b-0 lg:border-t-6 lg:border-r-6 lg:border-l-0 lg:border-b-0 border-green rounded-[20px]">
      <CardContent className="flex flex-col h-full md:flex-row items-start lg:items-center gap-6 p-6 rounded-[20px] bg-white shadow-sm">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-[130px] h-[130px] lg:w-[170px] lg:h-[244px] rounded-full lg:rounded-[10px] object-cover object-center"
        />

        {/* Content */}
        <div className="flex flex-col flex-1 gap-2">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg text-[#111D15]">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>

            <img src={assets.Quotation} className="w-12 h-12 rounded-full lg:rounded-none lg:w-fit" alt="" srcset="" />
          </div>

          <div className="flex gap-1 text-yellow-500 text-sm">
            {[...Array(5)].map((_, i) => (
              <StarIcon fill="gold" stroke="gold" size={18} />
            ))}
          </div>

          <p className="text-sm text-justify text-[#444] max-w-[366px] leading-relaxed">
            {testimonial.testimonialText}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
