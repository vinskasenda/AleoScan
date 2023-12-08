import Search from "../Search/Search";
import GridItem from "./GridItem";

const Container = () => {
  return (
    <div className="flex-1 flex flex-col h-full gap-6 p-4 bg-transparent">
      <Search extraClass="w-[494px]" />
      <GridItem />
    </div>
  );
};

export default Container;
