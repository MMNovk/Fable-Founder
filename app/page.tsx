import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
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
        <TheStory />
        <TheProcess />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
