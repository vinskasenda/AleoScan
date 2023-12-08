import Header from "@src/components/Header/Header";
import MainSearch from "@src/components/HomePage/MainSearch";

const HomePage = () => {
    return (
        <div className="relative flex flex-col justify-between w-full h-full min-h-screen overflow-hidden">
            <div className="bg-home"></div>
            <div></div>
            <Header />
            <MainSearch/>
            <footer className="flex justify-between text-gray px-[60px] py-5">
                <p className="text-base font-semibold">©️ Vikitoshi</p>
                <div className="flex items-center gap-9 font-medium">
                    <a href="/">Privacy Policy</a>
                    <a href="/">Terms and Conditions</a>
                </div>
            </footer>
        </div>
    ) 
};

export default HomePage;
