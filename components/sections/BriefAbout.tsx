"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function BriefAbout() {
  return (
    <section className="px-6 md:px-10 py-24 md:py-40">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-4xl ml-0 md:ml-16 flex gap-6 md:gap-10"
      >
        {/* Gold vertical rule */}
        <div className="w-px shrink-0" style={{ background: "rgba(196, 169, 107, 0.5)" }} />

        <div>
          {/* Mission statement */}
          <p
            className="font-display font-light italic leading-[1.3] mb-8"
            style={{ fontSize: "clamp(28px, 3.5vw, 48px)", color: "#d4cfc6" }}
          >
            Ordinary people live extraordinary lives. We make sure those lives
            aren&rsquo;t forgotten.
          </p>

          {/* Rule */}
          <div className="w-full mb-8" style={{ height: "0.5px", background: "#4a4540" }} />

          {/* Brief about paragraph */}
          <p
            className="font-body font-light text-[15px] leading-[1.9] mb-8"
            style={{ color: "#7a7166" }}
          >
            History has always remembered the powerful. The kings, the generals,
            the names carved into monuments. But ordinary people — the ones who
            crossed oceans, survived wars, and built lives from nothing — their
            stories disappear with them. Fable & Founder exists to change that.
          </p>

          {/* Hear more link */}
          <Link
            href="/about"
            className="inline-block font-body font-normal text-[11px] uppercase pb-1"
            style={{
              letterSpacing: "0.2em",
              color: "#c4a96b",
              borderBottom: "0.5px solid #c4a96b",
            }}
          >
            Hear more &rarr;
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
