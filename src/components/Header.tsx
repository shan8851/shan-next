import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";
import Logo from '../assets/punk.png'

export const Header: FC = () => {

  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link className="btn btn-ghost normal-case text-xl" href='/'>Home</Link>
            </li>
            <li>
              <Link className="btn btn-ghost normal-case text-xl" href='/about'>About</Link>
            </li>
            <li>
              <Link className="btn btn-ghost normal-case text-xl" href='/contact'>Contact</Link>
            </li>

          </ul>
        </div>
        <Link
          href='/'
          className="btn btn-ghost normal-case flex align-center p-0"
        >
          <h1 className="text-xl invisible sm:visible">@Shan8851</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="btn btn-ghost normal-case text-md md:text-xl" href='/'>Home</Link>
          </li>
          <li>
            <Link className="btn btn-ghost normal-case text-md md:text-xl" href='/now'>Now</Link>
          </li>
          <li>
            <Link className="btn btn-ghost normal-case text-md md:text-xl" href='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Image src={Logo} alt="logo" height={45} />
      </div>
    </div>
  );
};
