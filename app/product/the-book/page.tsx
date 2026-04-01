import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Book — Fable & Founder",
  description:
    "A hardcover, linen-bound volume containing a full life narrative.",
};

export default function TheBookPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-32">
      <div className="max-w-3xl">
        <p className="font-body text-[10px] font-normal tracking-[0.3em] uppercase text-text-secondary mb-6">
          The Book
        </p>
        <h1
          className="font-display font-light text-text-primary leading-[1.2] mb-8"
          style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
        >
          A story worth holding in your hands.
        </h1>
        <p className="font-body text-[15px] font-light text-text-secondary leading-[1.9] max-w-xl">
          Each volume is hardcover, linen-bound, and designed with
          archival-quality materials built to last generations. Your story,
          typeset and printed with the care it deserves.
        </p>
      </div>
    </main>
  );
}
