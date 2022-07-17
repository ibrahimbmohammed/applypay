import { FiUser } from 'react-icons/fi';
import { RiPhoneFill } from 'react-icons/ri';
import { FaGlobe } from 'react-icons/fa';
import Woman from '@assets/svg/inyellow.svg';
import Image from 'next/image';
import VerifiedIcon from '@lib/icons/single-page/verified';
import RegisteredIcon from '@lib/icons/single-page/registered';

const AsideSchoolMetaInfo = () => {
  return (
    <div className="bg-white px-[19px] py-[20px] rounded-[6px] max-w-[298px] h-fit flex flex-col space-y-[24px] items-center justify-start">
      <div className="">
        <Image src={Woman} />
      </div>
      <div className="flex flex-col xs-mini:space-y-1 xl:space-y-4 self-start  xl:pt-4">
        <p className=" text-[26px]:">Contact School</p>
        <div className="flex items-center xs-mini:space-x-2 xl:space-x-5">
          <FiUser className="text-applyBlue xl:text-[25px]" />
          <p className="text-[#51596C] xs-mini:font-[450] xl:font-[350]  xs-mini:text-[9.5px] xl:text-[15px]">
            Mrs. Francisca Green
          </p>
        </div>
        <div className="flex items-center xs-mini:space-x-2 xl:space-x-5">
          <RiPhoneFill className="text-applyBlue xl:text-[25px]" />
          <p className="text-[#51596C] xs-mini:font-[450] xl:font-[350] xs-mini:text-[9.5px] xl:text-[15px]">
            09015525136
          </p>
        </div>
        <div className="flex items-center xs-mini:space-x-2 xl:space-x-5">
          <RiPhoneFill className="text-applyBlue xl:text-[25px]" />
          <p className="text-[#51596C] xs-mini:font-[450] xl:font-[350] xs-mini:text-[9.5px] xl:text-[15px]">
            09015525136
          </p>
        </div>
        <div className="flex items-center xs-mini:space-x-2 xl:space-x-5">
          <FaGlobe className="text-applyBlue xl:text-[25px]" />
          <p className="text-[#51596C] xs-mini:font-[450] xl:font-[350] xs-mini:text-[9.5px] xl:text-[15px]">
            www.nordicschool.com
          </p>
        </div>
      </div>

      <button
        type="button"
        className="text-[15px] text-applyBlue border-[2px] border-applyBlue rounded-[6px] px-[64px] py-[6px]"
      >
        Send Message
      </button>

      <div className="flex flex-col space-y-3">
        <div className="flex items-center xs-mini:space-x-2 xl:space-x-5">
          <VerifiedIcon />
          <p className="text-[#F1B938] xs-mini:font-[450] xl:font-[350]  xs-mini:text-[9.5px] xl:text-[13px]">
            Verified by Applyi
          </p>
        </div>
        <div className="flex items-center xs-mini:space-x-2 xl:space-x-5">
          <RegisteredIcon />
          <p className="text-[#F1B938] xs-mini:font-[450] xl:font-[350] xs-mini:text-[9.5px] xl:text-[13px]">
            Government Registered
          </p>
        </div>
      </div>

      <button
        type="button"
        className="text-[15px] text-white border-[2px] bg-applyBlue border-applyBlue rounded-[6px] px-[66px] py-[6px]"
      >
        Apply Online
      </button>
    </div>
  );
};

export default AsideSchoolMetaInfo;
