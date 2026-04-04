import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Fable & Founder",
  description:
    "The mission, beliefs, and people behind Fable & Founder.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Section 1 — Mission Hero (full height, centered) */}
      <section
        id="mission"
        className="min-h-screen flex items-center justify-center px-6 md:px-10"
        style={{ background: "#2a2926" }}
      >
        <p
          className="font-display font-light italic text-center leading-[1.3] max-w-4xl"
          style={{ fontSize: "clamp(40px, 5vw, 72px)", color: "#d4cfc6" }}
        >
          Ordinary people live extraordinary lives.
          <br />
          We make sure those lives aren&rsquo;t forgotten.
        </p>
      </section>

      {/* Section 2 — Origin Story */}
      <section className="px-6 md:px-10 py-24 md:py-40">
        <div className="max-w-3xl">
          <p className="font-body text-[10px] font-normal tracking-[0.3em] uppercase text-accent mb-12">
            Our Story
          </p>

          <div className="space-y-8">
            <p
              className="font-body font-light text-[16px] leading-[1.9]"
              style={{ color: "#d4cfc6" }}
            >
              I grew up visiting retirement homes. My grandmother lived in one
              for the last years of her life, and every weekend I would sit with
              her and the other residents. They told me about crossing oceans in
              the bellies of ships, about losing everything in wars they didn&rsquo;t
              start, about building lives from nothing in countries where they
              didn&rsquo;t speak the language. I was hearing history — not the kind in
              textbooks, but the kind that disappears when the person telling it
              is gone.
            </p>

            <p
              className="font-body font-light text-[16px] leading-[1.9]"
              style={{ color: "#d4cfc6" }}
            >
              There&rsquo;s a gap in how history works. We know what kings and
              generals did. We can read their letters, study their campaigns,
              visit their monuments. But we don&rsquo;t know what ordinary people
              felt — how they survived, what they carried, what they refused to
              let go of. That gap is what Fable &amp; Founder fills. Not with
              data or archives, but with stories told in the voices of the
              people who lived them.
            </p>

            <p
              className="font-body font-light text-[16px] leading-[1.9]"
              style={{ color: "#d4cfc6" }}
            >
              This isn&rsquo;t nostalgia. It&rsquo;s urgency. The people who lived
              through the 20th century&rsquo;s great upheavals — the wars, the
              migrations, the revolutions — are still here. For now. Every week,
              the world loses thousands of voices that will never be heard again.
              We started this company because we believe that doesn&rsquo;t have to
              be the way it ends.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div style={{ height: "0.5px", background: "#4a4540" }} />
      </div>

      {/* Section 3 — What We Believe */}
      <section className="px-6 md:px-10 py-24 md:py-40">
        <div className="max-w-3xl space-y-0">
          <p
            className="font-display font-light italic leading-[1.4] py-10"
            style={{ fontSize: "clamp(20px, 2.5vw, 24px)", color: "#d4cfc6" }}
          >
            Every life contains a history worth preserving.
          </p>
          <div style={{ height: "0.5px", background: "rgba(196, 169, 107, 0.3)" }} />
          <p
            className="font-display font-light italic leading-[1.4] py-10"
            style={{ fontSize: "clamp(20px, 2.5vw, 24px)", color: "#d4cfc6" }}
          >
            The act of being heard is itself a gift.
          </p>
          <div style={{ height: "0.5px", background: "rgba(196, 169, 107, 0.3)" }} />
          <p
            className="font-display font-light italic leading-[1.4] py-10"
            style={{ fontSize: "clamp(20px, 2.5vw, 24px)", color: "#d4cfc6" }}
          >
            Memory is not just personal. It is historical.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div style={{ height: "0.5px", background: "#4a4540" }} />
      </div>

      {/* Section 4 — The Founder */}
      <section id="founder" className="px-6 md:px-10 py-24 md:py-40">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Photo */}
          <div className="aspect-[3/4] overflow-hidden max-w-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&auto=format&q=80"
              alt="The Founder"
              className="w-full h-full object-cover grayscale sepia brightness-90"
              loading="lazy"
            />
          </div>

          {/* Bio */}
          <div className="flex flex-col justify-center">
            <h2
              className="font-display font-light mb-6"
              style={{ fontSize: "clamp(28px, 3.5vw, 32px)", color: "#d4cfc6" }}
            >
              The Founder
            </h2>
            <p
              className="font-body font-light text-[15px] leading-[1.9] mb-4"
              style={{ color: "#7a7166" }}
            >
              Coming soon. The story behind the storytellers — how a personal
              loss became a company dedicated to making sure no story is lost
              again.
            </p>
            <p
              className="font-body font-light text-[15px] leading-[1.9]"
              style={{ color: "#7a7166" }}
            >
              Some stories need time before they&rsquo;re ready to be told.
              This is one of them.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 — CTA */}
      <section className="px-6 md:px-10 py-24 md:py-32 text-center">
        <p
          className="font-display font-light italic leading-[1.3] mb-8"
          style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "#d4cfc6" }}
        >
          Ready to preserve a story?
        </p>
        <Link
          href="/commission"
          className="inline-block font-body font-normal text-[11px] uppercase pb-1"
          style={{
            letterSpacing: "0.2em",
            color: "#c4a96b",
            borderBottom: "0.5px solid #c4a96b",
          }}
        >
          Commission a Story &rarr;
        </Link>
      </section>
    </main>
  );
}
