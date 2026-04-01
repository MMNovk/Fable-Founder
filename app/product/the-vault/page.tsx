import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Vault — Fable & Founder",
  description:
    "A secure, private web experience housing the full story and media.",
};

export default function TheVaultPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-32">
      <div className="max-w-3xl">
        <p className="font-body text-[10px] font-normal tracking-[0.3em] uppercase text-text-secondary mb-6">
          The Vault
        </p>
        <h1
          className="font-display font-light text-text-primary leading-[1.2] mb-8"
          style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
        >
          A living archive.
        </h1>
        <p className="font-body text-[15px] font-light text-text-secondary leading-[1.9] max-w-xl">
          A secure, private web experience housing the full story, photographs,
          audio excerpts, and supplementary materials. Accessible forever via the
          coin or a private link.
        </p>
      </div>
    </main>
  );
}
