import IcSearch from "@icon/container/ic_search.svg";


interface IProps {
  extraClass?: string;
  gradientOption?: boolean;
}

const Search = ({ extraClass = "", gradientOption } : IProps) => {
  return (
    <div className={extraClass}>
      <div className={`bg-[rgba(92,52,96,0.48)] flex items-center relative rounded-lg overflow-hidden w-full`}>
        <img className="absolute left-4 top-1/2 -translate-y-1/2 z-1" src={IcSearch} alt={"IcSearch"} />
        {gradientOption ? 
          <div className="flex justify-center items-center p-[2px] gradient-border rounded-lg overflow-hidden w-full">
            <input
              type="text"
              className={`bg-[#100413] outline-none text-white  w-full transition-all duration-500 rounded-lg text-[14px] leading-[24px] flex-1 p-3 pl-10  font-sora`}          />
          </div>
        :
          <input
            type="text"
            placeholder="Search"
            className="placeholder:text-gray text-white focus:outline-primary transition-all duration-500 rounded-lg bg-transparent text-[14px] leading-[24px] flex-1 p-3 pl-10  font-sora"
          />
        }
        
      </div>
    </div>
  );
};

export default Search;
