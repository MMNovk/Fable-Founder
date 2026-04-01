import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import MissionStatement from "@/components/sections/MissionStatement";
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
        <MissionStatement />
        <TheStory />
        <TheProcess />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
