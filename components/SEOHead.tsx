import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";

type SEOInput = {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noindex?: boolean;
};

export function buildMetadata(input: SEOInput = {}): Metadata {
  const resolvedTitle = input.title || siteConfig.seo.title;
  const resolvedDesc = input.description || siteConfig.seo.description;
  const ogImage = input.ogImage || siteConfig.seo.ogImage || undefined;
  const url = input.path
    ? `${siteConfig.seo.siteUrl}${input.path}`
    : siteConfig.seo.siteUrl;

  return {
    title: resolvedTitle,
    description: resolvedDesc,
    metadataBase: new URL(siteConfig.seo.siteUrl),
    alternates: { canonical: input.path ?? "/" },
    openGraph: {
      title: resolvedTitle,
      description: resolvedDesc,
      url,
      siteName: siteConfig.company.name,
      type: "website",
      locale: siteConfig.seo.locale,
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDesc,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
    robots: input.noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function OrgJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.company.name,
    url: siteConfig.seo.siteUrl,
    email: siteConfig.company.email,
    telephone: siteConfig.company.phone,
    description: siteConfig.company.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "12 Bonhill Street",
      addressLocality: "London",
      postalCode: "EC2A 4BX",
      addressCountry: "GB",
    },
    sameAs: Object.values(siteConfig.footer.socials).filter(Boolean) as string[],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
