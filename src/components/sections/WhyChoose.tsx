import { Shield, Clock, Truck, Heart, BadgeCheck, DollarSign, MapPin, Users } from "lucide-react";

const POINTS = [
  {
    icon: Shield,
    title: "Fully Insured",
    body: "General liability and workers' comp on file. We'll send a Certificate of Insurance to your building or HOA before we arrive.",
  },
  {
    icon: Clock,
    title: "Same-Day Service",
    body: "Most jobs scheduled inside 24 hours — sometimes the same day. Tight timelines for closings, evictions, or move-outs handled.",
  },
  {
    icon: Truck,
    title: "Our Own Trucks & Crew",
    body: "We don't sub the work. The same crew that gives you the quote loads the truck.",
  },
  {
    icon: Heart,
    title: "Compassionate on Tough Jobs",
    body: "Hoarder, estate, and eviction cleanouts handled discreetly, respectfully, and at the family's pace.",
  },
  {
    icon: DollarSign,
    title: "Upfront Pricing",
    body: "On-site or video estimates. Volume-based pricing, no surprise dump fees, no hourly clock running.",
  },
  {
    icon: BadgeCheck,
    title: "Eco-Friendly Disposal",
    body: "Donations to NJ charities, metals to scrap, electronics to certified e-waste, and only the rest to the transfer station.",
  },
  {
    icon: MapPin,
    title: "All 21 NJ Counties",
    body: "North Jersey is home base, but we cover the entire Garden State — from Sussex down to Cape May.",
  },
  {
    icon: Users,
    title: "Family-Run, NJ-Owned",
    body: "Local owners, local crew, local accountability. We answer the phone — not a call center.",
  },
];

export function WhyChoose() {
  return (
    <div>
      <h2 className="font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
        Why New Jersey Picks Us
      </h2>
      <p className="mt-3 max-w-2xl text-ink-600">
        Big enough to handle a 30-yard dumpster on a high-rise jobsite, small enough to look you in
        the eye and tell you what it&apos;ll cost.
      </p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {POINTS.map((p) => (
          <div key={p.title} className="rounded-2xl border border-ink-200 bg-white p-6 hover:border-brand-400 hover:shadow-sm">
            <div className="inline-flex rounded-lg bg-brand-50 p-2.5 text-brand-600 ring-1 ring-brand-100">
              <p.icon className="h-5 w-5" />
            </div>
            <div className="mt-4 font-display text-lg font-bold text-ink-900">{p.title}</div>
            <p className="mt-2 text-sm text-ink-600">{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
