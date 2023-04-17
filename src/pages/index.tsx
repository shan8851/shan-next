import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shan</title>
        <meta name="description" content="Shan personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
};

export default Home;

