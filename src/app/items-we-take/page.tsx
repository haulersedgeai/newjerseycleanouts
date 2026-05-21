import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/container";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Items We Take — Cleanouts & Junk Removal NJ",
  description:
    "A complete list of items we pick up across New Jersey — furniture, appliances, electronics, construction debris, yard waste, and more.",
};

const GROUPS: { title: string; items: string[] }[] = [
  {
    title: "Furniture",
    items: [
      "Couches, loveseats, sectionals",
      "Recliners and lift chairs",
      "Dressers, nightstands, armoires",
      "Beds, bed frames, headboards",
      "Mattresses and box springs",
      "Dining tables and chairs",
      "China cabinets and hutches",
      "Coffee and end tables",
      "Office desks and chairs",
      "Bookshelves and bookcases",
      "Patio and outdoor furniture",
      "Cribs and changing tables",
    ],
  },
  {
    title: "Appliances",
    items: [
      "Refrigerators and freezers (Freon handled)",
      "Washers and dryers",
      "Stoves, ovens, ranges",
      "Microwaves and toasters",
      "Dishwashers",
      "Trash compactors",
      "Water heaters",
      "Window AC units",
      "Dehumidifiers and humidifiers",
      "Wine fridges and ice makers",
    ],
  },
  {
    title: "Electronics & E-Waste",
    items: [
      "Tube TVs and flat-screens",
      "Projection TVs",
      "Desktop computers and laptops",
      "Printers and copiers",
      "Servers and networking equipment",
      "Stereo systems",
      "Speakers and subwoofers",
      "Cables, modems, routers",
      "VCRs, DVD players, game consoles",
    ],
  },
  {
    title: "Yard, Garage & Basement",
    items: [
      "Lawn mowers and weed whackers",
      "Snow blowers and leaf blowers",
      "Tools and toolboxes",
      "Garden hoses, planters, rakes",
      "Bicycles and sports equipment",
      "Patio umbrellas, grills, fire pits",
      "Workbenches and pegboards",
      "Old paint cans and household chemicals",
      "Treadmills and exercise bikes",
    ],
  },
  {
    title: "Construction & Demo Debris",
    items: [
      "Drywall and plaster",
      "Lumber and framing",
      "Tile and flooring",
      "Carpet and padding",
      "Cabinets and countertops",
      "Doors, windows, trim",
      "Brick and block (small amounts)",
      "Roofing shingles (separate quote)",
      "Concrete chunks (separate quote)",
    ],
  },
  {
    title: "Specialty",
    items: [
      "Hot tubs and swim spas",
      "Above-ground pools",
      "Pianos (upright, spinet, baby grand)",
      "Pool tables",
      "Safes",
      "Hoarder-condition cleanouts",
      "Estate contents",
      "Foreclosure trash-outs",
      "Sheds (wood, metal, vinyl)",
      "Decks and fences",
    ],
  },
];

const NO_TAKE = [
  "Asbestos (we coordinate with abatement partners)",
  "Hazardous chemicals (oil, antifreeze, large quantities)",
  "Tires in bulk (a few are fine — large quantities need a tire recycler)",
  "Live ammunition (please call us for guidance)",
];

export default function ItemsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Items We Take"
        title="If You're Tired of Looking at It, We'll Take It."
        subtitle="A near-complete list of what we haul. If you don't see it, ask — we probably take it anyway."
        breadcrumbs={[{ label: "Items We Take" }]}
      />

      <Container className="py-12 sm:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((g) => (
            <div key={g.title} className="rounded-2xl border border-ink-200 bg-white p-6">
              <h3 className="font-display text-lg font-bold text-ink-900">{g.title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-ink-700">
                {g.items.map((i) => (
                  <li key={i}>• {i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-ink-200 bg-ink-50 p-6 sm:p-8">
          <h2 className="font-display text-xl font-extrabold text-ink-900">A few things we can&apos;t take</h2>
          <ul className="mt-3 space-y-1.5 text-sm text-ink-700">
            {NO_TAKE.map((i) => (
              <li key={i}>• {i}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-ink-500">
            We&apos;ll always point you to the right resource if it&apos;s something we can&apos;t handle.
          </p>
        </div>
      </Container>

      <CTABand />
    </>
  );
}
