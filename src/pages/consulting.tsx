import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Consulting: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shan - Services: Consulting</title>
        <meta name="description" content="Consulting" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="p-4 md:p-16 flex flex-col w-screen justify-center max-w-3xl mx-auto">
          <h1 className="mb-4 text-3xl font-extrabold lg:text-4xl">💼 Consulting Services</h1>
          <h2 className="mb-2 text-xl lg:text-2xl font-bold">Helping Businesses Navigate the Digital Landscape</h2>
          <p className="mb-6 text-md font-normal lg:text-lg">Hey there! I&apos;m Shan, and I love helping businesses make the most of modern technology. With my experience in web3, crypto, blockchain, and a range of web development frameworks, I&apos;m here to guide you through the ever-evolving digital landscape and find the right solutions to drive your success.</p>
          <h2 className="mb-2 text-xl lg:text-2xl font-bold">Consulting Services I Offer</h2>
          <h3 className="mb-2 text-lg lg:text-xl font-bold">🌉 Bridging the Knowledge Gap</h3>
          <p className="mb-6 text-md font-normal lg:text-lg">Want to scale your business and stay ahead of the competition? I&apos;ll work with you to identify growth opportunities and develop a solid roadmap to achieve your goals.</p>
          <h3 className="mb-2 text-lg lg:text-xl font-bold">🔐 Security & Compliance</h3>
          <p className="mb-6 text-md font-normal lg:text-lg">Keeping your digital assets safe and compliant is crucial in today&apos;s interconnected world. I&apos;ll help you identify potential vulnerabilities and implement best practices to secure your online presence.</p>
          <h3 className="mb-2 text-lg lg:text-xl font-bold">🧪 Innovation & Experimentation</h3>
          <p className="mb-6 text-md font-normal lg:text-lg">Stay on the cutting edge of technology with my guidance. We&apos;ll explore emerging trends, experiment with new ideas, and foster a culture of innovation in your organization.</p>
          <h2 className="mb-2 text-xl lg:text-2xl font-bold">Why Choose Me as Your Consultant</h2>
          <ul className="px-8 flex flex-col gap-8">
            <li>🎓 Deep expertise in web3, crypto, blockchain, and modern web development
            </li>
            <li>🚀 Proven track record of helping businesses grow and thrive in the digital space</li>
            <li>💬 Excellent communication skills, ensuring a smooth and productive collaboration</li>
            <li>📚 Commitment to staying up-to-date with the latest tech trends and best practices</li>
          </ul>
          <h2 className="mt-4 mb-2 text-xl lg:text-2xl font-bold">Ready to Take Your Business to the Next Level?</h2>
          <p className="mb-6 text-md font-normal lg:text-lg">Let&apos;s work together to unlock your business&apos;s full potential in the digital world. Reach out to me today to start a conversation and see how my consulting services can help you succeed.</p>
          <Link href="/contact" className="btn btn-lg btn-primary">📩 Get in Touch</Link>
        </div>
      </main>
    </>
  )
}

export default Consulting;
