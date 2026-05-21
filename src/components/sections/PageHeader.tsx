import { Container } from "@/components/ui/container";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
}) {
  return (
    <section className="border-b border-ink-100 bg-ink-50">
      <Container className="py-10 sm:py-14">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1 text-xs text-ink-500">
            <Link href="/" className="inline-flex items-center hover:text-brand-600">
              <Home className="h-3.5 w-3.5" />
            </Link>
            {breadcrumbs.map((b, i) => (
              <span key={i} className="inline-flex items-center gap-1">
                <ChevronRight className="h-3.5 w-3.5 text-ink-400" />
                {b.href ? (
                  <Link href={b.href} className="hover:text-brand-600">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-ink-700">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            {eyebrow}
          </div>
        )}
        <h1 className="font-display text-3xl font-extrabold text-ink-900 sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && <p className="mt-3 max-w-3xl text-base text-ink-600 sm:text-lg">{subtitle}</p>}
      </Container>
    </section>
  );
}
