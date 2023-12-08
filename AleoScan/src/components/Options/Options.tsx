import IcCategory from "@icon/options/ic_category.svg";
import IcHistory from "@icon/options/ic_history.svg";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SVGActivity from "../SVG/SVGActivity";
import SVGItem from "../SVG/SVGItem";


const CATEGORIES = [
  {
    icon: SVGItem,
    name: "Items",
    link: "items",
    defaultFill: "#707070",
    activeFill: "#FF44B4"
  },
  {
    icon: SVGActivity,
    name: "Activities",
    link: "activities",
    defaultFill: "#707070",
    activeFill: "#FF44B4"
  },
];

const Options = () => {
  const location = useLocation()

  const checkActiveTab = (link : string) => {
    if(location.pathname.includes(link)) return true;
    return false
  }

  return (
    <div className="px-[32px] w-full pt-[32px] bg-transparent border-b border-[#3C3248]">
      <div className="flex items-center gap-4">
        {CATEGORIES.map((item, index) => {
          const Icon = item.icon;
          const isActive = checkActiveTab(item.link);
          return (
            <Link
              to={item.link}
              key={`${item.name}-${index}`}
              className={`${
                isActive ? "text-white" : "text-[#707070]"
              } hover:text-white transition flex items-center gap-4 px-2 pt-2 pb-4`}
            >
              <Icon fill={isActive ? item.activeFill : item.defaultFill}/>
              <span className="text-lg font-semibold font-clash-display ">{item.name}</span>
            </Link>
          )
        })}
      </div>
    </div>
  );
};

export default Options;
