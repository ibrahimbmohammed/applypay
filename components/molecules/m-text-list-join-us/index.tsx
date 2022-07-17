import RingIcon from '@lib/icons/home/ring-icon ';

const JoinUsTextList = () => {
  return (
    <div className=" flex flex-col xs-mini:space-y-[10px] xl:space-y-[38px]">
      <p className="font-[700] xs-mini:text-[24px]  lg:text-[41px] tracking-wide">Parents</p>

      <div className=" xs-mini:w-[178px] lg:max-w-[232px] flex flex-col space-y-5">
        <div className="flex space-x-2  items-start text-[#44465F]">
          <div className="pt-1">
            <RingIcon />
          </div>
          <p className="xs-mini:text-[13px] xl:text-[16px]">
            Search for the right school for your child
          </p>
        </div>
        <div className="flex space-x-2 items-start text-[#44465F]">
          <div className="pt-1">
            <RingIcon />
          </div>
          <p className="xs-mini:text-[13px] xl:text-[16px]">
            Browse information about schools that interests you
          </p>
        </div>
        <div className="flex space-x-2 items-start text-[#44465F]">
          <div className="pt-1">
            <RingIcon />
          </div>
          <p className="xs-mini:text-[13px] xl:text-[16px]">
            Contact schools on phone or using our enquiry form
          </p>
        </div>
      </div>
    </div>
  );
};

export default JoinUsTextList;
