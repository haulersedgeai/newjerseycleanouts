# New Jersey Cleanouts — Research Notes

## Business identity
- **Display name:** New Jersey Cleanouts
- **Legal/extended name:** NJ Cleanouts and Property Services (from JSON-LD)
- **Owner / contact name:** Scott (from email)
- **Domain:** https://www.newjerseycleanouts.com (Wix-built site)

## Contact
- **Phone (display, visible site-wide):** 201-267-2336
- **Phone (older/schema):** 201-657-4801 (likely outdated, ignore — site footer uses 201-267-2336)
- **Email:** Scott@NewJerseyCleanouts.com
- **Address (from schema):** 189 Berkley Place, Dumont, NJ 07628-1030 (Bergen County)
- **Service area (stated):** "Northern New Jersey based"

## Hours
- Not published on current site.
- Default assumption: Mon–Sat 7am–7pm, Sun by appointment.

## Years in business / reviews
- Not published on current site. No visible review widget or count.
- Default assumption: do not fabricate a count; reference "trusted across New Jersey" and "growing 5-star reputation" without inventing a number.

## Core services (confirmed)
The site brands itself as **Cleanouts and Property Services / Waste Hauling and Labor Specialists**. Specific lines:

1. **Cleanouts** (primary)
2. **Junk Removal** (meta title)
3. **Demolition** (meta title)
4. **Dumpster Rental** (top nav item)
5. **Construction Debris Management / Waste Hauling** (homepage focus block — "Elite Construction Debris Management")
6. **Labor Services** (waste hauling labor specialists)
7. **Property Services** (legal name)

## Notable past projects (homepage list — gives credibility, real)
- 13 community apartment buildings across 7 NJ cities
- American Dream Mall — East Rutherford, NJ
- Amazon Fresh — Paramus, NJ
- Museum of Modern Art (MoMA) — New York City
- Westfield Garden State Plaza Mall — Paramus, NJ
- Paramus Park Plaza Mall — Paramus, NJ
- Journal Square — Jersey City, NJ

## Value props detected
- Northern NJ-based, local
- Construction debris management at scale (apartment complexes, malls, retail)
- Save time / save money / safer job sites for builders
- Optimized route planning (10–15% disposal cost reduction claim)
- Specialty in mixed construction debris separation (metals, etc.)

## Brand
- **Primary color:** `#2F54DD` (royal blue)
- **Dark color:** `#292929` (near-black)
- **Background:** white `#FFFFFF`
- Recommended palette: blue + dark slate + white. Add red accent for CTAs if needed.

## Logo
- Wix favicon: https://static.wixstatic.com/media/ffdc07_c45412f45e864d7b85b401fc46610532~mv2.png
- Site uses image logo + branding; we'll use **text logo** in Manrope bold ("New Jersey Cleanouts") per build spec.

## Images found (Wix CDN)
Hero/content images:
- https://static.wixstatic.com/media/11062b_2cc30823d1ae4f31bdecbb8ddebb8bc8f000.jpg
- https://static.wixstatic.com/media/11062b_a3c9e3c8860a4ed7837163c5e1d29bf6f000.jpg
- https://static.wixstatic.com/media/11062b_e623bca9805340399b6a248030b8a8f3~mv2_d_3593_5389_s_4_2.jpg
- https://static.wixstatic.com/media/48a650_00b0b4685dcd4fe5bbecc4a3fd97779f~mv2.jpg
- https://static.wixstatic.com/media/48a650_362cc8e664b14c8a96b3abeb85dd55f0~mv2.jpg
- https://static.wixstatic.com/media/48a650_9cb38ccb7137471a8177b55057bc90b2~mv2.jpg
- https://static.wixstatic.com/media/48a650_a408784c27cf47e09a610e1ffa106cda~mv2.jpg
- https://static.wixstatic.com/media/48a650_b390162385ce435ba8bb760c787ca67d~mv2.jpg
- https://static.wixstatic.com/media/48a650_55242950778f46b798051c67dfef91a1~mv2.webp

Will download these to `/public/images/` and supplement with gradient placeholders for missing categories (before/after, hoarder, estate, etc.).

## Socials
- Facebook: https://www.facebook.com/NewJerseyCleanouts
- Instagram: https://www.instagram.com/newjerseycleanouts/
- No TikTok, YouTube, Yelp, BBB visible.
- Google Business Profile likely exists but not linked from site.

## Existing site map (Wix sitemap)
- / (home)
- /contact-7 (contact)
- /book-online (Wix-template booking — currently shows "Lawn Care" placeholders, not real services)
- /payment-request-page
- /blog (empty)

## Form / lead capture
- Native Wix contact form (name/email/message → "Thanks for submitting!").
- **No GHL embed found.**
- **Decision:** Build native Resend-powered form per spec option B.

## Voice & tone
- Currently very B2B/construction-focused; light copy; not optimized for residential SEO.
- Rebuild voice: warm + local NJ + dual residential/commercial. Compassionate tone for hoarder/estate cleanouts. Confident, no-BS for construction-debris and dumpster rental.

## Geographic expansion target (per build spec)
Original site says "Northern New Jersey." We will expand to statewide coverage with 30–40 city pages + 11 county pages.

**North Jersey cities (22):** Newark, Jersey City, Paterson, Elizabeth, Edison, Hoboken, Union City, Bayonne, East Orange, Passaic, Clifton, West New York, Hackensack, Kearny, Fort Lee, Englewood, Teaneck, Fair Lawn, Wayne, Montclair, Bloomfield, Morristown, Parsippany, Dumont (HQ)

**Central Jersey cities (13):** New Brunswick, Princeton, Trenton, Hamilton, Plainfield, Sayreville, Old Bridge, Woodbridge, Perth Amboy, Linden, Rahway, Westfield, Cranford

**South Jersey cities (10):** Camden, Cherry Hill, Vineland, Atlantic City, Brick, Toms River, Lakewood, Howell, Jackson, Manchester

**Jersey Shore (7):** Asbury Park, Long Branch, Belmar, Point Pleasant, Wildwood, Cape May, Ocean City

→ **~40 location pages** total (Dumont = HQ, gets featured treatment)

**Counties (11):** Bergen, Essex, Hudson, Middlesex, Monmouth, Morris, Ocean, Passaic, Union, Camden, Mercer

## Services build plan (Phase 3)
Hubs + sub-services driven by `src/content/services.ts`:

**Cleanouts (primary):**
- whole-house-cleanouts
- hoarder-cleanouts
- estate-cleanouts
- garage-cleanouts
- basement-cleanouts
- attic-cleanouts
- storage-unit-cleanouts
- apartment-cleanouts
- office-cleanouts
- commercial-cleanouts
- foreclosure-cleanouts
- eviction-cleanouts
- move-out-cleanouts

**Junk removal:**
- furniture-removal
- appliance-removal
- mattress-removal
- tv-electronics-removal
- hot-tub-removal
- piano-removal
- construction-debris-removal
- yard-waste-removal

**Demolition:**
- shed-demolition
- deck-demolition
- fence-removal
- small-structure-demolition

**Plus dumpster-rental** (confirmed top-nav service on original site).

→ 26 service pages.

## Ambiguities / open questions
- Phone number discrepancy: schema lists 201-657-4801, footer lists 201-267-2336. Using **201-267-2336** (current, visible).
- Years in business unknown — won't fabricate.
- Review counts unknown — won't fabricate.
- No GMB / Yelp listing surfaced from the site.
