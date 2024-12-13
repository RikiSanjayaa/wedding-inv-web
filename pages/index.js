import Head from "next/head";
import LandingPage from "../components/page/LandingPage";
import CoupleCard from "../components/page/CoupleCard";
import Breakpoints from "../components/utilities/Breakpoints";
import Footer from "../components/page/Footer";
import DateAndMaps from "../components/page/DateAndMaps";
import StorySection from "../components/page/StorySection";
import Gallery from "../components/page/Gallery";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wedding Invitation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative">
        <LandingPage />
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
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
