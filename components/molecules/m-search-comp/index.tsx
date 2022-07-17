import HomeIcon from '@lib/icons/home/home-icon';
import SearchIcon from '@lib/icons/home/search-icon';
import LocationIcon from '@lib/icons/home/location-icon';
import DownArrowIcon from '@lib/icons/home/arrow-down-icon';

const SearchComp = () => {
  return (
    <div className=" xs-mini:self-center xs-mini:mt-[10px] lg:mt-[0px] bg-white rounded-lg lg:flex flex-col space-y-4 xs-mini:p-[10px] xs:p-[10px] xl:p-[40px] drop-shadow-[0px_8px_40px_rgba(0,_0,_0,_0.08)] xs-mini:w-[250px] xs-mini:h-[220px] xs:w-[331px] xs:h-[220px] lg:w-[493px] lg:h-[346px] ">
      <div className="relative hidden lg:block">
        <h2 className="font-[700] text-[42px] ">Find the Right School</h2>
        <div
          className="absolute right-0 top-9 h-[19px] w-[139px] bg-applyYellow rounded-md -z-10"
          style={{ opacity: '0.5' }}
        />
      </div>
      <div className="flex space-x-2 items-center justify-between  xs-mini:w-full xs:w-full ">
        <div className="relative  flex  w-full  flex-col xs-mini:w-1/2 xs:w-1/2 ">
          <div className="pointer-events-none absolute inset-y-0 top-0 left-0 flex items-center px-2 text-gray-700">
            <LocationIcon />
          </div>
          <input
            className="py-3 xs-mini:pl-10 xs:pl-8 pl-10 bg-[#F8F8F8] rounded-md focus:outline-none text-sm font-normal "
            placeholder="Location"
          />
        </div>
        <div className="relative  flex  w-full  flex-col  xs-mini:w-1/2 xs:w-1/2  ">
          <div className="pointer-events-none absolute inset-y-0 top-0 left-0 flex items-center px-2 text-gray-700">
            <HomeIcon />
          </div>
          <select
            id="filter"
            className="focus:shadow-outline block w-full appearance-none rounded-md bg-[#F8F8F8] py-[0.85rem] xs-mini:pl-10 xs:pl-10 pl-10  pr-4 text-sm leading-tight text-gray-400 focus:outline-none"
          >
            <option value="">School Type</option>
            <option value="true">Primary</option>
            <option value="rejected">Secondary</option>
          </select>

          <div className="pointer-events-none absolute inset-y-0 top-0 right-0 flex items-center px-2 text-gray-700">
            <DownArrowIcon />
          </div>
        </div>
      </div>
      <div className="relative  flex  w-full  flex-col ">
        <div className="pointer-events-none absolute inset-y-0 top-0 left-0 flex items-center px-2 text-gray-700">
          <SearchIcon />
        </div>
        <input
          className="py-3 pl-10 bg-[#F8F8F8] rounded-md focus:outline-none text-sm font-normal"
          placeholder="School Name"
        />
      </div>
      <div className="">
        <button
          className="w-full text-2xl font-semibold text-white tracking-wide bg-applyYellow rounded-md h-[50px] shadow-[0px_4px_5px_rgba(246,_189,_42,_0.23)] "
          type="button"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchComp;
