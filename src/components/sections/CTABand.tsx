import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SITE } from "@/lib/site";

export function CTABand({
  title = "Need it gone today? We can probably make it happen.",
  subtitle = "Same-day and next-day appointments across NJ. Call, text, or fill out the quote form — we get back fast.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="brand-gradient relative overflow-hidden text-white">
      <Container className="relative z-10 py-14 sm:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">{title}</h2>
            <p className="mt-3 max-w-2xl text-white/90">{subtitle}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="xl" variant="accent">
              <Link href="/get-a-quote">Free Quote</Link>
            </Button>
            <Button asChild size="xl" variant="outline">
              <a href={SITE.phone.link}>
                <Phone className="h-5 w-5" /> {SITE.phone.display}
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
