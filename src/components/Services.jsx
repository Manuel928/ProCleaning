import { assets, services } from "../assets/assets";
import Button from "./Button";
import ServicesCard from "./ServicesCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Services = () => {
  return (
    <div
      id="service"
      className="pt-[60px] md:pt-[110px] flex flex-col gap-2.5 md:gap-5 mx-auto px-6 md:px-12 xl:px-[135px]"
    >
      {/* Section Heading */}
      <div className="flex flex-col md:flex-row max-w-[1170px] justify-between gap-3 md:gap-[201px] items-start md:items-center">
        <h1 className="font-semibold text-[18px] leading-[124%] text-left max-w-[310px] md:text-[24px] lg:text-[24px] text-[#111D15]">
          We Always Provide The Best Service
        </h1>
        <div className="flex flex-col gap-2">
          <h4 className="hidden md:flex font-semibold text-[14px] max-w-[536px] md:text-[16px] text-[#111D15]">
            Services
          </h4>
          <p className="text-[#666666] text-[14px] max-w-[400px]">
            While we can customize your cleaning plan to suit your needs, most
            clients schedule regular cleaning services:
          </p>
        </div>
      </div>

      <hr className="text-[#83A790]" />

      {/* Services Carousel */}
      <Carousel className="w-full gap-[30px] max-w-[1170px]">
        <CarouselContent>
          {services.map((service) => (
            <CarouselItem
              key={service.title}
              className="basis-full md:basis-1/2 lg:basis-1/3 px-2"
            >
              <ServicesCard service={service} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-green text-white" />
        <CarouselNext className="bg-green text-white" />
      </Carousel>

      {/* Affordable Prices Section */}
      <div className="max-w-[1440px] pt-[25px] md:pt-[75px] flex flex-col justify-between lg:flex-row gap-[55px] lg:gap-[165px] overflow-visible">
        <div className="max-w-[527px] pt-[40px] md:pt-[100px] flex flex-col space-y-2 md:space-y-4">
          <div className="space-y-2">
            <p className="text-[#111D15] text-[14px]">
              Affordable Cleaning Solutions
            </p>
            <h1 className="font-semibold text-[20px] leading-[124%] text-left max-w-[390px] md:text-[24px] lg:text-[28px] text-[#111D15]">
              High-Quality and Friendly Services at Fair Prices
            </h1>
          </div>
          <div>
            <p className="text-[#666666] max-w-[400px] text-[14px]">
              We provide comprehensive cleaning services tailored to your needs.
              From residential cleaning services
            </p>
          </div>
          <div className="flex pt-3 items-center w-[167px]">
            <Button
              bg="green"
              buttonTextColor="white"
              font="semibold"
              size="md"
            >
              Get a quote
            </Button>
          </div>
        </div>

        {/* Image Container */}
        <div className="relative max-w-[478px] overflow-visible">
          <div className="relative w-[378px] h-[379px] overflow-visible">
            <img
              className="w-[231px] h-[265px] absolute -bottom-10 -left-10 z-50"
              src={assets.Image2}
              alt=""
            />
            <img className="w-[378px] h-[379px]" src={assets.Image5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
