import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bg-alt border-t border-accent-dim/30 px-6 md:px-10 pt-10 md:pt-14 pb-8">
      <div className="max-w-6xl mx-auto">
        {/* Main footer row */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="font-display text-xl font-light text-text-primary tracking-wide">
              Fable & Founder
            </p>
            <p className="font-body text-[11px] font-light text-text-secondary mt-1">
              A Euviant Company
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="font-body text-[11px] font-light text-text-tertiary transition-colors duration-300 hover:text-text-secondary"
            >
              Privacy Policy
            </Link>
            <p className="font-body text-[11px] font-light text-text-tertiary">
              &copy; 2026 Fable & Founder
            </p>
          </div>
        </div>

        {/* Contact nudge */}
        <div className="border-t border-text-tertiary/20 pt-6 text-center">
          <p className="font-body text-[12px] font-light text-text-tertiary inline">
            Ready to begin?{" "}
          </p>
          <Link
            href="/contact"
            className="font-body text-[12px] font-light text-accent transition-colors duration-300 hover:text-accent/80"
          >
            Contact us &rarr;
          </Link>
        </div>
      </div>
    </footer>
  );
}
