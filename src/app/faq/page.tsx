import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/container";
import { FAQ } from "@/components/sections/FAQ";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "FAQ — New Jersey Cleanouts",
  description:
    "Answers to the most common questions about cleanouts, junk removal, demolition, and dumpster rental in New Jersey.",
};

const FAQ_ITEMS = [
  {
    q: "How fast can you come out?",
    a: "Most North Jersey jobs we run same-day or next-day. Statewide we work on a 24- to 72-hour window depending on schedule. If you have a closing, lease end, or court-ordered eviction deadline, tell us when you call — we'll work to match it.",
  },
  {
    q: "How do you price a cleanout?",
    a: "Volume-based. What you pay depends on how much space your stuff takes up in our truck, plus any specialty items (concrete, hot tubs, pianos, hazardous materials). You get one upfront number — no hourly clock, no surprise dump fees.",
  },
  {
    q: "Are you fully insured?",
    a: "Yes. General liability and workers' compensation. We can send a Certificate of Insurance to your building, HOA, or property manager before the job starts.",
  },
  {
    q: "Can you handle a hoarder cleanout?",
    a: "Yes — discreetly. Unmarked trucks if needed, judgment-free crew, careful sort for valuables and keepsakes, and coordination with social workers or family. We move at the family's pace.",
  },
  {
    q: "What about estate cleanouts?",
    a: "Common work for us. We coordinate with executors, attorneys, and realtors. Photo documentation, donation receipts available, and we can work to a closing date.",
  },
  {
    q: "Do you take TVs and electronics?",
    a: "Yes. NJ doesn't allow electronics in regular trash, but we take them and route them to a certified e-waste recycler.",
  },
  {
    q: "What do you do with the things you take?",
    a: "Anything usable goes to NJ donation partners. Metal gets recycled. Electronics go to a certified e-waste partner. Construction debris is sorted for recyclables. Only the rest goes to the transfer station.",
  },
  {
    q: "Do you offer dumpster rental?",
    a: "Yes — 10, 15, 20, and 30-yard roll-offs. Driveway-safe drop with boards under the wheels. Permits handled if you need it on the street.",
  },
  {
    q: "Do you handle commercial accounts?",
    a: "Yes. Recurring service for property managers, GCs, retail tenants, and warehouses. COIs, W-9s, and net-30 invoicing available.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Cash, check, all major credit cards (Visa, MC, Amex, Discover), Venmo, Zelle, and bank transfer for commercial accounts.",
  },
  {
    q: "Do you provide same-day service?",
    a: "Most of the time, yes — call early in the morning and we can usually fit it in. Always confirm with us by phone for tight timelines.",
  },
  {
    q: "Will you take just one item?",
    a: "Yes, single-item pickups start at $95. One couch, one mattress, one washer — totally fine.",
  },
];

export default function FAQPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        subtitle="Everything we get asked most often about NJ cleanouts, pricing, and how we work."
        breadcrumbs={[{ label: "FAQ" }]}
      />
      <Container className="py-12 sm:py-16">
        <FAQ items={FAQ_ITEMS} title="" />
      </Container>
      <CTABand />
    </>
  );
}
