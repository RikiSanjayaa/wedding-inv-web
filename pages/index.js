import Head from "next/head";
import LandingPage from "../components/LandingPage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wedding Invitation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative">
        <LandingPage />
        <div className="h-screen">

        </div>
      </main>
    </div>
  );
}
