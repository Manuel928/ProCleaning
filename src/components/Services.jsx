import { services } from "../assets/assets";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <div className="pt-[60px] md:pt-[110px] flex flex-col gap-5 md:gap-10 mx-auto px-6 md:px-12 xl:px-[135px]">
      <div className="flex flex-col md:flex-row max-w-[1170px] justify-between gap-3 md:gap-[201px] items-start md:items-center">
        <h1 className="font-semibold text-[20px] leading-[124%] text-left max-w-[390px] md:text-[24px] lg:text-[28px] text-[#111D15]">
          We Always Provide The Best Service
        </h1>
        <div className="flex flex-col gap-2">
          <h4 className="hidden md:flex font-semibold text-[14px] max-w-[536px] md:text-[18px] text-[#111D15]">
            Services
          </h4>
          <p className="text-[#666666] text-[14px] max-w-[400px] md:text-[14px]">
            While we can customize your cleaning plan to suit your needs, most
            clients schedule regular cleaning services:
          </p>
        </div>
      </div>
      <hr className="text-[#83A790]" />
      {/* Services Cards */}
      <div className="grid mx-auto max-w-[1170px] items-center gap-x-4 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <ServicesCard service={service} key={service.title} />
        ))}
      </div>
    </div>
  );
};

export default Services;
