import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ReactGA from "react-ga";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { GlobalProvider } from "@/providers/global.provider";

export default function App({ Component, pageProps }: AppProps) {
  // Initialize Google Analytics with Tracking ID
  ReactGA.initialize(process.env.GOOGLE_TRACKING_ID as string);

  const router = useRouter();

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, [router]);
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}
