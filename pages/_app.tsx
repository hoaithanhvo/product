import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";
import Slider from "../components/SliderText/sliderText";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
      {/* <Slider /> */}
    </>
  );
}
