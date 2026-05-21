import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/container";
import { LocationsByRegion } from "@/components/sections/LocationsGrid";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Cities & Towns We Serve in New Jersey",
  description:
    "Cleanout, junk removal, and demolition service across every region of New Jersey — North Jersey, Central Jersey, Jersey Shore, and South Jersey. Pick your town.",
};

export default function LocationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Service Area"
        title="Cleanouts & Junk Removal Across New Jersey"
        subtitle="We work the whole state — every county, almost every town. Find yours below."
        breadcrumbs={[{ label: "Locations" }]}
      />
      <Container className="space-y-12 py-12 sm:py-16">
        <LocationsByRegion region="north-jersey" />
        <LocationsByRegion region="central-jersey" />
        <LocationsByRegion region="jersey-shore" />
        <LocationsByRegion region="south-jersey" />
      </Container>
      <CTABand />
    </>
  );
}
