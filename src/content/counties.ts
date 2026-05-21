export type Region = "north-jersey" | "central-jersey" | "south-jersey" | "jersey-shore";

export interface County {
  slug: string;
  name: string; // "Bergen"
  fullName: string; // "Bergen County, NJ"
  region: Region;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  citySlugs: string[]; // slugs that live in locations.ts under this county
  seat?: string;
  highlights: string[];
}

export const REGIONS: Record<Region, { label: string; tagline: string }> = {
  "north-jersey": {
    label: "North Jersey",
    tagline: "Bergen, Essex, Hudson, Morris, Passaic, Union — our home turf.",
  },
  "central-jersey": {
    label: "Central Jersey",
    tagline: "Middlesex, Mercer, and the Route 1 / Turnpike corridor.",
  },
  "south-jersey": {
    label: "South Jersey",
    tagline: "Camden, Atlantic, Cape May — full coverage to the bay.",
  },
  "jersey-shore": {
    label: "Jersey Shore",
    tagline: "Monmouth, Ocean, and shore communities all season long.",
  },
};

export const COUNTIES: County[] = [
  {
    slug: "bergen-county",
    name: "Bergen",
    fullName: "Bergen County, NJ",
    region: "north-jersey",
    seat: "Hackensack",
    metaTitle: "Bergen County Cleanout & Junk Removal | New Jersey Cleanouts",
    metaDescription:
      "Cleanout, junk removal, and demolition service across Bergen County, NJ — Hackensack, Paramus, Fort Lee, Englewood, Teaneck, Fair Lawn, Dumont and every town in between.",
    intro:
      "Bergen County is our home county — we're headquartered in Dumont. From the Route 4 corridor in Paramus to the Hudson cliffs in Fort Lee and Englewood, we run jobs in Bergen County every week.",
    citySlugs: ["dumont", "hackensack", "fort-lee", "englewood", "teaneck", "fair-lawn", "paramus", "bergenfield"],
    highlights: [
      "Garden State Plaza and Paramus Park Mall",
      "Route 4 and Route 17 retail corridor",
      "George Washington Bridge access",
      "Closter, Tenafly, and Pascack Valley towns",
    ],
  },
  {
    slug: "essex-county",
    name: "Essex",
    fullName: "Essex County, NJ",
    region: "north-jersey",
    seat: "Newark",
    metaTitle: "Essex County Cleanouts & Junk Removal NJ | NJ Cleanouts",
    metaDescription:
      "Cleanout, junk removal, and demolition service across Essex County, NJ — Newark, East Orange, Bloomfield, Montclair, West Orange.",
    intro:
      "Essex County runs from downtown Newark to the leafy streets of Montclair and West Orange. We work the full spread — high-rise apartments, brownstones, single-family homes, and commercial properties.",
    citySlugs: ["newark", "east-orange", "bloomfield", "montclair"],
    highlights: [
      "Newark Penn Station and the Ironbound",
      "Branch Brook Park",
      "Bloomfield Avenue and Montclair Center",
      "South Mountain Reservation",
    ],
  },
  {
    slug: "hudson-county",
    name: "Hudson",
    fullName: "Hudson County, NJ",
    region: "north-jersey",
    seat: "Jersey City",
    metaTitle: "Hudson County Cleanout & Junk Removal NJ | High-Rises & Brownstones",
    metaDescription:
      "Cleanout and junk removal across Hudson County, NJ — Jersey City, Hoboken, Bayonne, Union City, West New York. Apartment-building experience.",
    intro:
      "Hudson County is high-density: high-rise apartments, brownstones, and walk-ups across Jersey City, Hoboken, Bayonne, Union City, and West New York. We carry COIs for buildings, reserve freight elevators, and work around doormen.",
    citySlugs: ["jersey-city", "hoboken", "bayonne", "union-city", "west-new-york", "kearny"],
    highlights: [
      "Hoboken brownstones and Washington Street",
      "Jersey City — Journal Square, Newport, downtown",
      "Liberty State Park",
      "Holland and Lincoln Tunnel access",
    ],
  },
  {
    slug: "middlesex-county",
    name: "Middlesex",
    fullName: "Middlesex County, NJ",
    region: "central-jersey",
    seat: "New Brunswick",
    metaTitle: "Middlesex County Cleanouts NJ | New Brunswick, Edison, Woodbridge",
    metaDescription:
      "Cleanout, junk removal, and demolition across Middlesex County, NJ — New Brunswick, Edison, Woodbridge, Perth Amboy, Sayreville, Old Bridge.",
    intro:
      "Middlesex County sits at the crossroads of the Turnpike and Route 9. We work the full county from New Brunswick's Rutgers neighborhoods to the warehouse strips along Route 1 in Edison.",
    citySlugs: ["new-brunswick", "edison", "woodbridge", "perth-amboy", "sayreville", "old-bridge"],
    highlights: [
      "Rutgers University and downtown New Brunswick",
      "Menlo Park Mall and Route 1 corridor",
      "Woodbridge Center and Turnpike Exit 11",
      "Perth Amboy waterfront",
    ],
  },
  {
    slug: "monmouth-county",
    name: "Monmouth",
    fullName: "Monmouth County, NJ",
    region: "jersey-shore",
    seat: "Freehold",
    metaTitle: "Monmouth County Cleanouts & Junk Removal NJ | Shore Service",
    metaDescription:
      "Cleanout, junk removal, and demolition across Monmouth County, NJ — Asbury Park, Long Branch, Belmar, Freehold, Howell. Shore-house and rental cleanouts.",
    intro:
      "Monmouth County is shore territory — Asbury Park, Long Branch, Belmar, Sea Bright — plus inland Howell and Freehold. Rental cleanouts, shore-house estates, and pre-listing clear-outs are weekly work for us here.",
    citySlugs: ["asbury-park", "long-branch", "belmar", "howell"],
    highlights: [
      "Asbury Park boardwalk and Cookman Avenue",
      "Long Branch and Pier Village",
      "Belmar and Bradley Beach",
      "Freehold Raceway Mall and Route 9",
    ],
  },
  {
    slug: "morris-county",
    name: "Morris",
    fullName: "Morris County, NJ",
    region: "north-jersey",
    seat: "Morristown",
    metaTitle: "Morris County Cleanouts NJ | Morristown, Parsippany, Madison",
    metaDescription:
      "Cleanout, junk removal, and demolition across Morris County, NJ — Morristown, Parsippany, Madison, Denville, and Mountain Lakes.",
    intro:
      "Morris County stretches from corporate Parsippany along Route 287 to the historic Green in Morristown. We handle estate cleanouts in the older neighborhoods and office cleanouts along Route 10 and 287.",
    citySlugs: ["morristown", "parsippany"],
    highlights: [
      "Morristown Green and historic district",
      "Route 287 office corridor",
      "Lake Hopatcong and Mountain Lakes",
      "Parsippany corporate parks",
    ],
  },
  {
    slug: "ocean-county",
    name: "Ocean",
    fullName: "Ocean County, NJ",
    region: "jersey-shore",
    seat: "Toms River",
    metaTitle: "Ocean County Cleanouts NJ | Toms River, Brick, Lakewood, Jackson",
    metaDescription:
      "Cleanout, junk removal, and demolition across Ocean County, NJ — Toms River, Brick, Lakewood, Jackson, Manchester, Point Pleasant.",
    intro:
      "Ocean County is huge — from Lakewood's growth on Route 9 down through Toms River, Brick, and the barrier-island shore communities. Senior community cleanouts and pre-sale estate work are common here.",
    citySlugs: ["toms-river", "brick", "lakewood", "jackson", "manchester", "point-pleasant"],
    highlights: [
      "Garden State Parkway exits 80–98",
      "Toms River, Brick, and Seaside Heights",
      "Lakewood — Route 9 retail corridor",
      "55+ communities in Manchester and Jackson",
    ],
  },
  {
    slug: "passaic-county",
    name: "Passaic",
    fullName: "Passaic County, NJ",
    region: "north-jersey",
    seat: "Paterson",
    metaTitle: "Passaic County Cleanouts NJ | Paterson, Clifton, Passaic, Wayne",
    metaDescription:
      "Cleanout, junk removal, and demolition service across Passaic County, NJ — Paterson, Clifton, Passaic, Wayne, and the Route 23 corridor.",
    intro:
      "Passaic County runs from downtown Paterson up through Wayne and the Route 23 corridor. We work Clifton apartment buildings, Wayne single-family homes, and Paterson commercial cleanouts.",
    citySlugs: ["paterson", "clifton", "passaic", "wayne"],
    highlights: [
      "Great Falls of Paterson",
      "Willowbrook Mall in Wayne",
      "Route 23 / Route 46 retail",
      "Clifton commons and downtown",
    ],
  },
  {
    slug: "union-county",
    name: "Union",
    fullName: "Union County, NJ",
    region: "north-jersey",
    seat: "Elizabeth",
    metaTitle: "Union County Cleanouts NJ | Elizabeth, Linden, Westfield, Cranford",
    metaDescription:
      "Cleanout, junk removal, and demolition across Union County, NJ — Elizabeth, Linden, Plainfield, Rahway, Westfield, Cranford.",
    intro:
      "Union County mixes industrial Elizabeth and Linden with the suburban downtowns of Westfield and Cranford. We handle warehouse cleanouts on Route 1&9 and pre-listing house cleanouts off Broad Street.",
    citySlugs: ["elizabeth", "linden", "plainfield", "rahway", "westfield", "cranford"],
    highlights: [
      "Newark Liberty / Elizabeth port complex",
      "Westfield downtown and Garwood",
      "Cranford and the Rahway River",
      "Plainfield train corridor",
    ],
  },
  {
    slug: "camden-county",
    name: "Camden",
    fullName: "Camden County, NJ",
    region: "south-jersey",
    seat: "Camden",
    metaTitle: "Camden County Cleanouts NJ | Camden, Cherry Hill",
    metaDescription:
      "Cleanout, junk removal, and demolition across Camden County, NJ — Camden, Cherry Hill, and the Route 70 corridor.",
    intro:
      "Camden County anchors South Jersey — Camden's waterfront, Cherry Hill's neighborhoods, and the Route 70 / 38 commercial corridor. We extend our service down here for larger cleanouts and dumpster work.",
    citySlugs: ["camden", "cherry-hill"],
    highlights: [
      "Camden waterfront and BB&T Pavilion",
      "Cherry Hill Mall and Route 70",
      "Voorhees and Marlton commercial",
      "Route 295 / Route 42 access",
    ],
  },
  {
    slug: "mercer-county",
    name: "Mercer",
    fullName: "Mercer County, NJ",
    region: "central-jersey",
    seat: "Trenton",
    metaTitle: "Mercer County Cleanouts NJ | Trenton, Princeton, Hamilton",
    metaDescription:
      "Cleanout, junk removal, and demolition across Mercer County, NJ — Trenton, Princeton, Hamilton, and the Route 1 corridor.",
    intro:
      "Mercer County brings together the state capital in Trenton, Princeton's university and research corridor, and the dense Hamilton Township. We cover the full county for residential, estate, and commercial work.",
    citySlugs: ["trenton", "princeton", "hamilton"],
    highlights: [
      "Princeton University and Nassau Street",
      "Route 1 research-park corridor",
      "Hamilton Marketplace and Quaker Bridge",
      "NJ State House and Trenton waterfront",
    ],
  },
];

export function getCounty(slug: string): County | undefined {
  return COUNTIES.find((c) => c.slug === slug);
}
