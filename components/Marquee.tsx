"use client";

const phrases = [
  "Stories worth preserving",
  "Ordinary people, extraordinary lives",
  "Fable & Founder",
  "Heritage in your hands",
  "Every life is a chapter",
];

export default function Marquee() {
  const content = phrases.join("  \u00B7  ") + "  \u00B7  ";

  return (
    <div className="overflow-hidden border-y border-text-tertiary/30 py-3">
      <div className="marquee-track flex whitespace-nowrap">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="font-body text-[11px] font-light tracking-[0.25em] uppercase text-text-secondary shrink-0 px-4"
            aria-hidden={i > 0}
          >
            {content}
          </span>
        ))}
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee 40s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </div>
  );
}
