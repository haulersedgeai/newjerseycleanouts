import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home, Trash2, Hammer, Container as ContainerIcon } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/container";
import { CTABand } from "@/components/sections/CTABand";
import {
  SERVICE_CATEGORIES,
  SERVICES_BY_CATEGORY,
  type ServiceCategory,
} from "@/content/services";

export const metadata: Metadata = {
  title: "All Services — Cleanouts, Junk Removal, Demolition, Dumpster Rental",
  description:
    "Every service we offer across New Jersey — cleanouts (whole-house, hoarder, estate, garage, basement), junk removal, demolition, and dumpster rental.",
};

const ICONS: Record<ServiceCategory, React.ComponentType<{ className?: string }>> = {
  cleanouts: Home,
  "junk-removal": Trash2,
  demolition: Hammer,
  dumpster: ContainerIcon,
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Every Cleanout, Junk Removal, and Demolition Service We Offer"
        subtitle="Pick a service to see what's included, what we take, and what it typically costs. If you don't see it here, call us — we probably do it anyway."
        breadcrumbs={[{ label: "Services" }]}
      />
      <Container className="py-12 sm:py-16">
        <div className="space-y-14">
          {(Object.keys(SERVICE_CATEGORIES) as ServiceCategory[]).map((cat) => {
            const Icon = ICONS[cat];
            const services = SERVICES_BY_CATEGORY[cat];
            return (
              <section key={cat}>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-brand-50 p-2.5 text-brand-600 ring-1 ring-brand-100">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">
                      {SERVICE_CATEGORIES[cat].label}
                    </h2>
                    <p className="text-sm text-ink-500">{SERVICE_CATEGORIES[cat].tagline}</p>
                  </div>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="group rounded-2xl border border-ink-200 bg-white p-5 transition-all hover:border-brand-400 hover:shadow-sm"
                    >
                      <div className="flex items-center justify-between">
                        <div className="font-display text-lg font-bold text-ink-900 group-hover:text-brand-700">
                          {s.title}
                        </div>
                        <ArrowRight className="h-4 w-4 text-ink-300 transition-transform group-hover:translate-x-1 group-hover:text-brand-600" />
                      </div>
                      <p className="mt-2 line-clamp-3 text-sm text-ink-600">{s.intro}</p>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </Container>
      <CTABand />
    </>
  );
}
