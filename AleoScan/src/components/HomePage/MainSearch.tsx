import { ChangeEvent, MouseEvent, useState } from "react";
import RightArrow from "@icon/home/right-arrow.svg";
import { useNavigate } from "react-router-dom";

const MainSearch = () => {
    const [isFocusing, setIsFocusing] = useState(false);
    const [addressValue, setAddressValue] = useState("");
    const navigate = useNavigate();

    const onClickSearchButton = (e: MouseEvent) => {
        e.preventDefault();
        if (!addressValue) {
            return;
        }
        navigate(`/detail/items?address=${addressValue}`);
    };

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setAddressValue(e.target.value);
    };

    const onBlurInput = () => {
        setTimeout(() => {
            setIsFocusing(false);
        }, 100);
    };

    return (
        <div className="h-full w-full">
            <form onBlur={onBlurInput} className="relative flex items-center h-fit group" id="SearchHome">
                <div className="absolute -top-1 flex items-center justify-end moving-object--top blur-[1px]">
                    <div className="moving-line--top h-[2px] w-40 "></div>
                    <div className=" h-2 aspect-square bg-[#F161C9]  "></div>
                </div>
                <div
                    className={`${
                        isFocusing && "!opacity-100"
                    } opacity-0 group-hover:opacity-100 absolute top-0 w-full gradient-border h-[1px] transition-all duration-500`}
                ></div>
                <input
                    type="text"
                    onFocus={() => setIsFocusing(true)}
                    onChange={onChangeValue}
                    placeholder="Program Id aleo0...12345"
                    className="w-full h-[176px] text-center text-5xl font-medium text-white font-clash-display px-16 bg-[#56145480] opacity-30 focus:opacity-100 outline-none transition-all duration-500"
                />
                <div
                    className={`${
                        isFocusing && "!opacity-100"
                    } opacity-0 group-hover:opacity-100 absolute bottom-0 w-full gradient-border h-[1px] transition-all duration-500`}
                ></div>

                <button
                    onClick={onClickSearchButton}
                    type="submit"
                    className={`${
                        isFocusing && "active"
                    } absolute flex items-center justify-center right-4 h-36 aspect-square rounded-[32px] gradient-button button-search-home`}
                    id="SearchHomeButton"
                >
                    <img src={RightArrow} alt="arrow" />
                </button>

                <div className="absolute -bottom-1 flex items-center justify-start moving-object--bottom blur-[1px]">
                    <div className=" h-2 aspect-square bg-[#F161C9] "></div>
                    <div className="moving-line--bottom h-[2px] w-40 "></div>
                </div>
            </form>
        </div>
    );
};

export default MainSearch;
