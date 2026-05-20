"use client";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { MagneticButton } from "@/components/motion";
import { siteConfig } from "@/content/site-config";

export default function CTA() {
  const reduced = useReducedMotion();
  const cta = siteConfig.cta;
  const bgImage = siteConfig.colors ? "" : "";
  const ctaImage = (siteConfig as any).hero?.backgroundImage; // fallback
  return (
    <section className="relative overflow-hidden border-t border-line">
      {/* CTA1 centered oversized type — over warm full-bleed image */}
      <div className="absolute inset-0">
        <img
          src={
            (siteConfig as any).seo?.ogImage ||
            "https://zykgxmubadvmlxpkqrzd.supabase.co/storage/v1/object/public/site-assets/e219f588-7738-4aab-803e-07c4b17cc0cc/images/section-cta.jpg"
          }
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,9,0.45) 0%, rgba(10,10,9,0.65) 60%, rgba(10,10,9,0.85) 100%)",
          }}
        />
      </div>

      <div className="relative container-x py-32 md:py-48 text-center">
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="eyebrow mb-6"
        >
          {cta.eyebrow}
        </motion.div>

        <motion.h2
          initial={reduced ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="display-xl text-[clamp(48px,9vw,144px)] text-ink mx-auto max-w-5xl leading-[0.96] tracking-tight-x"
        >
          {cta.headline.split(".").map((s, i, arr) =>
            s.trim() ? (
              <span key={i} className={i % 2 ? "italic block" : "block"}>
                {s.trim()}{i < arr.length - 2 ? "." : i === arr.length - 2 ? "." : ""}
              </span>
            ) : null
          )}
        </motion.h2>

        <motion.p
          initial={reduced ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-8 mx-auto max-w-xl text-base md:text-lg text-ink/75 leading-relaxed"
        >
          {cta.body}
        </motion.p>

        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          <MagneticButton
            href={cta.primaryHref}
            className="inline-flex items-center px-9 py-4 rounded-full bg-accent text-bg font-mono uppercase tracking-[0.2em] text-xs hover:bg-accent-2 transition-colors min-h-[48px]"
          >
            {cta.primary}
          </MagneticButton>
          <Link
            href={cta.secondaryHref}
            className="inline-flex items-center px-9 py-4 rounded-full border border-line text-ink/80 font-mono uppercase tracking-[0.2em] text-xs hover:border-ink hover:text-ink transition-colors min-h-[48px]"
          >
            {cta.secondary}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
