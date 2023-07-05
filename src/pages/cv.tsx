import { NextPage } from "next";
import Head from "next/head";

const Cv: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shan - CV</title>
        <meta name="description" content="CV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="p-4 md:p-16 flex flex-col w-screen justify-center max-w-3xl mx-auto">
          <h1 className="mb-12 text-3xl font-extrabold lg:text-4xl">📋  CV</h1>
          <h2 className="mb-4 text-2xl font-extrabold lg:text-3xl">🤹🏽 Skills</h2>
          <p className="mb-6 text-md font-normal lg:text-lg">React, React Native, TypeScript, GraphQL, NodeJS, NextJS, CSS-in-JS, Version Control, ethersjs, Solidity, Hardhat, Express, REST API, AWS (EC2, S3, Route53), Firebase, Docker.</p>
          <h2 className="mb-4 text-2xl font-extrabold lg:text-3xl">👔 Work</h2>
          <div className="divider" />
          <h3 className="mb-4 text-md font-extrabold lg:text-xl">₿ Cielo Finance - <span className="italic text-sm lg:text-lg">Software Engineer</span></h3>
          <ul className="list-disc">
            <li>Spearheaded the development of the Cielo - a Defi analytics feed as a Lead Developer at Uniwhales.</li>
            <li>Took charge of implementing the first iteration of the Cielo feed, which now tracks 16 EVM chains with React and Typescript
              and has over 25,000 users (as of 03/2023).</li>
            <li>Worked on supplementary dashboards to help NFT traders identify promising projects and built a comprehensive stats page
              to monitor wallet trends and activity for various different categories.</li>
            <li>Collaborated closely with the backend and design teams to ensure seamless integration and a visually stunning user
              experience.</li>
            <li>Received high praise from users and stakeholders for my work on the pixel-perfect front-ends and easy-to-use web3
              integrations.</li>
            <li>Driving continued innovation in the Defi analytics space as part of this dynamic team. Free tier successfully launched in April 2023</li>
          </ul>
          <div className="divider" />
          <h3 className="mb-4 text-md font-extrabold lg:text-xl">🍜 Let&apos;s Eat - <span className="italic text-sm lg:text-lg">Co-Founder & CTO</span></h3>
          <ul className="list-disc">
            <li>Contributed in all stages of the technical product life cycle, including architecture, planning, development, testing,
              deployment, and maintenance.</li>
            <li>Directed and consulted on technology choices and technical direction for all 4 Let&apos;s Eat applications.</li>
            <li>Worked closely with tech leads to address tech debt and ensure timely delivery of high-quality solutions that met company
              SLAs.</li>
            <li>Identified and resolved issues related to hardware, software, and network infrastructure that impacted operations of an
              organization serving thousands of customers annually.</li>
          </ul>
          <div className="divider" />
          <h3 className="mb-4 text-md font-extrabold lg:text-xl">📚 Library of Things - <span className="italic text-sm lg:text-lg">Software Engineer</span></h3>
          <ul className="list-disc">
            <li>Built a custom CMS with Typescript and GraphQL that automated content across various locations and channels, enabling
              the platform to scale from 1 location to 4 in 6 months.</li>
            <li>Built internal tools and protocols for a SaaS supporting multiple admin permissions and levels in preparation for Library of Things
              licensing their software.</li>
            <li>Supported development team in creating pipelines for continuous integration and continuous delivery using Gitlab alongside
              Docker.
            </li>
          </ul>
          <div className="divider" />
          <h3 className="mb-4 text-md font-extrabold lg:text-xl">🖥 NorthLink Digital - <span className="italic text-sm lg:text-lg">Software Engineer</span></h3>
          <ul className="list-disc">
            <li>Led a small team of developers to create scalable cloud first web and mobile applications. Reviews, mentoring, sprint
              planning and retros were all part of my responsibilities.</li>
            <li>Delivered a fully-functional, React Native survey application promoting sexual and relationship education for students in
              Asia. The app is now rolled out across two continents, with multi-lingual support and used by thousands of students daily.</li>
            <li>Worked on building out custom boiler plate using NextJS, SaaS and Sanity CMS to quickly spin up new client projects, which
              dramatically reduced dev time for newer and junior devs.
            </li>
            <li>Attended training courses and conferences regularly and underwent frequent code reviews with the CTO to fast-track
              development skills.</li>
          </ul>
           <div className="divider" />
          <h3 className="mb-4 text-md font-extrabold lg:text-xl">🧑‍🏫️ Coding Coach & The Mentoring Club - <span className="italic text-sm lg:text-lg">Mentor</span></h3>
          <ul className="list-disc">
            <li>Provided mentorship and training on topics including React Hooks, state management, and portfolio development to help new developers break into the software industry.</li>
            <li>Discuss and help plan overall strategy for attacking learning and aggressively hunting for the first job. Once secured, I work with mentees to develop a strategy to accelerate the early years of their career.</li>
            <li>Five former mentees are now employed in the industry.
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}

export default Cv;
