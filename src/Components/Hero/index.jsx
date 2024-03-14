import { useMenu } from "../../../hooks/useMenu";

const Hero = () => {
  const { setMenu } = useMenu();
  return (
    <div className="bg-[#373373]" onMouseOver={() => setMenu(false)}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-8 flex flex-col gap-y-4  sm:flex-row sm:items-center">
        <div className=" sm:flex-1">
          <h5 className="text-white font-semibold text-[22px] max-w-[60%] mx-auto  leading-[26px]">
            Score a chance to win up to{" "}
            <span className="text-[#37a864] font-semibold text-[22px]">
              $5,000 towards your rent!
            </span>
          </h5>
        </div>
        <div className="bg-hero flex items-center justify-center sm:flex-1 w-full h-[200px] rounded-lg shadow-lg group">
          <span className="bg-white px-4 py-1 rounded-[2px] font-semibold text-primary group-hover:bg-primary transition-all group-hover:text-white text-[18px]">
            Heck yeah!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
