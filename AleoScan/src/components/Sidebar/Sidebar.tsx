import IcArrowDown from "@icon/sidebar/ic_arrow-down.svg";
import { useEffect, useState } from "react";
import SelectBox from "./SelectBox";
import CheckBox from "./CheckBox";
import { useLocation } from "react-router";

const Items = [
  {
    title: "Sort",
    children: {
      type: "select-box",
      data: [
        {
          title: "Lowest",
        },
        {
          title: "Highest",
        },
      ],
    },
  },
  {
    title: "Background",
    children: {
      type: "check-box",
      data: [
        {
          title: "Mane",
          number: 236,
        },
        {
          title: "Mbappe",
          number: 789,
        },
        {
          title: "Kante",
          number: 789,
        },
        {
          title: "Kros",
          number: 789,
        },
        {
          title: "Icardi",
          number: 789,
        },
      ],
    },
  },
  {
    title: "Egg",
    children: {
      type: "select-box",
      data: [
        {
          title: "Lowest",
        },
        {
          title: "Highest",
        },
      ],
    },
  },
  {
    title: "Glasses",
    children: {
      type: "select-box",
      data: [
        {
          title: "Lowest",
        },
        {
          title: "Highest",
        },
      ],
    },
  },
  {
    title: "Mouth",
    children: {
      type: "select-box",
      data: [
        {
          title: "Lowest",
        },
        {
          title: "Highest",
        },
      ],
    },
  },
];

const Activities = [
  {
    title: "Event Type",
    children: {
      type: "check-box",
      data: [
        {
          title: "Sale",
        },
        {
          title: "List for Sale",
        },
        {
          title: "Canceled",
        },
        {
          title: "Expired",
        },
        {
          title: "Transfer",
        },
        {
          title: "Minted",
        },
      ],
    },
  },
]
const Sidebar = () => {
  const [data, setData] = useState<any>();
  const location = useLocation()

  useEffect(() => {
    if(location.pathname.includes("activities")) {
      setData(Activities)
    }
    else setData(Items)
  }, [location])

  return (
    <div className="!w-[348px] border-r border-[#3C3248] bg-transparent">
      <div className="mt-10 flex flex-col divide-y divide-[#3C3248]">
        {data?.map((item : any, index : number) => (
          <SidebarItem key={`${item.title}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

const SidebarItem = ({ item }) => {
  const [activeTab, setActiveTab] = useState<boolean>(true);

  return (
    <div className={`flex flex-col gap-2 pl-4 pr-3 transition-all `}>
      {/* category name */}
      <div
        onClick={() => setActiveTab(!activeTab)}
        className={`hover:text-white text-[rgba(255,_255,_255,_0.87)] transition flex justify-between w-full items-center gap-4 py-3 `}
      >
        <span className=" font-clash-display font-semibold">{item.title}</span>
        <img
          src={IcArrowDown}
          alt="arrow"
          className={`${activeTab && "rotate-90"} transform  transition-all duration-300`}
        />
      </div>

      {/* children */}
      {activeTab && (
        <div data-aos={"slide-down"} data-aos-duration="500">
          {/* type select box */}
          {item.children.type === "select-box" && <SelectBox data={item.children.data} />}
          {item.children.type === "check-box" && <CheckBox data={item.children.data} />}
        </div>
      )}
    </div>
  );
};
