export default function Footer() {
  return (
    <footer id="contact" className="bg-bg-alt border-t border-accent-dim/30 px-6 md:px-10 py-10 md:py-14">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <div>
          <p className="font-display text-xl font-light text-text-primary tracking-wide">
            Fable & Founder
          </p>
          <p className="font-body text-[11px] font-light text-text-secondary mt-1">
            A Euviant Company
          </p>
        </div>

        <p className="font-body text-[11px] font-light text-text-tertiary">
          &copy; 2026 Fable & Founder. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
