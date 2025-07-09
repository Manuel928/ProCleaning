const PackageCard = ({ activePlan, pricing }) => {
  return (
    <div className="bg-white w-full h-full flex flex-col items-center justify-between rounded-[20px] gap-[36px] px-[35px] py-[30px]">
      <div className="px-[10px]">
        <p className="text-darkGreen text-center pb-[24px] text-[16px] font-medium">
          {pricing.title}
        </p>
        <div className="bg-green text-white mb-[36px] flex items-center justify-center w-[280px] h-[78px] px-[40px] py-[20px] rounded-[10px]">
          <sub className="font-normal">$</sub>
          <p className="text-[24px] font-bold">{pricing.amount}/</p>
          <sub className="font-normal">{activePlan == "monthly" ? "monthly" : "yearly"}</sub>
        </div>
        <ul className="flex list-disc list-inside flex-col items-start gap-3 text-sm text-darkGray">
          {pricing.packageDetails.map((detail) => (
            <li>{detail}</li>
          ))}
        </ul>
      </div>

      <a
        href=""
        className="bg-white border border-darkGray hover:bg-green hover:text-white hover:border-green transition duration-300 flex items-center justify-center text-darkGreen w-[300px] h-[59px] px-[40px] py[20px] gap-[10px] rounded-[6px]"
      >
        Book Now
      </a>
    </div>
  );
};

export default PackageCard;
