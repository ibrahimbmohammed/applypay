import Image from 'next/image';
import { FiUser } from 'react-icons/fi';
import { RiPhoneFill } from 'react-icons/ri';
import BlueBgDot from '@lib/logos/home/blue-bg-dot';
import Woman from '@assets/svg/inyellow.svg';

const InfoCard = () => {
  return (
    <div className="card relative">
      <div className=" bg-white flex xs-mini:px-[8px] xs-mini:py-[12px] xl:px-3 xl:py-3 flex-col items-center drop-shadow-[0px_14px_59px_rgba(38,_38,_40,_0.129412)] xs-mini:h-[210px] xs-mini:w-[138px] lg:h-[405px] lg:w-[266px] rounded-lg">
        <div className="xl:hidden absolute -top-[0.45rem] z-10 -left-[0.2rem] ">
          <BlueBgDot width="66" height="66" />
        </div>
        <div className="hidden xl:block absolute -top-[1.8rem] z-10 -left-[1.1rem] ">
          <BlueBgDot width="128" height="128" />
        </div>
        <div className="z-30">
          <Image src={Woman} />
        </div>
        <div className="flex flex-col xs-mini:space-y-1 xl:space-y-4 self-start xs-mini:pt-[3px]  xl:pt-4">
          <p className="xs-mini:text-[13px] xl:text-[17px]:">Contact School</p>
          <div className="flex items-center xs-mini:space-x-2 xl:space-x-5">
            <FiUser className="text-[#51596C] xl:text-[25px]" />
            <p className="text-[#51596C] xs-mini:font-[450] xl:font-[350]  xs-mini:text-[9.5px] xl:text-[15px]">
              Mrs. Francisca Green
            </p>
          </div>
          <div className="flex items-center xs-mini:space-x-2 xl:space-x-5">
            <RiPhoneFill className="text-[#51596C] xl:text-[25px]" />
            <p className="text-[#51596C] xs-mini:font-[450] xl:font-[350] xs-mini:text-[9.5px] xl:text-[15px]">
              09015525136
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
