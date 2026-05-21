import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { CheckCircle2, Box, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/sections/PageHeader";
import { ServiceCardLinks } from "@/components/sections/ServicesGrid";
import { FAQ } from "@/components/sections/FAQ";
import { CTABand } from "@/components/sections/CTABand";
import { QuoteForm } from "@/components/QuoteForm";
import { SERVICES, SERVICE_CATEGORIES, getService } from "@/content/services";
import { SITE } from "@/lib/site";

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) return {};
  return {
    title: svc.metaTitle,
    description: svc.metaDescription,
    alternates: { canonical: `/services/${svc.slug}` },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) notFound();

  const cat = SERVICE_CATEGORIES[svc.category];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: svc.title,
    description: svc.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: SITE.name,
      telephone: SITE.phone.raw,
      url: SITE.url,
    },
    areaServed: { "@type": "State", name: "New Jersey" },
    serviceType: cat.label,
  };

  return (
    <>
      <Script
        id={`ldjson-${svc.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <PageHeader
        eyebrow={cat.label}
        title={svc.h1}
        subtitle={svc.intro}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: svc.title },
        ]}
      />

      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_400px]">
          <div className="space-y-10">
            <section>
              <h2 className="font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">
                What&apos;s included
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {svc.whatsIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">
                What we take
              </h2>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {svc.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-lg border border-ink-200 bg-white px-3 py-2.5 text-sm text-ink-800"
                  >
                    <Box className="h-3.5 w-3.5 text-brand-500" />
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-ink-200 bg-ink-50 p-6 sm:p-8">
              <h2 className="font-display text-xl font-extrabold text-ink-900">
                Serving all of New Jersey
              </h2>
              <p className="mt-2 text-sm text-ink-600">
                {svc.title} is one of our most-requested services. We run it from Bergen County
                down to the Jersey Shore — same-day appointments in North Jersey, 24–72 hour
                turnaround everywhere else.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/get-a-quote">Get a Free Quote</Link>
                </Button>
                <Button asChild variant="secondary">
                  <a href={SITE.phone.link}>
                    <Phone className="h-4 w-4" /> {SITE.phone.display}
                  </a>
                </Button>
              </div>
            </section>

            {svc.faq && svc.faq.length > 0 && <FAQ items={svc.faq} title="Common questions" />}

            {svc.relatedSlugs.length > 0 && (
              <ServiceCardLinks slugs={svc.relatedSlugs} title="Related services" />
            )}
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-ink-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
                Free quote
              </div>
              <h3 className="mt-1 font-display text-xl font-extrabold text-ink-900">
                Tell us about it
              </h3>
              <p className="mt-1 text-sm text-ink-500">
                Photos help. We respond same-day.
              </p>
              <div className="mt-5">
                <QuoteForm compact />
              </div>
            </div>
          </aside>
        </div>
      </Container>

      <CTABand />
    </>
  );
}
