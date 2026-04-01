import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";

export default function CommissionLayout({
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
