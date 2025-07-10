const PlanSwitcher = ({ activePlan, setPlan }) => {
  return (
    <div className="bg-lightGray w-[220px] xl:w-[274px] h-[50px] transition-all duration-300 rounded-[200px] flex items-center gap-[10px] px-[8px] py-[6px]">
      <button
        onClick={() => setPlan("monthly")}
        className={`w-[100px] h-[35px] xl:w-[123px] xl:h-[38px] transition-all duration-300 flex items-center justify-center rounded-[200px] px-[18px] xl:px-[22px] py-[7px] font-medium cursor-pointer ${
          activePlan === "monthly"
            ? "bg-green text-white"
            : "bg-white text-black"
        }`}
      >
        Monthly
      </button>
      <button
        onClick={() => setPlan("yearly")}
        className={`w-[100px] h-[35px] xl:w-[123px] xl:h-[38px] transition-all duration-300 flex items-center justify-center rounded-[200px] px-[18px] xl:px-[22px] py-[7px] font-medium cursor-pointer ${
          activePlan === "yearly"
            ? "bg-green text-white"
            : "bg-white text-black"
        }`}
      >
        Yearly
      </button>
    </div>
  );
};

export default PlanSwitcher;
