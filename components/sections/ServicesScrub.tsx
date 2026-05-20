"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import framesManifest from "@/content/frames-manifest.json";
import { siteConfig } from "@/content/site-config";

type FramesManifest = {
  frameCount: number;
  frameDir: string;
  frameUrlTemplate?: string;
};

const manifest = framesManifest as FramesManifest;

function frameUrl(n: number) {
  const padded = String(Math.max(1, Math.min(manifest.frameCount, n))).padStart(4, "0");
  if (manifest.frameUrlTemplate) {
    return manifest.frameUrlTemplate.replace("{NNNN}", padded);
  }
  return `${manifest.frameDir}/frame-${padded}.jpg`;
}

export default function ServicesScrub() {
  const services = siteConfig.services;
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const frameCount = manifest.frameCount || 0;

  // Preload a representative subset of frames (every 4th) for the scrub
  useEffect(() => {
    if (frameCount === 0) return;
    const imgs: HTMLImageElement[] = [];
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = frameUrl(i);
      imgs.push(img);
    }
    imagesRef.current = imgs;
  }, [frameCount]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      draw(0);
    }

    function draw(p: number) {
      if (!ctx || !canvas) return;
      ctx.fillStyle = "#0a0a09";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      if (frameCount === 0) return;
      const idx = Math.min(
        frameCount - 1,
        Math.max(0, Math.floor(p * (frameCount - 1)))
      );
      const img = imagesRef.current[idx];
      if (img && img.complete && img.naturalWidth > 0) {
        const cw = canvas.width;
        const ch = canvas.height;
        const iw = img.naturalWidth;
        const ih = img.naturalHeight;
        const ratio = Math.max(cw / iw, ch / ih);
        const dw = iw * ratio;
        const dh = ih * ratio;
        const dx = (cw - dw) / 2;
        const dy = (ch - dh) / 2;
        ctx.drawImage(img, dx, dy, dw, dh);
      }
    }

    resize();
    window.addEventListener("resize", resize);

    let raf = 0;
    function onScroll() {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height - vh;
      const scrolled = Math.max(0, -rect.top);
      const p = total > 0 ? Math.min(1, Math.max(0, scrolled / total)) : 0;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        draw(p);
        // Map progress to service index (4 services)
        const idx = Math.min(
          services.length - 1,
          Math.floor(p * services.length)
        );
        setActive(idx);
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [frameCount, services.length]);

  const sectionHeight = `${services.length * 100}vh`;

  return (
    <section
      ref={containerRef}
      style={{ height: sectionHeight }}
      className="relative w-full bg-bg"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Scrubbed canvas — re-uses hero frames */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          aria-hidden
        />
        {/* Strong overlay for legibility */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(95deg, rgba(10,10,9,0.85) 0%, rgba(10,10,9,0.65) 40%, rgba(10,10,9,0.30) 80%, rgba(10,10,9,0.55) 100%)",
          }}
        />

        {/* Type overlay */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="container-x grid grid-cols-12 gap-x-8">
            {/* Sticky eyebrow + heading on the right */}
            <div className="hidden md:flex col-span-4 flex-col gap-3 justify-center">
              <div className="eyebrow">Disciplines</div>
              <h2 className="font-display font-light text-3xl tracking-tight-x text-ink/80 leading-tight">
                {siteConfig.servicesHeading}
              </h2>
              <div className="mt-6 flex flex-col gap-2">
                {services.map((_, i) => (
                  <div
                    key={i}
                    className={`h-px transition-all duration-700 ${
                      i === active
                        ? "w-24 bg-accent"
                        : i < active
                        ? "w-16 bg-ink/40"
                        : "w-6 bg-ink/20"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Service display — cross-fade */}
            <div className="col-span-12 md:col-span-8 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={reduced ? {} : { opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? {} : { opacity: 0, y: -32 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="max-w-2xl"
                >
                  <div className="font-mono text-[10px] tracking-[0.45em] uppercase text-accent mb-6">
                    {services[active].number} / {String(services.length).padStart(2, "0")}
                  </div>
                  <h3 className="display-xl text-[clamp(56px,11vw,160px)] text-ink mb-6">
                    {services[active].name}
                    <span className="text-accent">.</span>
                  </h3>
                  <p className="text-ink/75 text-lg md:text-xl leading-relaxed max-w-xl mb-8">
                    {services[active].description}
                  </p>
                  <Link
                    href={`/services/${services[active].slug}`}
                    className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-[0.18em] text-ink hover:text-accent transition-colors border-b border-line hover:border-accent pb-1"
                  >
                    Explore {services[active].name.toLowerCase()} →
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Progress indicator (mobile) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 md:hidden z-10">
          {services.map((_, i) => (
            <div
              key={i}
              className={`h-1 transition-all duration-500 rounded-full ${
                i === active ? "w-8 bg-accent" : "w-4 bg-ink/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
