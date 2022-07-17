import Image from 'next/image';
import News1 from '@assets/svg/news1.svg';
import VideoBg from '@assets/svg/videoBg.svg';
import PlayIcon from '@assets/svg/arrow.svg';

const NewsCard = () => {
  return (
    <div className="snap-center lg:min-w-[1255px] max-w-[1255px] flex z-30  ">
      <div className="relative overflow-hidden  xs-mini:w-[227px] xs-mini:h-[309px] bg-white  lg:w-[308px] lg:h-[388px] rounded-[6px] flex flex-col xs-mini:space-y-1 lg:space-y-4 items-center shadow-[0px_14px_59px_rgba(38,_38,_40,_0.054902)]">
        <div className=" xs-mini:w-[227px] xs-mini:h-[164px] lg:w-[308px] lg:h-[223px] rounded-t-[6px] ">
          <Image src={News1} />
        </div>
        <div className="absolute xs-mini:-top-1 lg:-top-4 bg-black/5 xs-mini:w-[227px] xs-mini:h-[164px] lg:w-[308px] lg:h-[223px]">
          <Image src={VideoBg} />
        </div>
        <div className="absolute xs-mini:top-[35px] xs-mini:left-[95px] top-[55px] left-[140px] w-[308px] h-[223px]">
          <Image src={PlayIcon} />
        </div>
        <div className="flex py-[11px] px-[20px] flex-col  xs-mini:space-y-6 lg:space-y-3">
          <p className="text-applyText xs-mini:text-[17px] lg:text-[20px]">
            Quisque in tortor sed risus consequat cursus
          </p>
          <div className="flex items-center justify-between ">
            <p className="text-[#818795] text-[14px]">19 Oct. 2019</p>
            <div className="">
              <button
                type="button"
                className="text-[15px] text-applyBlue border-[2px] border-applyBlue rounded-[4px] px-4 py-1"
              >
                Play
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
