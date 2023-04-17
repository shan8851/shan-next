import { Layout } from "@/components/Layout";
import { type AppType } from "next/app";

import "@/styles/globals.css";


const MyApp: AppType = ({
  Component,
  pageProps: { ...pageProps },
}) => {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  );
};

export default MyApp;
