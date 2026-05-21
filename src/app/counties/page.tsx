import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/container";
import { CTABand } from "@/components/sections/CTABand";
import { COUNTIES, REGIONS, type Region } from "@/content/counties";

export const metadata: Metadata = {
  title: "NJ Counties We Cover — Cleanouts & Junk Removal",
  description:
    "Cleanout, junk removal, and demolition service across every major New Jersey county — Bergen, Essex, Hudson, Middlesex, Monmouth, Morris, Ocean, Passaic, Union, Camden, Mercer.",
};

export default function CountiesPage() {
  const byRegion = (Object.keys(REGIONS) as Region[]).map((r) => ({
    region: r,
    counties: COUNTIES.filter((c) => c.region === r),
  }));

  return (
    <>
      <PageHeader
        eyebrow="Counties Served"
        title="Coverage Across Every Major NJ County"
        subtitle="Pick a county to see the cities and towns inside it that we serve."
        breadcrumbs={[{ label: "Counties" }]}
      />
      <Container className="space-y-12 py-12 sm:py-16">
        {byRegion.map(
          ({ region, counties }) =>
            counties.length > 0 && (
              <section key={region}>
                <h2 className="font-display text-2xl font-bold text-ink-900">{REGIONS[region].label}</h2>
                <p className="mt-1 text-sm text-ink-500">{REGIONS[region].tagline}</p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {counties.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/counties/${c.slug}`}
                      className="group rounded-2xl border border-ink-200 bg-white p-5 transition-all hover:border-brand-400 hover:shadow-sm"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-display text-lg font-bold text-ink-900 group-hover:text-brand-700">
                            {c.fullName}
                          </div>
                          {c.seat && (
                            <div className="text-xs text-ink-500">Seat: {c.seat}</div>
                          )}
                        </div>
                        <ArrowRight className="h-4 w-4 text-ink-300 transition-transform group-hover:translate-x-1 group-hover:text-brand-600" />
                      </div>
                      <div className="mt-3 line-clamp-2 text-sm text-ink-600">{c.intro}</div>
                    </Link>
                  ))}
                </div>
              </section>
            )
        )}
      </Container>
      <CTABand />
    </>
  );
}
