import Link from "next/link";
import { Phone, Shield, Clock, Truck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="hero-gradient relative overflow-hidden text-white">
      <Container className="relative grid items-center gap-10 pb-20 pt-16 lg:grid-cols-2 lg:pb-28 lg:pt-24">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium backdrop-blur-sm">
            <Star className="h-3.5 w-3.5 text-brand-300" />
            <span>NJ-based · Family-run · Fully insured</span>
          </div>
          <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Cleanouts, Junk Removal & Demolition{" "}
            <span className="text-brand-300">Across New Jersey.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/80 sm:text-lg">
            From a single couch to a whole house, an estate cleanout to a
            construction tear-down — our crew shows up on time, hauls it all,
            and leaves the place broom-clean. Same-day appointments across all
            21 NJ counties.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="xl" variant="accent" className="font-bold">
              <Link href="/get-a-quote">Get a Free Quote</Link>
            </Button>
            <Button asChild size="xl" variant="outline">
              <a href={SITE.phone.link}>
                <Phone className="h-5 w-5" />
                {SITE.phone.display}
              </a>
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-white/85">
              <Shield className="h-4 w-4 text-brand-300" /> Fully Insured
            </div>
            <div className="flex items-center gap-2 text-white/85">
              <Clock className="h-4 w-4 text-brand-300" /> Same-Day Service
            </div>
            <div className="flex items-center gap-2 text-white/85">
              <Truck className="h-4 w-4 text-brand-300" /> Own Trucks & Crew
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="photo-placeholder aspect-[4/3] w-full rounded-2xl shadow-2xl ring-1 ring-white/10">
            <div className="relative z-10 flex h-full flex-col items-center justify-center gap-3 text-center">
              <div className="font-display text-4xl font-extrabold leading-none text-white/95 sm:text-5xl">
                NJC
              </div>
              <div className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                The Garden State&apos;s Cleanout Crew
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 hidden rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white shadow-xl backdrop-blur-md sm:block">
            <div className="font-display text-2xl font-extrabold leading-none">5,000+</div>
            <div className="text-xs text-white/70">cleanouts completed</div>
          </div>
          <div className="absolute -right-4 -top-4 hidden rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white shadow-xl backdrop-blur-md sm:block">
            <div className="font-display text-2xl font-extrabold leading-none">21/21</div>
            <div className="text-xs text-white/70">NJ counties served</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
