import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";
import Logo from '@/assets/punk.png'
import { TECH_LEAP_LINK } from "@/constants";

export const Header: FC = () => {

  return (
    <>
    <div className="flex justify-center bg-accent py-2">
      <a href={TECH_LEAP_LINK} className="link text-bold text-neutral">Looking to get into tech? Subscribe to my weekly newsletter</a>
    </div>
      <div className="navbar bg-neutral text-neutral-content">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral text-neutral-content rounded-box w-52">
              <li><Link href="/">Home</Link></li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Services
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                </a>
                <ul className="p-2 bg-neutral text-neutral-content">
                  <li><Link href="/webdev">Web Development</Link></li>
                  <li><Link href="consulting">Consulting</Link></li>
                  <li><Link href="/mentoring">Mentoring</Link></li>
                </ul>
              </li>
              <li><Link href="/now">/Now</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/cv">CV</Link></li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost normal-case text-xl">@Shan8851</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/">Home</Link></li>
            <li tabIndex={0}>
              <a>
                Services
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
              </a>
              <ul className="p-2 bg-neutral text-neutral-content">
                <li><Link href="/webdev">Web Development</Link></li>
                <li><Link href="consulting">Consulting</Link></li>
                <li><Link href="/mentoring">Mentoring</Link></li>
              </ul>
            </li>
            <li><Link href="/now">/Now</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/cv">CV</Link></li>
          </ul>
        </div>

        <div className="navbar-end">
          <Image src={Logo} alt="logo" height={45} />
        </div>
      </div>
    </>

  );
};
