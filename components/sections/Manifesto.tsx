"use client";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/content/site-config";

export default function Manifesto() {
  const reduced = useReducedMotion();
  return (
    <section className="section-cream section-pad border-t border-[#1c1a17]/15">
      <div className="container-x">
        <div className="max-w-5xl">
          <div className="font-mono text-[11px] tracking-[0.32em] uppercase text-[#8a4a2c] mb-6">
            {siteConfig.manifesto.eyebrow}
          </div>
          <motion.h2
            initial={reduced ? {} : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-light text-[clamp(40px,7vw,112px)] leading-[0.96] text-[#1c1a17] tracking-tight-x"
          >
            {siteConfig.manifesto.body.split(".").map((s, i, arr) =>
              s.trim() ? (
                <span key={i} className="block">
                  {s.trim()}
                  {i < arr.length - 1 ? "." : ""}
                </span>
              ) : null
            )}
          </motion.h2>
        </div>
      </div>
    </section>
  );
}
