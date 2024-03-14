import { useMenu } from "../../../hooks/useMenu";
import image1 from "/assets/images/pic-1.webp";
import image2 from "/assets/images/pic-2.webp";
import image3 from "/assets/images/pic-3.webp";
import image4 from "/assets/images/pic-4.webp";
import image5 from "/assets/images/pic-5.webp";
import image6 from "/assets/images/pic-6.webp";
import image7 from "/assets/images/pic-7.webp";
import image8 from "/assets/images/pic-8.webp";
import image9 from "/assets/images/pic-9.webp";
import image10 from "/assets/images/pic-10.webp";
import image11 from "/assets/images/pic-11.webp";
import image12 from "/assets/images/pic-12.webp";
import image13 from "/assets/images/pic-13.webp";
import image14 from "/assets/images/pic-14.webp";

import Card from "../shared/Card";
import { GoChevronRight } from "react-icons/go";

const cars1 = [
  {
    title: "",
    image: image1,
  },
  {
    title: "Cars & Trucks",
    image: image2,
  },
  {
    title: "Classic Cars",
    image: image3,
  },
  {
    title: "RV's, Campers & Trailers",
    image: image4,
  },
  {
    title: "Boats & Watercraft",
    image: image5,
  },
  {
    title: "Motorcycles",
    image: image6,
  },
  {
    title: "Vehicle Parts, Tires & Accessories",
    image: image7,
  },
  {
    title: "Heavy Equipment",
    image: image8,
  },
];

const buy = [
  {
    title: "Furniture",
    image: image9,
  },
  {
    title: "Home-Outdoor & Garden",
    image: image10,
  },
  {
    title: "Tools",
    image: image11,
  },
];
const realEstate = [
  {
    title: "Appartmetns & Condos for Rent",
    image: image12,
  },
  {
    title: "Houses for Rent",
    image: image13,
  },
  {
    title: "Houses for Sale",
    image: image14,
  },
];

const Hero = () => {
  const { setMenu } = useMenu();
  return (
    <>
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
      {/*  Bottom Hero */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-8 grid gap-x-12 grid-cols-1 custom-lg:grid-cols-[4fr_1fr]">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <h2 className="text-[20px] font-medium text-primary">
              Popular in Autos in Territories
            </h2>
            <a
              href="#"
              className="text-[14px] text-[#155e9b] font-semibold underline hover:no-underline transition-all"
            >
              Browse all Autos in Territories
            </a>
          </div>
          {/*  Grid */}
          <div className="grid grid-cols-4 gap-x-6 gap-y-4">
            {cars1.map((car, index) => (
              <Card key={index} car={car} />
            ))}
          </div>
          {/*  Buy and Sell Grid */}
          <div className="mt-4 flex flex-col gap-4">
            <div className="flex justify-between">
              <h2 className="text-[20px] font-medium text-primary">
                Popular in Buy and Sell in Territories
              </h2>
              <a
                href="#"
                className="text-[14px] text-[#155e9b] font-semibold underline hover:no-underline transition-all"
              >
                Browse all Buy and Sell in Territories
              </a>
            </div>
            {/*  Grid */}
            <div className="grid grid-cols-3 gap-x-6 gap-y-4">
              {buy.map((car, index) => (
                <Card key={index} car={car} />
              ))}
            </div>
          </div>
          {/*  Real Estate */}
          <div className="mt-4 flex flex-col gap-4">
            <div className="flex justify-between">
              <h2 className="text-[20px] font-medium text-primary">
                Popular in Real Estate in Territories
              </h2>
              <a
                href="#"
                className="text-[14px] text-[#155e9b] font-semibold underline hover:no-underline transition-all"
              >
                Browse all Real Estate in Territories
              </a>
            </div>
            {/*  Grid */}
            <div className="grid grid-cols-3 gap-x-6 gap-y-4">
              {realEstate.map((car, index) => (
                <Card key={index} car={car} />
              ))}
            </div>
          </div>
        </div>
        {/*  Left Side */}
        <div className="hidden custom-lg:flex flex-col gap-4">
          <h2 className="text-[20px] font-medium text-primary">
            Popular on Kijiji
          </h2>
          <div className="flex flex-col gap-4">
            <span className="flex justify-between items-center">
              <a
                href="#"
                className="text-[16px] text-[#155e9b] font-semibold underline hover:no-underline transition-all"
              >
                Free Stuff
              </a>
              <GoChevronRight className="text-[#155e9b] text-[16px]" />
            </span>
            <span className="flex justify-between items-center">
              <a
                href="#"
                className="text-[16px] text-[#155e9b] font-semibold underline hover:no-underline transition-all"
              >
                Wanted Ads
              </a>
              <GoChevronRight className="text-[#155e9b] text-[16px]" />
            </span>
            <span className="flex justify-between items-center">
              <a
                href="#"
                className="text-[16px] text-[#155e9b] font-semibold underline hover:no-underline transition-all"
              >
                Swap/Trade
              </a>
              <GoChevronRight className="text-[#155e9b] text-[16px]" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
