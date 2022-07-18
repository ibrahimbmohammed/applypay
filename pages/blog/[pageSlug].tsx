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
                  className="h-[6rem] xs-mini:w-[55px] lg:w-[150px]"
                  classNameText="xs-mini:text-[29px] lg:text-[20px]"
                  classNameBg="xs-mini:top-6 lg:top-[13px] lg:-right-[0px] xs-mini:h-[18px] lg:h-[15px] w-[150px]"
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
                <KeyIcon />
                <SectionHeaderComp
                  text="Tuition & Application Fees"
                  className="h-[6rem] xs-mini:w-[55px] lg:w-[250px]"
                  classNameText="xs-mini:text-[29px] lg:text-[20px]"
                  classNameBg="xs-mini:top-6 lg:top-[13px] lg:-right-[0px] xs-mini:h-[18px] lg:h-[15px] w-[150px]"
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
                <KeyIcon />
                <SectionHeaderComp
                  text="Admissions"
                  className="h-[6rem] xs-mini:w-[55px] lg:w-[150px]"
                  classNameText="xs-mini:text-[29px] lg:text-[20px]"
                  classNameBg="xs-mini:top-6 lg:top-[13px] lg:-right-[0px] xs-mini:h-[18px] lg:h-[15px] w-[150px]"
                />
              </div>
              <div className="flex flex-col ">
                <p className="">Contact us at</p>
                <p className="font-[100]">
                  17, Ramotu Oluwakemi Street 8b, Sesan Osinoye Street Medina Estate, Gbagada –
                  Lagos Phone: +234-01-4531398, +2348130811763, +2348023139337 Email:
                  info@happydayspreschoolng.com
                </p>
              </div>
            </DisclosureComp>
          </div>
          <div className="bg-white flex flex-col space-y-4 xs-mini:w-[340px] xs-mini:px-[18px] xs-mini:py-[24px] lg:px-[40px] lg:py-[24px] lg:w-[831px] h-fit rounded-[6px]  ">
            <DisclosureComp>
              <div className="flex space-x-2">
                <KeyIcon />
                <SectionHeaderComp
                  text="Exams Preparation"
                  className="h-[6rem] xs-mini:w-[55px] lg:w-[150px]"
                  classNameText="xs-mini:text-[29px] lg:text-[20px]"
                  classNameBg="xs-mini:top-6 lg:top-[13px] lg:-right-[0px] xs-mini:h-[18px] lg:h-[15px] w-[150px]"
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
                <KeyIcon />
                <SectionHeaderComp
                  text="School Facilities"
                  className="h-[6rem] xs-mini:w-[55px] lg:w-[150px]"
                  classNameText="xs-mini:text-[29px] lg:text-[20px]"
                  classNameBg="xs-mini:top-6 lg:top-[13px] lg:-right-[0px] xs-mini:h-[18px] lg:h-[15px] w-[150px]"
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
                <KeyIcon />
                <SectionHeaderComp
                  text="Sports & Activities"
                  className="h-[6rem] xs-mini:w-[55px] lg:w-[150px]"
                  classNameText="xs-mini:text-[29px] lg:text-[20px]"
                  classNameBg="xs-mini:top-6 lg:top-[13px] lg:-right-[0px] xs-mini:h-[18px] lg:h-[15px] w-[150px]"
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
                <KeyIcon />
                <SectionHeaderComp
                  text="About Us"
                  className="h-[6rem] xs-mini:w-[55px] lg:w-[150px]"
                  classNameText="xs-mini:text-[29px] lg:text-[20px]"
                  classNameBg="xs-mini:top-6 lg:top-[13px] lg:-right-[0px] xs-mini:h-[18px] lg:h-[15px] w-[150px]"
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
                <KeyIcon />
                <SectionHeaderComp
                  text="Map"
                  className="h-[6rem] xs-mini:w-[55px] lg:w-[150px]"
                  classNameText="xs-mini:text-[29px] lg:text-[20px]"
                  classNameBg="xs-mini:top-6 lg:top-[13px] lg:-right-[0px] xs-mini:h-[18px] lg:h-[15px] w-[150px]"
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
