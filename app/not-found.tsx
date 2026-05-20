import Link from "next/link";
import { buildMetadata } from "@/components/SEOHead";

export const metadata = buildMetadata({
  title: "Not found — Vantage Studio",
  description: "The page you're looking for doesn't exist.",
  noindex: true,
});

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 py-32">
      <div className="text-center max-w-2xl">
        <div className="eyebrow mb-5">404</div>
        <h1 className="display-xl text-[clamp(56px,10vw,144px)] text-ink leading-[0.95] tracking-tight-x mb-8">
          That page<span className="italic"> isn't</span> here.
        </h1>
        <p className="text-ink/70 text-lg mb-10">
          The link may have moved or never existed. Try the homepage.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-7 py-3.5 rounded-full bg-accent text-bg font-mono uppercase tracking-[0.18em] text-[11px] hover:bg-accent-2 transition-colors"
        >
          Back home
        </Link>
      </div>
    </section>
  );
}
