import Image from "next/image";
import { type FC } from "react";
import Logo from "@/assets/punk.png";
import { TECH_LEAP_LINK } from "@/constants";
import Link from "next/link";


export const Footer: FC = () => (
  <>
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <div>
        <span className="footer-title">Services</span>
        <Link href="/webdev" className="link link-hover">Web Development</Link>
        <Link href="/consulting" className="link link-hover">Consulting</Link>
        <Link href="/mentoring" className="link link-hover">Mentoring</Link>
      </div>
      <div>
        <span className="footer-title">Me</span>
        <Link href="/now" className="link link-hover">/Now</Link>
        <Link href="/contact" className="link link-hover">Contact</Link>
      </div>
      <div>
        <span className="footer-title">Socials</span>
        <a className="link link-hover">Twitter</a>
        <a className="link link-hover">LinkedIn</a>
      </div>
      <div>
        <span className="footer-title">Newsletter</span>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text text-neutral-content">Enter your email address</span>
          </label>
          <div className="relative">
            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
            <a href={TECH_LEAP_LINK} className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</a>
          </div>
        </div>
      </div>
    </footer>
    <footer className="footer px-10 py-4 border-t border-accent bg-neutral text-neutral-content">
      <div className="items-center grid-flow-col">
       <Image src={Logo} alt="logo" height={45} />
        <p>Shan8851 <br />Web3, mentorship & tech insights by Shan, developer & family man.</p>
      </div>
    </footer>
  </>
)
