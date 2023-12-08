import LogoSVG from '@icon/header/logo.svg'
import BtnConnectWallet from '../BtnConnectWallet/BtnConnectWallet';
import SearchIcon from "@icon/header/search.svg"
import { useEffect, useRef } from 'react';

const Header = () => {
  const headerRef = useRef<HTMLDivElement>()

  useEffect(() => {
    const handleScrollEvent = () => {
      if(headerRef.current) {
        if (window.scrollY > 50) { // Adjust the scroll position where the background color change should occur
          headerRef.current.style.backgroundColor = "#201926"; // Change the background color
        } else {
          headerRef.current.style.backgroundColor = "transparent"; // Reset the background color
        }
      }
    }
    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent)
    }
  }, [])

  return (
    <div 
      ref={headerRef}
      className="fixed w-full px-[60px] py-[20px] flex items-center justify-between z-50 ">
      <a href="/" className="flex items-center gap-[10px]">
        <img src={LogoSVG} alt="" />
        <span className="text-[32px] text-white font-semibold font-clash-display">Vikitoshi</span>
      </a>

      <div className="flex items-center gap-9 text-gray text-base font-semibold">
        <button className="px-4 bg-transparent"> 
          <img src={SearchIcon} alt="search" className="w-6 h-6"/>
        </button>
        <button className="">Explore</button>
        <button className="">Insights</button>
        <button className="">Launch</button>

        <BtnConnectWallet />
      </div>

    </div>
  );
};

export default Header;
