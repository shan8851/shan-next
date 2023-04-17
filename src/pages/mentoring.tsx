import { CODING_COACH_LINK, MENTORING_CLUB_LINK, TECH_LEAP_LINK } from "@/constants";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Mentoring: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shan - Services: Mentoring</title>
        <meta name="description" content="Mentoring" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="p-4 md:p-16 flex flex-col w-screen justify-center max-w-3xl mx-auto">
          <h1 className="mb-4 text-3xl font-extrabold lg:text-4xl">🧑‍🏫 Mentoring Services</h1>
          <h2 className="mb-2 text-xl lg:text-2xl font-bold">Guiding the Next Generation of Developers</h2>
          <p className="mb-6 text-md font-normal lg:text-lg">Hey there! I&apos;m Shan, and I&apos;m passionate about helping aspiring developers navigate their early years in the tech industry. Through personalized mentoring, I provide the support, guidance, and insights needed to land that first job and maximize their growth and earning potential.</p>
          <h2 className="mb-2 text-xl lg:text-2xl font-bold">How My Mentoring Works</h2>
          <h3 className="mb-2 text-lg lg:text-xl font-bold">🤝 Discovery Sessions</h3>
          <p className="mb-6 text-md font-normal lg:text-lg">I offer discovery sessions through both <a href={CODING_COACH_LINK} target="_blank" className="link link-primary">CodingCoach</a> and <a href={MENTORING_CLUB_LINK} target="_blank" className="link link-primary">TheMentoringClub</a>. These initial meetings help us determine if we&apos;re a good fit for a more formal, long-term mentoring relationship.</p>
          <h3 className="mb-2 text-lg lg:text-xl font-bold">🎯 Tailored Mentorship</h3>
          <p className="mb-6 text-md font-normal lg:text-lg">Once we&apos;ve established a connection, I&apos;ll work closely with you to create a customized mentorship plan that addresses your unique needs, goals, and challenges.</p>
          <h3 className="mb-2 text-lg lg:text-xl font-bold">📚 Continuous Learning</h3>
          <p className="mb-6 text-md font-normal lg:text-lg">Throughout our mentoring relationship, I&apos;ll provide resources, guidance, and feedback to support your ongoing growth and development as a programmer.</p>
                 <h2 className="mb-2 text-xl lg:text-2xl font-bold">TechLeap Newsletter</h2>
          <p className="mb-6 text-md font-normal lg:text-lg">🚀 As part of my commitment to helping aspiring devs, I also run a weekly newsletter called TechLeap. It&apos;s packed with tips, advice, and resources to support you in landing your first job and navigating your early years in the industry. Be sure to subscribe and stay in the loop!</p>
          <div className="max-w-md self-center">
            <a className="btn btn-secondary btn-md" href={TECH_LEAP_LINK} target="_blank">Subscribe</a>
          </div>
          <h2 className="mt-4 mb-2 text-xl lg:text-2xl font-bold">Why Choose Me as Your Mentor?</h2>
          <ul className="px-8 flex flex-col gap-8">
            <li>👨‍💻 Years of experience in web development, web3, crypto, and blockchain technologies
            </li>
            <li>🎓 Passion for helping new developers succeed and grow in their careers</li>
            <li>🌟 Track record of guiding mentees towards success in the tech industry</li>
            <li>🗣️ Excellent communication skills and a genuine interest in your growth and well-being</li>
          </ul>
          <h2 className="mt-4 mb-2 text-xl lg:text-2xl font-bold">Ready to Begin Your Journey?</h2>
          <p className="mb-6 text-md font-normal lg:text-lg">Let&apos;s  explore the possibility of a mentor-mentee relationship that will help you achieve your career goals in the tech industry. Reach out to me today to schedule a discovery session and take the first step towards unlocking your full potential.</p>
          <Link href="/contact" className="btn btn-lg btn-primary">📩 Get in Touch</Link>
        </div>
      </main>
    </>
  )
}

export default Mentoring;
