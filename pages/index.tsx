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
import JoinUsTextList from '@molecules/m-text-list-join-us';
import SearchComp from '@molecules/m-search-comp';
import SocailLists from '@molecules/m-item-list-socails';

const Home: NextPage = () => {
  return (
    <div className="overflow-hidde">
      <section className="xs-mini:overflow-hidden lg:overflow-visible h-[calc(100vh_-_5rem)] bg-background flex flex-col space-y-5 items-center justify-center">
        <div className="flex flex-col items-center space-y-3  lg:space-x-8 ">
          <div className="relative xs-mini:mt-[300px] xs:mt-[159px]   h-[10rem] w-[16rem]  lg:hidden ">
            <h2 className="absolute text-center font-[500] text-[42px] z-50 ">
              Find the Right School
            </h2>

            <div
              className="absolute right-0 top-[6.2rem] h-[23px] w-[139px] bg-applyYellow rounded-[4px] z-10"
              style={{ opacity: '0.5' }}
            />
          </div>
          <p className="lg:hidden xs-mini:max-w-[270px] xs:max-w-[343px]  xs-mini:max-h-[110px] xs:max-h-[100px]   xs-mini:self-center border font-[450] xs-mini:pt-[50px] xs-mini:px-[5px] xs-mini:text-[15px] xs:text-[20px]  tracking-[0.02rem] leading-[30px]   text-xl ">
            We’ve helped several parents find the right schools for their children.
          </p>
          <div className="border xs-mini:flex-col flex lg:flex-row w-full h-full">
            <SearchComp />
            <div className="border">
              <Image src={HeroImg} width="630" height="530" />
            </div>
          </div>

          <p className="xs-mini:hidden  lg:block font-[450] text-xl lg:order-3">
            We’ve helped several parents find the right schools for their children.
          </p>
          <SocailLists />
        </div>
      </section>
      <section className="h-fit xs-mini:pt-[38px] xs-mini:pb-[74px]   lg:py-[73px]  w-full bg-white flex flex-col space-y-5 items-center ">
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
      <section className="h-[calc(100vh_-_5rem)] bg-white flex flex-col space-y-5 items-center justify-center">
        <SectionHeaderComp
          text="Why you should join us"
          className="h-[6rem] xs-mini:w-[310px] lg:w-[28rem]"
          classNameText="xs-mini:text-[29px] lg:text-[42px]"
          classNameBg="xs-mini:top-6 lg:top-9 xs-mini:h-[18px] lg:h-[23px] xs-mini:w-[92px] lg:w-[139px]"
        />
        <div className="xs:min-w-[343px] xs:max-w-[343px] border lg:min-w-[1255px] lg:max-w-[1255px] ">
          <div className=" flex xs-mini:flex flex-col xl:flex-row items-center justify-center xl:space-x-3  w-full">
            <div className="half flex items-center justify-center  xs-mini:space-x-4 xl:space-x-8">
              <InfoCard />
              <JoinUsTextList />
            </div>
            <div className="half flex flex-row-reverse items-center justify-center  xs-mini:space-x-4 xl:space-x-8">
              <InfoCard />
              <JoinUsTextList />
            </div>
          </div>
        </div>
        <div className="">
          <button
            type="button"
            className="text-[25px] text-applyBlue border-[2px] border-applyBlue rounded-xl px-10 py-3"
          >
            Register
          </button>
        </div>
      </section>
      <section className="relative overflow-hidden h-[calc(100vh_-_5rem)] w-full bg-[#FFF7CF]   flex flex-col space-y-5 items-center ">
        <div className="absolute xs-mini:-top-[200px]  xs-mini:-left-[300px] xl:left-0 xl:top-0">
          <BgLeftIcon />
        </div>
        <div className="absolute xs-mini:-right-[160px] xl:right-0 xs-mini:top-[400px] xl:top-0">
          <BgRightIcon />
        </div>
        <SectionHeaderComp
          text="Featured Schools"
          className="h-[6rem] xs-mini:w-[235px] lg:w-[28rem]"
          classNameText="xs-mini:text-[29px] lg:text-[42px]"
          classNameBg="xs-mini:top-6 lg:top-9 xs-mini:h-[18px] lg:h-[23px] xs-mini:w-[240px] lg:w-[139px]"
        />
        {/* lg:min-w-[1255px] max-w-[1255px] */}
        <div className="border xs-mini:overflow-x-auto px-[20vw] w-full flex space-x-4 snap-x  z-30 scrollbar-hide ">
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
      <section className="relative overflow-hidden h-[calc(100vh_-_5rem)] w-full bg-white   flex flex-col space-y-5 items-center ">
        <div className="absolute  xs-mini:-right-[200px] xl:right-0 xs-mini:top-[0px] xl:top-0">
          <BgLatestSection />
        </div>
        <SectionHeaderComp
          text="Latest News & Guides"
          className="xs-mini:w-[280px] lg:w-[28rem]"
          classNameText="xs-mini:text-[28px] lg:text-[42px]"
          classNameBg="xs-mini:top-5 lg:top-9 xs-mini:h-[18px] lg:h-[23px] xs-mini:w-[195px] lg:w-[139px]"
        />
        <div className="border xs-mini:overflow-x-auto px-[20vw] w-full flex space-x-4 snap-x  z-30 scrollbar-hide ">
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>

        <div className="">
          <button
            type="button"
            className="text-[25px] text-applyBlue border-[2px] border-applyBlue rounded-xl px-10 py-3"
          >
            View More
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomeWrapper(Home);
