import Nav from "@/components/Nav";
import Marquee from "@/components/Marquee";
import Hero from "@/components/sections/Hero";
import PullQuote from "@/components/sections/PullQuote";
import WhatItIs from "@/components/sections/WhatItIs";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import Mission from "@/components/sections/Mission";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <PullQuote />
        <WhatItIs />
        <HowItWorks />
        <Pricing />
        <Mission />
      </main>
      <Footer />
    </>
  );
}
