import Checkbox from 'labeled-checkbox-material-ui';

const FilterComp = () => {
  return (
    <div className="hidden lg:block bg-white py-[20px] space-y-4 px-[26px] rounded-[6xp] ">
      <p className="">School Type</p>
      <div className="flex flex-col space-y-[8px]">
        <div className="flex space-x-1 items-center ">
          <div className="pl-2">
            <Checkbox styleCheckbox={{ color: '#538FB7' }} label="" />
          </div>
          <p className="text-[#51596C] font-[350] text-[13px]">Pre-Nursery</p>
        </div>
        <div className="flex space-x-1 items-center ">
          <div className="pl-2">
            <Checkbox styleCheckbox={{ color: '#538FB7' }} label="" />
          </div>
          <p className="text-[#51596C] font-[350] text-[13px]">Nursery</p>
        </div>
        <div className="flex space-x-1 items-center ">
          <div className="pl-2">
            <Checkbox styleCheckbox={{ color: '#538FB7' }} label="" />
          </div>
          <p className="text-[#51596C] font-[350] text-[13px]">Primary</p>
        </div>
        <div className="flex space-x-1 items-center ">
          <div className="pl-2">
            <Checkbox styleCheckbox={{ color: '#538FB7' }} label="" />
          </div>
          <p className="text-[#51596C] font-[350] text-[13px]">Junior Seconday</p>
        </div>
        <div className="flex space-x-1 items-center ">
          <div className="pl-2">
            <Checkbox styleCheckbox={{ color: '#538FB7' }} label="" />
          </div>
          <p className="text-[#51596C] font-[350] text-[13px]">Senior Seconday</p>
        </div>
      </div>
    </div>
  );
};

export default FilterComp;
