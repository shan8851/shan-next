import { CALENDLY_LINK, REACT_ROLES_LINK, TECH_LEAP_LINK } from "@/constants";
import Link from "next/link";
import { FC } from "react";

export const About: FC = () => (
  <div className="py-24 flex flex-col w-full max-w-3xl mx-auto px-4">
  <h1 className="mb-6 text-3xl font-extrabold lg:text-4xl text-center">🙋🏽‍♂️ About me</h1>
    <p className="mb-6 text-md font-normal lg:text-lg">
      👨‍💻 Hey again! I&apos;m Shan, a web3 enthusiast, modern web development expert, and mentor. With years of experience in the tech world, I&apos;ve developed a deep passion for all things blockchain, cryptocurrency, and cutting-edge development.
    </p>
    <p className="mb-6 text-md font-normal lg:text-lg">
      🚀 My journey has led me to work on exciting projects like <a
          target="_blank"
          rel="noopener noreferrer"
          href={REACT_ROLES_LINK}
          className="link link-primary text-md lg:text-lg font-bold">ReactRoles</a>, collaborate with innovative teams like UniWhales, and even launch my very own newsletter, <a
          target="_blank"
          rel="noopener noreferrer"
          href={TECH_LEAP_LINK}
          className="link link-primary text-md lg:text-lg font-bold">TechLeap</a>. When I&apos;m not busy coding or advising startups, you&apos;ll find me practising Brazilian Jiu-Jitsu, playing poker, or enjoying some quality family time.
    </p>
    <p className="mb-6 text-md font-normal lg:text-lg">
      💡 I believe in empowering the next generation of developers and helping them navigate the ever-evolving tech landscape. That&apos;s why mentoring and sharing knowledge is so important to me.
    </p>
    <p className="mb-6 text-md font-normal lg:text-lg">
      🤝 If you&apos;d like to learn more about what I&apos;m up to right now, check out my <Link className="link link-primary text-md lg:text-lg font-bold" href="/now">/now page</Link>. And if you&apos;re interested in working together, feel free to <a
          target="_blank"
          rel="noopener noreferrer"
          href={CALENDLY_LINK}
          className="link link-primary text-md lg:text-lg font-bold">book a call</a> or <Link className="link link-primary text-md lg:text-lg font-bold" href="/contact">drop me a line</Link>.
    </p>
  </div>
)
