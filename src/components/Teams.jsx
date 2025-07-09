import { teams } from "../assets/assets";
import TeamsCard from "./TeamsCard";

const Teams = () => {
  return (
    <div
      id="service"
      className="pt-[60px] md:pt-[110px] flex flex-col gap-2.5 md:gap-5 mx-auto px-6 md:px-12 xl:px-[135px]"
    >
      <div className="flex flex-col pt-[75px] md:flex-row max-w-[1170px] justify-between gap-3 md:gap-[201px] items-start md:items-center">
        <h1 className="font-semibold text-[18px] leading-[124%] text-left max-w-[360px] md:text-[24px] lg:text-[24px] text-[#111D15]">
          Effective Cleaning Requires an Expert Cleaning Team
        </h1>
        <div className="flex flex-col gap-2">
          <h4 className="hidden md:flex font-semibold text-[14px] max-w-[536px] md:text-[16px] text-[#111D15]">
            Expert Team
          </h4>
          <p className="text-[#666666] text-[14px] max-w-[400px]">
            We have professional expert cleaning staff ensuring top-notch
            cleanliness and hygiene for your space.
          </p>
        </div>
      </div>
      <hr className="text-[#83A790]" />

      {/* Teams Cards */}
      <div className="grid mx-auto max-w-[1170px] items-center gap-x-7.5 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
        {teams.map((member) => (
          <TeamsCard member={member} key={member.name} />
        ))}
      </div>
    </div>
  );
};

export default Teams;
