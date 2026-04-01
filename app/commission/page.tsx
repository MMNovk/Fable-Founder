import type { Metadata } from "next";
import Pricing from "@/components/sections/Pricing";

export const metadata: Metadata = {
  title: "Commission — Fable & Founder",
  description: "Choose your chapter. Commission a story.",
};

export default function CommissionPage() {
  return (
    <main className="min-h-screen pt-20">
      <Pricing />
    </main>
  );
}
