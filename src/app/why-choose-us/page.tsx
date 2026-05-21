import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/container";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { TrustBar } from "@/components/sections/TrustBar";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Why Choose New Jersey Cleanouts",
  description:
    "Why thousands of NJ homeowners, executors, landlords, and contractors call us first for cleanouts, junk removal, and demolition.",
};

export default function WhyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Why Choose Us"
        title="The Reasons People Call Us First"
        subtitle="Cleanouts are easy to do badly. We do them right — and we do them on time."
        breadcrumbs={[{ label: "Why Choose Us" }]}
      />
      <Container className="py-12 sm:py-16">
        <WhyChoose />
      </Container>
      <Container className="pb-6">
        <TrustBar />
      </Container>
      <section className="section-gradient">
        <Container className="py-14 sm:py-20">
          <HowItWorks />
        </Container>
      </section>
      <CTABand />
    </>
  );
}
