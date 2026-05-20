"use client";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/content/site-config";

export default function Testimonials() {
  const reduced = useReducedMotion();
  return (
    <section className="section-pad bg-bg border-t border-line">
      <div className="container-x">
        <div className="grid grid-cols-12 gap-x-8 mb-12">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">In their words</div>
          </div>
        </div>

        <div className="space-y-16 md:space-y-24">
          {siteConfig.testimonials.map((t, i) => (
            <motion.figure
              key={i}
              initial={reduced ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.05 }}
              className="grid grid-cols-12 gap-x-8"
            >
              <div className="col-span-12 md:col-span-1 font-display text-6xl text-accent leading-none">
                &ldquo;
              </div>
              <div className="col-span-12 md:col-span-11">
                <blockquote className="font-display italic text-[clamp(24px,3.4vw,44px)] text-ink/90 leading-[1.18] tracking-tight max-w-4xl">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 font-mono text-xs uppercase tracking-[0.22em] text-ink/55">
                  {t.author} — {t.role}
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
