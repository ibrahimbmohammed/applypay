/* eslint-disable react/no-danger */
import Image from '@hoc/next-base-image';
import Link from '@hoc/link';
import { GoLocation } from 'react-icons/go';
import { HiMail } from 'react-icons/hi';
import { RiArrowRightSFill } from 'react-icons/ri';
import { BsFacebook, BsTelephoneFill, BsLinkedin, BsTelegram } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" flex h-fit flex-col  bg-footer px-5 pb-4 sm:px-[60px] ">
      <div className="flex flex-col items-start justify-between py-2 sm:py-[4rem] md:flex-row">
        <div className=" md:max-w-[32rem]">
          <div
            className="cms-content prose-h5:hidden  prose-h6:hidden prose-h1:hidden prose-h2:text-2xl prose-h2:font-bold
               prose-h3:hidden prose-h4:hidden  prose-p:text-xs prose-p:font-normal prose-p:leading-5 prose-p:text-secondaryText prose-table:hidden sm:prose-h4:hidden sm:prose-p:text-lg sm:prose-p:leading-8 sm:prose-img:hidden "
          >
            The Nigerian Institute of Electrical and Electronic Engineers (NIEEE) was established in
            1984 as a group of COREN registered Electrical Engineers. Today, NIEEE houses all the
            specialties of Electrical Engineering disciplines and
          </div>
        </div>

        <div className="my-3 flex justify-around space-x-4 sm:my-0">
          <div className="w-1/2 sm:w-1/3">
            <p className="text-sm font-semibold text-secondaryText sm:text-xl">Get in Touch</p>
            <ul className="mt-3 space-y-3">
              <li className="flex items-center space-x-4">
                <GoLocation className="text-4xl text-white" />
                <p className="text-xs font-normal text-secondaryText sm:text-lg sm:font-normal ">
                  igerian Institute of Electrical and Electronic
                </p>
              </li>
              <li className="flex items-center space-x-4">
                <BsTelephoneFill className="text-white" />
                <p className="text-xs  font-normal text-secondaryText sm:text-lg sm:font-normal">
                  igerian Institute of Electrical and Electronic
                </p>
              </li>
              <li className="flex items-center space-x-4 text-xs font-normal sm:text-lg sm:font-normal">
                <HiMail className="text-white" />
                <p className="text-xs font-normal text-secondaryText sm:text-lg sm:font-normal">
                  igerian Institute of Electrical and Electronic
                </p>
              </li>
            </ul>
          </div>
          <div className="w-1/2 sm:w-1/3">
            <p className="text-sm font-semibold text-secondaryText sm:text-xl ">Quick Lines</p>
            <ul className="mt-3 space-y-3">
              <Link href="/about">
                <li className="flex items-center space-x-4">
                  <RiArrowRightSFill className="text-white" />
                  <p className="text-xs font-normal text-secondaryText sm:text-lg sm:font-medium">
                    igerian Institute of Electrical and Electronic
                  </p>
                </li>
              </Link>
              <Link href="/about">
                <li className="flex items-center space-x-4">
                  <RiArrowRightSFill className="text-white" />
                  <p className="text-xs font-normal text-secondaryText sm:text-lg sm:font-medium ">
                    igerian Institute of Electrical and Electronic
                  </p>
                </li>
              </Link>
              <Link href="/about">
                <li className="flex items-center space-x-4">
                  <RiArrowRightSFill className="text-white" />
                  <p className="text-xs font-normal text-secondaryText sm:text-lg sm:font-medium ">
                    igerian Institute of Electrical and Electronic
                  </p>
                </li>
              </Link>
              <Link href="/register">
                <li className="flex items-center space-x-4">
                  <RiArrowRightSFill className="text-white" />
                  <p className="text-xs font-normal text-secondaryText sm:text-lg sm:font-medium ">
                    igerian Institute of Electrical and Electronic
                  </p>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex items-center justify-center space-x-4 pb-5 sm:justify-start">
          <Link href="/#">
            <span className=" hover:cursor-pointer">
              <BsFacebook className="text-2xl text-secondaryText" />
            </span>
          </Link>
          <Link href="/#">
            <span className=" hover:cursor-pointer">
              <FaTwitter className="text-2xl text-secondaryText" />
            </span>
          </Link>
          <Link href="/#">
            <span className=" hover:cursor-pointer">
              <BsLinkedin className="text-2xl text-secondaryText" />
            </span>
          </Link>
          <Link href="/#">
            <span className=" hover:cursor-pointer">
              <BsTelegram className="text-2xl text-secondaryText" />
            </span>
          </Link>
        </div>
        <hr />
        <div className="mt-3">
          <p className="text-center text-xs font-normal text-secondaryText sm:text-left sm:text-sm ">
            © {new Date().getFullYear()}, igerian Institute of Electrical and Electronic | All
            Rights Reserved{' '}
          </p>
        </div>
      </div>
      <div className="absolute right-0">
        <Image className="" src="/" layout="fixed" height={150} width={150} />
      </div>
    </footer>
  );
};

export default Footer;
