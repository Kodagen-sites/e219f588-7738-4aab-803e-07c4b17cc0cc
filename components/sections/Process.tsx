"use client";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/content/site-config";

export default function Process() {
  const reduced = useReducedMotion();
  return (
    <section className="section-pad bg-bg border-t border-line">
      <div className="container-x">
        <div className="grid grid-cols-12 gap-x-8 mb-16">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">{siteConfig.process.eyebrow}</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="display-xl text-[clamp(36px,5.6vw,76px)] text-ink leading-[1] tracking-tight-x">
              {siteConfig.process.heading}
            </h2>
          </div>
        </div>

        <div className="hairline mb-0" />
        <ol>
          {siteConfig.process.steps.map((step, i) => (
            <motion.li
              key={step.n}
              initial={reduced ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className="border-b border-line"
            >
              <div className="grid grid-cols-12 gap-x-8 py-8 md:py-12 group hover:bg-bg-2/60 transition-colors px-1 md:px-4 -mx-1 md:-mx-4">
                <div className="col-span-2 md:col-span-1 font-mono text-sm text-accent">
                  {step.n}
                </div>
                <div className="col-span-10 md:col-span-3">
                  <h3 className="font-display text-2xl md:text-3xl text-ink group-hover:translate-x-1 transition-transform duration-500">
                    {step.name}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-8 text-ink/70 text-base md:text-lg leading-relaxed mt-3 md:mt-0">
                  {step.body}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
