import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/container";
import { TrustBar } from "@/components/sections/TrustBar";
import { CTABand } from "@/components/sections/CTABand";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About New Jersey Cleanouts",
  description:
    "Family-run cleanout and junk removal company based in Dumont, NJ. Serving residential and commercial clients across the entire Garden State.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Family-Run. NJ-Owned. Doing This Right."
        subtitle="We're the crew that shows up when other companies cancel — and the one that doesn't add a fee for the basement stairs."
        breadcrumbs={[{ label: "About" }]}
      />

      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="prose max-w-none text-ink-700">
            <p className="text-lg leading-relaxed">
              {SITE.name} started as a small Bergen County cleanout outfit and grew into one of
              the busiest cleanout, junk removal, and construction-debris crews in the state.
              We&apos;re still family-run, still local, and still pick up our own phone.
            </p>
            <p className="leading-relaxed">
              What started with single-family homes in Dumont and Bergenfield now covers everything
              from hoarder cleanouts on the Jersey Shore to mall-scale construction-debris
              management for projects like the American Dream Mall, the Westfield Garden State
              Plaza, and Paramus Park.
            </p>
            <p className="leading-relaxed">
              The bigger we got, the more carefully we hired. Today our crew is trained on what
              matters most: protecting your floors, your stairs, and your time — and treating
              every cleanout like the family who hired us is watching.
            </p>

            <h2 className="font-display text-2xl font-extrabold text-ink-900">What we believe</h2>
            <ul className="space-y-2">
              <li><strong>Show up.</strong> Late-cancellations and no-shows are why people hate this industry.</li>
              <li><strong>Price the job, not the clock.</strong> Hourly pricing rewards slow work. We give a number.</li>
              <li><strong>Treat the tough jobs gently.</strong> Hoarder and estate cleanouts need patience, not pressure.</li>
              <li><strong>Donate what we can.</strong> Less landfill, more help for NJ charities.</li>
            </ul>
          </div>

          <aside className="rounded-2xl border border-ink-200 bg-white p-6">
            <h3 className="font-display text-xl font-extrabold text-ink-900">At a glance</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="text-ink-500">Headquarters</dt>
                <dd className="font-medium text-ink-900">{SITE.address.full}</dd>
              </div>
              <div>
                <dt className="text-ink-500">Service area</dt>
                <dd className="font-medium text-ink-900">All 21 NJ counties</dd>
              </div>
              <div>
                <dt className="text-ink-500">Phone</dt>
                <dd className="font-medium text-ink-900">{SITE.phone.display}</dd>
              </div>
              <div>
                <dt className="text-ink-500">Email</dt>
                <dd className="font-medium text-ink-900">{SITE.email}</dd>
              </div>
              <div>
                <dt className="text-ink-500">Hours</dt>
                <dd className="font-medium text-ink-900">
                  {SITE.hours.weekdays}<br />{SITE.hours.sunday}
                </dd>
              </div>
              <div>
                <dt className="text-ink-500">Insurance</dt>
                <dd className="font-medium text-ink-900">General liability + workers&apos; comp on file. COIs available.</dd>
              </div>
            </dl>
          </aside>
        </div>
      </Container>

      <Container className="py-6">
        <TrustBar />
      </Container>

      <section className="section-gradient">
        <Container className="py-14 sm:py-20">
          <WhyChoose />
        </Container>
      </section>

      <CTABand />
    </>
  );
}
