import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CTABand } from "@/components/sections/CTABand";
import { FAQ } from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Pricing — Cleanouts, Junk Removal & Demolition",
  description:
    "How New Jersey Cleanouts prices jobs. Volume-based pricing, no hourly clock, no surprise dump fees. Estimates are free.",
};

const TIERS = [
  {
    name: "Single Item Pickup",
    range: "$95 – $185",
    examples: ["1 couch", "1 mattress + box spring", "Washer or dryer", "TV or large electronic"],
    note: "Two-person crew, all labor and disposal included.",
  },
  {
    name: "Truck Quarter Load",
    range: "$249 – $389",
    examples: ["A bedroom of furniture", "Garage tools and shelving", "A few large appliances", "Light basement clear-out"],
    note: "Up to ~3 cubic yards of stuff. Same-day pickup.",
  },
  {
    name: "Half-Truck Load",
    range: "$429 – $599",
    examples: ["Full garage cleanout", "Bigger basement clear-out", "Office or retail tear-out", "Apartment move-out"],
    note: "Up to ~6 cubic yards. Two- to three-person crew.",
  },
  {
    name: "Full-Truck Load",
    range: "$699 – $1,050",
    examples: ["Small one-bed apartment cleanout", "Large basement or attic", "Heavy storage unit", "Light hoarder cleanout"],
    note: "Up to ~12 cubic yards. Multi-person crew, all disposal handled.",
  },
  {
    name: "Whole-House / Multi-Truck",
    range: "$1,400+",
    examples: ["Whole-house cleanout", "Estate cleanout", "Hoarder-condition home", "Foreclosure trash-out"],
    note: "Custom quote — on-site or video walkthrough recommended.",
  },
  {
    name: "Demolition / Specialty",
    range: "$450+",
    examples: ["Shed tear-down", "Deck removal", "Fence pull", "Hot tub cut-up", "Above-ground pool"],
    note: "Quoted per project. Permits and disposal included.",
  },
];

const PRICING_FAQ = [
  {
    q: "How do you price a job?",
    a: "By volume — how much of our truck the job fills, plus any heavy items (concrete, dirt, hot tubs) that affect dump weight. You get one number up front. No hourly clock, no per-item nickel-and-diming, no surprise dump fees.",
  },
  {
    q: "Do estimates cost anything?",
    a: "No. On-site walkthroughs and video estimates are both free. We give you a written number before any work starts and we honor it.",
  },
  {
    q: "What's included in the price?",
    a: "All labor, all dump fees, all donation drop-offs, fuel, insurance, and a broom-clean finish. Nothing gets tacked on after.",
  },
  {
    q: "Do you take credit cards?",
    a: "Yes — Visa, Mastercard, Amex, Discover. Also cash, check, Venmo, and Zelle. We invoice for commercial accounts.",
  },
  {
    q: "Is there a minimum?",
    a: "Our minimum is a single-item pickup at $95. Below that it just isn't worth a truck roll.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Simple, Upfront Pricing"
        subtitle="What we quote is what you pay. No hourly clock, no surprise dump fees, no extra charges for stairs."
        breadcrumbs={[{ label: "Pricing" }]}
      />

      <Container className="py-12 sm:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TIERS.map((t) => (
            <div key={t.name} className="rounded-2xl border border-ink-200 bg-white p-6 hover:border-brand-400 hover:shadow-sm">
              <div className="font-display text-lg font-bold text-ink-900">{t.name}</div>
              <div className="mt-1 font-display text-3xl font-extrabold text-brand-600">
                {t.range}
              </div>
              <ul className="mt-4 space-y-1.5 text-sm">
                {t.examples.map((ex) => (
                  <li key={ex} className="flex items-start gap-2 text-ink-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-ink-500">{t.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-900">
          <strong className="font-display text-base">A note on these numbers:</strong> these are
          typical ranges for jobs we see every week in NJ. Your exact price depends on volume,
          weight, access (stairs, walk-ups, parking), and any specialty items (concrete, hot tubs,
          piano, electronics). We&apos;ll give you the real number before any work starts.
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href="/get-a-quote">Get Your Free Quote</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/items-we-take">See Everything We Take</Link>
          </Button>
        </div>
      </Container>

      <section className="section-gradient">
        <Container className="py-14 sm:py-20">
          <FAQ items={PRICING_FAQ} title="Pricing questions" />
        </Container>
      </section>

      <CTABand />
    </>
  );
}
