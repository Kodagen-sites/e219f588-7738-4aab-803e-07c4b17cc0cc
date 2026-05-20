import { buildMetadata } from "@/components/SEOHead";
import { siteConfig } from "@/content/site-config";

export const metadata = buildMetadata({
  title: `Terms — ${siteConfig.company.name}`,
  description: "Terms of use for the Vantage Studio website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <article className="container-x py-32 md:py-40 max-w-3xl">
      <div className="eyebrow mb-5">Legal</div>
      <h1 className="display-xl text-[clamp(40px,6vw,80px)] text-ink leading-[1] tracking-tight-x mb-12">
        Terms of use.
      </h1>
      <div className="prose prose-invert max-w-none text-ink/80 leading-relaxed space-y-6">
        <p>
          These terms govern your use of vantage.studio. By using the site, you agree to them. If you
          enter into a project agreement with us, separate engagement terms will apply.
        </p>
        <h2 className="font-display text-2xl text-ink mt-10">Content</h2>
        <p>
          The text, design, photography, and code on this site are © {new Date().getFullYear()}{" "}
          {siteConfig.company.name}. Case studies depicting client work appear with permission and may
          reference projects published years ago — current details may differ. Brand marks shown belong
          to their respective owners.
        </p>
        <h2 className="font-display text-2xl text-ink mt-10">Site availability</h2>
        <p>
          We work to keep the site online but make no warranty of uninterrupted access. Pages may change
          without notice as projects evolve and as we update the work shown.
        </p>
        <h2 className="font-display text-2xl text-ink mt-10">Liability</h2>
        <p>
          The site is provided "as is". We are not liable for indirect or consequential losses arising
          from your use of it. Nothing here limits liability for fraud or for things UK law does not
          allow us to exclude.
        </p>
        <h2 className="font-display text-2xl text-ink mt-10">Law</h2>
        <p>
          These terms are governed by the laws of England and Wales. Any dispute will be resolved in the
          courts of London.
        </p>
        <p className="text-xs uppercase tracking-[0.18em] font-mono text-ink/45 pt-6">
          Last updated: May 2026
        </p>
      </div>
    </article>
  );
}
