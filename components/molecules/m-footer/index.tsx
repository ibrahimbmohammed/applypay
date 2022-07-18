/* eslint-disable react/no-danger */
import Image from '@hoc/next-base-image';
import Link from '@hoc/link';
import ApplyLogo from '@assets/svg/applyLogoWhite.svg';
import FooterEnd from '@assets/svg/footerEnd.svg';
import SocailLists from '@molecules/m-item-list-socails';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden  flex h-fit flex-col justify-between  bg-footer px-5 pb-4 xs-mini:px-[14px] lg:pl-[156px] lg:pr-[100px]  min-h-[553px] ">
      <div className="flex  flex-col items-start xs-mini:space-y-[30px] lg:space-y-[0px]  justify-between py-2 sm:py-[4rem] md:flex-row xs-mini:mt-[10px] lg:mt-[10px]">
        <div className=" md:max-w-[32rem] flex-col xs-mini:space-y-[12px] lg:space-y-[20px]">
          <div className="max-h-[70px] xs-mini:max-w-[244px] lg:max-w-[339px] overflow-hidden ">
            <Image src={ApplyLogo} />
          </div>
          <div className=" xs-mini:max-w-[204px] lg:max-w-[224px] ">
            <p className="text-[#A9B6CD] font-[450] xs-mini:text-[12px] lg:text-[13px] text-justify   lg:pr-[0]">
              Apply Schools help PARENTS find the right schools for their children.
            </p>
          </div>
          <button
            type="button"
            className="text-[15px] text-white border-[2px] bg-applyBlue border-applyBlue rounded-[6px] xs-mini:px-[25px] xs-mini:py-[6px] lg:px-[25px] lg:py-[10px]"
          >
            Register
          </button>
        </div>

        <div className="my-3 flex flex-col lg:pt-[32px] lg:flex-row justify-around lg:space-x-2 sm:my-0 xs-mini:space-y-[40px] lg:space-y-0 ">
          <div className="flex w-full">
            <div className="w-1/2 sm:w-1/3">
              <p className="text-sm font-[450] text-[#8C97AC] ">Help</p>
              <ul className="mt-3 space-y-3">
                <li className="flex items-center">
                  <p className="text-[12px] text-white font-[450]  ">FAQs</p>
                </li>
                <li className="flex items-center ">
                  <p className="text-[12px] text-white font-[450] ">Support</p>
                </li>
                <li className="flex items-center l">
                  <p className="text-[12px] text-white font-[450] ">Contact Us</p>
                </li>
              </ul>
            </div>
            <div className="w-1/2 sm:w-1/3">
              <p className="text-sm font-[450] text-[#8C97AC] ">About</p>
              <ul className="mt-3 space-y-3">
                <Link href="/about">
                  <li className="flex items-center ">
                    <p className="text-[12px] text-white font-[450] ">Terms & Conditions</p>
                  </li>
                </Link>
                <Link href="/about">
                  <li className="flex items-center ">
                    <p className="text-[12px] text-white font-[450]  ">Privacy Policy</p>
                  </li>
                </Link>
              </ul>
            </div>
            <div className="hidden lg:block xs-mini:w-full lg:w-1/3">
              <p className="text-sm font-[450] text-[#8C97AC] ">Address</p>
              <ul className="mt-3 space-y-3">
                <Link href="/about">
                  <li className="flex items-center  ">
                    <p className="text-[12px] text-left text-white font-[450] xs-mini:pr-[20px] leading-[25px] lg:pr-0 ">
                      Aply Technologies Limited, Ventures Park, 29, Mambila Str, Maitama, Abuja,
                      Nigeria.
                    </p>
                  </li>
                </Link>
                <Link href="/about">
                  <li className="flex items-center ">
                    <p className="text-[12px] text-[#F6BD2A] font-[450]   ">
                      +234 901 552 5136 <br /> customer@applyi.ng
                    </p>
                  </li>
                </Link>
              </ul>
            </div>
          </div>

          <div className="lg:hidden xs-mini:w-full lg:w-1/3">
            <p className="text-sm font-[450] text-[#8C97AC] ">Address</p>
            <ul className="mt-3 space-y-3">
              <Link href="/about">
                <li className="flex items-center ">
                  <p className="text-[12px] text-left text-white font-[450] xs-mini:pr-[80px] leading-[20px] lg:pr-0 ">
                    Aply Technologies Limited, Ventures Park, 29, Mambila Str, Maitama, Abuja,
                    Nigeria.
                  </p>
                </li>
              </Link>
              <Link href="/about">
                <li className="flex items-center ">
                  <p className="text-[12px] text-[#F6BD2A] font-[450]   ">
                    +234 901 552 5136 <br /> customer@applyi.ng
                  </p>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="">
        <hr className="border-b border-[#1F3254] " />
        <div className="lg:mt-[22px] lg:mb-[12px]   flex flex-col lg:flex-row items-center lg:justify-between space-y-2 lg:space-y-0">
          <p className="text-center text-[12px]  font-[450] text-[#8C97AC]  ">
            © Aply Technologies, {new Date().getFullYear()}. All Rights Reserved.
          </p>
          <SocailLists />
        </div>
      </div>
      <div className="absolute xs-mini:-left-[60px] xs-mini:-rotate-[25deg] xs-mini:-bottom-[60px] lg:-rotate-0 lg:left-0 lg:-bottom-[10px]">
        <Image className="" src={FooterEnd} />
      </div>
    </footer>
  );
};

export default Footer;
