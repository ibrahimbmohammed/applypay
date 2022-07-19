import type { NextPage } from 'next';
import HomeWrapper from '@lib/hoc/home-wrapper';
import Image from 'next/image';
import HeroImg from '@assets/png/hero.png';
import MailOnlineLogo from '@assets/svg/mail-online.svg';
import GardianLogo from '@assets/svg/gaurdian.svg';
import TeleGraphLogo from '@assets/svg/telegraph.svg';
import MirrorLogo from '@assets/svg/mirror.svg';
import BgLeftIcon from '@lib/icons/home/bg-left-icon';
import BgRightIcon from '@lib/icons/home/bg-right-icon';
import BgLatestSection from '@lib/icons/home/bg-latest-section-icon ';
import NewsCard from '@molecules/m-card-news';
import SectionHeaderComp from '@molecules/m-header-section';
import FeaturedCard from '@molecules/m-card-featured';
import InfoCard from '@molecules/m-card-info';
import InfoCardYellow from '@molecules/m-card-info-yellow';
import JoinUsTextList from '@molecules/m-text-list-join-us';
import SearchComp from '@molecules/m-search-comp';
import SocailLists from '@molecules/m-item-list-socails';
import JoinUsTextListSchool from '@molecules/m-text-list-join-us-school ';
import SwiperFeatured from '@molecules/m-slider-featured';
import SwiperNews from '@molecules/m-slider-news';

const Home: NextPage = () => {
  return (
    <div className="overflow-hidde">
      <section className="xs-mini:overflow-hidden lg:overflow-visible 3xl:h-[calc(100vh_-_25rem)] xs-mini:h-[calc(100vh_-_5rem)] bg-background flex flex-col space-y-5 items-center justify-center">
        <div className="flex  lg:h-screen  xs-mini:-mt-[100px] lg:-mt-[10px]    flex-col xs-mini:items-center lg:justify-start space-y-3 lg:space-y-[24px] lg:w-full lg:space-x-8 ">
          <div className="relative xs-mini:mt-[300px] xs-mini:pt-[80px] xs:mt-[120px]   h-[10rem] w-[16rem]  lg:hidden ">
            <h2 className="absolute text-center font-[500] text-[42px] z-50 ">
              Find the Right School
            </h2>

            <div
              className="absolute right-0 top-[175px] h-[23px] w-[139px] bg-applyYellow rounded-[4px] z-10"
              style={{ opacity: '0.5' }}
            />
          </div>
          <p className="lg:hidden xs-mini:max-w-[270px] xs:max-w-[343px]  xs-mini:max-h-[110px] xs:max-h-[100px]   xs-mini:self-center  font-[450] xs-mini:pt-[50px] xs-mini:px-[5px] xs-mini:text-[15px] xs:text-[20px]  tracking-[0.02rem] leading-[30px]   text-xl ">
            We’ve helped several parents find the right schools for their children.
          </p>
          <div className=" xs-mini:flex-col flex lg:flex-row lg:w-full lg:justify-between lg:px-[110px]">
            <SearchComp />
            <div className="">
              <Image src={HeroImg} width="628" height="487" />
            </div>
          </div>

          <p className="xs-mini:hidden  lg:block font-[450] text-xl ">
            We’ve helped several parents find the right schools for their children.
          </p>
          <SocailLists />
        </div>
      </section>
      <section className=" h-fit   xs-mini:pt-[38px] xs-mini:pb-[74px]   lg:py-[53px]  w-full bg-white flex flex-col space-y-5 items-center ">
        <div className="flex items-center   lg:px-[124px] ">
          <div className=" flex xs-mini:space-y-4  lg:space-y-0   xs-mini:flex-col lg:flex-row lg:space-x-[118px] items-center">
            <span className="">
              <p className="font-normal  xs-mini:text-[18px] lg:text-[25px]">Featured in:</p>
            </span>
            <div className="grid xs-mini:grid-cols-2 xs-mini:max-w-[259px] lg:max-w-[1117px] xs-mini:gap-x-[2rem] xs-mini:gap-y-[2rem] lg:gap-x-[4rem] lg:gap-y-[0rem] justify-items-start lg:grid-cols-4 ">
              <div className="flex items-center justify-center">
                <Image src={MailOnlineLogo} />
              </div>
              <div className="flex items-center justify-center">
                <Image src={GardianLogo} />
              </div>
              <div className="flex items-center justify-center">
                <Image src={TeleGraphLogo} />
              </div>
              <div className="flex items-center justify-center">
                <Image src={MirrorLogo} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="3xl:h-[calc(100vh_-_25rem)] xs-mini:h-[calc(100vh_-_2rem)]  lg:h-[calc(100vh_-_5rem)]  bg-white flex flex-col space-y-5 items-center justify-center">
        <SectionHeaderComp
          text="Why you should join us"
          className="h-[6rem] xs-mini:w-[310px]  lg:w-[28rem]  -mt-[45px]  "
          classNameText="xs-mini:text-[29px] lg:text-[42px]"
          classNameBg=" xs-mini:h-[18px] lg:h-[28px] xs-mini:w-[92px] lg:w-[139px] lg:top-[35px] xs-mini:top-[20px] "
        />
        <div className="xs:min-w-[343px] xs:max-w-[343px] lg:space-x-5  xl:min-w-[1255px] lg:max-w-[1255px]  ">
          <div className=" flex xs-mini:flex xs-mini:space-y-[40px] lg:space-y-[30px] flex-col lg:flex-row items-center lg:justify-between lg:space-x-3  w-full">
            <div className="half flex items-center justify-center  xs-mini:space-x-4 lg:space-x-8">
              <InfoCard />
              <JoinUsTextList />
            </div>
            <div className="half flex xs-mini:flex-row-reverse lg:flex-row items-center justify-center  xs-mini:space-x-4 lg:space-x-8">
              <InfoCardYellow />
              <JoinUsTextListSchool />
            </div>
          </div>
        </div>
        <div className="xs-mini:pt-12 lg:pt-10 xs-mini:pb-8 lg:pb-10">
          <button
            type="button"
            className=" xs-mini:font-[400] lg:font-[350] xs-mini:text-[14px] lg:text-[20px] text-applyBlue border-[2px] border-applyBlue xs-mini:rounded-full lg:rounded-[17px] lg:px-[55px] lg:py-[9px] xs-mini:px-[35px] xs-mini:py-[5px]"
          >
            Register
          </button>
        </div>
      </section>
      <section className="relative overflow-hidden xs-mini:h-[calc(100vh_-_10rem)]  lg:h-[calc(100vh_-_5rem)] w-full bg-[#FFF7CF]   flex flex-col space-y-5 items-center justify-center ">
        <div className="absolute xs-mini:-top-[200px]  xs-mini:-left-[300px] xl:left-0 xl:top-0">
          <BgLeftIcon />
        </div>
        <div className="absolute xs-mini:-right-[160px] xl:right-0 xs-mini:top-[400px] xl:top-0">
          <BgRightIcon />
        </div>
        <SectionHeaderComp
          text="Featured Schools"
          className="xs-mini:h-[2rem] lg:h-[6rem] xs-mini:w-[235px] lg:w-[21rem]"
          classNameText="xs-mini:text-[29px] lg:text-[42px]"
          classNameBg=" xs-mini:h-[18px] lg:right-[0px] lg:h-[23px] xs-mini:w-[240px] lg:w-[340px] lg:top-[32px] xs-mini:top-[20px] "
        />

        <SwiperFeatured />
        <div className="hidden xl:flex xs-mini:overflow-x-auto px-[90px] w-full  space-x-4 snap-x  z-30 scrollbar-hide ">
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
        </div>
      </section>
      <section className="relative overflow-hidden xs-mini:h-[calc(100vh_-_10rem)] lg:h-[calc(100vh_-_5rem)] w-full bg-white   flex flex-col space-y-5 items-center ">
        <div className="absolute  xs-mini:-right-[200px] xl:-right-[70px] xs-mini:top-[0px] xl:top-0">
          <BgLatestSection />
        </div>
        <SectionHeaderComp
          text="Latest News & Guides"
          className="xs-mini:h-[2rem] lg:h-[6rem] xs-mini:w-[280px] lg:w-[28rem]"
          classNameText="xs-mini:text-[28px] lg:text-[42px]"
          classNameBg="  xs-mini:h-[18px] lg:h-[23px] xs-mini:w-[195px] lg:w-[300px] lg:right-[22px] lg:top-[32px] xs-mini:top-[20px] "
        />
        <SwiperNews />
        <div className="hidden lg:flex space-x-[80px] w-full items-center justify-between px-[110px] ">
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>

        <div className="xs-mini:pb-10 lg:pt-10 pb-10">
          <button
            type="button"
            className=" xs-mini:font-[400] lg:font-[350] xs-mini:text-[14px] lg:text-[20px] text-applyBlue border-[2px] border-applyBlue xs-mini:rounded-full lg:rounded-[17px] lg:px-[55px] lg:py-[9px] xs-mini:px-[35px] xs-mini:py-[5px]"
          >
            View More
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomeWrapper(Home);
