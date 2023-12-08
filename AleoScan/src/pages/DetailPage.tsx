import Banner from "@src/components/Banner/Banner";
import Header from "../components/Header/Header";
import Sidebar from "@src/components/Sidebar/Sidebar";
import Options from "@src/components/Options/Options";
import { Outlet, useLocation } from "react-router-dom";

const DetailPage = () => {
  const location = useLocation();
  console.log("Log ~ file: DetailPage.tsx:10 ~ DetailPage ~ location:", location.pathname);

  return (
    <div className="bg-[#100413]">
      <Header />
      <div className=" w-[1440px]  mx-auto">
        <Banner />
        <Options />
        <div className="flex justify-between">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
