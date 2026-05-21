import Link from "next/link";
import { ArrowRight, Home, Trash2, Hammer, Container as ContainerIcon } from "lucide-react";
import { SERVICES_BY_CATEGORY, SERVICE_CATEGORIES, type ServiceCategory } from "@/content/services";

const ICONS: Record<ServiceCategory, React.ComponentType<{ className?: string }>> = {
  cleanouts: Home,
  "junk-removal": Trash2,
  demolition: Hammer,
  dumpster: ContainerIcon,
};

export function ServicesGrid({ heading = "Every Service We Offer" }: { heading?: string }) {
  return (
    <div>
      <h2 className="font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">{heading}</h2>
      <p className="mt-3 max-w-2xl text-ink-600">
        Residential to commercial, single item to whole property. We bring the trucks, the crew, and
        the experience to do it right the first time.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {(Object.keys(SERVICE_CATEGORIES) as ServiceCategory[]).map((cat) => {
          const Icon = ICONS[cat];
          const services = SERVICES_BY_CATEGORY[cat];
          return (
            <div
              key={cat}
              className="group rounded-2xl border border-ink-200 bg-white p-7 transition-all hover:border-brand-400 hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-brand-50 p-2.5 text-brand-600 ring-1 ring-brand-100">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-ink-900">
                    {SERVICE_CATEGORIES[cat].label}
                  </h3>
                  <p className="text-sm text-ink-500">{SERVICE_CATEGORIES[cat].tagline}</p>
                </div>
              </div>
              <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-1.5">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="text-sm text-ink-700 hover:text-brand-600 hover:underline"
                    >
                      {s.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function ServiceCardLinks({ slugs, title = "Related services" }: { slugs: string[]; title?: string }) {
  const items = slugs
    .map((slug) =>
      Object.values(SERVICES_BY_CATEGORY).flat().find((s) => s.slug === slug)
    )
    .filter(Boolean);

  if (!items.length) return null;

  return (
    <div>
      <h2 className="font-display text-2xl font-extrabold text-ink-900">{title}</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(
          (s) =>
            s && (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex items-center justify-between rounded-xl border border-ink-200 bg-white p-5 transition-all hover:border-brand-400 hover:shadow-sm"
              >
                <span className="font-semibold text-ink-900 group-hover:text-brand-600">{s.title}</span>
                <ArrowRight className="h-4 w-4 text-ink-400 transition-transform group-hover:translate-x-1 group-hover:text-brand-600" />
              </Link>
            )
        )}
      </div>
    </div>
  );
}
