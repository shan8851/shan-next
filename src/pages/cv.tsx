import { cvData } from "@/data/cv";
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
        <div className="p-4 md:p-16 flex flex-col w-screen justify-center max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12 ">
            <h1 className="text-3xl font-extrabold lg:text-4xl">📋  CV</h1>
          <a className="badge badge-accent" href="/cv.pdf" download>download pdf version</a>
          </div>
          <h2 className="mb-4 text-2xl font-extrabold lg:text-3xl">{cvData.summary.title}</h2>
          <div className="divider" />
          {cvData.summary.content.map((item, index) => (
            <p key={index} className="mb-6 text-md font-normal lg:text-lg">{item}</p>
          ))}
          <h2 className="mb-4 text-2xl font-extrabold lg:text-3xl">{cvData.tech.title}</h2>
          <div className="divider" />
          {cvData.tech.content.map((item, index) => (
            <p key={index} className="mb-6 text-md font-normal lg:text-lg">{item}</p>
          ))}
          <h2 className="mb-4 text-2xl font-extrabold lg:text-3xl">{cvData.career.title}</h2>
          <div className="divider" />
          {cvData.career.roles.map((item, index) => (
            <div className="mb-[24px]" key={index}>
              <h3  className="mb-4 text-md font-extrabold lg:text-lg">{item.company} - <span className="italic text-sm lg:text-lg">{item.title}</span> - {item.date}</h3>
              <ul className="list-disc">
                {item.content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
          <a className="btn btn-neutral" href="/cv.pdf" download>Download PDF version</a>
        </div>
      </main>
    </>
  )
}

export default Cv;
