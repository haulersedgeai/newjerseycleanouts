import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { MapPin, Building2, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/sections/PageHeader";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { QuoteForm } from "@/components/QuoteForm";
import { CTABand } from "@/components/sections/CTABand";
import { LOCATIONS, getLocation } from "@/content/locations";
import { getCounty } from "@/content/counties";
import { SITE } from "@/lib/site";

export async function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) return {};
  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    alternates: { canonical: `/locations/${loc.slug}` },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) notFound();
  const county = getCounty(loc.county);

  const placeJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Cleanouts & Junk Removal in ${loc.fullName}`,
    description: loc.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: SITE.name,
      telephone: SITE.phone.raw,
      url: SITE.url,
    },
    areaServed: {
      "@type": "City",
      name: loc.name,
      containedInPlace: { "@type": "State", name: "New Jersey" },
    },
  };

  return (
    <>
      <Script
        id={`ldjson-loc-${loc.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeJsonLd) }}
      />

      <PageHeader
        eyebrow={county ? county.fullName : "Service Area"}
        title={`${loc.isHQ ? "Headquartered in " : "Cleanouts & Junk Removal in "}${loc.fullName}`}
        subtitle={loc.intro}
        breadcrumbs={[
          { label: "Locations", href: "/locations" },
          { label: loc.name },
        ]}
      />

      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_400px]">
          <div className="space-y-10">
            <section className="rounded-2xl border border-ink-200 bg-ink-50 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-brand-600" />
                <h2 className="font-display text-xl font-extrabold text-ink-900">
                  Neighborhoods we work in {loc.name}
                </h2>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {loc.neighborhoods.map((n) => (
                  <span
                    key={n}
                    className="inline-flex items-center gap-1 rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-medium text-brand-700"
                  >
                    {n}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3">
                <Building2 className="h-5 w-5 text-brand-600" />
                <h2 className="font-display text-xl font-extrabold text-ink-900">
                  Landmarks around {loc.name}
                </h2>
              </div>
              <p className="mt-2 text-sm text-ink-600">
                If you&apos;re near any of these, you&apos;re in our regular service zone.
              </p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {loc.landmarks.map((l) => (
                  <div
                    key={l}
                    className="rounded-lg border border-ink-200 bg-white px-3 py-2.5 text-sm text-ink-800"
                  >
                    {l}
                  </div>
                ))}
              </div>
            </section>

            <ServicesGrid heading={`Services we offer in ${loc.name}`} />

            <section className="rounded-2xl border border-ink-200 bg-white p-6 sm:p-8">
              <h2 className="font-display text-xl font-extrabold text-ink-900">
                Local{loc.isHQ ? " — really local" : ""}
              </h2>
              <p className="mt-2 text-sm text-ink-700">
                {loc.isHQ
                  ? `Our trucks park in ${loc.name} every night — this is home. If you can hear our backup beeper, that's us.`
                  : `${loc.name} sits in ${county?.fullName ?? "New Jersey"}. We run jobs here weekly and know the parking, the loading docks, and the streets that don't allow trucks during school hours.`}
                {" "}For same-day work, call us at{" "}
                <a className="font-semibold text-brand-600" href={SITE.phone.link}>
                  {SITE.phone.display}
                </a>
                .
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/get-a-quote">Free Quote</Link>
                </Button>
                {county && (
                  <Button asChild variant="secondary">
                    <Link href={`/counties/${county.slug}`}>See {county.name} County coverage</Link>
                  </Button>
                )}
              </div>
            </section>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-ink-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
                Free quote · {loc.name}
              </div>
              <h3 className="mt-1 font-display text-xl font-extrabold text-ink-900">
                Tell us about it
              </h3>
              <p className="mt-1 text-sm text-ink-500">Photos help. Same-day response.</p>
              <div className="mt-5">
                <QuoteForm compact />
              </div>
              <div className="mt-5 border-t border-ink-100 pt-5">
                <a
                  href={SITE.phone.link}
                  className="flex items-center justify-center gap-2 rounded-lg bg-ink-900 px-3 py-2.5 text-sm font-semibold text-white hover:bg-ink-800"
                >
                  <Phone className="h-4 w-4" /> {SITE.phone.display}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </Container>

      <CTABand />
    </>
  );
}
