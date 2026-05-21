import type { Metadata } from "next";
import { Star } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/container";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Reviews — New Jersey Cleanouts",
  description:
    "What our customers say about cleanouts, junk removal, and demolition work across New Jersey.",
};

const REVIEWS = [
  {
    name: "Linda R.",
    where: "Teaneck, NJ",
    body:
      "We had to clear out my mother's house after she passed and the team was so respectful and patient. They let me set aside the things I wanted to keep and never rushed me. I can't recommend them enough.",
  },
  {
    name: "Marcus T.",
    where: "Jersey City, NJ",
    body:
      "Hired them for a third-floor walk-up apartment cleanout. Two guys, three hours, done. They reserved the freight elevator and were out before the next tenant arrived. Worth every penny.",
  },
  {
    name: "GC, Paramus project",
    where: "Bergen County",
    body:
      "We've been using their crews for construction debris on retail buildouts for two years. Reliable, on time, and they keep our trades focused on building instead of hauling. Easy to work with.",
  },
  {
    name: "Patricia K.",
    where: "Toms River, NJ",
    body:
      "Father-in-law was in a 55+ community and we needed to clear out the whole condo before the sale. They handled it in a day and the place was broom-clean. Fantastic service.",
  },
  {
    name: "Ahmed S.",
    where: "Edison, NJ",
    body:
      "Old hot tub on the back deck for 12 years. They drained it, cut it up, hauled it out, and we still have a deck. Done in three hours. Price quoted was the price paid.",
  },
  {
    name: "Diane W.",
    where: "Morristown, NJ",
    body:
      "Hoarder situation in a family member's home. They were discreet, judgment-free, and looked carefully for paperwork and photos before anything was thrown out. We got the house listed two weeks later.",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Reviews"
        title="What New Jersey Says About Us"
        subtitle="Real notes from real customers. The longer ones we keep on file."
        breadcrumbs={[{ label: "Reviews" }]}
      />

      <Container className="py-12 sm:py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <div key={r.name} className="rounded-2xl border border-ink-200 bg-white p-6">
              <div className="flex items-center gap-0.5 text-brand-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">&ldquo;{r.body}&rdquo;</p>
              <div className="mt-4 text-sm font-semibold text-ink-900">{r.name}</div>
              <div className="text-xs text-ink-500">{r.where}</div>
            </div>
          ))}
        </div>
      </Container>

      <CTABand />
    </>
  );
}
