import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NavbarItem from '@atoms/a-nav-item';
import { CgClose } from 'react-icons/cg';
import ApplyLogo from '@assets/svg/applyLogo.svg';
import { UrlObject } from 'url';
import { useRouter } from 'next/router';
import BarIcon from '@lib/icons/home/open-icon';
import Image from '@hoc/next-base-image';
import { Transition } from '@headlessui/react';

interface NavBarProps {
  className?: string;
}

declare type Url = string | UrlObject;

export interface Route {
  title: string;
  link: Url;
  submenu?: Array<Route | undefined>;
}

const routesItems: Route[] = [
  { title: 'Home', link: '/' },
  { title: 'Blog', link: '/blog' },
  { title: 'Register', link: '/register' },
  { title: 'Login', link: `/login` },
];

function Navbar({ className }: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubOpen, setIsSubOpen] = useState(false);

  const router = useRouter();

  const toggleSubMenu = () => {
    setIsSubOpen(!isSubOpen);
  };
  useEffect(() => {
    setIsSubOpen(false);
  }, [router.asPath]);

  return (
    <nav className={` z-20 w-full bg-background   lg:top-0  ${className}`}>
      <div className="w-full  ">
        <div className="flex  h-24 w-full flex-row items-center  space-y-2  lg:flex-row lg:space-y-0">
          <div className="lg:mx-[110px]  flex w-full    space-x-[10rem]  lg:space-x-[1rem] xl:space-x-[6rem]">
            <div className="logo w-[179.59px] h-[37.17px] lg:h-[70px] flex   min-w-[5rem] flex-shrink-0 items-center justify-center lg:w-auto  ">
              <div className="flex items-center justify-center space-x-1">
                <div className="xs-mini:pt-2 xs-mini:pl-[13px]  lg:pt-0  max-h-[70px] max-w-[339px] overflow-hidden ">
                  <Image src={ApplyLogo} />
                </div>
                <span className="">
                  <p className="text-xs font-semibold text-primaryColor"> </p>
                </span>
              </div>
            </div>

            <div className="hidden w-full   lg:flex items-center justify-center ">
              <div className=" flex w-full  items-center justify-between">
                <div className="flex space-x-8 pl-16 xl:space-x-14 xl:pl-0 ">
                  {routesItems.map((item: Route) => {
                    if (item.title === 'Login') return null;
                    return (
                      <NavbarItem
                        key={uuidv4()}
                        link={item.link}
                        title={item.title}
                        className=""
                        submenu={item.submenu}
                        open={isSubOpen}
                        toggleSubMenu={toggleSubMenu}
                      />
                    );
                  })}
                </div>

                <div className="flex space-x-6 ">
                  {routesItems.map((item: Route) => {
                    if (item.title === 'Login') {
                      return (
                        <button
                          type="button"
                          className="text-[24px] text-applyBlue border-[2px] border-applyBlue rounded-[4px] px-[32px] py-[8px]"
                        >
                          Sign In
                        </button>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className=" ml-2  flex  rounded-lg   lg:hidden ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-lg bg-background px-2 text-gray-400   focus:outline-none "
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <div className="">
                  <BarIcon />
                </div>
              ) : (
                <CgClose className="text-applyBlue p-0 text-[40px]" />
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-in-out duration-300 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div className="lg:hidden">
          <div className="ml-[8px] space-y-3 bg-background px-2  pt-2 pb-3 lg:px-3">
            {routesItems.map((item: Route) => {
              return (
                <NavbarItem
                  key={uuidv4()}
                  link={item.link}
                  title={item.title}
                  submenu={item.submenu}
                  open={isSubOpen}
                  toggleSubMenu={toggleSubMenu}
                />
              );
            })}
          </div>
        </div>
      </Transition>
    </nav>
  );
}

export default Navbar;
