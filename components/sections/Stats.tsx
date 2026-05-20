"use client";
import { NumberCounter } from "@/components/motion";
import { siteConfig } from "@/content/site-config";

export default function Stats() {
  return (
    <section className="section-pad bg-bg-2 border-y border-line">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-12">
          {siteConfig.stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display font-light text-[clamp(64px,9vw,128px)] text-ink leading-none tracking-tight-x">
                <NumberCounter to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-4 font-mono text-xs tracking-[0.18em] uppercase text-ink/55">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
