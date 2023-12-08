import React, { useState } from "react";
import IcArrowDownSelectBox from "@icon/sidebar/ic_arrow-down-select-box.svg";

interface ItemIProps {
  title: string;
  number?: number;
}
interface IProps {
  data: ItemIProps[];
}
const SelectBox: React.FC<IProps> = ({ data }) => {
  const [currentTitle, setCurrentTitle] = useState<string>(data[0].title);
  const [show, setShow] = useState<boolean>(false);

  const handleSelectBox = (title: string) => {
    setCurrentTitle(title);
    setShow(false);
  };

  return (
    <div className={`relative w-full cursor-pointer transition`}>
      <div
        onClick={() => setShow(!show)}
        className={`rounded-lg p-3 text-[#fff] bg-[#3C3248] flex items-center justify-between mb-4`}
      >
        <div className="flex items-center gap-1">
          Price: <span className="text-[#FF44B4] font-extrabold">{currentTitle}</span>
        </div>
        <img src={IcArrowDownSelectBox} alt="IcArrowDownSelectBox" className={`${show && "-rotate-180"} transition-all`}/>
      </div>

      {show && (
        <div className={` rounded-lg absolute z-[1] top-full inset-x-0 bg-[#3C3248] translate-y-2 p-2`}>
          {data.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              onClick={() => handleSelectBox(item.title)}
              className="p-3 text-white flex items-center justify-between hover:bg-primary rounded-lg transsition-all duration-300"
            >
              {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectBox;
