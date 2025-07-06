import Button from "./Button";

const Hero = () => {
  return (
    <div
      className="min-h-[292.5px] md:min-h-[585px] mx-auto px-6 md:px-12 xl:px-[135px]"
      style={{
        backgroundImage: 'url("HeroImage.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "1440px 585px",
      }}
    >
      <div className="flex flex-col gap-5 justify-center py-[70px] md:py-[144px] items-start max-w-[610px]">
        <div className="flex flex-col">
          <p className="text-[14px] md:text-[16px] text-[#111D15]">
            Quality cleaning at a fair price
          </p>
          <h1 className="font-bold text-[28px] md:text-[52px] pt-[6px] pb-[12px] leading-[115%] text-[#111D15]">
            Specialized, efficient, and thorough cleaning services
          </h1>
          <p className="text-[14px] max-w-[543px] text-[#666666]">
            We provide Performing cleaning tasks using the least amount of time,
            energy, and money.
          </p>
        </div>
        <div className="flex flex-row items-center gap-3 md:gap-6">
          <Button bg="green" border="green" buttonTextColor="white" size="md">
            Get started now
          </Button>
          <Button bg="outline" border="darkGreen" buttonTextColor="darkGreen" size="md">
            View all services
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
