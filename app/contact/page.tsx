import { siteConfig } from "@/content/site-config";
import PageHero from "@/components/PageHero";
import { buildMetadata } from "@/components/SEOHead";
import ContactForm from "@/components/ContactForm";
import assetManifest from "@/content/asset-manifest.json";

const images = (assetManifest as { images?: Record<string, string> }).images ?? {};

export const metadata = buildMetadata({
  title: `Contact — ${siteConfig.company.name}`,
  description: "Book a discovery call with Vantage Studio.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Tell us what you're shipping."
        intro="A 30-minute discovery call. We'll tell you in plain English whether we're the right room for your brief."
        image={images["section-cta"]}
      />

      {/* CT4 Split Photo + Form */}
      <section className="section-pad bg-bg">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-x-10 gap-y-12">
            <div className="col-span-12 md:col-span-5">
              <div className="eyebrow mb-4">The studio</div>
              <h2 className="display-xl text-[clamp(32px,4.2vw,56px)] text-ink leading-[1.05] tracking-tight-x mb-8">
                Bonhill Street, Shoreditch — 8 minutes from Old Street.
              </h2>
              <ul className="space-y-5 text-ink/80">
                <li>
                  <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent mb-1">
                    Email
                  </div>
                  <a
                    href={`mailto:${siteConfig.company.email}`}
                    className="text-xl font-display hover:text-accent transition-colors"
                  >
                    {siteConfig.company.email}
                  </a>
                </li>
                <li>
                  <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent mb-1">
                    Phone
                  </div>
                  <a
                    href={`tel:${siteConfig.company.phone.replace(/\s+/g, "")}`}
                    className="text-xl font-display hover:text-accent transition-colors"
                  >
                    {siteConfig.company.phone}
                  </a>
                </li>
                <li>
                  <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent mb-1">
                    Studio
                  </div>
                  <address className="not-italic text-xl font-display text-ink/85">
                    {siteConfig.company.address}
                  </address>
                </li>
                <li>
                  <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent mb-1">
                    Hours
                  </div>
                  <div className="text-base text-ink/75">
                    Monday–Friday, 09:30–18:30 GMT
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
