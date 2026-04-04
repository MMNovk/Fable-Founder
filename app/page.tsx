import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import BriefAbout from "@/components/sections/BriefAbout";
import TheStory from "@/components/sections/TheStory";
import TheProcess from "@/components/sections/TheProcess";
import Pricing from "@/components/sections/Pricing";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <BriefAbout />
        <TheStory />
        <TheProcess />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
