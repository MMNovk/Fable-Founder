import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";

export default function OurStoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
