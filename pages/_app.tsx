import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

const telegram = window?.Telegram.WebApp;

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    telegram.ready();
  }, []);
  return <Component {...pageProps} />;
}
