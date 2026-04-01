import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Mission — Fable & Founder",
  description: "Why we preserve the stories of ordinary people.",
};

export default function MissionPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-32">
      <div className="max-w-3xl">
        <p className="font-body text-[10px] font-normal tracking-[0.3em] uppercase text-text-secondary mb-6">
          Our Mission
        </p>
        <h1
          className="font-display font-light italic text-text-primary leading-[1.2] mb-8"
          style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
        >
          Every person who ever lived had a story worth telling.
        </h1>
        <p className="font-body text-[15px] font-light text-text-secondary leading-[1.9] max-w-xl">
          Most were never written down. We exist to change that. Fable & Founder
          preserves the voices, memories, and wisdom of the people who shaped
          your world — before time takes them from us.
        </p>
      </div>
    </main>
  );
}
