const PlanSwitcher = ({ activePlan, setPlan }) => {
  return (
    <div className="bg-lightGray w-[274px] h-[50px] transition-all duration-300 rounded-[200px] flex gap-[10px] px-[8px] py-[6px]">
      <button
        onClick={() => setPlan("monthly")}
        className={`w-[123px] h-[38px] transition-all duration-300 rounded-[200px] px-[22px] py-[7px] font-medium cursor-pointer ${
          activePlan === "monthly"
            ? "bg-green text-white"
            : "bg-white text-black"
        }`}
      >
        Monthly
      </button>
      <button
        onClick={() => setPlan("yearly")}
        className={`w-[123px] h-[38px] transition-all duration-300 rounded-[200px] px-[22px] py-[7px] font-medium cursor-pointer ${
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
