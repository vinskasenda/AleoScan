import { Background, IcChevronDown, Img, Social } from "@src/contains/banner";
import BlockData from "./BlockData";
// import { GradientBorderComponent } from "gradient-border";

const Banner = () => {
  return (
    <div style={{ backgroundImage: `url(${Background})` }} className="w-full bg-cover bg-center bg-no-repeat">
      <div className="w-full px-[60px] pt-[140px] pb-[40px] ">
        <div className="h-[260px] flex items-center gap-8">
          <img className="" src={Img} alt="Img" />
          <div className="flex justify-between w-full">
            <div className="flex flex-col gap-4 ">
              {/* <GradientBorderComponent
                gradientBorderColor={[{ offset: 0, color: "green" }]}
                gradientBorderColorDeg={10}
                gradientBorderRadius={100}
                gradientBorderDirection="left-to-right"
                gradientBorderWidth={1}
                gradientBorderChildren={<div>asdf</div>}
                // <div className="text-[#FF44B4] text-base font-medium px-6 py-2 cursor-pointer">Top 10 NFTs</div>
              /> */}
              <h1 className="text-[48px] text-white font-medium  font-clash-display">The Crystal of Kriozger Crimson</h1>
              <p className="text-gray text-base max-w-[830px]">
                Ape Kings is the continuation of the collection in the Ape Kings meta universe. Owners get access to a
                private club. We create the Ape Kings universe together. 10,000 unique Ape Kings have come to this world
                to rule it. We rise together. We build together. We grow together.
              </p>
              <button className="w-fit flex items-center gap-2 cursor-pointer hover:opacity-80">
                <span className="text-[#FF44B4] text-base">See More</span>
                <img src={IcChevronDown} alt="IcChevronDown" />
              </button>
            </div>
            <div className="flex flex-col gap-3 ">
              {Social.map((item, index) => (
                <a key={index} href="/">
                  <button className="w-[40px] h-[40px] transition flex items-center justify-center cursor-pointer border border-[#3C3248] rounded-full hover:opacity-60">
                    <img src={item.icon} alt={item.name} />
                  </button>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
      <div className="flex item-center justify-center border-y border-[#3C3248]">
        {<BlockData title="Items" subtitle="3094" />}
        {<BlockData title="Owners" subtitle="702" />}
        {<BlockData title="Listed" subtitle="5.07%" />}
        {<BlockData title="Floor Price" subtitle="0.0007" />}
        {<BlockData title="Volume" subtitle="3.72" leftIcon />}
        {<BlockData title="Creator Earnings" subtitle="10%" />}
      </div>
    </div>
  );
};

export default Banner;
