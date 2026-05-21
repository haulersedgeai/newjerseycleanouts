import type { Region } from "./counties";

export interface Location {
  slug: string;
  name: string; // "Hoboken"
  fullName: string; // "Hoboken, NJ"
  county: string; // county slug e.g. "hudson-county"
  region: Region;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  neighborhoods: string[];
  landmarks: string[];
  isHQ?: boolean;
}

const LOCS: Location[] = [
  // ───────── BERGEN ─────────
  {
    slug: "dumont",
    name: "Dumont",
    fullName: "Dumont, NJ",
    county: "bergen-county",
    region: "north-jersey",
    isHQ: true,
    metaTitle: "Dumont, NJ Cleanouts & Junk Removal | Local Crew",
    metaDescription:
      "Dumont, NJ cleanouts, junk removal, and demolition — we're headquartered right on Berkley Place. Same-day appointments. (201) 267-2336.",
    intro:
      "Dumont is home — our trucks park here every night. We cover the whole borough from West Shore Avenue down through Madison and Washington, and we know the parking, the side-street loops, and which buildings need a COI before we roll in.",
    neighborhoods: [
      "Honiss Park",
      "Mid-Dumont",
      "West Dumont",
      "Library / Borough Hall area",
      "St. Mary's section",
    ],
    landmarks: [
      "Dumont Borough Hall",
      "Memorial Park",
      "Twin Boro Field",
      "Honiss Elementary",
      "Dumont train station (defunct line, still a landmark)",
    ],
  },
  {
    slug: "hackensack",
    name: "Hackensack",
    fullName: "Hackensack, NJ",
    county: "bergen-county",
    region: "north-jersey",
    metaTitle: "Hackensack, NJ Cleanouts & Junk Removal | Bergen County",
    metaDescription:
      "Hackensack cleanout and junk removal — high-rise apartments, single-family homes, and commercial buildings. COI ready. (201) 267-2336.",
    intro:
      "Hackensack is the Bergen County seat — high-rise apartments along Prospect Avenue, busy downtown, and the courthouse district. We've worked them all and we can pull a Certificate of Insurance for buildings that need one before the truck arrives.",
    neighborhoods: [
      "The Heights",
      "Fairmount",
      "South Side",
      "Prospect Avenue corridor",
      "Downtown / Main Street",
    ],
    landmarks: [
      "Hackensack University Medical Center",
      "Bergen County Courthouse",
      "Riverside Square Mall",
      "Foschini Park",
      "Route 4 retail",
    ],
  },
  {
    slug: "fort-lee",
    name: "Fort Lee",
    fullName: "Fort Lee, NJ",
    county: "bergen-county",
    region: "north-jersey",
    metaTitle: "Fort Lee, NJ Cleanouts | High-Rise Apartment Cleanout Service",
    metaDescription:
      "Fort Lee cleanout and junk removal — high-rise condos, walk-ups, and single-family homes. COI ready for every building. (201) 267-2336.",
    intro:
      "Fort Lee is high-rise country — the George Washington Bridge skyline behind every shoot. We carry a Certificate of Insurance, reserve the freight elevator, and know which loading docks need a 24-hour notice.",
    neighborhoods: [
      "Bridge Plaza",
      "Coytesville",
      "Palisade",
      "Linwood Park",
      "Town Center",
    ],
    landmarks: [
      "George Washington Bridge",
      "Fort Lee Historic Park",
      "Hudson Lights",
      "Constitution Park",
      "Palisades Center access",
    ],
  },
  {
    slug: "englewood",
    name: "Englewood",
    fullName: "Englewood, NJ",
    county: "bergen-county",
    region: "north-jersey",
    metaTitle: "Englewood, NJ Cleanouts | Estate & Whole-House Service",
    metaDescription:
      "Englewood, NJ cleanouts, estate cleanouts, and junk removal — older homes on the hill, downtown apartments, full-county service. (201) 267-2336.",
    intro:
      "Englewood ranges from the older estates on the East Hill to the dense apartment buildings along Palisade Avenue and the businesses on the South side. We handle the steep driveways, the narrow side streets, and the historic homes with care.",
    neighborhoods: [
      "East Hill",
      "Englewood Cliffs border",
      "Highwood",
      "Palisade Avenue",
      "Fourth Ward",
    ],
    landmarks: [
      "Bergen Performing Arts Center (bergenPAC)",
      "Englewood Hospital",
      "Flat Rock Brook Nature Center",
      "Dwight Morrow High School",
      "Route 4 and Route 9W access",
    ],
  },
  {
    slug: "teaneck",
    name: "Teaneck",
    fullName: "Teaneck, NJ",
    county: "bergen-county",
    region: "north-jersey",
    metaTitle: "Teaneck, NJ Cleanouts & Junk Removal | Family-Run Crew",
    metaDescription:
      "Teaneck cleanout, junk removal, and demolition — single-family homes, apartments, and businesses. Same-day appointments. (201) 267-2336.",
    intro:
      "Teaneck is a tight-knit suburb with quiet streets and busy commercial corridors on Cedar Lane and Route 4. We handle estate cleanouts, basement clear-outs, and full-house jobs on the older Tudor and Colonial homes.",
    neighborhoods: [
      "West Englewood",
      "Glenpointe",
      "Cedar Lane",
      "Holy Name area",
      "Fairleigh Dickinson border",
    ],
    landmarks: [
      "Fairleigh Dickinson University",
      "Holy Name Medical Center",
      "Cedar Lane shopping district",
      "Votee Park",
      "Glenpointe Centre",
    ],
  },
  {
    slug: "fair-lawn",
    name: "Fair Lawn",
    fullName: "Fair Lawn, NJ",
    county: "bergen-county",
    region: "north-jersey",
    metaTitle: "Fair Lawn, NJ Cleanouts | Garage, Basement & Estate Cleanouts",
    metaDescription:
      "Fair Lawn, NJ cleanouts and junk removal — Radburn, Saddle River Road, and Route 208 corridor. Same-day pickup. (201) 267-2336.",
    intro:
      "Fair Lawn includes Radburn — one of America's first planned communities — plus the busier commercial strips along Broadway and Route 208. We handle garage cleanouts, basement clear-outs, and estate work all across town.",
    neighborhoods: [
      "Radburn",
      "Memorial Park section",
      "Warren Point",
      "Cadmus Avenue",
      "Saddle River Road",
    ],
    landmarks: [
      "Radburn (national historic landmark)",
      "Memorial Park",
      "Fair Lawn Promenade",
      "Route 208",
      "Plaza Road / Route 4 retail",
    ],
  },
  {
    slug: "paramus",
    name: "Paramus",
    fullName: "Paramus, NJ",
    county: "bergen-county",
    region: "north-jersey",
    metaTitle: "Paramus, NJ Cleanouts | Garden State Plaza & Route 17 Corridor",
    metaDescription:
      "Paramus, NJ cleanout, junk removal, and commercial debris service — Garden State Plaza, Paramus Park, Route 17 and Route 4 corridors. (201) 267-2336.",
    intro:
      "Paramus is retail Bergen — Garden State Plaza, Paramus Park, the IKEA, and miles of strip-center frontage on Route 17 and Route 4. We've handled commercial cleanouts at all three malls and we work residential streets just as often.",
    neighborhoods: [
      "Bergen Mall area",
      "Spring Valley",
      "Paramus Heights",
      "Forest Avenue",
      "Midland section",
    ],
    landmarks: [
      "Westfield Garden State Plaza",
      "Paramus Park Mall",
      "Bergen Town Center",
      "Route 17 / Route 4 interchange",
      "Bergen Community College",
    ],
  },
  {
    slug: "bergenfield",
    name: "Bergenfield",
    fullName: "Bergenfield, NJ",
    county: "bergen-county",
    region: "north-jersey",
    metaTitle: "Bergenfield, NJ Cleanouts & Junk Removal | Local Crew",
    metaDescription:
      "Bergenfield, NJ cleanout and junk removal — same-day appointments from a Dumont-based local crew. (201) 267-2336.",
    intro:
      "Bergenfield sits right next door to our Dumont HQ. We work South Washington Avenue, Cooper Avenue, and the streets around the Bergenfield train station every week.",
    neighborhoods: [
      "Cooper section",
      "South Washington",
      "Roosevelt",
      "Lincoln",
      "St. John's section",
    ],
    landmarks: [
      "Bergenfield High School",
      "Cooper's Pond",
      "Foster Village shopping",
      "Bergenfield train station",
      "Borough Hall",
    ],
  },

  // ───────── ESSEX ─────────
  {
    slug: "newark",
    name: "Newark",
    fullName: "Newark, NJ",
    county: "essex-county",
    region: "north-jersey",
    metaTitle: "Newark, NJ Cleanouts & Junk Removal | Apartment & Commercial",
    metaDescription:
      "Newark cleanout, junk removal, and demolition — apartment buildings, brownstones, and commercial buildings across every ward. (201) 267-2336.",
    intro:
      "Newark covers five wards, the Ironbound, and a tight grid from Penn Station to the airport. We work apartment buildings, brownstones, and commercial clear-outs across the whole city, with COIs for every property manager who asks.",
    neighborhoods: [
      "Ironbound (East Ward)",
      "Forest Hill",
      "Weequahic",
      "Vailsburg",
      "University Heights",
      "Downtown / Penn Station",
    ],
    landmarks: [
      "Newark Penn Station",
      "Prudential Center",
      "Newark Liberty International Airport",
      "Branch Brook Park (cherry blossoms)",
      "NJPAC",
    ],
  },
  {
    slug: "east-orange",
    name: "East Orange",
    fullName: "East Orange, NJ",
    county: "essex-county",
    region: "north-jersey",
    metaTitle: "East Orange, NJ Cleanouts | Apartment & Estate Service",
    metaDescription:
      "East Orange cleanout, junk removal, and apartment cleanout service — same-day appointments across the city. (201) 267-2336.",
    intro:
      "East Orange runs along the Garden State Parkway and the train line into Newark. The pre-war apartment buildings on Munn Avenue and Park Avenue are where we spend a lot of our time — we know the freight elevators by name.",
    neighborhoods: [
      "Elmwood",
      "Brick Church",
      "Ampere",
      "Doddtown",
      "Fourth Ward",
    ],
    landmarks: [
      "East Orange General Hospital",
      "Brick Church Station",
      "Cicely Tyson School",
      "Garden State Parkway access",
      "Soverel Park",
    ],
  },
  {
    slug: "bloomfield",
    name: "Bloomfield",
    fullName: "Bloomfield, NJ",
    county: "essex-county",
    region: "north-jersey",
    metaTitle: "Bloomfield, NJ Cleanouts & Junk Removal | Local Service",
    metaDescription:
      "Bloomfield, NJ cleanouts and junk removal — single-family homes, apartments, and the Bloomfield Avenue corridor. (201) 267-2336.",
    intro:
      "Bloomfield sits between Newark and Montclair and shares the busy Bloomfield Avenue corridor with both. We work the older two- and three-family homes off Watchung Avenue, and we know the Bloomfield Center parking quirks.",
    neighborhoods: [
      "Bloomfield Center",
      "Brookdale",
      "Watsessing",
      "Halcyon Park",
      "Oakeside",
    ],
    landmarks: [
      "Bloomfield College",
      "Watsessing Park",
      "Brookdale Park",
      "Bloomfield Avenue retail",
      "Bloomfield train station (Montclair-Boonton)",
    ],
  },
  {
    slug: "montclair",
    name: "Montclair",
    fullName: "Montclair, NJ",
    county: "essex-county",
    region: "north-jersey",
    metaTitle: "Montclair, NJ Cleanouts | Estate, Whole-House, Hoarder",
    metaDescription:
      "Montclair, NJ cleanouts — estate, hoarder, whole-house. Older Victorians and Colonials handled carefully. (201) 267-2336.",
    intro:
      "Montclair is one of our favorite towns to work — the older Victorians on Upper Mountain, the brownstones around Watchung Plaza, and the apartments off Bloomfield Avenue all have their quirks. We treat the houses with care.",
    neighborhoods: [
      "Upper Montclair",
      "Watchung Plaza",
      "South End",
      "Estate Section",
      "Walnut Street area",
    ],
    landmarks: [
      "Montclair Art Museum",
      "Wellmont Theater",
      "Montclair State University",
      "Eagle Rock Reservation",
      "Watchung Plaza",
    ],
  },

  // ───────── HUDSON ─────────
  {
    slug: "jersey-city",
    name: "Jersey City",
    fullName: "Jersey City, NJ",
    county: "hudson-county",
    region: "north-jersey",
    metaTitle: "Jersey City Cleanouts & Junk Removal | High-Rise & Brownstone",
    metaDescription:
      "Jersey City cleanouts and junk removal — Newport, downtown, Journal Square, the Heights, brownstones, and high-rises. COI ready. (201) 267-2336.",
    intro:
      "Jersey City is everything at once — luxury high-rises in Newport and downtown, brownstones in Hamilton Park, walk-ups in the Heights, and the dense commercial of Journal Square. We've worked them all and we know the city's freight elevator etiquette cold.",
    neighborhoods: [
      "Downtown / Newport",
      "Journal Square",
      "The Heights",
      "Greenville",
      "Bergen-Lafayette",
      "Hamilton Park",
      "Paulus Hook",
    ],
    landmarks: [
      "Liberty State Park",
      "Journal Square Transportation Center",
      "Newport Centre Mall",
      "Lincoln Park",
      "Holland Tunnel",
      "Grove Street PATH",
    ],
  },
  {
    slug: "hoboken",
    name: "Hoboken",
    fullName: "Hoboken, NJ",
    county: "hudson-county",
    region: "north-jersey",
    metaTitle: "Hoboken, NJ Cleanouts | Brownstone & Walk-Up Specialists",
    metaDescription:
      "Hoboken cleanout and junk removal — brownstones, walk-ups, high-rises along Washington Street and the Hudson waterfront. (201) 267-2336.",
    intro:
      "Hoboken is a mile square of brownstones, walk-ups, and Hudson-front high-rises. Stair carries are a daily reality — we have the crew, the dollies, and the patience for the tight rowhouse staircases.",
    neighborhoods: [
      "Downtown / Washington Street",
      "Uptown",
      "Garden Street",
      "Castle Point",
      "Southwest",
    ],
    landmarks: [
      "Hoboken Terminal",
      "Stevens Institute of Technology",
      "Pier A Park",
      "Washington Street",
      "Hudson River waterfront",
    ],
  },
  {
    slug: "bayonne",
    name: "Bayonne",
    fullName: "Bayonne, NJ",
    county: "hudson-county",
    region: "north-jersey",
    metaTitle: "Bayonne, NJ Cleanouts & Junk Removal | Peninsula Crew",
    metaDescription:
      "Bayonne, NJ cleanouts and junk removal — Broadway, Avenue C, Avenue E, and the full peninsula. (201) 267-2336.",
    intro:
      "Bayonne runs the length of the peninsula from the Bayonne Bridge to Jersey City. We work the rowhouses on Avenue C, the brick apartment buildings off Broadway, and the commercial properties on Route 440.",
    neighborhoods: [
      "Downtown / 8th Street",
      "Bergen Point",
      "Constable Hook",
      "Uptown",
      "Centerville",
    ],
    landmarks: [
      "Bayonne Bridge",
      "Stephen R. Gregg Park",
      "Bayonne Golf Club",
      "Hudson County Park",
      "8th Street Light Rail",
    ],
  },
  {
    slug: "union-city",
    name: "Union City",
    fullName: "Union City, NJ",
    county: "hudson-county",
    region: "north-jersey",
    metaTitle: "Union City, NJ Cleanouts | Dense Apartment Service",
    metaDescription:
      "Union City, NJ cleanouts and apartment cleanout service — six-floor walk-ups and elevator buildings. (201) 267-2336.",
    intro:
      "Union City is one of the densest cities in America — six-story walk-ups packed together along Bergenline Avenue. We bring the stair-climbing dollies and the crew it takes to carry a sectional down five flights.",
    neighborhoods: [
      "Bergenline Avenue",
      "Summit Avenue",
      "Palisade Avenue",
      "Hudson Avenue",
      "32nd Street area",
    ],
    landmarks: [
      "Bergenline Avenue",
      "Roosevelt Stadium",
      "Hudson County Park",
      "Lincoln Tunnel approach",
      "Washington Park",
    ],
  },
  {
    slug: "west-new-york",
    name: "West New York",
    fullName: "West New York, NJ",
    county: "hudson-county",
    region: "north-jersey",
    metaTitle: "West New York, NJ Cleanouts | Apartment & Cliff-Top Service",
    metaDescription:
      "West New York, NJ cleanout and junk removal — high-rises on the Palisades and walk-ups across Bergenline. COI ready. (201) 267-2336.",
    intro:
      "West New York sits on top of the Palisades with the Manhattan skyline straight out the window. We work the high-rises on Boulevard East and the walk-ups along Bergenline Avenue.",
    neighborhoods: [
      "Boulevard East",
      "Bergenline",
      "Hudson Avenue",
      "60th Street",
      "Park Avenue",
    ],
    landmarks: [
      "Boulevard East skyline view",
      "Donnelly Memorial Park",
      "Miller Stadium",
      "Bergenline Avenue retail",
      "Lincoln Tunnel access",
    ],
  },

  // ───────── PASSAIC ─────────
  {
    slug: "paterson",
    name: "Paterson",
    fullName: "Paterson, NJ",
    county: "passaic-county",
    region: "north-jersey",
    metaTitle: "Paterson, NJ Cleanouts & Junk Removal | Local Crew",
    metaDescription:
      "Paterson, NJ cleanout, junk removal, and demolition service across every ward. Same-day appointments. (201) 267-2336.",
    intro:
      "Paterson is the third-largest city in NJ and one of the most historically rich — the Great Falls, the Silk City mills, the dense neighborhoods south of Route 80. We work residential and commercial across all six wards.",
    neighborhoods: [
      "South Paterson (Little Istanbul)",
      "Eastside",
      "Hillcrest",
      "Wrigley Park",
      "Lakeview",
      "Downtown",
    ],
    landmarks: [
      "Great Falls National Historical Park",
      "Hinchliffe Stadium",
      "St. Joseph's Hospital",
      "Eastside Park",
      "Lambert Castle",
    ],
  },
  {
    slug: "clifton",
    name: "Clifton",
    fullName: "Clifton, NJ",
    county: "passaic-county",
    region: "north-jersey",
    metaTitle: "Clifton, NJ Cleanouts & Junk Removal | Apartment & Commercial",
    metaDescription:
      "Clifton, NJ cleanouts and junk removal — Allwood, Lakeview, Botany, and the Route 3 / Route 46 commercial corridors. (201) 267-2336.",
    intro:
      "Clifton is one of NJ's largest cities by area and wraps around Passaic. We work the garden-apartment communities, the single-family neighborhoods, and the Route 3 / Route 46 commercial frontage every week.",
    neighborhoods: [
      "Allwood",
      "Lakeview",
      "Botany",
      "Athenia",
      "Dutch Hill",
      "Albion",
    ],
    landmarks: [
      "Clifton Commons",
      "Styertowne Shopping Center",
      "Garrett Mountain Reservation",
      "Route 3 / Route 46 split",
      "Clifton train station",
    ],
  },
  {
    slug: "passaic",
    name: "Passaic",
    fullName: "Passaic, NJ",
    county: "passaic-county",
    region: "north-jersey",
    metaTitle: "Passaic, NJ Cleanouts | Apartment & Walk-Up Service",
    metaDescription:
      "Passaic, NJ cleanouts and apartment cleanout service — pre-war buildings, walk-ups, and main street commercial. (201) 267-2336.",
    intro:
      "Passaic is dense and historic — pre-war apartment buildings on Lexington Avenue, walk-ups off Main Avenue, and the commercial strip along Madison Street. We have crews who know the buildings and the freight setups.",
    neighborhoods: [
      "Downtown",
      "Eastside",
      "Lower",
      "Prospect",
      "Hillcrest",
    ],
    landmarks: [
      "Pulaski Park",
      "Passaic train station",
      "Passaic City Hall",
      "St. Mary's Hospital",
      "Main Avenue commercial",
    ],
  },
  {
    slug: "wayne",
    name: "Wayne",
    fullName: "Wayne, NJ",
    county: "passaic-county",
    region: "north-jersey",
    metaTitle: "Wayne, NJ Cleanouts | Estate, Whole-House & Junk Removal",
    metaDescription:
      "Wayne, NJ cleanouts — estate, hoarder, whole-house, and junk removal across Packanack, Pines Lake, and Mountain View. (201) 267-2336.",
    intro:
      "Wayne is a sprawling township anchored by Willowbrook Mall and the Route 23 / Route 46 / I-80 interchange. We handle estate work in the lake communities and big garage cleanouts in the larger split-levels.",
    neighborhoods: [
      "Packanack Lake",
      "Pines Lake",
      "Mountain View",
      "Preakness",
      "Pompton Plains border",
    ],
    landmarks: [
      "Willowbrook Mall",
      "William Paterson University",
      "Packanack Lake",
      "Route 23 corridor",
      "Wayne Hills",
    ],
  },

  // ───────── MORRIS ─────────
  {
    slug: "morristown",
    name: "Morristown",
    fullName: "Morristown, NJ",
    county: "morris-county",
    region: "north-jersey",
    metaTitle: "Morristown, NJ Cleanouts & Junk Removal | Historic Homes Welcome",
    metaDescription:
      "Morristown, NJ cleanout and junk removal — older homes near the Green, apartments downtown, and office cleanouts. (201) 267-2336.",
    intro:
      "Morristown is one of NJ's most historic towns — the Green, the old federal homes, and the buzzing restaurants on South Street. We handle estate work in the older neighborhoods and office cleanouts in the corporate corridor on Headquarters Plaza.",
    neighborhoods: [
      "The Green / downtown",
      "Speedwell",
      "Convent Station area",
      "James Street",
      "Spring Brook",
    ],
    landmarks: [
      "The Morristown Green",
      "Morristown National Historical Park",
      "Mayo Performing Arts Center",
      "Headquarters Plaza",
      "Morristown Medical Center",
    ],
  },
  {
    slug: "parsippany",
    name: "Parsippany",
    fullName: "Parsippany, NJ",
    county: "morris-county",
    region: "north-jersey",
    metaTitle: "Parsippany, NJ Cleanouts | Office, Commercial & Residential",
    metaDescription:
      "Parsippany, NJ office cleanouts, commercial cleanouts, and residential junk removal — Route 287 corridor. (201) 267-2336.",
    intro:
      "Parsippany is a corporate-park-meets-suburb mix straddling I-287 and Route 80. We handle office cleanouts in the big corporate parks and residential cleanouts in Lake Hiawatha and Lake Parsippany.",
    neighborhoods: [
      "Lake Hiawatha",
      "Lake Parsippany",
      "Mount Tabor",
      "Powder Mill",
      "Troy Hills",
    ],
    landmarks: [
      "Mack-Cali Business Center",
      "Lake Parsippany",
      "Route 287 corporate corridor",
      "Mountain Way",
      "Mount Tabor historic district",
    ],
  },

  // ───────── UNION ─────────
  {
    slug: "elizabeth",
    name: "Elizabeth",
    fullName: "Elizabeth, NJ",
    county: "union-county",
    region: "north-jersey",
    metaTitle: "Elizabeth, NJ Cleanouts & Junk Removal | Apartment & Commercial",
    metaDescription:
      "Elizabeth, NJ cleanouts, junk removal, and commercial debris service — Broad Street, Elizabethport, and the port district. (201) 267-2336.",
    intro:
      "Elizabeth is the Union County seat and one of NJ's biggest cities. We work the apartment buildings on Broad Street, the warehouses near the port, and the row homes in Elizabethport. The Mills at Jersey Gardens is just up the road.",
    neighborhoods: [
      "Elizabethport",
      "Bayway",
      "Frog Hollow",
      "Midtown",
      "Westminster",
      "North Elizabeth",
    ],
    landmarks: [
      "The Mills at Jersey Gardens",
      "Newark Liberty International Airport",
      "Elizabeth Marina",
      "Mattano Park",
      "Trinitas Regional Medical Center",
    ],
  },
  {
    slug: "linden",
    name: "Linden",
    fullName: "Linden, NJ",
    county: "union-county",
    region: "north-jersey",
    metaTitle: "Linden, NJ Cleanouts & Junk Removal | Industrial & Residential",
    metaDescription:
      "Linden, NJ cleanouts and commercial junk removal — Wood Avenue, Bayway, and the Route 1&9 industrial corridor. (201) 267-2336.",
    intro:
      "Linden mixes the residential streets off Wood Avenue with the industrial Route 1&9 corridor. We handle warehouse cleanouts in Bayway and single-family cleanouts in the residential blocks.",
    neighborhoods: [
      "Tremley Point",
      "Bayway",
      "Sunnyside",
      "Grasselli",
      "Wood Avenue corridor",
    ],
    landmarks: [
      "Linden Airport",
      "Phillips 66 Bayway Refinery",
      "Linden train station",
      "Wood Avenue downtown",
      "Route 1&9 corridor",
    ],
  },
  {
    slug: "plainfield",
    name: "Plainfield",
    fullName: "Plainfield, NJ",
    county: "union-county",
    region: "north-jersey",
    metaTitle: "Plainfield, NJ Cleanouts | Estate & Whole-House Service",
    metaDescription:
      "Plainfield, NJ cleanouts and junk removal — Victorian homes, downtown apartments, and full-house clear-outs. (201) 267-2336.",
    intro:
      "Plainfield's Van Wyck Brooks historic district is full of beautifully preserved Victorians, and we handle them with the care they deserve. We also work the apartment buildings downtown and the homes in the South Plainfield border.",
    neighborhoods: [
      "Van Wyck Brooks Historic District",
      "Sleepy Hollow",
      "West End",
      "Netherwood",
      "Crescent",
    ],
    landmarks: [
      "Van Wyck Brooks Historic District",
      "Plainfield train station",
      "Cedar Brook Park",
      "Drake House Museum",
      "Muhlenberg campus area",
    ],
  },
  {
    slug: "rahway",
    name: "Rahway",
    fullName: "Rahway, NJ",
    county: "union-county",
    region: "north-jersey",
    metaTitle: "Rahway, NJ Cleanouts & Junk Removal | Local Service",
    metaDescription:
      "Rahway, NJ cleanouts and junk removal — Arts District, residential streets, and commercial buildings. (201) 267-2336.",
    intro:
      "Rahway has a strong downtown Arts District and quiet residential streets fanning out from it. We work apartment buildings near the train station and single-family homes throughout.",
    neighborhoods: [
      "Arts District",
      "Riverside",
      "Hazelwood",
      "West Rahway",
      "Inman section",
    ],
    landmarks: [
      "Union County Performing Arts Center",
      "Rahway train station",
      "Merck headquarters",
      "Milton Lake Park",
      "Rahway Arts District",
    ],
  },
  {
    slug: "westfield",
    name: "Westfield",
    fullName: "Westfield, NJ",
    county: "union-county",
    region: "north-jersey",
    metaTitle: "Westfield, NJ Cleanouts | Estate, Whole-House, Junk Removal",
    metaDescription:
      "Westfield, NJ cleanouts and junk removal — older Colonials, Victorians, and the downtown business district. (201) 267-2336.",
    intro:
      "Westfield's downtown is one of the most walkable in central NJ, and the older Colonials and Victorians on the north and south sides have basements packed full of decades of stuff. We're good at clearing them out.",
    neighborhoods: [
      "North Side",
      "South Side",
      "Wychwood",
      "Stoneleigh Park",
      "Downtown",
    ],
    landmarks: [
      "Westfield downtown",
      "Mindowaskin Park",
      "Tamaques Park",
      "Westfield train station",
      "Echo Lake Country Club",
    ],
  },
  {
    slug: "cranford",
    name: "Cranford",
    fullName: "Cranford, NJ",
    county: "union-county",
    region: "north-jersey",
    metaTitle: "Cranford, NJ Cleanouts & Junk Removal | Local Crew",
    metaDescription:
      "Cranford, NJ cleanouts and junk removal — single-family homes, downtown apartments, and the Rahway River neighborhoods. (201) 267-2336.",
    intro:
      "Cranford sits on the Rahway River with a tight, walkable downtown. We work the older homes off South Avenue and the apartments near the train station.",
    neighborhoods: [
      "Downtown / Eastman Plaza",
      "Brookside",
      "Riverside",
      "North Cranford",
      "Sherwood",
    ],
    landmarks: [
      "Cranford Theater",
      "Nomahegan Park",
      "Cranford Canoe Club",
      "Union County College",
      "Cranford train station",
    ],
  },

  // ───────── MIDDLESEX ─────────
  {
    slug: "edison",
    name: "Edison",
    fullName: "Edison, NJ",
    county: "middlesex-county",
    region: "central-jersey",
    metaTitle: "Edison, NJ Cleanouts | Commercial Debris & Residential",
    metaDescription:
      "Edison, NJ cleanouts, commercial debris removal, and warehouse cleanouts — Route 1 / Route 27 / Turnpike Exit 10. (201) 267-2336.",
    intro:
      "Edison is one of NJ's biggest townships — Route 1 commercial, Menlo Park Mall, the corporate parks along Wood Avenue, and dense residential neighborhoods like Iselin. We work all of it.",
    neighborhoods: [
      "Menlo Park",
      "Iselin border",
      "Stelton",
      "Clara Barton",
      "Bonhamtown",
    ],
    landmarks: [
      "Menlo Park Mall",
      "Edison State Park",
      "Roosevelt Park",
      "Thomas Edison Museum",
      "Turnpike Exit 10 / Route 1",
    ],
  },
  {
    slug: "new-brunswick",
    name: "New Brunswick",
    fullName: "New Brunswick, NJ",
    county: "middlesex-county",
    region: "central-jersey",
    metaTitle: "New Brunswick, NJ Cleanouts | Rutgers, Hospital, Downtown",
    metaDescription:
      "New Brunswick, NJ cleanouts and student housing cleanouts — Rutgers, downtown apartments, hospital district. (201) 267-2336.",
    intro:
      "New Brunswick is Rutgers, Johnson & Johnson, and a downtown that empties and refills with every semester. We do a lot of student-housing cleanouts in late spring and apartment turnovers downtown year-round.",
    neighborhoods: [
      "College Avenue",
      "Easton Avenue",
      "Hub City / downtown",
      "Fifth Ward",
      "George Street",
    ],
    landmarks: [
      "Rutgers University",
      "RWJ University Hospital",
      "State Theatre",
      "Johnson & Johnson HQ",
      "New Brunswick train station",
    ],
  },
  {
    slug: "woodbridge",
    name: "Woodbridge",
    fullName: "Woodbridge, NJ",
    county: "middlesex-county",
    region: "central-jersey",
    metaTitle: "Woodbridge, NJ Cleanouts & Junk Removal | Turnpike Exit 11",
    metaDescription:
      "Woodbridge, NJ cleanouts, junk removal, and commercial debris — Iselin, Avenel, Colonia, and Fords. (201) 267-2336.",
    intro:
      "Woodbridge Township covers Iselin, Avenel, Colonia, Sewaren, Fords, and Port Reading. The Turnpike Exit 11 and the Route 1 corridor make for easy logistics. We work all the sections.",
    neighborhoods: [
      "Iselin",
      "Avenel",
      "Colonia",
      "Sewaren",
      "Fords",
      "Port Reading",
    ],
    landmarks: [
      "Woodbridge Center Mall",
      "Turnpike Exit 11",
      "Hess Tower (Avenel border)",
      "Sewaren waterfront",
      "Woodbridge train station",
    ],
  },
  {
    slug: "perth-amboy",
    name: "Perth Amboy",
    fullName: "Perth Amboy, NJ",
    county: "middlesex-county",
    region: "central-jersey",
    metaTitle: "Perth Amboy, NJ Cleanouts | Apartment & Waterfront Service",
    metaDescription:
      "Perth Amboy, NJ cleanouts and junk removal — waterfront, downtown, residential streets. (201) 267-2336.",
    intro:
      "Perth Amboy is one of NJ's oldest cities, sitting where the Raritan meets the Arthur Kill. The pre-war apartment buildings downtown and the row homes off Smith Street keep us busy.",
    neighborhoods: [
      "Downtown / Smith Street",
      "Waterfront",
      "Budapest",
      "Five Corners",
      "High Street",
    ],
    landmarks: [
      "Perth Amboy waterfront",
      "City Hall",
      "Raritan Yacht Club",
      "Perth Amboy High School",
      "Outerbridge Crossing",
    ],
  },
  {
    slug: "sayreville",
    name: "Sayreville",
    fullName: "Sayreville, NJ",
    county: "middlesex-county",
    region: "central-jersey",
    metaTitle: "Sayreville, NJ Cleanouts & Junk Removal | Local Crew",
    metaDescription:
      "Sayreville, NJ cleanouts and junk removal — Old Bridge border, Parlin, and Route 9 corridor. (201) 267-2336.",
    intro:
      "Sayreville covers Parlin, Old Bridge border, and the Route 9 / Route 35 commercial frontage. We handle estate cleanouts in the older neighborhoods and big garage cleanouts in the split-level streets.",
    neighborhoods: [
      "Parlin",
      "Morgan",
      "Melrose",
      "Old Bridge",
      "Sayreville borough",
    ],
    landmarks: [
      "Riverwalk Park",
      "Old Bridge Township border",
      "Driscoll Bridge",
      "Garden State Parkway Exit 124",
      "Sayreville War Memorial High School",
    ],
  },
  {
    slug: "old-bridge",
    name: "Old Bridge",
    fullName: "Old Bridge, NJ",
    county: "middlesex-county",
    region: "central-jersey",
    metaTitle: "Old Bridge, NJ Cleanouts & Junk Removal | Residential Crew",
    metaDescription:
      "Old Bridge, NJ cleanouts, estate cleanouts, and junk removal — Madison Park, Laurence Harbor, and Cliffwood Beach. (201) 267-2336.",
    intro:
      "Old Bridge Township covers a large stretch from Madison Park down to Laurence Harbor and Cliffwood Beach. We handle estate cleanouts in the older neighborhoods and storage-unit clear-outs at the local facilities.",
    neighborhoods: [
      "Laurence Harbor",
      "Cliffwood Beach",
      "Madison Park",
      "Browntown",
      "Old Bridge proper",
    ],
    landmarks: [
      "Cliffwood Beach",
      "Old Bridge Public Library",
      "Garden State Parkway Exit 120",
      "Cheesequake State Park",
      "Madison Park shopping",
    ],
  },

  // ───────── MERCER ─────────
  {
    slug: "trenton",
    name: "Trenton",
    fullName: "Trenton, NJ",
    county: "mercer-county",
    region: "central-jersey",
    metaTitle: "Trenton, NJ Cleanouts | Apartment, Commercial, Estate",
    metaDescription:
      "Trenton, NJ cleanouts, junk removal, and commercial debris — state capitol district, Chambersburg, North Trenton. (201) 267-2336.",
    intro:
      "Trenton is the state capital — government buildings, the riverfront, dense neighborhoods, and the historic Chambersburg. We work residential and commercial across the city.",
    neighborhoods: [
      "Chambersburg",
      "Mill Hill",
      "Hiltonia",
      "Berkeley Square",
      "North Trenton",
    ],
    landmarks: [
      "NJ State House",
      "Trenton Thunder Ballpark",
      "Cadwalader Park",
      "Trenton Transit Center",
      "Mill Hill Historic District",
    ],
  },
  {
    slug: "princeton",
    name: "Princeton",
    fullName: "Princeton, NJ",
    county: "mercer-county",
    region: "central-jersey",
    metaTitle: "Princeton, NJ Cleanouts | Estate, Whole-House, Faculty Service",
    metaDescription:
      "Princeton, NJ cleanouts and estate cleanouts — older homes off Nassau Street, faculty housing, downtown apartments. (201) 267-2336.",
    intro:
      "Princeton is the university and the borough that grew around it — older homes off Nassau Street, faculty housing in the borough, and the corporate park frontage along Route 1. We work all of it.",
    neighborhoods: [
      "Nassau Street / downtown",
      "Western Section",
      "Princeton Junction border",
      "Riverside",
      "Witherspoon-Jackson",
    ],
    landmarks: [
      "Princeton University",
      "Palmer Square",
      "McCarter Theatre",
      "Princeton Battlefield",
      "Route 1 research corridor",
    ],
  },
  {
    slug: "hamilton",
    name: "Hamilton",
    fullName: "Hamilton, NJ",
    county: "mercer-county",
    region: "central-jersey",
    metaTitle: "Hamilton, NJ Cleanouts & Junk Removal | Township-Wide Service",
    metaDescription:
      "Hamilton Township, NJ cleanouts and junk removal — Mercerville, Yardville, Hamilton Square. (201) 267-2336.",
    intro:
      "Hamilton Township is huge and spread out — Mercerville, Yardville, Hamilton Square, and the strips along Route 33 and Route 130. We handle estate work in the older neighborhoods and big garage cleanouts in the larger lots.",
    neighborhoods: [
      "Mercerville",
      "Yardville",
      "Hamilton Square",
      "White Horse",
      "Groveville",
    ],
    landmarks: [
      "Hamilton Marketplace",
      "Quaker Bridge Mall",
      "Sayen Gardens",
      "Hamilton train station",
      "Veterans Park",
    ],
  },

  // ───────── MONMOUTH ─────────
  {
    slug: "asbury-park",
    name: "Asbury Park",
    fullName: "Asbury Park, NJ",
    county: "monmouth-county",
    region: "jersey-shore",
    metaTitle: "Asbury Park, NJ Cleanouts | Shore-House & Apartment Service",
    metaDescription:
      "Asbury Park, NJ cleanouts and junk removal — Victorians, condos, summer rentals, and Cookman Avenue businesses. (201) 267-2336.",
    intro:
      "Asbury Park is shore-house Victorians, downtown condos, and the businesses along Cookman Avenue. We handle pre-listing estate cleanouts and summer-rental turnover work between Memorial Day and Labor Day.",
    neighborhoods: [
      "Cookman Avenue / downtown",
      "West Side",
      "Bradley Park",
      "Wesley Lake",
      "North Beach",
    ],
    landmarks: [
      "Asbury Park boardwalk",
      "The Stone Pony",
      "Convention Hall",
      "Wesley Lake",
      "Cookman Avenue",
    ],
  },
  {
    slug: "long-branch",
    name: "Long Branch",
    fullName: "Long Branch, NJ",
    county: "monmouth-county",
    region: "jersey-shore",
    metaTitle: "Long Branch, NJ Cleanouts | Pier Village, Condos, Shore Homes",
    metaDescription:
      "Long Branch, NJ cleanouts and junk removal — Pier Village condos, West End, shore homes, and apartments. (201) 267-2336.",
    intro:
      "Long Branch covers Pier Village, the West End, and stretches inland to Branchport. We handle condo cleanouts at the high-rises, shore-house estate work, and apartment turnovers across the city.",
    neighborhoods: [
      "Pier Village",
      "West End",
      "Elberon",
      "Branchport",
      "North Long Branch",
    ],
    landmarks: [
      "Pier Village",
      "Monmouth Medical Center",
      "Seven Presidents Park",
      "Long Branch train station",
      "West End beach",
    ],
  },
  {
    slug: "belmar",
    name: "Belmar",
    fullName: "Belmar, NJ",
    county: "monmouth-county",
    region: "jersey-shore",
    metaTitle: "Belmar, NJ Cleanouts | Shore Rental Turnover & Estate",
    metaDescription:
      "Belmar, NJ cleanouts, summer rental turnovers, and shore-house estate work. (201) 267-2336.",
    intro:
      "Belmar is shore-house territory — small bungalows close to the boardwalk and bigger summer homes inland. Rental turnover work and pre-sale cleanouts are weekly business for us in season.",
    neighborhoods: [
      "Boardwalk / Ocean Avenue",
      "Belmar Marina",
      "Belmar Plaza",
      "South Belmar (Lake Como border)",
      "West Belmar (Wall border)",
    ],
    landmarks: [
      "Belmar boardwalk",
      "Belmar Marina",
      "Silver Lake",
      "Belmar train station",
      "10th Avenue",
    ],
  },
  {
    slug: "howell",
    name: "Howell",
    fullName: "Howell, NJ",
    county: "monmouth-county",
    region: "jersey-shore",
    metaTitle: "Howell, NJ Cleanouts | Garage, Basement, Estate, Hot-Tub Removal",
    metaDescription:
      "Howell Township, NJ cleanouts, junk removal, and demolition — Route 9, Route 33 corridor, and rural neighborhoods. (201) 267-2336.",
    intro:
      "Howell Township is huge and spread out, with everything from horse properties to townhomes off Route 9. Garage cleanouts, basement clear-outs, and hot-tub removals are common requests here.",
    neighborhoods: [
      "Ramtown",
      "Adelphia",
      "Candlewood",
      "Aldrich",
      "Howell Township proper",
    ],
    landmarks: [
      "Howell Park Golf Course",
      "Adelphia airport",
      "Manasquan Reservoir",
      "Route 9 / Route 33",
      "Echo Lake",
    ],
  },

  // ───────── OCEAN ─────────
  {
    slug: "toms-river",
    name: "Toms River",
    fullName: "Toms River, NJ",
    county: "ocean-county",
    region: "jersey-shore",
    metaTitle: "Toms River, NJ Cleanouts | Estate & 55+ Community Service",
    metaDescription:
      "Toms River, NJ cleanouts and estate cleanouts — Holiday City, Silverton, downtown, Pelican Island. (201) 267-2336.",
    intro:
      "Toms River is one of NJ's biggest townships and the heart of Ocean County. We do a lot of 55+ community estate cleanouts in Holiday City and Silver Ridge Park, plus single-family work in Silverton and downtown.",
    neighborhoods: [
      "Holiday City",
      "Silver Ridge Park",
      "Silverton",
      "Downtown",
      "Pelican Island",
    ],
    landmarks: [
      "Ocean County College",
      "Ocean County Mall",
      "Cattus Island Park",
      "Toms River Yacht Club",
      "Garden State Parkway Exit 82",
    ],
  },
  {
    slug: "brick",
    name: "Brick",
    fullName: "Brick, NJ",
    county: "ocean-county",
    region: "jersey-shore",
    metaTitle: "Brick, NJ Cleanouts & Junk Removal | Shore Township Crew",
    metaDescription:
      "Brick Township, NJ cleanouts and junk removal — Herbertsville, Cedarwood Park, Brick Beach. (201) 267-2336.",
    intro:
      "Brick Township stretches along the Metedeconk and the Mantoloking shore. We handle storm-related cleanouts, estate work in Herbertsville, and the shore-rental turnover off Princeton Avenue.",
    neighborhoods: [
      "Herbertsville",
      "Cedarwood Park",
      "Adamston",
      "Laurelton",
      "Brick Beach",
    ],
    landmarks: [
      "Brick Plaza",
      "Windward Beach Park",
      "Mantoloking Bridge",
      "Garden State Parkway Exit 91",
      "Brick Township High School",
    ],
  },
  {
    slug: "lakewood",
    name: "Lakewood",
    fullName: "Lakewood, NJ",
    county: "ocean-county",
    region: "jersey-shore",
    metaTitle: "Lakewood, NJ Cleanouts & Junk Removal | Local Service",
    metaDescription:
      "Lakewood, NJ cleanouts, junk removal, and commercial cleanouts — Route 9, downtown, and the Township's commercial frontage. (201) 267-2336.",
    intro:
      "Lakewood is one of the fastest-growing towns in NJ — dense residential blocks, Route 9 commercial frontage, and big-box retail. We handle residential and commercial work all over the township.",
    neighborhoods: [
      "Downtown",
      "South Lake Drive",
      "Cedarbridge",
      "Forest Avenue",
      "Locust Street",
    ],
    landmarks: [
      "Blue Claws Stadium (FirstEnergy Park)",
      "Georgian Court University",
      "Lake Carasaljo",
      "Route 9 retail strip",
      "Cedarbridge campus",
    ],
  },
  {
    slug: "jackson",
    name: "Jackson",
    fullName: "Jackson, NJ",
    county: "ocean-county",
    region: "jersey-shore",
    metaTitle: "Jackson, NJ Cleanouts & Junk Removal | Six Flags Area",
    metaDescription:
      "Jackson Township, NJ cleanouts and junk removal — Six Flags area, Cassville, Whitesville. (201) 267-2336.",
    intro:
      "Jackson Township is sprawling — Six Flags Great Adventure off Route 537, big-lot residential, and a lot of basement-and-garage work in the larger newer-construction homes.",
    neighborhoods: [
      "Cassville",
      "Whitesville",
      "Bennetts Mills",
      "Six Flags area",
      "Jackson Crossing",
    ],
    landmarks: [
      "Six Flags Great Adventure",
      "Six Flags Wild Safari",
      "Jackson Premium Outlets",
      "Prospertown Lake",
      "Route 537 / Route 195",
    ],
  },
  {
    slug: "manchester",
    name: "Manchester",
    fullName: "Manchester, NJ",
    county: "ocean-county",
    region: "jersey-shore",
    metaTitle: "Manchester, NJ Cleanouts | 55+ Community Estate Service",
    metaDescription:
      "Manchester Township, NJ cleanouts and 55+ community estate cleanouts — Whiting, Crestwood Village, Lakehurst border. (201) 267-2336.",
    intro:
      "Manchester is 55+ community territory — Crestwood Village, Leisure Village, Whiting — and estate cleanouts here are a big part of our weekly work. We move at the family's pace and handle the donation drop-offs carefully.",
    neighborhoods: [
      "Whiting",
      "Crestwood Village",
      "Leisure Village",
      "Roosevelt City",
      "Pine Lake Park",
    ],
    landmarks: [
      "Crestwood Village",
      "Whiting Village",
      "Lakehurst Naval Air Station border",
      "Route 70 / Route 539",
      "Manchester Township High School",
    ],
  },
  {
    slug: "point-pleasant",
    name: "Point Pleasant",
    fullName: "Point Pleasant, NJ",
    county: "ocean-county",
    region: "jersey-shore",
    metaTitle: "Point Pleasant, NJ Cleanouts | Shore-House & Rental Turnover",
    metaDescription:
      "Point Pleasant and Point Pleasant Beach, NJ cleanouts and rental turnover — boardwalk-area shore homes. (201) 267-2336.",
    intro:
      "Point Pleasant Beach and Point Pleasant cover the boardwalk, Jenkinson's area, and the inland streets. We handle a lot of shore-rental turnovers in season and pre-sale cleanouts on the older homes.",
    neighborhoods: [
      "Point Pleasant Beach",
      "Point Pleasant Borough",
      "Bay Head border",
      "Beach Bayway",
      "Manasquan border",
    ],
    landmarks: [
      "Jenkinson's Boardwalk",
      "Manasquan Inlet",
      "Point Pleasant Beach train station",
      "Jenkinson's Aquarium",
      "Bay Head border",
    ],
  },

  // ───────── SOUTH JERSEY ─────────
  {
    slug: "camden",
    name: "Camden",
    fullName: "Camden, NJ",
    county: "camden-county",
    region: "south-jersey",
    metaTitle: "Camden, NJ Cleanouts & Junk Removal | Commercial & Residential",
    metaDescription:
      "Camden, NJ cleanouts and commercial debris service — waterfront, downtown, and neighborhood cleanouts. (201) 267-2336.",
    intro:
      "Camden anchors South Jersey — waterfront, the medical campuses, and the older row-home neighborhoods. We extend service down here for larger projects and commercial cleanouts.",
    neighborhoods: [
      "Waterfront",
      "Cooper Plaza",
      "Cramer Hill",
      "Fairview",
      "Parkside",
    ],
    landmarks: [
      "Adventure Aquarium",
      "Cooper University Hospital",
      "Rutgers Camden",
      "BB&T Pavilion",
      "Camden waterfront",
    ],
  },
  {
    slug: "cherry-hill",
    name: "Cherry Hill",
    fullName: "Cherry Hill, NJ",
    county: "camden-county",
    region: "south-jersey",
    metaTitle: "Cherry Hill, NJ Cleanouts & Junk Removal | Local Service",
    metaDescription:
      "Cherry Hill, NJ cleanouts and junk removal — Cherry Hill Mall, Route 70 corridor, older Colonials. (201) 267-2336.",
    intro:
      "Cherry Hill is South Jersey's biggest commercial hub — the Cherry Hill Mall, Route 70 frontage, and quiet residential streets fanning out from the main roads. We handle estate cleanouts and full-house clear-outs all over town.",
    neighborhoods: [
      "Barclay",
      "Erlton",
      "Old Orchard",
      "Heritage",
      "Downs Farm",
    ],
    landmarks: [
      "Cherry Hill Mall",
      "Garden State Discovery Museum",
      "Croft Farm",
      "Cherry Hill train station",
      "Route 70 / Route 38",
    ],
  },

  // ───────── HOBOKEN already done above ─────────
  // ───────── OTHER NORTH JERSEY EXTRAS ─────────
  {
    slug: "kearny",
    name: "Kearny",
    fullName: "Kearny, NJ",
    county: "hudson-county",
    region: "north-jersey",
    metaTitle: "Kearny, NJ Cleanouts & Junk Removal | Hudson County",
    metaDescription:
      "Kearny, NJ cleanouts and junk removal — Kearny Avenue, North Arlington border, Schuyler. (201) 267-2336.",
    intro:
      "Kearny sits between Newark and the Meadowlands — older homes off Kearny Avenue, busy commercial along the Belleville Turnpike, and the industrial strip near the Passaic River.",
    neighborhoods: [
      "Kearny Avenue",
      "Arlington",
      "Schuyler",
      "Manor section",
      "South Kearny",
    ],
    landmarks: [
      "Kearny High School",
      "Belleville Turnpike",
      "Hudson County Park",
      "Frank A. Vincent Memorial Park",
      "Riverbank Park",
    ],
  },
];

export const LOCATIONS: Location[] = LOCS;

export function getLocation(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}

export const LOCATIONS_BY_REGION = {
  "north-jersey": LOCATIONS.filter((l) => l.region === "north-jersey"),
  "central-jersey": LOCATIONS.filter((l) => l.region === "central-jersey"),
  "south-jersey": LOCATIONS.filter((l) => l.region === "south-jersey"),
  "jersey-shore": LOCATIONS.filter((l) => l.region === "jersey-shore"),
} as const;
