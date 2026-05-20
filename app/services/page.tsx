import { siteConfig } from "@/content/site-config";
import PageHero from "@/components/PageHero";
import { buildMetadata } from "@/components/SEOHead";
import { StaggerChildren, StaggerItem, CardTiltLayer } from "@/components/motion";
import assetManifest from "@/content/asset-manifest.json";
import Link from "next/link";

const images = (assetManifest as { images?: Record<string, string> }).images ?? {};

export const metadata = buildMetadata({
  title: `Services — ${siteConfig.company.name}`,
  description:
    "Strategy, creative, media and content for ambitious B2B brands — partner-led from London.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Four disciplines, one room."
        intro="Strategy, creative, media and content — under one roof, with senior people on every project."
        image={images["section-services"]}
      />

      <section className="section-pad bg-bg">
        <div className="container-x">
          <StaggerChildren staggerDelay={0.08}>
            <div className="space-y-px">
              {siteConfig.services.map((svc) => (
                <StaggerItem key={svc.slug}>
                  <CardTiltLayer max={2}>
                    <Link
                      href={`/services/${svc.slug}`}
                      className="block group border-t border-line py-12 md:py-16 hover:bg-bg-2/60 transition-colors px-1 md:px-6 -mx-1 md:-mx-6"
                    >
                      <div className="grid grid-cols-12 gap-x-8 items-start">
                        <div className="col-span-2 md:col-span-1 font-mono text-sm text-accent">
                          {svc.number}
                        </div>
                        <div className="col-span-10 md:col-span-5">
                          <h2 className="font-display font-light text-[clamp(36px,5.5vw,80px)] text-ink leading-[0.98] tracking-tight-x group-hover:translate-x-2 transition-transform duration-700">
                            {svc.name}
                            <span className="text-accent">.</span>
                          </h2>
                        </div>
                        <div className="col-span-12 md:col-span-6 mt-4 md:mt-3 text-ink/75 text-base md:text-lg leading-relaxed">
                          {svc.description}
                          <div className="mt-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-ink/60 group-hover:text-accent transition-colors">
                            Explore {svc.name.toLowerCase()} →
                          </div>
                        </div>
                      </div>
                    </Link>
                  </CardTiltLayer>
                </StaggerItem>
              ))}
            </div>
          </StaggerChildren>
        </div>
      </section>
    </>
  );
}
