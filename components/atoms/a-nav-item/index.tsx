/* eslint-disable no-unused-vars */
import { UrlObject } from 'url';
import type { Route } from '@molecules/m-navbar';
import Link from '@hoc/link';
import { v4 as uuidv4 } from 'uuid';
import NavIcon from '@lib/icons/home/nav-icon';

declare type Url = string | UrlObject;

interface NavItemProps {
  open?: boolean;
  title: string;
  link?: Url;
  submenu?: Array<Route | undefined>;
  toggleSubMenu?: () => void;
  className?: string;
}

function NavItem({ open, link, title, submenu, toggleSubMenu, className }: NavItemProps) {
  return (
    <div className=" flex-col items-center justify-center">
      <Link
        href={link as Url}
        className=" text-[16px] text-applyBlue "
        activeClassName="font-bold text-applyBlue before:content-['_'] "
        key={uuidv4()}
      >
        <p className={`${className} cursor-pointer  text-[16px] text-applyBlue/50 `}>{title}</p>
      </Link>
      <Link
        href={link as Url}
        activeClassName="font-bold xs-mini:hidden lg:flex lg:items-center lg:justify-center   text-applyBlue before:content-['_'] "
        key={uuidv4()}
      >
        <div className={`${className} hidden  cursor-pointer text-[16px] text-applyBlue/50 `}>
          <NavIcon />
        </div>
      </Link>
    </div>
  );
}

export default NavItem;
