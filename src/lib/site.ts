export const SITE = {
  name: "New Jersey Cleanouts",
  legalName: "NJ Cleanouts and Property Services",
  tagline: "New Jersey's Trusted Cleanout, Junk Removal & Demolition Crew",
  shortTagline: "Cleanouts. Junk Removal. Demolition. Done Right.",
  description:
    "Family-run, fully insured cleanout and junk removal company serving all of New Jersey. Whole-house, hoarder, estate, garage, basement, and commercial cleanouts plus demolition and dumpster rental.",
  url: "https://www.newjerseycleanouts.com",
  ownerFirstName: "Scott",
  phone: {
    display: "(201) 267-2336",
    raw: "+12012672336",
    link: "tel:+12012672336",
    sms: "sms:+12012672336",
  },
  email: "Scott@NewJerseyCleanouts.com",
  address: {
    street: "189 Berkley Place",
    city: "Dumont",
    state: "NJ",
    zip: "07628",
    full: "189 Berkley Place, Dumont, NJ 07628",
  },
  geo: {
    // Dumont, NJ
    lat: 40.9404,
    lng: -73.9954,
  },
  hours: {
    weekdays: "Mon – Sat: 7:00 AM – 7:00 PM",
    sunday: "Sun: By appointment",
    short: "Mon–Sat 7a–7p · Sun by appt.",
  },
  socials: {
    facebook: "https://www.facebook.com/NewJerseyCleanouts",
    instagram: "https://www.instagram.com/newjerseycleanouts/",
  },
  serviceAreaShort: "All of New Jersey",
  founded: 2015, // conservative placeholder; not displayed as a fact unless paired with "over a decade"
} as const;

export const NAV_PRIMARY = [
  { label: "Services", href: "/services" },
  { label: "Locations", href: "/locations" },
  { label: "Counties", href: "/counties" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
] as const;

export const NAV_FOOTER = [
  { label: "About", href: "/about" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Items We Take", href: "/items-we-take" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Get a Quote", href: "/get-a-quote" },
] as const;
