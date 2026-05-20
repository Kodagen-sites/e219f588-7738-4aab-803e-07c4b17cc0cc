"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MagneticButton, ScrollHint } from "@/components/motion";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();
  const [canPlay, setCanPlay] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.playsInline = true;
    v.loop = true;
    if (!reduced) v.play().catch(() => {});
  }, [reduced]);

  const hero = siteConfig.hero;
  const hasVideo = !!hero.backgroundVideo;
  const posterImage = hero.backgroundImage || "";

  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      {/* Full-bleed video */}
      <div className="absolute inset-0">
        {hasVideo ? (
          <video
            ref={videoRef}
            src={hero.backgroundVideo}
            poster={posterImage}
            preload="auto"
            autoPlay
            muted
            loop
            playsInline
            onCanPlay={() => setCanPlay(true)}
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden
          />
        ) : posterImage ? (
          <img
            src={posterImage}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#2a1a14] via-[#1a1310] to-bg" />
        )}
        {/* Legibility scrim — stronger on left where text lives */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(105deg, rgba(10,10,9,0.78) 0%, rgba(10,10,9,0.55) 35%, rgba(10,10,9,0.15) 65%, rgba(10,10,9,0.40) 100%)",
          }}
        />
      </div>

      {/* HO2 — left-split overlay. Subject lives in right two-thirds of video. */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end pb-16 md:pb-24">
        <div className="container-x grid grid-cols-12 gap-x-8">
          <div className="col-span-12 md:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="eyebrow mb-6"
            >
              {hero.eyebrow}
            </motion.div>

            {/* H5 Big-stack with E2 word-split rise entrance */}
            <h1 className="display-xl text-[clamp(48px,10.5vw,168px)] text-ink">
              {hero.h1Lines.map((line, i) => (
                <span
                  key={i}
                  style={{
                    display: "block",
                    overflow: "hidden",
                  }}
                >
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 1.1,
                      delay: 0.45 + i * 0.12,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{
                      display: "inline-block",
                      fontStyle: line.italic ? "italic" : "normal",
                    }}
                  >
                    {line.text}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 1.2 }}
              className="mt-8 max-w-xl text-base md:text-lg text-ink/75 leading-relaxed"
            >
              {hero.body}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.5 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <MagneticButton
                href="/contact"
                className="inline-flex items-center px-7 py-3.5 rounded-full bg-accent text-bg font-mono uppercase tracking-[0.18em] text-[11px] hover:bg-accent-2 transition-colors min-h-[44px]"
              >
                Book a discovery call
              </MagneticButton>
              <Link
                href="/work"
                className="inline-flex items-center px-7 py-3.5 rounded-full border border-line text-ink/80 font-mono uppercase tracking-[0.18em] text-[11px] hover:border-ink hover:text-ink transition-colors min-h-[44px]"
              >
                View selected work
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <ScrollHint />
    </section>
  );
}
