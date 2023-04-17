import { FC } from "react";

export const Services: FC = () => (
  <div className="flex flex-col items-center justify-center w-full bg-base-200 px-4 py-24">
    <div className="max-w-8xl mx-auto">
      <h1 className="mb-6 text-3xl font-extrabold lg:text-4xl text-center">How can I help you?</h1>
      <div className="flex items-center justify-center w-full flex-wrap gap-8">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-7xl self-center mb-2">🖥️</h2>
            <h3 className="card-title">Web Development</h3>
            <p> Expertise in React, Next.js, and modern web development to bring your ideas to life. From building responsive websites to creating user-friendly applications, I&apos;ve got you covered.</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary">Learn more</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-7xl self-center mb-2">💼</h2>
            <h3 className="card-title">Consulting & Advising</h3>
            <p> With a wealth of experience in web3, crypto, and blockchain, I&apos;m here to help your business thrive. Let&apos;s strategise, identify opportunities, and tackle challenges together.</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary">Learn more</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-7xl self-center mb-2">🌱</h2>
            <h3 className="card-title">Mentoring</h3>
            <p>Passionate about guiding aspiring developers and helping them excel in their careers. From landing that first job to maximizing earnings, I&apos;ll share valuable insights and tips.</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary">Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
