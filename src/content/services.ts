export type ServiceCategory = "cleanouts" | "junk-removal" | "demolition" | "dumpster";

export interface Service {
  slug: string;
  category: ServiceCategory;
  title: string;
  shortTitle: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  whatsIncluded: string[];
  items: string[];
  relatedSlugs: string[];
  faq?: { q: string; a: string }[];
}

export const SERVICE_CATEGORIES: Record<ServiceCategory, { label: string; tagline: string }> = {
  cleanouts: {
    label: "Cleanouts",
    tagline: "Whole-house, estate, hoarder, garage, basement, attic, commercial.",
  },
  "junk-removal": {
    label: "Junk Removal",
    tagline: "Furniture, appliances, mattresses, electronics, hot tubs, debris.",
  },
  demolition: {
    label: "Demolition",
    tagline: "Sheds, decks, hot tubs, fences, and small structures.",
  },
  dumpster: {
    label: "Dumpster Rental",
    tagline: "Roll-off dumpsters for projects of every size.",
  },
};

export const SERVICES: Service[] = [
  // ───────── CLEANOUTS (primary) ─────────
  {
    slug: "whole-house-cleanouts",
    category: "cleanouts",
    title: "Whole-House Cleanouts",
    shortTitle: "Whole-House",
    h1: "Whole-House Cleanouts in New Jersey",
    metaTitle: "Whole-House Cleanouts NJ | Top-to-Bottom House Cleanout Service",
    metaDescription:
      "Top-to-bottom whole-house cleanout service across New Jersey. Family-run, fully insured. Same-day & next-day appointments — call (201) 267-2336.",
    intro:
      "When a house needs to be cleared from the attic to the basement, our crew handles every room — furniture, appliances, boxes, decades of stored belongings — and leaves the property broom-clean. We work statewide across New Jersey for sellers, executors, landlords, and families managing a transition.",
    whatsIncluded: [
      "Two- to six-person crew with our own trucks and dollies",
      "Every room cleared — attic, basement, garage, sheds included",
      "All loading, hauling, and dump fees handled",
      "Donation drop-offs for usable furniture and household goods",
      "Recycling for metal, electronics, and appliances",
      "Final sweep and broom-clean finish",
    ],
    items: [
      "Furniture, mattresses, couches",
      "Appliances (refrigerators, washers, dryers, ovens)",
      "Boxes, clothing, books, paperwork",
      "Garage and basement contents",
      "Yard debris and outdoor equipment",
    ],
    relatedSlugs: ["estate-cleanouts", "hoarder-cleanouts", "move-out-cleanouts", "garage-cleanouts"],
    faq: [
      {
        q: "How fast can you clear out a full house?",
        a: "Most three-bedroom homes are cleared in a single day. Larger properties or hoarder-condition homes may take two to three days, scheduled back-to-back so you're not without access for long.",
      },
      {
        q: "Do you handle out-of-state estates?",
        a: "Yes. We work regularly with executors and out-of-state heirs. We can coordinate access, send photo proof of completion, and schedule with the realtor or closing attorney.",
      },
    ],
  },
  {
    slug: "hoarder-cleanouts",
    category: "cleanouts",
    title: "Hoarder Cleanouts",
    shortTitle: "Hoarder",
    h1: "Compassionate Hoarder Cleanouts in NJ",
    metaTitle: "Hoarder Cleanout Service NJ | Discreet, Judgment-Free, Insured",
    metaDescription:
      "Discreet, judgment-free hoarder cleanout service across New Jersey. Fully insured, OSHA-aware, family-respectful. Call (201) 267-2336 for a private quote.",
    intro:
      "Hoarder cleanouts require patience, respect, and a crew that has done this work before. We move at the family's pace, look for keepsakes, documents, and items of value, and we never make anyone feel ashamed of a difficult situation. Every job is handled discreetly — unmarked or our own trucks, no public discussion.",
    whatsIncluded: [
      "Private, no-pressure walkthrough and written quote",
      "Trained crew accustomed to challenging conditions",
      "Careful sort for cash, jewelry, documents, photos, and keepsakes",
      "PPE, biohazard cleanup partners when needed",
      "Sanitizing and odor control after the load-out",
      "Coordination with social workers, family, or property managers",
    ],
    items: [
      "Decades of accumulated possessions",
      "Spoiled food, soiled bedding, biohazards",
      "Pet damage and odor",
      "Pest-affected materials",
      "Trash, recycling, donations sorted on-site",
    ],
    relatedSlugs: ["estate-cleanouts", "whole-house-cleanouts", "apartment-cleanouts"],
    faq: [
      {
        q: "Is this confidential?",
        a: "Completely. We arrive in unmarked or company trucks, we don't post photos of the property, and we never discuss the job outside the crew.",
      },
      {
        q: "Will you look for valuables before throwing things away?",
        a: "Yes. We make a slow pass for cash, jewelry, important paperwork, photos, and anything else the family asks us to watch for. Anything questionable gets set aside for your review.",
      },
    ],
  },
  {
    slug: "estate-cleanouts",
    category: "cleanouts",
    title: "Estate Cleanouts",
    shortTitle: "Estate",
    h1: "Estate Cleanout Services in New Jersey",
    metaTitle: "Estate Cleanouts NJ | Respectful Service for Executors & Families",
    metaDescription:
      "Estate cleanout service across New Jersey. Respectful, insured, executor-friendly. We coordinate with realtors and attorneys. Call (201) 267-2336.",
    intro:
      "Settling an estate is hard enough — the cleanout shouldn't add stress. Our team works carefully through every room, helps the family separate keepsakes from clear-outs, and gets the property ready for sale or transfer on your timeline.",
    whatsIncluded: [
      "Walkthrough with family or executor before any item is removed",
      "Photos and inventory of anything you want documented",
      "Careful handling of furniture, china, photos, and heirlooms",
      "Donation pickups for usable goods (with receipts on request)",
      "Coordination with realtors, attorneys, and closing dates",
      "Final clean ready for showings or transfer",
    ],
    items: [
      "Furniture, antiques, china, glassware",
      "Closet contents and personal items",
      "Books, paperwork, files (shredding available)",
      "Garage, basement, attic accumulation",
      "Vehicle removal coordination",
    ],
    relatedSlugs: ["whole-house-cleanouts", "hoarder-cleanouts", "foreclosure-cleanouts"],
    faq: [
      {
        q: "Can the family be remote?",
        a: "Yes. We can do a video walkthrough, send a detailed quote, and follow a punch list. We send photos at start, mid, and finish so you can see exactly what was cleared.",
      },
    ],
  },
  {
    slug: "garage-cleanouts",
    category: "cleanouts",
    title: "Garage Cleanouts",
    shortTitle: "Garage",
    h1: "Garage Cleanouts in New Jersey",
    metaTitle: "Garage Cleanout NJ | Same-Day Garage Clearing | NJ Cleanouts",
    metaDescription:
      "Garage cleanout service across New Jersey. Tools, lawn equipment, oil, paint, and old furniture hauled away. Same-day appointments. (201) 267-2336.",
    intro:
      "Two-car garage so full you've been parking in the driveway for years? We clear it out in a few hours — every box, tool, broken lawn chair, half-empty paint can, and forgotten bike. You point, we load.",
    whatsIncluded: [
      "All boxes, shelving, and stored items removed",
      "Tools, lawn equipment, and yard tools hauled or donated",
      "Old paint, oil, and household chemicals handled properly",
      "Bicycles, sports gear, holiday décor — gone or donated",
      "Sweep-out at the end so you can park again",
    ],
    items: [
      "Tools, ladders, workbenches",
      "Lawn mowers, leaf blowers, snow blowers",
      "Old paint cans, oil, fluids",
      "Bikes, sports equipment, toys",
      "Cabinets, shelving, freezers",
    ],
    relatedSlugs: ["basement-cleanouts", "shed-demolition", "whole-house-cleanouts"],
  },
  {
    slug: "basement-cleanouts",
    category: "cleanouts",
    title: "Basement Cleanouts",
    shortTitle: "Basement",
    h1: "Basement Cleanouts in NJ",
    metaTitle: "Basement Cleanouts NJ | Hauling, Sorting & Disposal Crew",
    metaDescription:
      "Basement cleanout service across New Jersey. Flood debris, old furniture, storage, and water heaters hauled away. Fully insured. (201) 267-2336.",
    intro:
      "Basements collect everything — old furniture, holiday bins, broken appliances, and after a flood, a whole lot of debris. We carry it all up the stairs so you don't have to.",
    whatsIncluded: [
      "Heavy-lift crew comfortable with narrow stairs",
      "Furniture, appliances, and shelving disassembly",
      "Flood-damaged drywall, carpet, padding removal",
      "Old oil tanks coordinated with abatement partners",
      "Sweep-out and final walkthrough",
    ],
    items: [
      "Sofas, recliners, bedroom sets",
      "Water-damaged carpet and drywall",
      "Old appliances and water heaters",
      "Boxes of clothing, books, paperwork",
      "Workout equipment, ping-pong tables, pool tables",
    ],
    relatedSlugs: ["attic-cleanouts", "garage-cleanouts", "construction-debris-removal"],
  },
  {
    slug: "attic-cleanouts",
    category: "cleanouts",
    title: "Attic Cleanouts",
    shortTitle: "Attic",
    h1: "Attic Cleanouts in New Jersey",
    metaTitle: "Attic Cleanout Service NJ | Pull-Down Stairs, No Problem",
    metaDescription:
      "Attic cleanouts across New Jersey — insulation debris, old boxes, holiday décor, and forgotten furniture. Pull-down stairs no problem. (201) 267-2336.",
    intro:
      "Attic space is the hardest to access and the easiest to forget. We bring the equipment and the patience to carry decades of boxes, old insulation, and broken furniture down the pull-down stairs without scratching your walls.",
    whatsIncluded: [
      "Crew experienced with pull-down stairs and walk-up attics",
      "Wall and floor protection on the way out",
      "Old insulation removal (where safe)",
      "Boxes, furniture, holiday décor sorted on-site",
      "Donation drop-offs for usable items",
    ],
    items: [
      "Old boxes, books, photo albums",
      "Holiday décor and decorations",
      "Broken or outdated furniture",
      "Old insulation and ductwork debris",
      "Mannequins, dress forms, sewing machines",
    ],
    relatedSlugs: ["basement-cleanouts", "whole-house-cleanouts", "estate-cleanouts"],
  },
  {
    slug: "storage-unit-cleanouts",
    category: "cleanouts",
    title: "Storage Unit Cleanouts",
    shortTitle: "Storage Unit",
    h1: "Storage Unit Cleanouts Across NJ",
    metaTitle: "Storage Unit Cleanouts NJ | Stop Paying Monthly Rent",
    metaDescription:
      "Storage unit cleanouts at any NJ facility — we meet you, clear the unit, sweep it out, and close the door. Stop paying rent. (201) 267-2336.",
    intro:
      "Paying $200, $300, $500 a month for a storage unit you haven't opened in years? We'll meet you at the facility, clear the unit room-to-truck, sweep it out, and close the door so you can stop the auto-pay.",
    whatsIncluded: [
      "We meet you at the facility — Public Storage, Extra Space, CubeSmart, Life Storage, anywhere",
      "Full unit cleared, including pallets and shelving",
      "Sort for keepsakes, valuables, documents",
      "Donation drop-offs for usable items",
      "Sweep-out so you pass the move-out inspection",
    ],
    items: [
      "Furniture, mattresses, box springs",
      "Boxes, totes, plastic bins",
      "Appliances, electronics",
      "Pallet contents and shelving",
      "Bikes, sports gear, holiday décor",
    ],
    relatedSlugs: ["move-out-cleanouts", "estate-cleanouts", "apartment-cleanouts"],
  },
  {
    slug: "apartment-cleanouts",
    category: "cleanouts",
    title: "Apartment Cleanouts",
    shortTitle: "Apartment",
    h1: "Apartment Cleanouts in New Jersey",
    metaTitle: "Apartment Cleanouts NJ | Walk-Ups, Elevator Buildings, Co-ops",
    metaDescription:
      "Apartment cleanout service across NJ — walk-ups, elevator buildings, doormen, co-ops. Insured for COIs. Same-day appointments. (201) 267-2336.",
    intro:
      "Walk-up, elevator building, doorman, co-op — we've worked them all. We can pull a Certificate of Insurance for your building, reserve the freight elevator, and have the unit empty before the lease ends.",
    whatsIncluded: [
      "Certificate of Insurance available for buildings that require it",
      "Freight elevator coordination",
      "Doorman / concierge coordination",
      "Furniture disassembly for tight stairwells",
      "Floor protection through hallways and lobbies",
    ],
    items: [
      "Beds, dressers, couches",
      "Kitchen appliances and small furniture",
      "Closet contents and clothing",
      "Boxes and packing material",
      "Mattress and box spring removal",
    ],
    relatedSlugs: ["move-out-cleanouts", "storage-unit-cleanouts", "office-cleanouts"],
  },
  {
    slug: "office-cleanouts",
    category: "cleanouts",
    title: "Office Cleanouts",
    shortTitle: "Office",
    h1: "Office Cleanouts Across New Jersey",
    metaTitle: "Office Cleanout NJ | Cubicles, Desks, Servers, After-Hours OK",
    metaDescription:
      "Office cleanout service across New Jersey — cubicles, desks, server rooms, file destruction. After-hours and weekends available. (201) 267-2336.",
    intro:
      "Closing an office, downsizing, or moving floors? We work after-hours and weekends so we don't interrupt operations, and we coordinate with property managers for loading dock access and freight reservations.",
    whatsIncluded: [
      "After-hours and weekend scheduling",
      "Cubicle and workstation disassembly",
      "Server and electronics recycling (R2-certified partners)",
      "Secure shredding partner for sensitive files",
      "COI and W-9 available for landlords",
    ],
    items: [
      "Cubicles, desks, conference tables",
      "Office chairs, file cabinets",
      "Servers, monitors, electronics",
      "Boxes of files (shredding optional)",
      "Kitchen appliances and breakroom furniture",
    ],
    relatedSlugs: ["commercial-cleanouts", "tv-electronics-removal", "construction-debris-removal"],
  },
  {
    slug: "commercial-cleanouts",
    category: "cleanouts",
    title: "Commercial Cleanouts",
    shortTitle: "Commercial",
    h1: "Commercial Cleanouts in NJ",
    metaTitle: "Commercial Cleanout NJ | Retail, Restaurant, Warehouse",
    metaDescription:
      "Commercial cleanout service across NJ — retail buildouts, restaurant equipment, warehouse clear-outs. COI ready. (201) 267-2336.",
    intro:
      "Retail tenant turnover, restaurant equipment swap, warehouse closeout — we move at commercial speed. Crews up to ten, dedicated dump trucks, and the documentation your landlord and insurance team want to see.",
    whatsIncluded: [
      "Up to ten-person crews for fast turnover",
      "Restaurant equipment, walk-in coolers, hoods removed",
      "Warehouse pallet racking, conveyors, dock equipment",
      "Coordination with general contractors and property managers",
      "Same-day photo documentation of completed work",
    ],
    items: [
      "Restaurant kitchens — hoods, walk-ins, ranges",
      "Retail fixtures and displays",
      "Warehouse racking and shelving",
      "Office furniture in bulk",
      "Demolition debris from interior tear-outs",
    ],
    relatedSlugs: ["office-cleanouts", "construction-debris-removal", "dumpster-rental"],
  },
  {
    slug: "foreclosure-cleanouts",
    category: "cleanouts",
    title: "Foreclosure Cleanouts",
    shortTitle: "Foreclosure",
    h1: "Foreclosure Cleanouts in New Jersey",
    metaTitle: "Foreclosure Cleanouts NJ | Banks, Asset Managers, REO",
    metaDescription:
      "Foreclosure cleanout service for banks, asset managers, and REO portfolios across New Jersey. Photo reporting, fast turnaround. (201) 267-2336.",
    intro:
      "We work directly with banks, asset management companies, and individual REO investors across New Jersey. Photo reporting, fast turnaround, and pricing structured for portfolio work.",
    whatsIncluded: [
      "Before, during, and after photo reporting",
      "Lock change and re-key coordination",
      "Trash-out, debris removal, yard cleanup",
      "Initial securing of the property",
      "Recurring service available for portfolio managers",
    ],
    items: [
      "Personal property left behind",
      "Trash, food waste, abandoned belongings",
      "Yard debris and overgrowth",
      "Damaged carpet and drywall",
      "Appliances and furniture",
    ],
    relatedSlugs: ["eviction-cleanouts", "estate-cleanouts", "whole-house-cleanouts"],
  },
  {
    slug: "eviction-cleanouts",
    category: "cleanouts",
    title: "Eviction Cleanouts",
    shortTitle: "Eviction",
    h1: "Eviction Cleanouts in NJ",
    metaTitle: "Eviction Cleanouts NJ | Landlord & Property Manager Service",
    metaDescription:
      "Eviction cleanout service for landlords across New Jersey — fast turn, photo documentation, recurring availability. (201) 267-2336.",
    intro:
      "After the sheriff's lockout, the unit needs to be ready to list again — fast. We handle the personal property removal, debris, and damage cleanup so you can flip the unit and stop losing rent.",
    whatsIncluded: [
      "Same-week scheduling after lockout",
      "Photo documentation for security deposit accounting",
      "Trash, furniture, food, and bedding removal",
      "Carpet, drywall, and damaged fixtures",
      "Sweep, mop, and ready-to-list finish",
    ],
    items: [
      "Furniture and mattresses left behind",
      "Trash, food waste, soiled bedding",
      "Damaged appliances and electronics",
      "Pet damage and biohazard cleanup",
      "Drywall and flooring debris",
    ],
    relatedSlugs: ["foreclosure-cleanouts", "apartment-cleanouts", "move-out-cleanouts"],
  },
  {
    slug: "move-out-cleanouts",
    category: "cleanouts",
    title: "Move-Out Cleanouts",
    shortTitle: "Move-Out",
    h1: "Move-Out Cleanouts in New Jersey",
    metaTitle: "Move-Out Cleanouts NJ | Get Your Security Deposit Back",
    metaDescription:
      "Move-out cleanout service across New Jersey — clear what won't fit in the new place, sweep the unit, get your deposit back. (201) 267-2336.",
    intro:
      "Moving day reveals everything you didn't pack. The couch that won't fit, the bookcase the movers won't take, the box of nothing in the corner. We come the morning of move-out and have the unit empty before the landlord walks through.",
    whatsIncluded: [
      "Same-day appointments around closing or lease end",
      "Coordination with movers so we don't overlap",
      "Furniture and item donation drop-offs",
      "Broom-clean finish for landlord walkthrough",
      "Apartment and house move-outs both welcome",
    ],
    items: [
      "Furniture that won't fit the new place",
      "Mattresses, box springs, bed frames",
      "Boxes of stuff you decided not to keep",
      "Old appliances and electronics",
      "Cleaning out the garage on move day",
    ],
    relatedSlugs: ["apartment-cleanouts", "whole-house-cleanouts", "storage-unit-cleanouts"],
  },

  // ───────── JUNK REMOVAL ─────────
  {
    slug: "furniture-removal",
    category: "junk-removal",
    title: "Furniture Removal",
    shortTitle: "Furniture",
    h1: "Furniture Removal in New Jersey",
    metaTitle: "Furniture Removal NJ | Couches, Sectionals, Beds, Dressers",
    metaDescription:
      "Furniture removal across New Jersey — couches, sectionals, beds, dressers, recliners. Same-day pickup. (201) 267-2336.",
    intro:
      "One couch, one sectional, or every piece of furniture in the house — we'll come pick it up. Heavy lifting included, no driveway-curb prep needed, donation drop-offs whenever we can.",
    whatsIncluded: [
      "Two-person crew with dollies and straps",
      "We lift it from wherever it is — basement, third floor, garage",
      "Donation drop-offs for usable furniture",
      "Same-day and next-day pickup",
      "All disposal fees included in the quote",
    ],
    items: [
      "Couches, loveseats, sectionals, recliners",
      "Bedroom sets — beds, dressers, nightstands",
      "Dining tables, chairs, china cabinets",
      "Office furniture and bookcases",
      "Outdoor and patio furniture",
    ],
    relatedSlugs: ["mattress-removal", "appliance-removal", "whole-house-cleanouts"],
  },
  {
    slug: "appliance-removal",
    category: "junk-removal",
    title: "Appliance Removal",
    shortTitle: "Appliance",
    h1: "Appliance Removal & Recycling in NJ",
    metaTitle: "Appliance Removal NJ | Refrigerator, Washer, Dryer Pickup",
    metaDescription:
      "Refrigerator, washer, dryer, oven, and dishwasher removal across New Jersey. Eco-friendly recycling. Same-day pickup. (201) 267-2336.",
    intro:
      "Old refrigerator on the curb? Washer and dryer in the basement that needs to come up? We pull it, haul it, and recycle the metal — Freon refrigerators handled to EPA standards.",
    whatsIncluded: [
      "Refrigerator and freezer pickup (Freon handled properly)",
      "Washer, dryer, dishwasher, oven removal",
      "Disconnect and basic uninstall available",
      "Stair carries, basement pulls, garage removals",
      "Metal recycling for everything that qualifies",
    ],
    items: [
      "Refrigerators and freezers",
      "Washers and dryers",
      "Ovens, ranges, microwaves",
      "Dishwashers and trash compactors",
      "Water heaters and AC units",
    ],
    relatedSlugs: ["furniture-removal", "tv-electronics-removal", "basement-cleanouts"],
  },
  {
    slug: "mattress-removal",
    category: "junk-removal",
    title: "Mattress Removal",
    shortTitle: "Mattress",
    h1: "Mattress Removal & Disposal in NJ",
    metaTitle: "Mattress Removal NJ | Pickup & Disposal | Same-Day OK",
    metaDescription:
      "Mattress and box spring removal across New Jersey. Sealed, sanitized, disposed properly. Same-day pickup. (201) 267-2336.",
    intro:
      "Most NJ towns won't take a mattress curbside anymore, and the new ones come with a $50–$100 disposal fee. We'll come grab it — sealed and hauled away clean.",
    whatsIncluded: [
      "Mattresses, box springs, and bed frames",
      "Mattress bags used in apartments and condos",
      "Stair carries and walk-ups handled",
      "Coordinated with new mattress delivery if needed",
      "Town-compliant disposal",
    ],
    items: [
      "King, queen, full, twin mattresses",
      "Box springs and bunkie boards",
      "Bed frames (metal or wood)",
      "Hospital beds and adjustable bases",
      "Crib mattresses and toddler beds",
    ],
    relatedSlugs: ["furniture-removal", "apartment-cleanouts", "move-out-cleanouts"],
  },
  {
    slug: "tv-electronics-removal",
    category: "junk-removal",
    title: "TV & Electronics Removal",
    shortTitle: "Electronics",
    h1: "TV & Electronics Removal in New Jersey",
    metaTitle: "TV & Electronics Removal NJ | E-Waste Recycling",
    metaDescription:
      "Old TVs, computers, monitors, printers, and e-waste hauled and recycled across New Jersey. (201) 267-2336.",
    intro:
      "Old tube TV in the basement? Pile of dead monitors in the garage? E-waste can't go to the curb in NJ, but we'll take it and route it to a certified recycler.",
    whatsIncluded: [
      "Tube TVs, flat-screens, projection TVs",
      "Desktops, laptops, printers, monitors",
      "Stereo equipment and speakers",
      "Cables, peripherals, and small electronics",
      "Certified e-waste recycling",
    ],
    items: [
      "Tube and flat-screen TVs",
      "Computers, laptops, monitors",
      "Printers, scanners, fax machines",
      "Stereo systems and speakers",
      "Cables, modems, routers",
    ],
    relatedSlugs: ["furniture-removal", "appliance-removal", "office-cleanouts"],
  },
  {
    slug: "hot-tub-removal",
    category: "junk-removal",
    title: "Hot Tub Removal",
    shortTitle: "Hot Tub",
    h1: "Hot Tub Removal in NJ",
    metaTitle: "Hot Tub Removal NJ | Drain, Cut Up & Haul Away",
    metaDescription:
      "Hot tub and spa removal across New Jersey — drain, disconnect, cut up, and haul. Decking restored. (201) 267-2336.",
    intro:
      "Hot tubs are heavy, awkward, and a nightmare to move whole. We drain it, cut it up on-site, and haul every piece out so you can keep your fence and your back.",
    whatsIncluded: [
      "Draining and electrical disconnect",
      "On-site cut-up of shell and frame",
      "Cover, surround, and step removal",
      "Decking restored or hauled",
      "Final cleanup of the slab",
    ],
    items: [
      "All hot tub sizes and brands",
      "Swim spas",
      "Saunas and steam rooms",
      "Hot tub covers and stairs",
      "Above-ground pools (separate quote)",
    ],
    relatedSlugs: ["deck-demolition", "shed-demolition", "small-structure-demolition"],
  },
  {
    slug: "piano-removal",
    category: "junk-removal",
    title: "Piano Removal",
    shortTitle: "Piano",
    h1: "Piano Removal & Disposal in NJ",
    metaTitle: "Piano Removal NJ | Uprights, Spinets, Baby Grands",
    metaDescription:
      "Piano removal across New Jersey — uprights, spinets, baby grands, and consoles. Stair carries no problem. (201) 267-2336.",
    intro:
      "Upright, console, spinet, or baby grand — pianos are between 400 and 1,200 pounds and they don't want to leave the room they're in. We have the dollies, the straps, and the crew to get it out.",
    whatsIncluded: [
      "Four-person crew for uprights and grands",
      "Piano dollies, ramps, and stair climbers",
      "Stairwell and doorway evaluation in advance",
      "Donation drop-offs when the piano is playable",
      "Disposal when it's not",
    ],
    items: [
      "Upright and console pianos",
      "Spinet pianos",
      "Baby grand and grand pianos",
      "Player pianos",
      "Organs (electric and pipe)",
    ],
    relatedSlugs: ["furniture-removal", "whole-house-cleanouts", "estate-cleanouts"],
  },
  {
    slug: "construction-debris-removal",
    category: "junk-removal",
    title: "Construction Debris Removal",
    shortTitle: "Construction Debris",
    h1: "Construction Debris Removal in NJ",
    metaTitle: "Construction Debris Removal NJ | Builders, GCs, Remodelers",
    metaDescription:
      "Construction debris hauling for NJ builders, GCs, and remodelers. Dump-truck loads, recurring service, full project labor support. (201) 267-2336.",
    intro:
      "We've handled debris for projects from one-bedroom remodels to the American Dream Mall. Skilled trades shouldn't spend the day hauling — our crews handle the load-out so framers, electricians, and finishers can stay on task.",
    whatsIncluded: [
      "Recurring service for active job sites",
      "Drywall, lumber, tile, concrete chunks, packaging",
      "Material separation for metal and recyclables",
      "Dump-truck loads instead of waiting on a roll-off",
      "Per-load and per-day labor pricing for builders",
    ],
    items: [
      "Drywall and plaster",
      "Framing lumber and trim",
      "Tile, flooring, and underlayment",
      "Concrete chunks and brick (separate pricing)",
      "Cardboard, packaging, and pallets",
    ],
    relatedSlugs: ["dumpster-rental", "commercial-cleanouts", "demolition-shed"],
  },
  {
    slug: "yard-waste-removal",
    category: "junk-removal",
    title: "Yard Waste & Debris Removal",
    shortTitle: "Yard Waste",
    h1: "Yard Waste Removal in New Jersey",
    metaTitle: "Yard Waste Removal NJ | Brush, Branches, Soil, Sod",
    metaDescription:
      "Yard waste hauling across New Jersey — brush, branches, soil, sod, mulch, fence pieces. (201) 267-2336.",
    intro:
      "Storm damage, landscaping project, or just a backyard full of branches you've been moving in a pile every fall? We'll take it.",
    whatsIncluded: [
      "Brush, branches, leaves, and grass",
      "Soil, sod, and old mulch hauling",
      "Storm damage cleanup",
      "Old patio furniture and grills",
      "Fence and trellis remnants",
    ],
    items: [
      "Brush and tree branches",
      "Leaf piles and grass clippings",
      "Soil, sod, mulch, gravel",
      "Old fencing and trellis pieces",
      "Rusted patio furniture, grills",
    ],
    relatedSlugs: ["fence-removal", "deck-demolition", "shed-demolition"],
  },

  // ───────── DEMOLITION ─────────
  {
    slug: "shed-demolition",
    category: "demolition",
    title: "Shed Demolition",
    shortTitle: "Shed",
    h1: "Shed Demolition & Removal in NJ",
    metaTitle: "Shed Demolition NJ | Tear Down & Haul Away",
    metaDescription:
      "Shed demolition across New Jersey — wood, metal, plastic, and Tuff Sheds. Slab removal available. (201) 267-2336.",
    intro:
      "Wood, metal, plastic, or vinyl — we tear it down, haul every board, and rake the spot smooth. Concrete slab removal available as an add-on.",
    whatsIncluded: [
      "Disconnect of any electrical or plumbing",
      "Full tear-down of walls, roof, and floor",
      "Foundation post and footing removal",
      "Optional slab break-up and removal",
      "Final grade with topsoil if requested",
    ],
    items: [
      "Wooden sheds (8x8 up to 12x20+)",
      "Metal and vinyl sheds",
      "Tuff Sheds and lofted barns",
      "Lean-tos and small detached garages",
      "Greenhouses and screened structures",
    ],
    relatedSlugs: ["deck-demolition", "fence-removal", "small-structure-demolition"],
  },
  {
    slug: "deck-demolition",
    category: "demolition",
    title: "Deck Demolition",
    shortTitle: "Deck",
    h1: "Deck Demolition in New Jersey",
    metaTitle: "Deck Demolition NJ | Wood, Composite & Pressure-Treated",
    metaDescription:
      "Deck removal and demolition across NJ — wood, composite, pressure-treated. Footings out, debris hauled. (201) 267-2336.",
    intro:
      "Wood deck rotting, composite deck out of style, or replacing the whole thing? We pull the boards, pull the framing, and pull the footings.",
    whatsIncluded: [
      "Railings, stairs, and skirting removed",
      "Decking and joists hauled",
      "Footings dug out (or cut at grade if you prefer)",
      "Ledger board pulled and flashing cleaned",
      "Final cleanup of the area",
    ],
    items: [
      "Pressure-treated wood decks",
      "Cedar and redwood decks",
      "Composite decks (Trex, Azek)",
      "Pool decks and rooftop decks",
      "Stairs, pergolas, gazebos",
    ],
    relatedSlugs: ["fence-removal", "shed-demolition", "hot-tub-removal"],
  },
  {
    slug: "fence-removal",
    category: "demolition",
    title: "Fence Removal",
    shortTitle: "Fence",
    h1: "Fence Removal in NJ",
    metaTitle: "Fence Removal NJ | Wood, Chain Link, Vinyl, Aluminum",
    metaDescription:
      "Fence removal across New Jersey — wood, chain link, vinyl, aluminum. Posts and concrete out. (201) 267-2336.",
    intro:
      "Rotting wood fence, old chain link, or vinyl that's seen better days — we pull every panel, every post, and the concrete footings underneath.",
    whatsIncluded: [
      "Panels, rails, and posts removed",
      "Concrete footings dug out",
      "Gate hardware removed",
      "Hauling and disposal of all materials",
      "Holes filled and area raked clean",
    ],
    items: [
      "Wood privacy and picket fences",
      "Chain link fences",
      "Vinyl and PVC fences",
      "Aluminum and wrought-iron",
      "Stockade and split-rail",
    ],
    relatedSlugs: ["deck-demolition", "shed-demolition", "yard-waste-removal"],
  },
  {
    slug: "small-structure-demolition",
    category: "demolition",
    title: "Small Structure Demolition",
    shortTitle: "Small Structures",
    h1: "Small Structure Demolition in NJ",
    metaTitle: "Small Structure Demolition NJ | Garages, Carports, Pools",
    metaDescription:
      "Small structure demolition across New Jersey — detached garages, carports, above-ground pools, gazebos. (201) 267-2336.",
    intro:
      "Detached garage, carport, gazebo, screen porch, above-ground pool — if it's not the main house, we can take it down. Permits handled when required.",
    whatsIncluded: [
      "Permit coordination with the local town",
      "Utility disconnect coordination",
      "Manual or equipment-based tear-down",
      "Full debris removal and dump fees",
      "Site graded smooth and seeded if requested",
    ],
    items: [
      "Detached garages (1- and 2-car)",
      "Carports and lean-tos",
      "Above-ground pools and decking",
      "Gazebos and pergolas",
      "Screen porches and sunrooms",
    ],
    relatedSlugs: ["shed-demolition", "deck-demolition", "construction-debris-removal"],
  },

  // ───────── DUMPSTER ─────────
  {
    slug: "dumpster-rental",
    category: "dumpster",
    title: "Dumpster Rental",
    shortTitle: "Dumpster",
    h1: "Dumpster Rental Across New Jersey",
    metaTitle: "Dumpster Rental NJ | 10, 15, 20, 30 Yard Roll-Offs",
    metaDescription:
      "Roll-off dumpster rental across New Jersey — 10, 15, 20, and 30-yard sizes. Driveway-safe drop, flexible pickup. (201) 267-2336.",
    intro:
      "Need a dumpster instead of (or in addition to) full-service hauling? We drop roll-offs in 10, 15, 20, and 30-yard sizes — driveway-safe with boards under the wheels.",
    whatsIncluded: [
      "10, 15, 20, and 30-yard sizes",
      "Driveway-safe drop (boards under wheels)",
      "Flexible pickup — call when full",
      "Weight allowance discussed up-front",
      "Permit coordination if you're going on the street",
    ],
    items: [
      "Household cleanouts",
      "Roofing and siding projects",
      "Kitchen and bath remodels",
      "Concrete and dirt (separate dumpsters)",
      "Yard waste and brush",
    ],
    relatedSlugs: ["construction-debris-removal", "commercial-cleanouts", "whole-house-cleanouts"],
  },
];

export const SERVICES_BY_CATEGORY: Record<ServiceCategory, Service[]> = {
  cleanouts: SERVICES.filter((s) => s.category === "cleanouts"),
  "junk-removal": SERVICES.filter((s) => s.category === "junk-removal"),
  demolition: SERVICES.filter((s) => s.category === "demolition"),
  dumpster: SERVICES.filter((s) => s.category === "dumpster"),
};

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
