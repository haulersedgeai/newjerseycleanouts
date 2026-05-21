import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { LOCATIONS_BY_REGION, type Location } from "@/content/locations";
import { REGIONS, type Region } from "@/content/counties";

export function LocationsByRegion({ region }: { region: Region }) {
  const locations = LOCATIONS_BY_REGION[region];
  if (!locations.length) return null;
  return (
    <div>
      <h3 className="font-display text-2xl font-bold text-ink-900">{REGIONS[region].label}</h3>
      <p className="mt-1 text-sm text-ink-500">{REGIONS[region].tagline}</p>
      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
        {locations.map((loc) => (
          <Link
            key={loc.slug}
            href={`/locations/${loc.slug}`}
            className="group flex items-center justify-between gap-2 rounded-lg border border-ink-200 bg-white px-3 py-2.5 text-sm transition-all hover:border-brand-400 hover:shadow-sm"
          >
            <span className="flex items-center gap-2 text-ink-800 group-hover:text-brand-700">
              <MapPin className="h-3.5 w-3.5 text-ink-400 group-hover:text-brand-500" />
              {loc.name}
            </span>
            <ArrowRight className="h-3.5 w-3.5 text-ink-300 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-500" />
          </Link>
        ))}
      </div>
    </div>
  );
}

export function CompactLocationsGrid({ locations }: { locations: Location[] }) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
      {locations.map((loc) => (
        <Link
          key={loc.slug}
          href={`/locations/${loc.slug}`}
          className="group flex items-center justify-between gap-2 rounded-lg border border-ink-200 bg-white px-3 py-2.5 text-sm transition-all hover:border-brand-400 hover:shadow-sm"
        >
          <span className="flex items-center gap-2 text-ink-800 group-hover:text-brand-700">
            <MapPin className="h-3.5 w-3.5 text-ink-400 group-hover:text-brand-500" />
            {loc.name}
          </span>
          <ArrowRight className="h-3.5 w-3.5 text-ink-300 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-500" />
        </Link>
      ))}
    </div>
  );
}
