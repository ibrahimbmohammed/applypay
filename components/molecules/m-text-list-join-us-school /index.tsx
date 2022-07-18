import RingIcon from '@lib/icons/home/ring-icon ';

const JoinUsTextListSchool = () => {
  return (
    <div className=" flex flex-col xs-mini:space-y-[10px] xl:space-y-[38px]">
      <p className="font-[700] xs-mini:text-[24px]  lg:text-[41px] tracking-wide">School</p>

      <div className=" xs-mini:w-[158px] lg:max-w-[232px] flex flex-col space-y-5">
        <div className="flex space-x-2  items-start text-[#44465F]">
          <div className="pt-1">
            <RingIcon />
          </div>
          <p className="xs-mini:text-[13px] xl:text-[16px]">
            List your school and reach more parents
          </p>
        </div>
        <div className="flex space-x-2 items-start text-[#44465F]">
          <div className="pt-1">
            <RingIcon />
          </div>
          <p className="xs-mini:text-[13px] xl:text-[16px]">
            Share information about your school with parents
          </p>
        </div>
        <div className="flex space-x-2 items-start text-[#44465F]">
          <div className="pt-1">
            <RingIcon />
          </div>
          <p className="xs-mini:text-[13px] xl:text-[16px]">
            Receive enquiries from parents looking for admissions
          </p>
        </div>
      </div>
    </div>
  );
};

export default JoinUsTextListSchool;
