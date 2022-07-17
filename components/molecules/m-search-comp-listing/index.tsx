import SearchIcon from '@lib/icons/home/search-icon';
import LocationIcon from '@lib/icons/home/location-icon';

const SearchCompListing = () => {
  return (
    <div className="xs-mini:self-center xs-mini:mt-[10px] lg:mt-[0px] bg-white rounded-[4px] lg:flex flex-col space-y-4 xs-mini:p-[10px] xs:p-[10px] xl:p-[17px] drop-shadow-[0px_8px_40px_rgba(0,_0,_0,_0.08)] xs-mini:w-[250px] xs-mini:h-[220px] xs:w-[331px] xs:h-[220px] lg:w-[273px] lg:h-fit ">
      <h1 className="hidden lg:flex">Search</h1>
      <div className="flex space-x-2 items-center justify-between  xs-mini:w-full xs:w-full ">
        <div className="relative  flex  w-full  flex-col xs-mini:w-full xs:w-full ">
          <div className="pointer-events-none absolute inset-y-0 top-0 left-0 flex items-center px-2 text-gray-700">
            <LocationIcon />
          </div>
          <input
            className="py-3 xs-mini:pl-10 xs:pl-8 pl-10 bg-[#F8F8F8] rounded-md focus:outline-none text-sm font-normal "
            placeholder="Location"
          />
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

export default SearchCompListing;
