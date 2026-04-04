import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Fable & Founder",
  description:
    "The mission, beliefs, and people behind Fable & Founder.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 md:px-10 py-32">
      <div className="max-w-4xl mx-auto">
        {/* 1 — Mission Hero */}
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
            Fable &amp; Founder preserves the voices, memories, and wisdom of
            the people who shaped your world — before time takes them from us.
            We believe that ordinary lives contain extraordinary stories, and
            that the act of preserving them is itself an act of love.
          </p>
        </section>

        {/* Divider */}
        <div className="w-full mb-24 md:mb-32" style={{ height: "0.5px", background: "#4a4540" }} />

        {/* 2 — Origin Story */}
        <section className="mb-24 md:mb-32">
          <p className="font-body text-[10px] font-normal tracking-[0.3em] uppercase text-accent mb-6">
            The Origin
          </p>
          <h2
            className="font-display font-light text-text-primary leading-[1.2] mb-8"
            style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
          >
            It started with a grandfather.
          </h2>
          <p className="font-body text-[15px] font-light text-text-secondary leading-[1.9] max-w-2xl mb-6">
            When our founder lost his grandfather, the family gathered to
            remember. But within hours, the details were already slipping —
            dates blurred, stories contradicted each other, and the quiet
            moments that defined the man were lost in the noise of grief.
          </p>
          <p className="font-body text-[15px] font-light text-text-secondary leading-[1.9] max-w-2xl">
            That evening, a simple question emerged: what if someone had taken
            the time to sit with him, to listen, and to write it all down?
            Not a eulogy. Not a Wikipedia entry. A real, full, honest account
            of a life — told in his own voice. Fable &amp; Founder was born
            from that question.
          </p>
        </section>

        {/* Divider */}
        <div className="w-full mb-24 md:mb-32" style={{ height: "0.5px", background: "#4a4540" }} />

        {/* 3 — What We Believe */}
        <section className="mb-24 md:mb-32">
          <p className="font-body text-[10px] font-normal tracking-[0.3em] uppercase text-accent mb-6">
            What We Believe
          </p>
          <div className="space-y-10 max-w-2xl">
            <div>
              <h3 className="font-display font-light italic text-text-primary text-xl mb-3">
                Every life is a first edition.
              </h3>
              <p className="font-body text-[15px] font-light text-text-secondary leading-[1.9]">
                There will never be another like it. The stories, the voice,
                the perspective — once they&apos;re gone, they&apos;re gone
                forever. We treat every project with the reverence of
                something irreplaceable.
              </p>
            </div>
            <div>
              <h3 className="font-display font-light italic text-text-primary text-xl mb-3">
                Craft over speed.
              </h3>
              <p className="font-body text-[15px] font-light text-text-secondary leading-[1.9]">
                We take as long as the story requires. Interviews are
                unhurried. Writing is revised until it reads like literature.
                Design is considered down to the paper stock and binding.
              </p>
            </div>
            <div>
              <h3 className="font-display font-light italic text-text-primary text-xl mb-3">
                The quiet ones matter most.
              </h3>
              <p className="font-body text-[15px] font-light text-text-secondary leading-[1.9]">
                History remembers the loud. We listen to the quiet — the
                people who never sought the spotlight but whose lives were
                no less extraordinary for it.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full mb-24 md:mb-32" style={{ height: "0.5px", background: "#4a4540" }} />

        {/* 4 — The Founder */}
        <section id="founder" className="mb-24 md:mb-32">
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

        {/* 5 — CTA */}
        <section className="text-center py-16">
          <p
            className="font-display font-light italic text-text-primary leading-[1.3] mb-8"
            style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
          >
            Ready to preserve a story?
          </p>
          <a
            href="/commission"
            className="inline-block font-body font-normal text-[11px] uppercase pb-1"
            style={{
              letterSpacing: "0.2em",
              color: "#c4a96b",
              borderBottom: "0.5px solid #c4a96b",
            }}
          >
            Begin a Commission &rarr;
          </a>
        </section>
      </div>
    </main>
  );
}
