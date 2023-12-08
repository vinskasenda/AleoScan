import { IcEthereum } from "@src/contains/banner";
import React from "react";

interface IProps {
  title: string;
  subtitle: string;
  leftIcon?: boolean;
}
const BlockData: React.FC<IProps> = ({ title, subtitle, leftIcon = false }) => {
  return (
    <div className="py-[12px] px-[40px] flex flex-col items-center justify-center gap-2  border-x border-[#3C3248]">
      <span className="text-gray text-base">{title}</span>
      <div className="flex items-center gap-3">
        {leftIcon && <img src={IcEthereum} />}
        <span className="text-white text-[32px] font-medium  font-clash-display">{subtitle}</span>
      </div>
    </div>
  );
};

export default BlockData;
