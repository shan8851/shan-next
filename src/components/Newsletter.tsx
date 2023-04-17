import { TECH_LEAP_LINK } from "@/constants";
import { FC } from "react";

export const Newsletter: FC = () => (
  <div className="flex flex-col items-center justify-center w-full bg-secondary py-24 px-3">
    <div className="max-w-3xl mx-auto flex flex-col gap-6 items-center justify-center">
      <h3 className="mb-6 text-3xl font-extrabold lg:text-4xl text-center max-w-xl">🚀 TechLeap: Your Weekly Guide to Thriving in Tech</h3>
          <p className="mb-6 text-md font-normal lg:text-lg  ">
      Looking to break into the tech industry or navigate your early years as a developer? TechLeap is a weekly newsletter packed with insights, tips, and resources to help you maximize your earning potential and growth. Delivered straight to your inbox, TechLeap is your go-to source for levelling up in the world of tech.
    </p>
    <h4 className="mb-6 text-xl font-extrabold lg:text-2xl text-center max-w-xl">What Subscribers Are Saying</h4>
    <div className="card shadow-md bg-primary text-primary-content">
    <div className="card-body">
      <h2 className="card-title">Mike, software engineer</h2>
      <p>As someone learning web development from scratch I would not have been able to get to the position ready for a job in the industry without Shan&apos;s help. He has been patient and on-hand to help me through every stage of the process including HTML, CSS, Javascript, React, Github and more. He is incredibly knowledgeable in these areas and I cannot thank him enough for his support over the past 6 months.</p>
    </div>
  </div>
  <div className="card shadow-md bg-primary text-primary-content">
    <div className="card-body">
      <h2 className="card-title">Stephon, computer science grad</h2>
      <p>Shan has been super helpful, we focused more on the non-technical side of things but I think that is what I need more right now so I&apos;m glad that was prioritised.</p>
    </div>
  </div>
  <div className="card shadow-md bg-primary text-primary-content">
    <div className="card-body">
      <h2 className="card-title">Dom, aspiring engineer</h2>
      <p>The world of programming can be so overwhelming with all the possible paths, courses, articles, blogs and more. Shan has helped me focus on my own path and I am now making solid progress and ready to apply for jobs</p>
    </div>
  </div>
  <a className="btn btn-lg" href={TECH_LEAP_LINK}>SUBSCRIBE TO TECHLEAP</a>
    </div>
  </div>
)
