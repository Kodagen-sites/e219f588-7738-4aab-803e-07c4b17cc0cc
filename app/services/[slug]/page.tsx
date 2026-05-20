import { siteConfig } from "@/content/site-config";
import PageHero from "@/components/PageHero";
import { buildMetadata } from "@/components/SEOHead";
import { FadeUp, MagneticButton } from "@/components/motion";
import assetManifest from "@/content/asset-manifest.json";
import Link from "next/link";
import { notFound } from "next/navigation";

const images = (assetManifest as { images?: Record<string, string> }).images ?? {};

export async function generateStaticParams() {
  return siteConfig.services.map((s) => ({ slug: s.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const svc = siteConfig.services.find((s) => s.slug === slug);
  return buildMetadata({
    title: svc ? `${svc.name} — ${siteConfig.company.name}` : siteConfig.seo.title,
    description: svc?.description ?? siteConfig.seo.description,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const svc = siteConfig.services.find((s) => s.slug === slug);
  if (!svc) return notFound();

  const idx = siteConfig.services.findIndex((s) => s.slug === slug);
  const next = siteConfig.services[(idx + 1) % siteConfig.services.length];

  return (
    <>
      <PageHero
        eyebrow={`Discipline ${svc.number}`}
        title={`${svc.name}.`}
        intro={svc.description}
        image={
          images["section-services"] ??
          images[`section-work-${idx + 1}`] ??
          ""
        }
      />

      <section className="section-pad bg-bg">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-x-8 gap-y-12">
            <div className="col-span-12 md:col-span-5">
              <div className="eyebrow mb-5">The work</div>
              <FadeUp>
                <h2 className="display-xl text-[clamp(32px,4.4vw,60px)] text-ink leading-[1.02] tracking-tight-x">
                  How we approach {svc.name.toLowerCase()}.
                </h2>
              </FadeUp>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 text-ink/75 text-lg leading-relaxed">
              <FadeUp>
                <p>{svc.detail}</p>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      <section className="section-cream section-pad">
        <div className="container-x">
          <div className="font-mono text-[11px] tracking-[0.32em] uppercase text-[#8a4a2c] mb-8">
            Deliverables
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 max-w-4xl">
            {svc.deliverables.map((d, i) => (
              <li
                key={d}
                className="border-t border-[#1c1a17]/20 pt-5 flex items-start gap-4"
              >
                <span className="font-mono text-xs tracking-[0.24em] text-[#8a4a2c] pt-1.5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-xl md:text-2xl text-[#1c1a17] leading-tight">
                  {d}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad bg-bg border-t border-line">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-x-8 items-center">
            <div className="col-span-12 md:col-span-8">
              <h2 className="display-xl text-[clamp(36px,5.6vw,76px)] text-ink leading-[1] tracking-tight-x">
                Want to talk about {svc.name.toLowerCase()}?
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 md:text-right mt-6 md:mt-0 flex md:justify-end gap-3 flex-wrap">
              <MagneticButton
                href="/contact"
                className="inline-flex items-center px-7 py-3.5 rounded-full bg-accent text-bg font-mono uppercase tracking-[0.18em] text-[11px] hover:bg-accent-2 transition-colors"
              >
                Book a discovery call
              </MagneticButton>
              <Link
                href={`/services/${next.slug}`}
                className="inline-flex items-center px-7 py-3.5 rounded-full border border-line text-ink/80 font-mono uppercase tracking-[0.18em] text-[11px] hover:text-ink hover:border-ink transition-colors"
              >
                Next: {next.name} →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
