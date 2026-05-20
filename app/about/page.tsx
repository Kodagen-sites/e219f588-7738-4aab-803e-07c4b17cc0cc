import { siteConfig } from "@/content/site-config";
import PageHero from "@/components/PageHero";
import { buildMetadata } from "@/components/SEOHead";
import { FadeUp, StaggerChildren, StaggerItem, MagneticButton } from "@/components/motion";
import assetManifest from "@/content/asset-manifest.json";
import Link from "next/link";

const images = (assetManifest as { images?: Record<string, string> }).images ?? {};

export const metadata = buildMetadata({
  title: `About — ${siteConfig.company.name}`,
  description: siteConfig.company.description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the studio"
        title="A London creative studio. Senior people in every room."
        intro={siteConfig.company.description}
        image={images["section-about"]}
      />

      <section className="section-pad bg-bg">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-x-8 gap-y-12">
            <div className="col-span-12 md:col-span-5">
              <div className="eyebrow mb-4">Studio</div>
              <h2 className="display-xl text-[clamp(36px,4.8vw,68px)] text-ink leading-[1] tracking-tight-x">
                Built deliberately small. Partner-led, by design.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 text-ink/75 text-lg leading-relaxed space-y-6">
              <FadeUp>
                <p>
                  Vantage was founded in 2018 in East London by people who'd run brand and creative at the
                  big networks and decided the way that work gets made had to change.
                </p>
              </FadeUp>
              <FadeUp delay={0.05}>
                <p>
                  We stayed small on purpose. Senior practitioners do the work — there are no juniors hiding
                  behind a directors' name on the deck. Twelve people in a single room overlooking Bonhill
                  Street.
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p>
                  Our clients are enterprise B2B brands ready to be cultural ones — logistics, AI, banking,
                  healthcare, industrial. Most stay with us for years.
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      <section className="section-cream section-pad">
        <div className="container-x">
          <div className="font-mono text-[11px] tracking-[0.32em] uppercase text-[#8a4a2c] mb-8">
            What we believe
          </div>
          <StaggerChildren staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                n: "01",
                title: "Brand is a P&L lever.",
                body: "We treat brand as the most leveraged commercial decision a B2B company can make — not a design refresh.",
              },
              {
                n: "02",
                title: "Restraint is a discipline.",
                body: "Most decks have too many ideas. We ship fewer, sharper, more useful ones.",
              },
              {
                n: "03",
                title: "Cultural traction compounds.",
                body: "Being known beats being seen. We build presence in conversations, not just impressions.",
              },
            ].map((v) => (
              <StaggerItem key={v.n} className="border-t border-[#1c1a17]/20 pt-6">
                <div className="font-mono text-xs tracking-[0.28em] text-[#8a4a2c] mb-3">{v.n}</div>
                <h3 className="font-display text-2xl md:text-3xl text-[#1c1a17] mb-3 leading-tight">
                  {v.title}
                </h3>
                <p className="text-[#1c1a17]/70 leading-relaxed">{v.body}</p>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="section-pad bg-bg border-t border-line">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-x-8 gap-y-6 items-center">
            <div className="col-span-12 md:col-span-8">
              <h2 className="display-xl text-[clamp(36px,5.6vw,80px)] text-ink leading-[1] tracking-tight-x">
                If your category is overdue a re-write, talk to us.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 md:text-right">
              <MagneticButton
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-full bg-accent text-bg font-mono uppercase tracking-[0.2em] text-xs hover:bg-accent-2 transition-colors"
              >
                Book a discovery call
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
