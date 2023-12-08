import React, { useState } from "react";
import Search from "../Search/Search";

interface ItemIProps {
  title: string;
  number?: number;
}
interface IProps {
  data: ItemIProps[];
}
const CheckBox: React.FC<IProps> = ({ data }) => {
  return (
    <div className="pb-4">
      <Search extraClass="mb-4" gradientOption={true}/>
      {data.map((item, index) => (
        <CustomCheckbox key={`${item.title}-${index}`} title={item.title} number={item?.number} />
      ))}
    </div>
  );
};

export default CheckBox;

const CustomCheckbox: React.FC<ItemIProps> = ({ title, number }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      onClick={toggleCheckbox}
      className="relative hover:bg-[rgba(255,68,180,0.15)] rounded-lg transition-all duration-200 cursor-pointer flex items-center justify-between py-4 pl-3 pr-2"
    >
      <div className="flex-1 text-white">{title}</div>

      <div className="absolute z-[1] inset-0" />
      <div style={{ color: "rgba(255,255,255,0.50)" }} className="flex items-center text-sm gap-2">
        {/* <span>{number}</span> */}

        <label className="flex items-center cursor-pointer">
          <div className="">
            <input type="checkbox" className="hidden" checked={isChecked} onChange={toggleCheckbox} />
            <div
              style={{
                backgroundImage: isChecked ? "linear-gradient(94deg, #F4B6CC 0%, #F161C9 46.87%, #912CC1 100%)" : "",
              }}
              className={`${isChecked ? "border-none" : "border"} w-5 h-5 border rounded-md border-gray flex items-center justify-center `}
            >
              {isChecked && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.8149 5.25L6.31494 10.75L3.81494 8.25"
                    stroke="white"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};
