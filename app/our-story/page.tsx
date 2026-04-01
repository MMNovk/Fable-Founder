import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story — Fable & Founder",
  description: "The mission and people behind Fable & Founder.",
};

export default function OurStoryPage() {
  return (
    <main className="min-h-screen px-6 md:px-10 py-32">
      <div className="max-w-4xl mx-auto">
        {/* Mission */}
        <section id="mission" className="mb-24 md:mb-32">
          <p className="font-body text-[10px] font-normal tracking-[0.3em] uppercase text-accent mb-6">
            Our Mission
          </p>
          <h1
            className="font-display font-light italic text-text-primary leading-[1.2] mb-8"
            style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
          >
            Every person who ever lived had a story worth telling.
          </h1>
          <p className="font-body text-[15px] font-light text-text-secondary leading-[1.9] max-w-2xl mb-6">
            Most were never written down. We exist to change that.
          </p>
          <p className="font-body text-[15px] font-light text-text-secondary leading-[1.9] max-w-2xl">
            Fable & Founder preserves the voices, memories, and wisdom of the
            people who shaped your world — before time takes them from us.
            We believe that ordinary lives contain extraordinary stories, and
            that the act of preserving them is itself an act of love.
          </p>
        </section>

        {/* The Founder */}
        <section id="founder">
          <p className="font-body text-[10px] font-normal tracking-[0.3em] uppercase text-accent mb-6">
            The Founder
          </p>
          <h2
            className="font-display font-light text-text-primary leading-[1.2] mb-8"
            style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
          >
            A story of our own.
          </h2>
          <p className="font-body text-[15px] font-light text-text-secondary leading-[1.9] max-w-2xl">
            Coming soon. The story behind the storytellers — how a personal
            loss became a company dedicated to making sure no story is lost
            again.
          </p>
        </section>
      </div>
    </main>
  );
}
