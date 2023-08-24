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
          <div className="flex gap-2 items-center mb-12">
            <h1 className="text-3xl font-extrabold lg:text-4xl">📋 CV</h1>
            <a className="badge badge-accent" href="/cv.pdf" download>
              download
            </a>
          </div>
          <h2 className="mb-4 text-2xl font-extrabold lg:text-3xl">{cvData.summary.title}</h2>
          {cvData.summary.content.map((item, index) => (
            <p key={index} className="mb-6 text-md font-normal lg:text-lg">{item}</p>
          ))}
          <h2 className="mb-4 text-2xl font-extrabold lg:text-3xl">{cvData.tech.title}</h2>
          {cvData.tech.content.map((item, index) => (
            <p key={index} className="mb-6 text-md font-normal lg:text-lg">{item}</p>
          ))}
          <h2 className="mb-4 text-2xl font-extrabold lg:text-3xl">{cvData.career.title}</h2>
          {cvData.career.roles.map((role, roleIndex) => (
            <div key={roleIndex}> {/* Wrap the contents inside a div */}
              <h3 className="mb-4 text-md font-extrabold lg:text-xl">{role.company} - <span className="italic text-sm lg:text-lg">{role.title}</span> - {role.date}</h3>
              {role.content.map((item, index) => (
                <p key={index} className="mb-6 text-md font-normal lg:text-lg">{item}</p>
              ))}
            </div>
          ))}
          <a className="btn btn-neutral" href="/cv.pdf" download>
            Download My CV
          </a>
        </div>
      </main>
    </>
  )
}

export default Cv;
