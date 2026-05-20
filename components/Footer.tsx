"use client";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { motion, useReducedMotion } from "framer-motion";
import { SocialLinks } from "@/components/SocialLinks";

export default function Footer() {
  const reduced = useReducedMotion();
  const f = siteConfig.footer;
  return (
    <footer className="relative bg-bg border-t border-line overflow-hidden">
      {/* FT2 — Asymmetric Editorial Footer */}
      <div className="container-x pt-20 md:pt-28 pb-10">
        {/* Top — giant editorial wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <h2 className="font-display font-light text-[clamp(64px,14vw,220px)] leading-[0.86] tracking-tight-x text-ink">
            <span className="block">Vantage<span className="text-accent">.</span></span>
          </h2>
          <p className="mt-6 font-display italic text-xl md:text-2xl text-ink/70 max-w-xl">
            {f.brandStatement}
          </p>
        </motion.div>

        {/* Mid — asymmetric grid */}
        <div className="grid grid-cols-12 gap-y-12 gap-x-8 mb-16">
          {/* Left column — contact (wider) */}
          <div className="col-span-12 md:col-span-5">
            <div className="eyebrow mb-4">Get in touch</div>
            <a
              href={`mailto:${f.contactEmail}`}
              className="block font-display text-2xl md:text-3xl text-ink hover:text-accent transition-colors mb-2"
            >
              {f.contactEmail}
            </a>
            <a
              href={`tel:${f.contactPhone.replace(/\s+/g, "")}`}
              className="block font-mono text-sm text-ink/70 hover:text-ink transition-colors mb-6"
            >
              {f.contactPhone}
            </a>
            <address className="not-italic text-sm text-ink/65 leading-relaxed">
              {f.address.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>

          {/* Right columns — links */}
          {f.columns.map((col) => (
            <div key={col.heading} className="col-span-6 md:col-span-3">
              <div className="eyebrow mb-4">{col.heading}</div>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink/70 hover:text-ink hover:translate-x-1 inline-block transition-all"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="col-span-12 md:col-span-1 hidden md:block" aria-hidden />
        </div>

        <div className="hairline mb-6" />

        {/* Bottom row — legal + socials + copyright */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-6 text-ink/55 font-mono uppercase tracking-[0.18em]">
            <span>
              © {new Date().getFullYear()} {siteConfig.company.name}. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-6">
            <ul className="flex items-center gap-5 text-xs uppercase tracking-[0.18em] font-mono">
              {f.legal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-ink/55 hover:text-ink transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <SocialLinks socials={f.socials} />
          </div>
        </div>
      </div>
    </footer>
  );
}
