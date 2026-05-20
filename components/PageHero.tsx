"use client";
import { motion, useReducedMotion } from "framer-motion";

export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <section className="relative w-full h-[72vh] min-h-[480px] overflow-hidden">
      <div className="absolute inset-0">
        {image ? (
          <img
            src={image}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#2a1a14] via-bg-2 to-bg" />
        )}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,9,0.55) 0%, rgba(10,10,9,0.45) 60%, rgba(10,10,9,0.85) 100%)",
          }}
        />
      </div>
      <div className="absolute inset-0 flex items-end pb-16 md:pb-24">
        <div className="container-x">
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="eyebrow mb-5"
          >
            {eyebrow}
          </motion.div>
          <h1 className="display-xl text-[clamp(48px,8.5vw,144px)] text-ink leading-[0.95] tracking-tight-x max-w-5xl">
            {title}
          </h1>
          {intro && (
            <motion.p
              initial={reduced ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.7 }}
              className="mt-6 max-w-2xl text-base md:text-lg text-ink/75 leading-relaxed"
            >
              {intro}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
