# Brahams Foundation — Project Reference

## Project Overview

**Organisation:** Brahams Foundation — a globally-focused Kenyan NGO rooted in Ugenya, Siaya County.  
**Tagline:** Empowering Globally. Uniting. Changing Lives.  
**Domain:** https://brahamsfoundation.org  
**GitHub Repo:** https://github.com/Colossus-byte/Brahams-Foundation-v2  
**Stack:** Next.js 14 (App Router) · React 18 · Sanity v3 · next-sanity v9  
**Sanity Studio:** Available at `/studio` (embedded via `app/studio/[[...tool]]/page.js`)

---

## Environment Variables

File: `.env.local`

```
NEXT_PUBLIC_SANITY_PROJECT_ID=4i697pd3
NEXT_PUBLIC_SANITY_DATASET=production
```

The Sanity client (`sanity/lib/client.js`) falls back to `'placeholder'` / `'production'` if env vars are missing, so the site degrades gracefully rather than crashing when Sanity isn't configured.

---

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--navy` | `#0d1b3e` | Page background, primary dark |
| `--navy-light` | `#162040` | Elevated surface |
| `--navy-mid` | `#1c2d56` | Cards, image placeholders |
| `--navy-dark` | `#091428` | Deepest shadows |
| `--gold` | `#c9a84c` | Accents, CTAs, section labels |
| `--gold-light` | `#e0bc6e` | Hover states |
| `--gold-dark` | `#a88a3a` | Active/pressed |

**Fonts:**
- Headings: `Cormorant Garamond` (variable `--font-cormorant`) — serif, editorial
- Body/UI: `Outfit` (variable `--font-outfit`) — geometric sans-serif

All styles live in `app/globals.css`. No Tailwind, no CSS modules — plain CSS with custom properties throughout.

---

## Page Structure (`app/page.js`)

Single-page app. All sections render on one page in this order:

```
Nav → Hero → Mission → Dockets → Pillars → Events → Impact →
Gallery → Team → News (conditional) → Sponsors → Donate → Contact → Footer
```

Data is fetched server-side via `Promise.all` across five Sanity queries. All fetches are wrapped in a `try/catch` — every component gracefully degrades to static/empty state if Sanity returns nothing.

---

## Components

### Data Source Key

| Symbol | Meaning |
|--------|---------|
| ✅ Sanity | Live data from Sanity CMS (falls back to hardcoded defaults) |
| 🔒 Hardcoded | Fully static — no Sanity connection |
| ⚠️ Partial | Sanity data merged with hardcoded fallback content |

---

### `Nav` — 🔒 Hardcoded
`components/Nav.js` · `'use client'`

Sticky navigation with scroll-aware background and mobile hamburger menu. Nav links are hardcoded anchor hrefs (`#mission`, `#dockets`, `#events`, `#impact`, `#gallery`, `#contact`). Logo image pulled from GitHub raw CDN (`Brahams-Foundation-v2-/main/logo.jpg`). No Sanity data.

---

### `Hero` — ✅ Sanity (`siteSettings`)
`components/Hero.js`

Displays `settings.heroHeadline` and `settings.heroSubtext`. Both have inline hardcoded fallbacks if `settings` is null. Stats row (3 Core Dockets / 6+ Focus Areas / ∞ Lives / 1 Global Vision) is hardcoded. Logo image from GitHub CDN.

---

### `Mission` — ✅ Sanity (`siteSettings`)
`components/Mission.js` · `'use client'`

Displays `settings.missionText` as the main body copy. Falls back to a hardcoded two-paragraph description of the foundation. The three principle cards (Empower Globally / Unite Communities / Change Lives) are hardcoded. The mission image slot uses `ImagePlaceholder` (`community-team.jpg` — not yet uploaded).

---

### `Dockets` — 🔒 Hardcoded
`components/Dockets.js` · `'use client'`

Three core dockets hardcoded: Sports, Social Economic Empowerment, Environmental Stewardship. Images use `ImagePlaceholder` (`sports-brahams-team.jpg`, `community-cleanup.jpg`, `tree-planting.jpg` — not yet uploaded). Intersection Observer fade-in animations.

---

### `Pillars` — 🔒 Hardcoded
`components/Pillars.js` · `'use client'`

Six focus area icons/labels hardcoded: Talent & Education, Better Health Care, People With Disabilities, Women Empowerment, Employment, Environmental Stewardship. No Sanity connection.

---

### `Events` — ✅ Sanity (`event`)
`components/Events.js` · `'use client'`

Receives `events` array from Sanity. Filter tabs (All / Upcoming / Past) and category pills (Sports / Education / Community / Environmental / Health / Women / Disability) filter the live data. Shows "Events Coming Soon" empty state when no data. Event cards display cover photo from `cdn.sanity.io` via Next.js `<Image>`. Registration links open externally.

---

### `Impact` — 🔒 Hardcoded
`components/Impact.js` · `'use client'`

Progress bars hardcoded (Sports 78%, Economic 65%, Girl Child 72%, Disability 60%, Environmental 45%). Stats hardcoded (500+ Lives / 5 Programs / 4+ Partnerships / 100% Community). Bars animate on IntersectionObserver entry.

---

### `Gallery` — ⚠️ Partial (Sanity + Hardcoded)
`components/Gallery.js` · `'use client'`

Sanity album photos (real URLs from `cdn.sanity.io`) are prepended to a list of 15 hardcoded `ImagePlaceholder` slots. Sanity images come first; placeholders fill remaining slots until real images are uploaded. Category filter (All / Sports / Education / Community / Disability / Environmental). Lightbox with keyboard-style prev/next nav. YouTube tile links to `@brahamsfoundationmedia2131`.

---

### `Team` — ✅ Sanity (`teamMember`)
`components/Team.js` · `'use client'`

Static leadership intro section always visible. Member grid (`team-members-grid`) only renders when `team.length > 0`. Member photos served from `cdn.sanity.io`. Falls back to a `👤` emoji placeholder when no photo. Hardcoded static image slot (`team-leadership.jpg` — not yet uploaded).

---

### `News` — ✅ Sanity (`newsPost`)
`components/News.js`

Conditionally rendered — only appears in the page when `news.length > 0`. Server component. Cover images from `cdn.sanity.io`. "Read More →" links are currently non-functional (no slug routing yet).

---

### `Sponsors` — 🔒 Hardcoded
`components/Sponsors.js`

Six placeholder sponsor slots (Your Brand Here, Top Sponsor, Gold Partner, etc.) in an auto-scrolling marquee. No Sanity schema. Slots exist to be replaced with real logos once sponsors are onboarded.

---

### `Donate` — 🔒 Hardcoded
`components/Donate.js` · `'use client'`

Three donation channels, all hardcoded:
- **M-Pesa (Kenya):** Paybill 522533, Account 8047774
- **KCB International Wire:** Account 1346992304, SWIFT KCBLKENX
- **Crypto USDT TRC20:** Wallet `TYjtZvpLhAttttQG6opzk8Ye8mjsBFdmec`

Donation email obfuscated via `useEffect` → `brahamsfoundation2@gmail.com`. Tier buttons ($25/$70/$250/$1,000/$5,000/Custom) are presentational only — no payment gateway connected.

---

### `Contact` — ✅ Sanity (`siteSettings`)
`components/Contact.js` · `'use client'`

Contact info (address, phone) pulled from `settings`. Fallback values hardcoded:
- Address: Nyasrek Mall, Ukwala, Ugenya, Siaya County, Kenya
- Phone: +254 794 432 183

Email rendered via `<ObfuscatedEmail />`. Contact form is UI-only — `handleSubmit` sets `submitted = true` but sends no data anywhere (no API route, no email service). Social links hardcoded (Twitter, Instagram, Facebook, TikTok, YouTube).

---

### `Footer` — 🔒 Hardcoded
`components/Footer.js`

Four-column layout: brand + socials, Our Work links, Get Involved links, Organisation links. All anchor hrefs point to page sections. Year is dynamic (`new Date().getFullYear()`). Email via `<ObfuscatedEmail />`.

---

### `ObfuscatedEmail` — 🔒 Hardcoded
`components/ObfuscatedEmail.js` · `'use client'`

Assembles `brahamsfoundation2@gmail.com` in a `useEffect` so the address never appears as a literal string in static HTML (bot-scraping protection).

---

### `ImagePlaceholder`
`components/ImagePlaceholder.js`

Renders a styled dark placeholder with a filename label. Used across Mission, Dockets, Gallery, and Team wherever real images haven't been uploaded yet.

---

## Sanity CMS

### Studio URL
`/studio` — embedded Sanity Studio using `next-sanity`.

### Schemas (`sanity/schemas/`)

| Schema | File | Purpose |
|--------|------|---------|
| `event` | `event.js` | Events/programmes — title, status, category, date, location, cover photo, registration link, featured flag |
| `galleryAlbum` | `galleryAlbum.js` | Photo albums — title, category, date, cover image, photos array with captions |
| `newsPost` | `newsPost.js` | News articles — title, slug, publishedAt, cover image, excerpt |
| `teamMember` | `teamMember.js` | Team members — name, role, photo, bio, order |
| `siteSettings` | `siteSettings.js` | Singleton document — hero headline/subtext, mission text, phone, email, address |

### GROQ Queries (`sanity/lib/queries.js`)

| Export | Fetches |
|--------|---------|
| `eventsQuery` | All events, ordered by date desc |
| `galleryAlbumsQuery` | All albums + photos, ordered by date desc |
| `newsPostsQuery` | All news posts, ordered by publishedAt desc |
| `teamMembersQuery` | All team members, ordered by `order` asc |
| `siteSettingsQuery` | Single `siteSettings` document `[0]` |

---

## Build Status

- **Next.js build:** Clean — no TypeScript, no type errors by definition.
- **Sanity connection:** Requires `.env.local` with project ID `4i697pd3` and dataset `production`. Without it the client uses `'placeholder'` and all Sanity-connected components show empty/fallback state.
- **Images:** Logo served from GitHub CDN (`raw.githubusercontent.com/Colossus-byte/Brahams-Foundation-v2-/main/logo.jpg`). Sanity images from `cdn.sanity.io`. Both domains whitelisted in `next.config.js` `remotePatterns`.
- **Contact form:** UI-complete but not wired to any backend. Needs an API route or third-party form service (Resend, Formspree, etc.).
- **News slug routes:** No `app/news/[slug]/page.js` exists yet — "Read More" links are decorative.
- **Sponsors:** Placeholder slots only — no real sponsor data or images.
- **Gallery images:** 15 placeholder slots waiting for real photos to be uploaded and either committed to GitHub or added to Sanity albums.
- **Dockets/Mission images:** Using `ImagePlaceholder` — real images (`sports-brahams-team.jpg`, `community-cleanup.jpg`, `tree-planting.jpg`, `community-team.jpg`) need to be uploaded.

---

## Key Contacts / Social

| Channel | Handle/Link |
|---------|-------------|
| Email | brahamsfoundation2@gmail.com |
| Phone | +254 794 432 183 |
| Twitter / X | @BrahamsFoundtn |
| Instagram | @brahamsfoundationke |
| Facebook | /share/1N8zvVTX44/ |
| TikTok | @brahamsfoundationmedia |
| YouTube | @brahamsfoundationmedia2131 |
