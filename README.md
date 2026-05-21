# New Jersey Cleanouts — Marketing Site

Next.js 16 (App Router) marketing + lead-capture site for **New Jersey Cleanouts** (NJ Cleanouts and Property Services).

## Stack
- Next.js 16 App Router + React 19
- Tailwind CSS v4 (`@theme inline`)
- shadcn-style components (built manually, no CLI)
- Lucide icons, Radix Accordion
- Resend (server action) for the quote form
- next-sitemap for sitemap/robots

## Quick start
```bash
npm install
cp .env.example .env.local   # add RESEND_API_KEY if you have one
npm run dev
```

## Environment
| Var | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend transactional key. Optional in dev — the form falls back to `/tmp/njc-quotes.log`. |
| `QUOTE_TO_EMAIL` | Inbox quotes are delivered to. Defaults to `Scott@NewJerseyCleanouts.com`. |
| `QUOTE_FROM_EMAIL` | Verified `from:` address in Resend. Defaults to `onboarding@resend.dev`. |
| `SITE_URL` | Used by next-sitemap. Defaults to `https://www.newjerseycleanouts.com`. |

## Content data
- `src/content/services.ts` — all service pages (cleanouts, junk removal, demolition, dumpster)
- `src/content/locations.ts` — all city/town pages
- `src/content/counties.ts` — all county pages

To add a new town, drop an entry in `locations.ts` and reference its slug in the right county's `citySlugs` array.

## Routes
- `/`, `/services`, `/services/[slug]`
- `/locations`, `/locations/[slug]`
- `/counties`, `/counties/[slug]`
- `/about`, `/why-choose-us`, `/pricing`, `/items-we-take`, `/gallery`, `/reviews`, `/faq`, `/contact`, `/get-a-quote`

## Form embed (future option)
If a CRM-managed form (GHL/HubSpot/etc.) is preferred later, replace `<QuoteForm />` in pages with an embed component and remove the Resend server action.
