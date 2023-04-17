import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const WebDev: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shan - Services: Web Development</title>
        <meta name="description" content="Web Development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="p-4 md:p-16 flex flex-col w-screen justify-center max-w-3xl mx-auto">
          <h1 className="mb-4 text-3xl font-extrabold lg:text-4xl">🚀 Web Development Services</h1>
          <h2 className="mb-2 text-xl lg:text-2xl font-bold">Your Partner in Modern Web Development</h2>
          <p className="mb-6 text-md font-normal lg:text-lg">Hey there! I&apos;m Shan, and I&apos;m here to help bring your web development dreams to life. With my expertise in web3, crypto, blockchain, React, and Next.js, I&apos;ll work with you to create cutting-edge, user-friendly web applications that&apos;ll turn heads and drive success.</p>
          <h3 className="mb-2 text-lg lg:text-xl font-bold">🛠️ Custom Web Applications</h3>
          <p className="mb-6 text-md font-normal lg:text-lg">Whether you&apos;re building a web app from scratch or improving an existing one, I&apos;ve got you covered. Together, we&apos;ll craft tailored solutions that meet your unique needs and vision.</p>
          <h3 className="mb-2 text-lg lg:text-xl font-bold">🌐 Web3 & Crypto Integration</h3>
          <p className="mb-6 text-md font-normal lg:text-lg">Ready to dive into the world of decentralized applications? With my web3 and crypto experience, we&apos;ll bring the power of blockchain technology to your web app and unlock new opportunities.</p>
          <h3 className="mb-2 text-lg lg:text-xl font-bold">📱 Responsive & Mobile-friendly Design</h3>
          <p className="mb-6 text-md font-normal lg:text-lg">No one likes a website that&apos;s hard to use on different devices. I&apos;ll make sure your web app looks and works great on screens of all sizes, providing an outstanding experience for your users.</p>
          <h3 className="mb-2 text-lg lg:text-xl font-bold">⚡ Performance Optimization</h3>
          <p className="mb-6 text-md font-normal lg:text-lg">A fast-loading, smooth-performing web app is crucial for user satisfaction and search engine rankings. I&apos;ll optimize your web app to ensure it loads quickly and runs efficiently.</p>
          <h2 className="mt-4 mb-2 text-xl lg:text-2xl font-bold">Why work with me?</h2>
          <ul className="px-8 flex flex-col gap-8">
            <li>🎯 Years of experience in modern web development and web3 technologies
            </li>
            <li>💡 Passion for helping clients achieve their goals and bring their ideas to life</li>
            <li>🤝 Commitment to clear communication, transparency, and a collaborative process</li>
            <li>🏆 Proven track record of successful projects and satisfied clients</li>
          </ul>
          <h2 className="mt-4 mb-2 text-xl lg:text-2xl font-bold">Ready to Get Started?</h2>
          <p className="mb-6 text-md font-normal lg:text-lg">Let&apos;s bring your web development project to life! Reach out to me today, and we&apos;ll discuss how we can work together to create something amazing.</p>
          <Link href="/contact" className="btn btn-lg btn-primary">📩 Get in Touch</Link>
        </div>
      </main>
    </>
  )
}

export default WebDev;
