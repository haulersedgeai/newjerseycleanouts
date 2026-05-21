import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/container";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Gallery — Before & After Cleanouts in NJ",
  description:
    "Before-and-after photos from New Jersey cleanouts, junk removal jobs, and demolition projects across the Garden State.",
};

const ITEMS = [
  { label: "Whole-house cleanout", sub: "Bergen County", img: "/images/hero-1.jpg" },
  { label: "Hoarder cleanout", sub: "Essex County", img: "/images/hero-2.jpg" },
  { label: "Estate cleanout", sub: "Morris County", img: "/images/work-1.jpg" },
  { label: "Garage cleanout", sub: "Hudson County", img: "/images/work-2.jpg" },
  { label: "Basement clear-out", sub: "Union County", img: "/images/work-3.jpg" },
  { label: "Shed demolition", sub: "Passaic County", img: "/images/work-4.jpg" },
  { label: "Apartment turnover", sub: "Hoboken", img: "/images/work-5.jpg" },
  { label: "Storage unit cleanout", sub: "Toms River", img: "/images/work-6.jpg" },
  { label: "Construction debris", sub: "Paramus", img: "/images/work-7.webp" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Before, During & After"
        subtitle="A few jobs we've done across NJ. Cleanouts and demolitions photograph well — see the difference."
        breadcrumbs={[{ label: "Gallery" }]}
      />
      <Container className="py-12 sm:py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it) => (
            <div key={it.label} className="group relative overflow-hidden rounded-2xl border border-ink-200 bg-ink-900">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={it.img}
                  alt={`${it.label} — ${it.sub}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="font-display text-lg font-bold text-white drop-shadow">
                    {it.label}
                  </div>
                  <div className="text-xs font-medium text-white/80 drop-shadow">{it.sub}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-ink-500">
          More photos available on{" "}
          <a className="font-semibold text-brand-600" href="https://www.instagram.com/newjerseycleanouts/" target="_blank" rel="noreferrer">
            Instagram @newjerseycleanouts
          </a>
          .
        </p>
      </Container>
      <CTABand />
    </>
  );
}
