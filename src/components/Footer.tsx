import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13 22v-8h2.7l.4-3.1H13V8.8c0-.9.3-1.5 1.6-1.5H16V4.5c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9V11H7v3.1h2.9V22H13z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}
import { Container } from "@/components/ui/container";
import { NAV_PRIMARY, NAV_FOOTER, SITE } from "@/lib/site";
import { COUNTIES } from "@/content/counties";
import { SERVICE_CATEGORIES, SERVICES_BY_CATEGORY } from "@/content/services";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-ink-100 bg-ink-900 text-ink-100">
      <Container className="py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <div className="font-display text-2xl font-extrabold text-white">
              New Jersey <span className="text-brand-300">Cleanouts</span>
            </div>
            <p className="mt-3 max-w-md text-sm text-ink-300">
              Family-run cleanout, junk removal, and demolition crew based in Dumont,
              NJ — serving homeowners, executors, landlords, and builders across the
              entire Garden State.
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <a href={SITE.phone.link} className="flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4 text-brand-300" /> {SITE.phone.display}
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-white">
                <Mail className="h-4 w-4 text-brand-300" /> {SITE.email}
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-brand-300" />
                <span>{SITE.address.full}</span>
              </div>
            </div>
            <div className="mt-5 flex gap-3">
              <a
                href={SITE.socials.facebook}
                aria-label="Facebook"
                className="rounded-md border border-white/10 p-2 hover:border-brand-300 hover:text-brand-300"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={SITE.socials.instagram}
                aria-label="Instagram"
                className="rounded-md border border-white/10 p-2 hover:border-brand-300 hover:text-brand-300"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Services</div>
            <ul className="mt-3 space-y-2 text-sm text-ink-300">
              {(Object.keys(SERVICE_CATEGORIES) as Array<keyof typeof SERVICE_CATEGORIES>)
                .flatMap((cat) => SERVICES_BY_CATEGORY[cat].slice(0, 3))
                .slice(0, 8)
                .map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="hover:text-white">
                      {s.shortTitle}
                    </Link>
                  </li>
                ))}
              <li>
                <Link href="/services" className="font-medium text-brand-300 hover:text-white">
                  All services →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Counties</div>
            <ul className="mt-3 space-y-2 text-sm text-ink-300">
              {COUNTIES.slice(0, 8).map((c) => (
                <li key={c.slug}>
                  <Link href={`/counties/${c.slug}`} className="hover:text-white">
                    {c.name} County
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/counties" className="font-medium text-brand-300 hover:text-white">
                  All counties →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Company</div>
            <ul className="mt-3 space-y-2 text-sm text-ink-300">
              {NAV_FOOTER.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              {NAV_PRIMARY.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-ink-400 sm:flex-row sm:items-center">
          <div>
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4">
            <span>Licensed & Insured</span>
            <span>Family-Run · NJ Based</span>
            <span>{SITE.hours.short}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
