import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Coin — Fable & Founder",
  description:
    "A custom NFC-enabled coin that unlocks a private digital memory vault.",
};

export default function TheCoinPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-32">
      <div className="max-w-3xl">
        <p className="font-body text-[10px] font-normal tracking-[0.3em] uppercase text-text-secondary mb-6">
          The Coin
        </p>
        <h1
          className="font-display font-light text-text-primary leading-[1.2] mb-8"
          style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
        >
          Tap to remember.
        </h1>
        <p className="font-body text-[15px] font-light text-text-secondary leading-[1.9] max-w-xl">
          A custom NFC-enabled coin, crafted in brushed metal. Tap it with any
          phone to unlock the private digital memory vault — no app required.
          A physical key to a digital legacy.
        </p>
      </div>
    </main>
  );
}
