import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TrustBar } from "@/components/sections/TrustBar";
import { LocationsByRegion } from "@/components/sections/LocationsGrid";
import { FAQ } from "@/components/sections/FAQ";
import { CTABand } from "@/components/sections/CTABand";
import { Container } from "@/components/ui/container";
import { COUNTIES } from "@/content/counties";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HOME_FAQ = [
  {
    q: "How fast can you come out?",
    a: "Most jobs in North Jersey we can run same-day or next-day. Statewide we work on a 24- to 72-hour window depending on crew schedules. If you're on a tight closing or move-out deadline, tell us — we'll move things around.",
  },
  {
    q: "What does a cleanout cost?",
    a: "Pricing is volume-based — what we charge is what fits in the truck. A single couch is one price, a full basement is another, a whole house is another. On-site or video estimates are free and there's no hourly clock running.",
  },
  {
    q: "What do you do with the stuff?",
    a: "Anything usable goes to NJ donation partners (clothing, working furniture, dishware). Metal gets recycled, electronics go to a certified e-waste partner, and only what's left lands at the transfer station.",
  },
  {
    q: "Can you handle a hoarder or estate situation?",
    a: "Yes — discreetly and respectfully. We move at the family's pace, look for keepsakes and documents before anything leaves the property, and we never make anyone feel judged. Unmarked trucks available.",
  },
  {
    q: "Are you insured? Can you send a COI?",
    a: "Yes. General liability and workers' comp on file. We'll send a Certificate of Insurance to your building, HOA, or property manager before we arrive.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section-gradient">
        <Container className="py-14 sm:py-20">
          <TrustBar />
        </Container>
      </section>

      <section>
        <Container className="py-14 sm:py-20">
          <ServicesGrid />
        </Container>
      </section>

      <section className="section-gradient">
        <Container className="py-14 sm:py-20">
          <WhyChoose />
        </Container>
      </section>

      <section>
        <Container className="py-14 sm:py-20">
          <HowItWorks />
        </Container>
      </section>

      <section className="section-gradient">
        <Container className="py-14 sm:py-20">
          <div className="grid items-end justify-between gap-4 sm:flex">
            <div>
              <h2 className="font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
                Coverage Across the Garden State
              </h2>
              <p className="mt-3 max-w-2xl text-ink-600">
                From Bergen to Cape May — pick your county or jump straight to your town.
              </p>
            </div>
            <Link
              href="/counties"
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              All counties <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {COUNTIES.map((c) => (
              <Link
                key={c.slug}
                href={`/counties/${c.slug}`}
                className="group rounded-xl border border-ink-200 bg-white p-4 transition-all hover:border-brand-400 hover:shadow-sm"
              >
                <div className="font-display text-lg font-bold text-ink-900 group-hover:text-brand-700">
                  {c.name} County
                </div>
                <div className="mt-1 text-xs text-ink-500">{c.seat ? `Seat: ${c.seat}` : c.fullName}</div>
              </Link>
            ))}
          </div>

          <div className="mt-12 space-y-10">
            <LocationsByRegion region="north-jersey" />
            <LocationsByRegion region="central-jersey" />
            <LocationsByRegion region="jersey-shore" />
            <LocationsByRegion region="south-jersey" />
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-14 sm:py-20">
          <FAQ items={HOME_FAQ} />
        </Container>
      </section>

      <CTABand />
    </>
  );
}
