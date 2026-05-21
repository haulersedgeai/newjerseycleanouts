import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { Building2, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/sections/PageHeader";
import { CompactLocationsGrid } from "@/components/sections/LocationsGrid";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CTABand } from "@/components/sections/CTABand";
import { QuoteForm } from "@/components/QuoteForm";
import { COUNTIES, getCounty } from "@/content/counties";
import { LOCATIONS } from "@/content/locations";
import { SITE } from "@/lib/site";

export async function generateStaticParams() {
  return COUNTIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCounty(slug);
  if (!c) return {};
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: { canonical: `/counties/${c.slug}` },
  };
}

export default async function CountyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const county = getCounty(slug);
  if (!county) notFound();

  const cities = county.citySlugs
    .map((s) => LOCATIONS.find((l) => l.slug === s))
    .filter((l): l is NonNullable<typeof l> => Boolean(l));

  const placeJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Cleanouts in ${county.fullName}`,
    description: county.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: SITE.name,
      telephone: SITE.phone.raw,
      url: SITE.url,
    },
    areaServed: { "@type": "AdministrativeArea", name: county.fullName },
  };

  return (
    <>
      <Script
        id={`ldjson-county-${county.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeJsonLd) }}
      />

      <PageHeader
        eyebrow={`${county.region.replace("-", " ").replace(/^./, (s) => s.toUpperCase())}`}
        title={`Cleanouts, Junk Removal & Demolition in ${county.fullName}`}
        subtitle={county.intro}
        breadcrumbs={[
          { label: "Counties", href: "/counties" },
          { label: county.name },
        ]}
      />

      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_400px]">
          <div className="space-y-10">
            <section>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-brand-600" />
                <h2 className="font-display text-xl font-extrabold text-ink-900">
                  Cities and towns we cover in {county.name} County
                </h2>
              </div>
              <p className="mt-2 text-sm text-ink-500">
                {cities.length} towns listed below. We work plenty of others too — if you don&apos;t
                see yours, give us a call.
              </p>
              <div className="mt-5">
                <CompactLocationsGrid locations={cities} />
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3">
                <Building2 className="h-5 w-5 text-brand-600" />
                <h2 className="font-display text-xl font-extrabold text-ink-900">
                  Notable landmarks &amp; highlights
                </h2>
              </div>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {county.highlights.map((h) => (
                  <div
                    key={h}
                    className="rounded-lg border border-ink-200 bg-white px-3 py-2.5 text-sm text-ink-800"
                  >
                    {h}
                  </div>
                ))}
              </div>
            </section>

            <ServicesGrid heading={`Services we offer in ${county.name} County`} />

            <section className="rounded-2xl border border-ink-200 bg-ink-50 p-6 sm:p-8">
              <h2 className="font-display text-xl font-extrabold text-ink-900">
                Why families and contractors across {county.name} County call us
              </h2>
              <p className="mt-2 text-sm text-ink-700">
                We&apos;re a local NJ-owned crew with our own trucks — not a national franchise.
                That means same-day appointments, real upfront pricing, and a phone that gets
                answered by someone who knows your part of {county.name} County.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/get-a-quote">Free Quote</Link>
                </Button>
                <Button asChild variant="secondary">
                  <a href={SITE.phone.link}>{SITE.phone.display}</a>
                </Button>
              </div>
            </section>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-ink-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
                {county.name} County quote
              </div>
              <h3 className="mt-1 font-display text-xl font-extrabold text-ink-900">
                Get a free estimate
              </h3>
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
