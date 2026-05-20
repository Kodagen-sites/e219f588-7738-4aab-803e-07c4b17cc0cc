import { siteConfig } from "@/content/site-config";
import PageHero from "@/components/PageHero";
import { buildMetadata } from "@/components/SEOHead";
import { StaggerChildren, StaggerItem } from "@/components/motion";
import assetManifest from "@/content/asset-manifest.json";
import Link from "next/link";

const images = (assetManifest as { images?: Record<string, string> }).images ?? {};

export const metadata = buildMetadata({
  title: `Work — ${siteConfig.company.name}`,
  description:
    "Selected work for category-defining B2B brands across logistics, AI, banking and healthcare.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title="Brands we've helped become inevitable."
        intro="Long-term partnerships with category-defining enterprise B2B brands. A representative sample."
        image={images["section-work-1"]}
      />

      <section className="section-pad bg-bg">
        <div className="container-x">
          <StaggerChildren staggerDelay={0.1} className="grid grid-cols-12 gap-x-6 gap-y-16 md:gap-y-24">
            {siteConfig.showcase.items.map((item, i) => {
              const span = i % 2 === 0 ? "md:col-span-7" : "md:col-span-5 md:mt-24";
              return (
                <StaggerItem key={item.slug} className={`col-span-12 ${span} group`}>
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
                  </div>
                  <div className="mt-5">
                    <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-accent mb-2">
                      {item.client} · {item.sector} · {item.year}
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl text-ink leading-snug max-w-xl">
                      {item.title}
                    </h2>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      <section className="section-cream section-pad">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-x-8 items-center">
            <div className="col-span-12 md:col-span-9">
              <div className="font-mono text-[11px] tracking-[0.32em] uppercase text-[#8a4a2c] mb-5">
                Currently in the studio
              </div>
              <h2 className="display-xl text-[clamp(40px,6vw,88px)] text-[#1c1a17] leading-[1] tracking-tight-x">
                We're running a closed roster. Limited briefs per quarter.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-3 md:text-right mt-6 md:mt-0">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-full bg-[#1c1a17] text-[#f3eee3] font-mono uppercase tracking-[0.2em] text-xs hover:bg-[#8a4a2c] transition-colors"
              >
                Enquire →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
