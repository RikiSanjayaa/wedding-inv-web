import Head from "next/head";
import LandingPage from "../components/page/LandingPage";
import CoupleCard from "../components/utilities/CoupleCard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wedding Invitation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative">
        <LandingPage />
        <div className="flex justify-center">
          <CoupleCard />
        </div>
      </main>
    </div>
  );
}
