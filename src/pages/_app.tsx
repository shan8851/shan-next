import { Layout } from "@/components/Layout";
import StoreProvider from '@/lib/StoreProvider'
import type { AppProps } from 'next/app'



import "@/styles/globals.css";
import { useStore } from "@/lib/store";
import { useEffect } from "react";


const MyApp = ({
  Component,
  pageProps: { ...pageProps },
}: AppProps) => {
  return (
    <StoreProvider {...pageProps.initialZustandState}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  );
};

export default MyApp;
