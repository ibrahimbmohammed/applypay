/* eslint-disable no-unused-vars */
import { UrlObject } from 'url';
import type { Route } from '@molecules/m-navbar';
import Link from '@hoc/link';
import { v4 as uuidv4 } from 'uuid';

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
    <Link
      href={link as Url}
      className="cursor-pointer  text-sm"
      activeClassName=" text-primaryColor font-bold "
      key={uuidv4()}
    >
      <p className={`${className}`}>{title}</p>
    </Link>
  );
}

export default NavItem;
