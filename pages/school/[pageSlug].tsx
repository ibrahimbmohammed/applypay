import type { NextPage } from 'next';
import HomeWrapper from '@lib/hoc/home-wrapper';
import AsideSchoolMetaInfo from '@molecules/m-aside-meta-info';
import SectionHeaderComp from '@molecules/m-header-section';
import Ribbon from '@atoms/a-ribbon';
import { MdLocationOn } from 'react-icons/md';
import Image from 'next/image';
import Nordic from '@assets/svg/nordic.svg';
import BgRightIcon from '@lib/icons/home/bg-right-icon';
import FlagIcon from '@lib/icons/single-page/flag';
import KeyIcon from '@lib/icons/single-page/key';
import DisclosureComp from '@lib/hoc/disclosure';
import SwiperSingle from '@molecules/m-slider-single';
import SingleInfo from '@assets/svg/singleinfo.svg';
import BgLeftIcon from '@lib/icons/home/bg-left-icon';
import SwiperFeatured from '@molecules/m-slider-featured';
import FeaturedCard from '@molecules/m-card-featured';
import { FiUser } from 'react-icons/fi';
import { RiPhoneFill } from 'react-icons/ri';
import { FaGlobe } from 'react-icons/fa';
import Woman from '@assets/svg/inyellow.svg';
import VerifiedIcon from '@lib/icons/single-page/verified';
import RegisteredIcon from '@lib/icons/single-page/registered';
import LibraryIcon from '@lib/icons/arcodian/library';
import ScienceIcon from '@lib/icons/arcodian/science';
import IctIcon from '@lib/icons/arcodian/ict';
import PlayGroundIcon from '@lib/icons/arcodian/playground';
import BusIcon from '@lib/icons/arcodian/bus';
import MedIcon from '@lib/icons/arcodian/med';
import FacilityIcon from '@lib/icons/single-page/facility';
import BasketBallIcon from '@lib/icons/arcodian/basketball';
import FootBallIcon from '@lib/icons/arcodian/football';
import KarateIcon from '@lib/icons/arcodian/karate';
import CyclingIcon from '@lib/icons/arcodian/cycling';
import ChessIcon from '@lib/icons/arcodian/chess';
import TennisIcon from '@lib/icons/arcodian/tennis';
import SportIcon from '@lib/icons/single-page/sport';
import InfomationIcon from '@lib/icons/single-page/info';
import MapIcon from '@lib/icons/single-page/map';
import DeskIcon from '@lib/icons/single-page/desk';
import FileIcon from '@lib/icons/single-page/file';
import CurrencyIcon from '@lib/icons/single-page/currency';
// import required modules

const Blog: NextPage = () => {
  return (
    <div className="flex flex-col space-y-9 bg-background">
      <div className=" lg:pl-[109px] xs-mini:space-x-0  lg:space-x-6 lg:pr-[72px] bg-background flex xs-mini:flex-col lg:flex-row  ">
        <aside className="hidden lg:block sticky inset-x-0 min-w-[273px] space-y-5 top-0 left-0 py-5 self-baseline overflow-y-auto max-h-screen scrollbar-hide">
          <AsideSchoolMetaInfo />
          <div className="bg-white px-[19px] py-[20px] rounded-[6px] max-w-[298px] h-fit flex flex-col space-y-[24px] items-center justify-start">
            <div className=" w-full">
              <SectionHeaderComp
                text="Updates"
                className="h-[3rem] xs-mini:w-[55px] lg:w-[50px]"
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
        <main className="flex flex-col w-full items-center justify-start space-y-5 pb-[34px]">
          <div className="">
            <p className="xs-mini:text-[20px] lg:text-[34px] xs-mini:font-[400] lg:font-[700]">
              Nordic International School
            </p>
          </div>
          <div className="bg-white flex flex-col space-y-4 xs-mini:w-[340px] xs-mini:px-[18px] xs-mini:py-[24px] lg:px-[40px] lg:py-[24px] lg:w-[831px] xs-mini:h-[651px] lg:h-[741px] rounded-[6px]  ">
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
            <div className="flex items-start space-x-2 xs-mini:pb-[35px] lg:pb-[5px] xs-mini:pt-[5px] lg:pt-[15px] ">
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

            <div className=" relative border">
              <SwiperSingle />
              <div className="absolute z-50 xs-mini:top-[80px] lg:top-[330px] right-5">
                <Image src={SingleInfo} />
              </div>
            </div>
          </div>
          <div className="bg-white lg:hidden flex flex-col space-y-4 xs-mini:w-[340px] xs-mini:px-[18px] xs-mini:py-[24px] lg:px-[40px] lg:py-[24px] lg:w-[831px] h-fit rounded-[6px]  ">
            <div className="ppp flex space-x-4 items-center ">
              <div className="wwww flex flex-col items-center justify-center space-y-2 p-2 w-1/2 rounded-[6px] bg-white shadow-md">
                <div className="">
                  <Image src={Woman} />
                </div>

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
                      Government <br /> Registered
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="text-[10px] text-white border-[2px] bg-applyBlue border-applyBlue rounded-[6px] px-[30px] py-[6px]"
                >
                  Apply Online
                </button>
              </div>
              <div className="ccc w-1/2 flex flex-col space-y-4">
                <div className="flex flex-col xs-mini:space-y-4 xl:space-y-4 self-start  xl:pt-4">
                  <p className=" ">Contact School</p>
                  <div className="flex items-center xs-mini:space-x-2 xl:space-x-5">
                    <FiUser className="text-applyBlue xl:text-[25px]" />
                    <p className="text-[#51596C] xs-mini:font-[450] xl:font-[350]  xs-mini:text-[9.5px] xl:text-[15px]">
                      Mrs. Francisca Green
                    </p>
                  </div>
                  <div className="flex items-center xs-mini:space-x-2 xl:space-x-5">
                    <RiPhoneFill className="text-applyBlue xl:text-[25px]" />
                    <p className="text-[#51596C] xs-mini:font-[450] xl:font-[350] xs-mini:text-[9.5px] xl:text-[15px]">
                      <a className="no-underline" href="tel:09015525136 ">
                        09015525136
                      </a>
                    </p>
                  </div>
                  <div className="flex items-center xs-mini:space-x-2 xl:space-x-5">
                    <RiPhoneFill className="text-applyBlue xl:text-[25px]" />
                    <p className="text-[#51596C] xs-mini:font-[450] xl:font-[350] xs-mini:text-[9.5px] xl:text-[15px]">
                      <a className="no-underline" href="tel:09015525136 ">
                        09015525136
                      </a>
                    </p>
                  </div>
                  <div className="flex items-center xs-mini:space-x-2 xl:space-x-5">
                    <FaGlobe className="text-applyBlue xl:text-[25px]" />
                    <p className="text-[#51596C] xs-mini:font-[450] xl:font-[350] xs-mini:text-[9.5px] xl:text-[15px]">
                      <a href="/" className="no-underline" target="_blank">
                        {' '}
                        www.nordicschool.com
                      </a>
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="text-[10px] text-applyBlue border-[2px] border-applyBlue rounded-[6px]  px-[30px] py-[6px]"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white flex flex-col space-y-4 xs-mini:w-[340px] xs-mini:px-[18px] xs-mini:py-[24px] lg:px-[40px] lg:py-[24px] lg:w-[831px] h-fit rounded-[6px]  ">
            <DisclosureComp>
              <div className="flex space-x-2">
                <KeyIcon />
                <SectionHeaderComp
                  text="Key Information"
                  className="h-[1rem] xs-mini:w-[120px] lg:w-[150px]"
                  classNameText="xs-mini:text-[16px] lg:text-[20px]"
                  classNameBg=" lg:top-[13px] lg:-right-[0px] xs-mini:h-[15px] lg:h-[15px] xs-mini:w-[120px] lg:w-[150px] xs-mini:top-[9px]"
                />
              </div>
              <table className="table-auto w-full  ">
                <thead>
                  <tr>
                    <th> </th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody className="divide-y w-full ">
                  <tr>
                    <td>
                      <p className="font-[350] py-2 text-[#3F3F3F]">Founded</p>
                    </td>
                    <td>
                      <p className="font-[200] pl-2 text-[14px]">2015</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="font-[350] py-2 text-[#3F3F3F]">Ownership</p>
                    </td>
                    <td>
                      <p className="font-[200] pl-2 text-[14px]">Private</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="font-[350] py-2 text-[#3F3F3F]">Faith Affiliation</p>
                    </td>
                    <td>
                      <p className="font-[200] pl-2 text-[14px]">Christian</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="font-[350] py-2 text-[#3F3F3F]">Scholarship</p>
                    </td>
                    <td>
                      <p className="font-[200] pl-2 text-[14px]">No</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="font-[350] py-2 text-[#3F3F3F]">Student Population</p>
                    </td>
                    <td>
                      <p className="font-[200] pl-2 text-[14px]">47</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="font-[350] py-2 text-[#3F3F3F]">Teaching Staff</p>
                    </td>
                    <td>
                      <p className="font-[200] pl-2 text-[14px]">10</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="font-[350] py-2 text-[#3F3F3F]">Non-Teaching Staff</p>
                    </td>
                    <td>
                      <p className="font-[200] pl-2 text-[14px]">2015</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="font-[350] py-2 text-[#3F3F3F]">Special Need</p>
                    </td>
                    <td>
                      <p className="font-[200] pl-2 text-[14px]">Yes</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="font-[350] py-2 text-[#3F3F3F]">Curriculum</p>
                    </td>
                    <td>
                      <p className="font-[200] pl-2 text-[14px]">
                        National Curriculum of England & Wales
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="font-[350] py-2">School Fees Discount</p>
                    </td>
                    <td>
                      <p className="font-[200] pl-2 text-[14px]">
                        Upfront Yearly Payment Discount Siblings Discount
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </DisclosureComp>
          </div>
          <div className="bg-white flex flex-col space-y-4 xs-mini:w-[340px] xs-mini:px-[18px] xs-mini:py-[24px] lg:px-[40px] lg:py-[24px] lg:w-[831px] h-fit rounded-[6px]  ">
            <DisclosureComp>
              <div className="flex space-x-2">
                <CurrencyIcon />
                <SectionHeaderComp
                  text="Tuition & Application Fees"
                  className="h-[2px] xs-mini:w-[200px] lg:w-[250px]"
                  classNameText="xs-mini:text-[16px] lg:text-[20px]"
                  classNameBg=" lg:top-[13px] lg:right-[8px] xs-mini:h-[18px] lg:h-[15px] lg:w-[240px] xs-mini:w-[200px] xs-mini:top-[10px]"
                />
              </div>
              <table className="table-auto w-full  ">
                <thead>
                  <tr>
                    <th> </th>
                    <th className="text-start font-[350] py-2 text-[#3F3F3F]">Tuition</th>
                    <th className="text-start  font-[350] py-2 text-[#3F3F3F]">Application Fees</th>
                  </tr>
                </thead>
                <tbody className="divide-y w-full ">
                  <tr>
                    <td>
                      <p className="font-[350] py-2 text-[#3F3F3F]">Pre-Nursery </p>
                    </td>
                    <td>
                      <p className="font-[200] pl-2 text-[14px]">Below N74,999 </p>
                    </td>
                    <td>
                      <p className="font-[200] pl-2 text-[14px]">N10,000</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="font-[350] py-2 text-[#3F3F3F]">Nursery </p>
                    </td>
                    <td>
                      <p className="font-[200] pl-2 text-[14px]">N75,000 – N149,999 </p>
                    </td>
                    <td>
                      <p className="font-[200] pl-2 text-[14px]">N15,000</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="font-[350] py-2 text-[#3F3F3F]">Primary </p>
                    </td>
                    <td>
                      <p className="font-[200] pl-2 text-[14px]">N75,000 – N149,999 </p>
                    </td>
                    <td>
                      <p className="font-[200] pl-2 text-[14px]">N15,000</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="font-[350] py-2 text-[#3F3F3F]">Junior Secondary </p>
                    </td>
                    <td>
                      <p className="font-[200] pl-2 text-[14px]">N75,000 – N149,999 </p>
                    </td>
                    <td>
                      <p className="font-[200] pl-2 text-[14px]">N15,000</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="font-[350] py-2 text-[#3F3F3F]">Senior Secondary</p>
                    </td>
                    <td>
                      <p className="font-[200] pl-2 text-[14px]">N75,000 – N149,999</p>
                    </td>
                    <td>
                      <p className="font-[200] pl-2 text-[14px]">N15,000</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </DisclosureComp>
          </div>
          <div className="bg-white flex flex-col space-y-4 xs-mini:w-[340px] xs-mini:px-[18px] xs-mini:py-[24px] lg:px-[40px] lg:py-[24px] lg:w-[831px] h-fit rounded-[6px]  ">
            <DisclosureComp>
              <div className="flex space-x-2">
                <FileIcon />
                <SectionHeaderComp
                  text="Admissions"
                  className="h-[2px] xs-mini:w-[90px]  lg:w-[150px]"
                  classNameText="xs-mini:text-[16px] lg:text-[20px]"
                  classNameBg="lg:top-[13px] lg:right-[43px] xs-mini:h-[18px] lg:h-[15px] xs-mini:w-[90px] lg:w-[110px] xs-mini:top-[10px] "
                />
              </div>
              <div className="flex flex-col ">
                <p className="font-[500]">Contact us at</p>
                <p className="font-[100] text-[#51596C] ">
                  17, Ramotu Oluwakemi Street 8b, Sesan Osinoye Street Medina Estate, Gbagada –
                  Lagos Phone:
                  <a className="no-underline" href="tel:+234-01-4531398">
                    +234-01-4531398
                  </a>
                  ,
                  <br />
                  <a className="no-underline" href="tel:+2348130811763">
                    +2348130811763
                  </a>
                  ,
                  <a className="no-underline" href="tel:+2348023139337">
                    +2348023139337
                  </a>
                  , Email: info@happydayspreschoolng.com
                </p>
              </div>
            </DisclosureComp>
          </div>
          <div className="bg-white flex flex-col space-y-4 xs-mini:w-[340px] xs-mini:px-[18px] xs-mini:py-[24px] lg:px-[40px] lg:py-[24px] lg:w-[831px] h-fit rounded-[6px]  ">
            <DisclosureComp>
              <div className="flex space-x-2">
                <DeskIcon />
                <SectionHeaderComp
                  text="Exams Preparation"
                  className="h-[2px] xs-mini:w-[140px]  lg:w-[190px]"
                  classNameText="xs-mini:text-[16px] lg:text-[20px]"
                  classNameBg=" lg:top-[13px] lg:right-[12px] xs-mini:h-[18px] lg:h-[15px] xs-mini:w-[140px] lg:w-[180px] xs-mini:top-[10px]"
                />
              </div>
              <table className="table-auto w-full  ">
                <thead>
                  <tr>
                    <th> </th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody className="divide-y w-full ">
                  <tr>
                    <td>
                      <p className="font-[350] py-2 text-[#3F3F3F]">Nursery</p>
                    </td>
                    <td>
                      <p className="font-[200] pl-2 text-[14px]">N/A</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="font-[350] py-2 text-[#3F3F3F]">Primary</p>
                    </td>
                    <td>
                      <p className="font-[200] pl-2 text-[14px] leading-[30px]">
                        KS2 SAT Examination
                        <br /> KS3 SAT Examination <br />
                        National Common Examination
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="font-[350] py-2 text-[#3F3F3F]">Junior Secondary</p>
                    </td>
                    <td>
                      <p className="font-[200] pl-2 text-[14px]">Junior Secondary Examination</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="font-[350] py-2 text-[#3F3F3F]">Senior Secondary</p>
                    </td>
                    <td>
                      <p className="font-[200] pl-2 text-[14px]">
                        National Examination Council (NECO)
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </DisclosureComp>
          </div>
          <div className="bg-white flex flex-col space-y-4 xs-mini:w-[340px] xs-mini:px-[18px] xs-mini:py-[24px] lg:px-[40px] lg:py-[24px] lg:w-[831px] h-fit rounded-[6px]  ">
            <DisclosureComp>
              <div className="flex space-x-2">
                <FacilityIcon />
                <SectionHeaderComp
                  text="School Facilities"
                  className="h-[2px] xs-mini:w-[125px]  lg:w-[150px]"
                  classNameText="xs-mini:text-[16px] lg:text-[20px]"
                  classNameBg=" lg:top-[13px] lg:-right-[0px] xs-mini:h-[18px] lg:h-[15px] xs-mini:w-[125px] lg:w-[150px] xs-mini:top-[10px]"
                />
              </div>
              <div className="grid grid-cols-3 justify-items-center xs-mini:gap-x-[10px] xl:gap-x-[120px] xs-mini:gap-y-[20px] lg:gap-y-[40px] ">
                <div className="flex flex-col space-y-[1px] items-center">
                  <LibraryIcon />
                  <p className="font-[200] lg:text-[13px]  xs-mini:text-[9px] text-[#51596C]">
                    Library
                  </p>
                </div>
                <div className="flex flex-col space-y-[1px] items-center">
                  <ScienceIcon />
                  <p className="font-[200] lg:text-[13px]  xs-mini:text-[9px] text-[#51596C]">
                    Science Laboratory
                  </p>
                </div>
                <div className="flex flex-col space-y-[1px] items-center">
                  <IctIcon />
                  <p className="font-[200] lg:text-[13px]  xs-mini:text-[9px] text-[#51596C]">
                    ICT Laboratory
                  </p>
                </div>
                <div className="flex flex-col space-y-[1px] items-center">
                  <PlayGroundIcon />
                  <p className="font-[200] lg:text-[13px]  xs-mini:text-[9px] text-[#51596C]">
                    Playground
                  </p>
                </div>
                <div className="flex flex-col space-y-[1px] items-center">
                  <BusIcon />
                  <p className="font-[200] lg:text-[13px]  xs-mini:text-[9px] text-[#51596C]">
                    School Buses
                  </p>
                </div>
                <div className="flex flex-col space-y-[1px] items-center">
                  <MedIcon />
                  <p className="font-[200] lg:text-[13px]  xs-mini:text-[9px] text-[#51596C]">
                    Medical Facilities
                  </p>
                </div>
              </div>
            </DisclosureComp>
          </div>
          <div className="bg-white flex flex-col space-y-4 xs-mini:w-[340px] xs-mini:px-[18px] xs-mini:py-[24px] lg:px-[40px] lg:py-[24px] lg:w-[831px] h-fit rounded-[6px]  ">
            <DisclosureComp>
              <div className="flex space-x-2">
                <SportIcon />
                <SectionHeaderComp
                  text="Sports & Activities"
                  className="h-[2px] xs-mini:w-[140px] lg:w-[170px]"
                  classNameText="xs-mini:text-[16px] lg:text-[20px]"
                  classNameBg=" lg:top-[13px] lg:-right-[0px] xs-mini:h-[18px] lg:h-[15px] xs-mini:w-[140px] lg:w-[170px] xs-mini:top-[10px]"
                />
              </div>
              <div className="grid grid-cols-3 justify-items-center xs-mini:gap-x-[10px] xl:gap-x-[120px] xs-mini:gap-y-[20px] lg:gap-y-[40px] ">
                <div className="flex flex-col space-y-[1px] items-center">
                  <BasketBallIcon />
                  <p className="font-[200] lg:text-[13px]  xs-mini:text-[9px] text-[#51596C]">
                    Basketball
                  </p>
                </div>
                <div className="flex flex-col space-y-[1px] items-center">
                  <FootBallIcon />
                  <p className="font-[200] lg:text-[13px]  xs-mini:text-[9px] text-[#51596C]">
                    Football
                  </p>
                </div>
                <div className="flex flex-col space-y-[1px] items-center">
                  <KarateIcon />
                  <p className="font-[200] lg:text-[13px]  xs-mini:text-[9px] text-[#51596C]">
                    Karate
                  </p>
                </div>
                <div className="flex flex-col space-y-[1px] items-center">
                  <CyclingIcon />
                  <p className="font-[200] lg:text-[13px]  xs-mini:text-[9px] text-[#51596C]">
                    Cycling
                  </p>
                </div>
                <div className="flex flex-col space-y-[1px] items-center">
                  <ChessIcon />
                  <p className="font-[200] lg:text-[13px]  xs-mini:text-[9px] text-[#51596C]">
                    Chess
                  </p>
                </div>
                <div className="flex flex-col space-y-[1px] items-center">
                  <TennisIcon />
                  <p className="font-[200] lg:text-[13px]  xs-mini:text-[9px] text-[#51596C]">
                    Table Tennis
                  </p>
                </div>
              </div>
            </DisclosureComp>
          </div>
          <div className="bg-white flex flex-col space-y-4 xs-mini:w-[340px] xs-mini:px-[18px] xs-mini:py-[24px] lg:px-[40px] lg:py-[24px] lg:w-[831px] h-fit rounded-[6px]  ">
            <DisclosureComp>
              <div className="flex space-x-2">
                <InfomationIcon />
                <SectionHeaderComp
                  text="About Us"
                  className="h-[2px] xs-mini:w-[70px]  lg:w-[90px]"
                  classNameText="xs-mini:text-[16px] lg:text-[20px]"
                  classNameBg=" lg:top-[13px] lg:right-[2px] xs-mini:h-[18px] lg:h-[15px] xs-mini:w-[70px] lg:w-[90px] xs-mini:top-[10px]"
                />
              </div>
              <div className="">
                <p className="font-[200] text-[#51596C]">
                  Claret Schools was established to provide Private Nursery and Primary School
                  Education. The School is located at Plot 700, Gitto Road, Mabushi, Abuja, FCT,
                  Nigeria.
                  <br />
                  <br />
                  The School operates a robust Early YearsFoundation Stage (EYFS) in the Nursery
                  Section. The Primary Section operates a rich blend of the Nigerian and the
                  International Primary Curricula with the use of the Edexcel International Primary
                  Curriculum in Numeracy (Mathematics), Science and Literacy (English).
                  <br />
                  <br />
                  Learning with the International Primary Curriculum means that the children focus
                  on a combination of academic, personal and international learning that is exciting
                  and challenging. The aim of the IPC is to help every child enjoy the learning of a
                  wide range of subjects and to develop an inquiring mind and personal attributes
                  that will help them throughout teenage and adult years, and to develop a sense of
                  their own nationality and culture at the same time, developing a profound respect
                  for the nationalities and cultures of others. Through the IPC approach to
                  learning, children develop the knowledge, skills and understanding necessary to
                  confidently face the world of tomorrow.
                </p>
              </div>
            </DisclosureComp>
          </div>
          <div className="bg-white flex flex-col space-y-4 xs-mini:w-[340px] xs-mini:px-[18px] xs-mini:py-[24px] lg:px-[40px] lg:py-[24px] lg:w-[831px] h-fit rounded-[6px]  ">
            <DisclosureComp>
              <div className="flex space-x-2">
                <MapIcon />
                <SectionHeaderComp
                  text="Map"
                  className="h-[2px] xs-mini:w-[40px]  lg:w-[45px]"
                  classNameText="xs-mini:text-[16px] lg:text-[20px]"
                  classNameBg=" lg:top-[13px] lg:right-[2px] xs-mini:h-[18px] lg:h-[15px] xs-mini:w-[40px] lg:w-[45px] xs-mini:top-[10px]"
                />
              </div>
              <div className="google-map-code">
                <div className="hidden lg:flex">
                  <iframe
                    title="mymap"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
                    width="700"
                    height="450"
                    style={{ border: '0' }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <div className="flex lg:hidden">
                  <iframe
                    title="mymap"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
                    width="270"
                    height="450"
                    style={{ border: '0' }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </DisclosureComp>
          </div>
        </main>
      </div>
      <section className="relative overflow-hidden h-[calc(100vh_-_5rem)] w-full bg-[#FFF7CF]   flex flex-col space-y-5 items-center ">
        <div className="absolute xs-mini:-top-[200px]  xs-mini:-left-[300px] xl:left-0 xl:top-0">
          <BgLeftIcon />
        </div>
        <div className="absolute xs-mini:-right-[160px] xl:right-0 xs-mini:top-[400px] xl:top-0">
          <BgRightIcon />
        </div>
        <SectionHeaderComp
          text="Featured Schools"
          className="h-[6rem] xs-mini:w-[235px] lg:w-[21rem]"
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
    </div>
  );
};

export default HomeWrapper(Blog);
