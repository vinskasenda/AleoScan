import React from "react";
import IcLogoZksync from "@icon/container/ic_logo-zksync.svg";
import IcToken from "@icon/container/ic_token.svg";
import { shortenAddress } from "@src/utils/lib";

const NFTItem = ({ data }: { data: any }) => {
    return (
        <div className="group bg-item-nft transition duration-300 cursor-pointer flex items-center flex-col gap-4 pt-4  bg-[#201926] border border-[#FF47D7] rounded-2xl">
            <div className="rounded-2xl overflow-hidden flex w-[216px] h-[240px] bg-black">
                <img src={data.url} alt="image-item" className="object-cover " />
            </div>

            <div className="flex flex-col gap-2 px-4 pb-[14px] ">
                <p className="w-[216px] text-[#FF44B4] text-[12px] tracking-[1.8px] self-stretch text-ellipsis whitespace-nowrap overflow-hidden">
                    {data.description}
                </p>
                <div className="flex flex-col">
                    <h2 className="text-white group-hover:text-secondary transition-all duration-300  font-clash-display line-clamp-1 text-[20px] leading-[18px] font-semibold">
                        {data.name}
                    </h2>
                    <span className="text-eagerness text-[12px] leading-[18px]  font-clash-display font-medium self-stretch">
                        #{data.tokenId}
                    </span>
                </div>
                <div className="flex items-center gap-1 mb-2">
                    <img src={IcToken} alt="IcToken" className="w-4 h-4" />
                    <p className="text-white text-[14px] ">0.000168</p>
                    <p className="text-gray text-[12px] leading-[24px] ml-4">($0.30)</p>
                </div>

                <div className="flex items-center p-1 pl-4 justify-between w-full bg-[rgba(0,0,0,0.30)] rounded-2xl">
                    <div className="text-[10px] leading-[24px] text-[rgba(255,255,255,0.87)]">
                        Owned by{" "}
                        <span className="text-white font-extrabold">
                            {data.owner && shortenAddress(data.owner, 6, 4)}
                        </span>
                    </div>
                    <img src={IcLogoZksync} alt="IcToken" className="w-6 h-6" />
                </div>
            </div>
        </div>
    );
};

export default NFTItem;
