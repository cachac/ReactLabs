import { AppProps } from "next/app";
import "../styles/index.css";
import { Toaster } from "react-hot-toast";
import { ProvideAuth } from "../context/Session";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{ className: "react-hot-toast" }}
      />
      <ProvideAuth>
        <Component {...pageProps} />
      </ProvideAuth>
    </>
  );
}
