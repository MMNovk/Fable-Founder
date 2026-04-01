import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Product — Fable & Founder",
  description:
    "The Book, the Coin, and the Vault — three artifacts, one complete archive.",
};

const artifacts = [
  {
    id: "book",
    numeral: "I",
    name: "The Book",
    description:
      "A hardcover, linen-bound volume containing the full narrative of a life — transcribed, edited, and designed with archival-quality materials built to last generations. Every word typeset with care. Every photograph placed with intention.",
  },
  {
    id: "coin",
    numeral: "II",
    name: "The Coin",
    description:
      "A custom NFC-enabled coin, crafted in brushed metal. Tap it with any phone to unlock the private digital memory vault — no app required. A physical key to a digital legacy, designed to be held, carried, and passed on.",
  },
  {
    id: "vault",
    numeral: "III",
    name: "The Vault",
    description:
      "A secure, private web experience housing the full story, photographs, audio excerpts, and supplementary materials. Accessible forever via the coin or a private link. Built to endure.",
  },
];

export default function ProductPage() {
  return (
    <main className="min-h-screen px-6 md:px-10 py-32">
      <div className="max-w-4xl mx-auto">
        <p className="font-body text-[10px] font-normal tracking-[0.3em] uppercase text-accent mb-6">
          The Product
        </p>
        <h1
          className="font-display font-light text-text-primary leading-[1.2] mb-16 md:mb-24"
          style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
        >
          Three artifacts. One complete archive.
        </h1>

        <div className="space-y-16">
          {artifacts.map((item) => (
            <section
              key={item.id}
              id={item.id}
              className="border-t border-text-tertiary/30 pt-8"
            >
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-display text-lg text-accent font-light">
                  {item.numeral}
                </span>
                <h2
                  className="font-display font-light text-text-primary"
                  style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
                >
                  {item.name}
                </h2>
              </div>
              <p className="font-body text-[15px] font-light text-text-secondary leading-[1.9] max-w-2xl ml-8">
                {item.description}
              </p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
