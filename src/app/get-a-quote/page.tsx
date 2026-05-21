import type { Metadata } from "next";
import { Phone, Clock, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/container";
import { QuoteForm } from "@/components/QuoteForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a Free Quote — NJ Cleanout & Junk Removal",
  description:
    "Free, no-pressure quote for any cleanout, junk removal, or demolition job across New Jersey. Same-day response.",
};

export default function QuotePage() {
  return (
    <>
      <PageHeader
        eyebrow="Free Estimate"
        title="Get a Free Quote in Minutes"
        subtitle="One short form. Same-day response, usually within an hour during business hours."
        breadcrumbs={[{ label: "Get a Quote" }]}
      />

      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-2xl border border-ink-200 bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="font-display text-2xl font-extrabold text-ink-900">Request a quote</h2>
            <p className="mt-1 text-sm text-ink-500">
              Photos help, but not required. We&apos;ll text or call back fast.
            </p>
            <div className="mt-6">
              <QuoteForm />
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl border border-ink-200 bg-ink-50 p-6">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-600" />
                <div className="font-display text-lg font-bold text-ink-900">Prefer to call?</div>
              </div>
              <a
                href={SITE.phone.link}
                className="mt-2 block font-display text-3xl font-extrabold text-brand-600"
              >
                {SITE.phone.display}
              </a>
              <p className="mt-2 text-sm text-ink-600">
                We pick up. {SITE.hours.short}.
              </p>
            </div>

            <div className="rounded-2xl border border-ink-200 bg-white p-6">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-brand-600" />
                <div className="font-display text-lg font-bold text-ink-900">Same-day service</div>
              </div>
              <p className="mt-2 text-sm text-ink-600">
                Most jobs in North Jersey go same-day or next-day. Closing on Friday? Eviction
                Monday? Tell us when you call.
              </p>
            </div>

            <div className="rounded-2xl border border-ink-200 bg-white p-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-brand-600" />
                <div className="font-display text-lg font-bold text-ink-900">Fully insured</div>
              </div>
              <p className="mt-2 text-sm text-ink-600">
                General liability and workers&apos; comp. We&apos;ll send a Certificate of Insurance
                to your building or HOA on request.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
