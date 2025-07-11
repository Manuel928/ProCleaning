import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { testimonials } from "../assets/assets";
import TestimonialCard from "./TestimonialCard";
import { motion } from "motion/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const [embla, setEmbla] = useState(null);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
      }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      className="pt-[60px] md:pt-[75px] flex flex-col gap-10 mx-auto px-6 md:px-12 xl:px-[135px] max-w-[1440px]"
    >
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Left Section */}
        <div className="space-y-[12px] lg:space-y-[24px] max-w-[500px]">
          <h1 className="font-semibold text-[18px] max-w-[330px] md:text-[24px] text-[#111D15] leading-[124%]">
            Feedback About Their Experience With Us
          </h1>
          <p className="text-[#666666] text-[14px] max-w-[380px] leading-relaxed">
            Read testimonials from our satisfied clients. See how our cleaning
            services have made a difference in their lives and homes
          </p>

          {/* Manual Arrows */}
          <div className="flex gap-[18px] lg:gap-[12px] pt-2">
            <button
              onClick={() => embla && embla.scrollPrev()}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-[9.47px] bg-white border border-green hover:bg-green/30 transition"
            >
              <ArrowLeft className="h-5 w-5 text-green" />
            </button>
            <button
              onClick={() => embla && embla.scrollNext()}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-[9.47px] bg-white border border-green hover:bg-green/30 transition"
            >
              <ArrowRight className="h-5 w-5 text-green" />
            </button>
          </div>
        </div>

        <div className="w-full max-w-[600px]">
          <Carousel opts={{ loop: true }} setApi={setEmbla}>
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.name} className="basis-full">
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
