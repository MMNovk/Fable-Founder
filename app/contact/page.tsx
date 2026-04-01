import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Fable & Founder",
  description: "Get in touch to begin preserving a story.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-32">
      <div className="max-w-3xl">
        <p className="font-body text-[10px] font-normal tracking-[0.3em] uppercase text-text-secondary mb-6">
          Contact
        </p>
        <h1
          className="font-display font-light text-text-primary leading-[1.2] mb-8"
          style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
        >
          Begin a story.
        </h1>
        <p className="font-body text-[15px] font-light text-text-secondary leading-[1.9] max-w-xl mb-10">
          Ready to preserve a life story? Reach out and we&apos;ll guide you
          through every step.
        </p>
        <a
          href="mailto:hello@fableandfounder.com"
          className="inline-block font-body text-[11px] font-normal tracking-[0.25em] uppercase text-accent border-b border-accent/40 pb-1 transition-colors duration-300 hover:border-accent"
        >
          hello@fableandfounder.com
        </a>
      </div>
    </main>
  );
}
