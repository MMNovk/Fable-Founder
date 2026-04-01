import Nav from "@/components/Nav";
import Marquee from "@/components/Marquee";
import Hero from "@/components/sections/Hero";
import CoinInteraction from "@/components/sections/CoinInteraction";
import PullQuote from "@/components/sections/PullQuote";
import FeaturedStory from "@/components/sections/FeaturedStory";
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
        <CoinInteraction />
        <PullQuote />
        <FeaturedStory />
        <WhatItIs />
        <HowItWorks />
        <Pricing />
        <Mission />
      </main>
      <Footer />
    </>
  );
}
