"use client";
import { useEffect, useRef, useState, ReactNode } from "react";
import framesManifest from "@/content/frames-manifest.json";

type FramesManifest = {
  frameCount: number;
  frameDir: string;
  frameUrlTemplate?: string;
  fps?: number;
  width?: number;
};

const manifest = framesManifest as FramesManifest;

function frameUrl(n: number) {
  const padded = String(n).padStart(4, "0");
  if (manifest.frameUrlTemplate) {
    return manifest.frameUrlTemplate.replace("{NNNN}", padded);
  }
  return `${manifest.frameDir}/frame-${padded}.jpg`;
}

export default function ScrollCanvas({
  children,
  scrollDistance = 4000,
  onProgress,
  posterSrc,
}: {
  children?: ReactNode;
  scrollDistance?: number;
  onProgress?: (p: number) => void;
  posterSrc?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  const frameCount = manifest.frameCount || 0;

  useEffect(() => {
    if (frameCount === 0) {
      setLoaded(true);
      return;
    }
    let cancelled = false;
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        loadedCount++;
        if (loadedCount >= Math.min(frameCount, 12) && !cancelled) {
          setLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
      };
      img.src = frameUrl(i);
      images.push(img);
    }
    imagesRef.current = images;
    return () => {
      cancelled = true;
    };
  }, [frameCount]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      draw(progress);
    }

    function draw(p: number) {
      if (!ctx || !canvas) return;
      const idx = Math.min(
        frameCount - 1,
        Math.max(0, Math.floor(p * (frameCount - 1)))
      );
      const img = imagesRef.current[idx];
      ctx.fillStyle = "#0a0a09";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      if (img && img.complete && img.naturalWidth > 0) {
        // cover-style centering
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

    let rafId = 0;
    function onScroll() {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height - vh;
      const scrolled = Math.max(0, -rect.top);
      const p = total > 0 ? Math.min(1, Math.max(0, scrolled / total)) : 0;
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setProgress(p);
        onProgress?.(p);
        draw(p);
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [frameCount, onProgress, progress]);

  return (
    <div
      ref={containerRef}
      style={{ height: `${scrollDistance}px` }}
      className="relative w-full"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {frameCount > 0 ? (
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            aria-hidden
          />
        ) : posterSrc ? (
          <img
            src={posterSrc}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#1c1815] via-bg to-black" />
        )}
        {/* legibility scrim */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,9,0.35) 0%, rgba(10,10,9,0.15) 30%, rgba(10,10,9,0.55) 100%)",
          }}
        />
        {!loaded && frameCount > 0 && (
          <div className="absolute inset-0 bg-bg flex items-center justify-center">
            <div className="text-ink/40 font-mono text-[10px] tracking-[0.3em] uppercase">
              Loading
            </div>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
