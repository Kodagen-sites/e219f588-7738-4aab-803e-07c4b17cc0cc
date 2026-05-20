"use client";
import { Marquee } from "@/components/motion";
import { siteConfig } from "@/content/site-config";

export default function MarqueeStrip() {
  return (
    <div className="bg-bg">
      <Marquee items={siteConfig.marquee} />
    </div>
  );
}
