"use client";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";

export default function Showcase() {
  const reduced = useReducedMotion();
  const items = siteConfig.showcase.items;
  return (
    <section className="section-pad bg-bg-2 border-t border-line">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-20">
          <div>
            <div className="eyebrow mb-4">{siteConfig.showcase.eyebrow}</div>
            <h2 className="display-xl text-[clamp(36px,5.8vw,80px)] text-ink leading-[0.98] max-w-3xl">
              {siteConfig.showcase.heading}
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-[0.18em] text-ink/80 hover:text-accent transition-colors self-start md:self-auto"
          >
            All work →
          </Link>
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-16">
          {items.map((item, i) => {
            // Asymmetric editorial layout
            const span = i % 2 === 0 ? "md:col-span-7" : "md:col-span-5 md:mt-24";
            return (
              <motion.article
                key={item.slug}
                initial={reduced ? {} : { opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`col-span-12 ${span} group`}
              >
                <Link href="/work" className="block">
                  <div className="relative overflow-hidden bg-bg-3 aspect-[4/3]">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-[#2a1a14] to-bg" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                  <div className="mt-5 flex items-baseline justify-between gap-4">
                    <div>
                      <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-accent mb-2">
                        {item.client} · {item.sector}
                      </div>
                      <h3 className="font-display text-xl md:text-2xl text-ink group-hover:text-accent transition-colors leading-snug">
                        {item.title}
                      </h3>
                    </div>
                    <div className="font-mono text-[10px] tracking-widest text-ink/40 shrink-0">
                      {item.year}
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
