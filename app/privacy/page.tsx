import { buildMetadata } from "@/components/SEOHead";
import { siteConfig } from "@/content/site-config";

export const metadata = buildMetadata({
  title: `Privacy — ${siteConfig.company.name}`,
  description: "Privacy notice for Vantage Studio.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <article className="container-x py-32 md:py-40 max-w-3xl">
      <div className="eyebrow mb-5">Legal</div>
      <h1 className="display-xl text-[clamp(40px,6vw,80px)] text-ink leading-[1] tracking-tight-x mb-12">
        Privacy notice.
      </h1>
      <div className="prose prose-invert max-w-none text-ink/80 leading-relaxed space-y-6">
        <p>
          This privacy notice explains how Vantage Studio ("we", "us") collects, uses, and protects
          information you provide when you visit vantage.studio or contact us.
        </p>
        <h2 className="font-display text-2xl text-ink mt-10">Information we collect</h2>
        <p>
          When you submit a form on our site, we collect your name, work email, company, and the
          information you choose to share about your project. We use this only to respond to your enquiry
          and to provide the services you ask for.
        </p>
        <h2 className="font-display text-2xl text-ink mt-10">How we use it</h2>
        <p>
          We use the information you provide to respond to your enquiry, schedule discovery calls, and —
          if we begin a project together — to deliver the work and communicate with you about it. We do
          not sell or share your information with third parties for marketing.
        </p>
        <h2 className="font-display text-2xl text-ink mt-10">Cookies</h2>
        <p>
          We use a small number of essential cookies to remember your preferences on the site. We do not
          use third-party advertising cookies. We may use anonymised analytics to understand which pages
          are useful.
        </p>
        <h2 className="font-display text-2xl text-ink mt-10">Your rights</h2>
        <p>
          You have the right to access, correct, or delete the personal information we hold about you.
          To do so, email{" "}
          <a className="text-accent hover:underline" href={`mailto:${siteConfig.company.email}`}>
            {siteConfig.company.email}
          </a>
          .
        </p>
        <h2 className="font-display text-2xl text-ink mt-10">Contact</h2>
        <p>
          Vantage Studio, {siteConfig.company.address}. Questions about this notice? Email{" "}
          <a className="text-accent hover:underline" href={`mailto:${siteConfig.company.email}`}>
            {siteConfig.company.email}
          </a>
          .
        </p>
        <p className="text-xs uppercase tracking-[0.18em] font-mono text-ink/45 pt-6">
          Last updated: May 2026
        </p>
      </div>
    </article>
  );
}
