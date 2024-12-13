import Head from "next/head";
import LandingPage from "../components/page/LandingPage";
import CoupleCard from "../components/page/CoupleCard";
import Breakpoints from "../components/utilities/Breakpoints";
import Footer from "../components/page/Footer";
import DateAndMaps from "../components/page/DateAndMaps";
import StorySection from "../components/page/StorySection";
import Gallery from "../components/page/Gallery";
import FloatingButton from "../components/utilities/FloatingButton";
import Pesan from "../components/page/Pesan";
import { useState, useEffect } from "react";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(typeof Audio !== "undefined" && new Audio("/bgm.mp3"));

  useEffect(() => {
    if (audio) {
      audio.loop = true;
      audio.volume = 0.2;
      if (isPlaying) {
        audio.play().catch((error) => {
          console.log("Auto-play was prevented:", error);
          setIsPlaying(false);
        });
      } else {
        audio.pause();
      }
    }
  }, [isPlaying, audio]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <Head>
        <title>Wedding Invitation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative">
        <LandingPage togglePlay={togglePlay} />
        <div className="mx-10 md:mx-10 lg:mx-20 xl:mx-36 2xl:mx-72">
          <div className="flex flex-col items-center">
            <CoupleCard />
            <Breakpoints />
            <DateAndMaps />
            <Breakpoints />
            <StorySection />
            <Breakpoints />
            <Gallery />
            <Breakpoints />
            <Pesan/>
          </div>
        </div>
        <Footer />
        <FloatingButton isPlaying={isPlaying} togglePlay={togglePlay} />
      </main>
    </div>
  );
}
