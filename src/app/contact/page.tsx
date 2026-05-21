import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/container";
import { QuoteForm } from "@/components/QuoteForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact New Jersey Cleanouts",
  description:
    "Call, text, or email New Jersey Cleanouts for cleanout, junk removal, demolition, or dumpster rental anywhere in NJ.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in Touch With New Jersey Cleanouts"
        subtitle="Call, text, or send a message — we get back fast. Same-day estimates available."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <ContactCard icon={Phone} title="Phone" body={SITE.phone.display} href={SITE.phone.link} note="Tap to call. We answer." />
            <ContactCard icon={Mail} title="Email" body={SITE.email} href={`mailto:${SITE.email}`} note="Usually replied to within a few hours." />
            <ContactCard icon={MapPin} title="Headquarters" body={SITE.address.full} note="Bergen County · serving all of NJ." />
            <ContactCard icon={Clock} title="Hours" body={`${SITE.hours.weekdays} — ${SITE.hours.sunday}`} note="After-hours commercial work available." />
          </div>

          <div className="rounded-2xl border border-ink-200 bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="font-display text-2xl font-extrabold text-ink-900">Send a message</h2>
            <p className="mt-1 text-sm text-ink-500">Photos are helpful but not required.</p>
            <div className="mt-6">
              <QuoteForm />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

function ContactCard({
  icon: Icon,
  title,
  body,
  href,
  note,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
  href?: string;
  note?: string;
}) {
  const inner = (
    <>
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-brand-50 p-2.5 text-brand-600 ring-1 ring-brand-100">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            {title}
          </div>
          <div className="font-display text-lg font-bold text-ink-900">{body}</div>
        </div>
      </div>
      {note && <p className="mt-3 text-sm text-ink-500">{note}</p>}
    </>
  );

  return href ? (
    <a href={href} className="block rounded-2xl border border-ink-200 bg-white p-6 hover:border-brand-400 hover:shadow-sm">
      {inner}
    </a>
  ) : (
    <div className="rounded-2xl border border-ink-200 bg-white p-6">{inner}</div>
  );
}
