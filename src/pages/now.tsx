/* eslint-disable react/no-unescaped-entities */
import { CALENDLY_LINK, REACT_ROLES_LINK, TECH_LEAP_LINK, TWITTER_LINK } from "@/constants";
import { type NextPage } from "next";
import Head from "next/head";

const Now: NextPage = () => {
  return <>
    <Head>
      <title>Shan - /Now</title>
      <meta name="description" content="Now" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <div className="p-4 md:p-16 flex flex-col w-screen justify-center max-w-3xl mx-auto">
        <h1 className="mb-4 text-3xl font-extrabold lg:text-4xl">Living the Web3 Life, One Adventure at a Time</h1>
        <h2 className="mb-4 text-xl font-bold lg:text-2xl">Work & Passions</h2>
        <p className="mb-6 text-md font-normal lg:text-lg">
          🚀 <a
          target="_blank"
          rel="noopener noreferrer"
          href={TECH_LEAP_LINK}
          className="link link-primary text-md lg:text-lg font-bold ">TechLeap</a>: Blurring the lines between work and play, I recently launched TechLeap, a weekly newsletter for aspiring devs. We're all about landing that first job, maximizing earnings, and levelling up in the early years of the dev journey.
        </p>
        <p className="mb-6 text-md font-normal lg:text-lg">
          👨‍💻 Mentor: I love sharing my knowledge and helping others grow. That's why mentoring has become an important part of my life.
        </p>
        <p className="mb-6 text-md font-normal lg:text-lg">
          🎯 <a
          target="_blank"
          rel="noopener noreferrer"
          href={REACT_ROLES_LINK}
          className="link link-primary text-md lg:text-lg font-bold lg:text-md">ReactRoles</a>: Currently building an online job board exclusively for React enthusiasts. Stay tuned for the launch of ReactRoles, where we'll connect skilled developers with their dream jobs!
        </p>
        <p className="mb-6 text-md font-normal lg:text-lg">
          🦄 UniWhales Collaboration: Excited to team up with the amazing folks at UniWhales, as we dive deep into DeFi analytics!
        </p>
        <p className="mb-6 text-md font-normal lg:text-lg">
          🍽️ Let's Eat: Still cooking up some great ideas as an advisor and collaborator for Let's Eat.
        </p>
        <p className="mb-6 text-md font-normal lg:text-lg">
          💼 Software Company Captain: Steering the ship of a small software company with an awesome crew.
        </p>
        <h2 className="mb-4 text-xl font-bold lg:text-2xl">Life</h2>
        <p className="mb-6 text-md font-normal lg:text-lg">
          👨‍👩‍👧‍👦 Family Man: Striving to be the best dad and husband (to be) I can be, while juggling work and other passions.
        </p>
        <p className="mb-6 text-md font-normal lg:text-lg">
          🧠 Constant Learner: Always exploring new ideas and projects to keep things fresh.
        </p>
        <p className="mb-6 text-md font-normal lg:text-lg">
          💭 Indie Dreamer: Fantasizing about the one-person business life and joining the ranks of Indie Hackers.
        </p>
        <h2 className="mb-4 text-xl font-bold lg:text-2xl">Balance</h2>
        <p className="mb-6 text-md font-normal lg:text-lg">
          🥋 Brazilian Jiu-Jitsu: Rolling my way to a healthier body and mind.
        </p>
        <p className="mb-6 text-md font-normal lg:text-lg">
          🥊 Muay Thai: Kicking it up a notch with some intense training.
        </p>
        <p className="mb-6 text-md font-normal lg:text-lg">
          ♠️ Poker: Dealing with life one hand at a time.
        </p>
        <h2 className="mb-4 text-xl font-bold lg:text-2xl">Let's Connect</h2>
        <p className="mb-6 text-md font-normal lg:text-lg">
          🐦 Twitter: <a
          target="_blank"
          rel="noopener noreferrer"
          href={TWITTER_LINK}
          className="link link-primary text-md lg:text-lg font-bold">@shan8851</a>
        </p>
        <p className="mb-6 text-md font-normal lg:text-lg">
          📞 Book a Call: <a
          target="_blank"
          rel="noopener noreferrer"
          href={CALENDLY_LINK}
          className="link link-primary text-md lg:text-lg font-bold">on Calendly</a>
        </p>
        <h3 className="mb-4 text-lg font-bold lg:text-xl">Page Last Updated</h3>
        <p className="mb-6 text-sm font-normal lg:text-md">
          April 2023
        </p>

        <p className="mb-6 ">Inspired by the <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://sive.rs/nowff"
          className="link link-primary text-sm font-bold lg:text-md">/now movement</a> by <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/sivers"
            className="link link-primary text-sm font-bold lg:text-md">@Sivers</a>
        </p>
      </div>
    </main>

  </>;
};

export default Now;
