import type { NextPage } from 'next';
import HomeWrapper from '@lib/hoc/home-wrapper';
import AsideSchoolMetaInfo from '@molecules/m-aside-meta-info';
import SectionHeaderComp from '@molecules/m-header-section';
import Ribbon from '@atoms/a-ribbon';
import { MdLocationOn } from 'react-icons/md';
import Image from 'next/image';
import Nordic from '@assets/svg/nordic.svg';
import GirlHolo from '@assets/svg/girlholo.svg';
import ManHappy from '@assets/svg/manhapp.svg';
import FlagIcon from '@lib/icons/single-page/flag';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules

const Blog: NextPage = () => {
  return (
    <div className=" lg:pl-[109px] xs-mini:space-x-0  lg:space-x-6 lg:pr-[72px] bg-background flex xs-mini:flex-col lg:flex-row  ">
      <aside className="hidden lg:block sticky inset-x-0 min-w-[273px] space-y-5 top-0 left-0 py-5 self-baseline overflow-y-auto max-h-screen scrollbar-hide">
        <AsideSchoolMetaInfo />
        <div className="bg-white px-[19px] py-[20px] rounded-[6px] max-w-[298px] h-fit flex flex-col space-y-[24px] items-center justify-start">
          <div className=" w-full">
            <SectionHeaderComp
              text="Updates"
              className="h-[6rem] xs-mini:w-[55px] lg:w-[50px]"
              classNameText="xs-mini:text-[29px] lg:text-[20px]"
              classNameBg="xs-mini:top-6 lg:top-[13px] lg:-right-[22px] xs-mini:h-[18px] lg:h-[15px] w-[70px]"
            />
          </div>
          <div className="">
            <p className="font-[200] text-[14px] text-[#51596C]">
              For 2020/21 session, we are accepting students into Nursery, Primary and Secondary.
              <br />
              <br />
              Please call our school first on 0700 000 000.
            </p>
          </div>
          <hr className="w-full" />
          <div className="">
            <p className="font-[200] text-[14px] text-[#51596C]">
              For 2020/21 session, we will start accepting applications on January 15, 2021.
              <br />
              <br />
              You can apply online at applyschools.ng
            </p>
          </div>
        </div>
        <div className="bg-white px-[19px] py-[10px] rounded-[6px] max-w-[298px] h-fit flex flex-col space-y-[24px] items-center justify-start">
          <iframe
            width="258"
            height="155"
            src="https://www.youtube.com/embed/2-OdJJ5PVp4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </aside>
      <main className="flex flex-col w-full items-center justify-start ">
        <div className="">
          <p className="xs-mini:text-[20px] lg:text-[34px] xs-mini:font-[400] lg:font-[700]">
            Nordic International School
          </p>
        </div>
        <div className="bg-white flex flex-col space-y-4 xs-mini:w-[340px] xs-mini:px-[18px] xs-mini:py-[24px] lg:px-[40px] lg:py-[24px] lg:w-[831px] h-[701px] rounded-[6px]  ">
          <div className=" flex xs-mini:flex-col xs-mini:items-center xs-mini:justify-start lg:flex-row-reverse lg:items-start  lg:-space-x-[5px]">
            <div className="lg:w-[332px] lg:flex lg:items-end lg:justify-end ">
              <Image src={Nordic} />
            </div>
            <div className="flex flex-col space-y-6">
              <p className="text-[12px] lg:text-[15px] text-[#51596C] font-[450] lg:font-[450] lg:pr-[12px] xs-mini:leading-[22px] lg:leading-[32px] ">
                Nigeria Ghana International School, Abuja, is a private co-educational secondary
                school established in 2006, located in the serenity of Kuje Area Council in the
                Federal Capital Territory.
              </p>
              <div className="flex items-start space-x-3 max-w-[12rem]">
                <MdLocationOn className="text-[24px] text-[#818795]" />
                <p className="text-[#818795] xs-mini:text-[12px] lg:text-[16px] lg:font-[300]">
                  Plot 700, Gitto Road Mabuchi, Abuja
                </p>
              </div>
              <div className="max-w-full max-h-[4rem] overflow-hidden flex flex-wrap ">
                <Ribbon text="Pre-Nursery" />
                <Ribbon text="Junior Secondary" />
                <Ribbon text="Nursery" />
                <Ribbon text="Primary" />
                <Ribbon text="Senior Secondary" />
              </div>
            </div>
          </div>
          <div className="flex items-start space-x-2 ">
            <FlagIcon />
            <div className="flex xs-mini:flex-col lg:flex-row lg:space-x-1">
              <p className="font-[300] xs-mini:text-[12px] xs-mini:pr-[135px] lg:pr-[0px]  lg:text-[13px]">
                School Motto:
              </p>
              <p className="font-[300] xs-mini:text-[12px] xs-mini:pr-[135px] lg:pr-[0px]  lg:text-[13px]">
                <b>Excellence and Integrity</b>
              </p>
            </div>
          </div>
          <Swiper
            slidesPerView="auto"
            spaceBetween={1}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image src={GirlHolo} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={ManHappy} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={GirlHolo} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={ManHappy} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={GirlHolo} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={ManHappy} />
            </SwiperSlide>
          </Swiper>
        </div>
      </main>
    </div>
  );
};

export default HomeWrapper(Blog);
