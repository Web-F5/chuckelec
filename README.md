# Chuck E Electrical — Next.js 14 App

## Tech Stack
- **Next.js 14** App Router
- **Tailwind CSS v4**
- **TypeScript**
- **Formspree** (contact form)

## Project Structure

```
app/
├── layout.tsx              # Root layout with Header, Footer, fonts, JSON-LD
├── globals.css             # Tailwind v4 @theme config, custom utilities
├── page.tsx                # Home page
├── sitemap.ts              # Auto-generated sitemap for all pages
├── robots.ts               # robots.txt
├── not-found.tsx           # 404 page
├── contact/page.tsx
├── faq/page.tsx            # FAQ with FAQ schema markup
├── gallery/page.tsx
├── services/
│   ├── page.tsx            # Services index (categorised)
│   └── [slug]/page.tsx     # Individual service pages (17 pages)
└── locations/
    ├── page.tsx            # Locations index
    └── [slug]/page.tsx     # Individual town pages (20 pages)

components/
├── Header.tsx              # Sticky nav with mobile menu
├── Footer.tsx              # Full footer with all service/town links
├── CTASection.tsx          # Reusable CTA block
└── ContactForm.tsx         # Formspree contact form

lib/
└── data.ts                 # All site content: SERVICES, TOWNS, CONTACT
```

## Setup

```bash
npm install
npm run dev
```

## Required Setup Steps

### 1. Formspree Contact Form
Replace `YOUR_FORM_ID` in `components/ContactForm.tsx`:
1. Create an account at formspree.io
2. Create a new form and copy your form ID
3. Replace `https://formspree.io/f/YOUR_FORM_ID`

### 2. Images
Copy all original site images into `public/images/`:
- `logotransparent7.webp`
- `Seymour_club-sm.webp`
- `Seymour_club3-sm.webp`
- `kitchen-sm.webp`
- `commecialHallwayLighting-optimized.webp`
- `seymour_club_commercial_application.webp`
- `workshopLights.jpg`
- `kitchen_example.webp`
- `rural_pump_control_application.webp`
- `underground_cabling.webp`
- `icons8-socket-50.png`
- `icons8-maintenance-50.png`
- `icons8-light-64.png`
- `icons8-switchboard-box-50.png`
- `icons8-ethernet-50.png`
- `icons8-cable-64.png`

### 3. Favicon
Add `favicon.ico` and/or `icon.png` to the `app/` directory.

### 4. Domain
Update `metadataBase` in `app/layout.tsx` and sitemap URLs in `app/sitemap.ts`
if the domain changes from `chuckelec.com.au`.

### 5. Facebook URL
Update `CONTACT.facebook` in `lib/data.ts` with the actual Facebook page URL.

### 6. Email Address
Update `CONTACT.email` in `lib/data.ts`.

## SEO Features

### Service Pages (17 pages)
Each service has its own URL, unique meta title/description, and Service schema markup:
- `/services/lighting-installations`
- `/services/fire-detection-installation`
- `/services/switchboard-installation`
- etc.

### Town/Location Pages (20 pages)
Each town has unique content, an H1 of "Electrician [Town Name]", and LocalBusiness schema:
- `/locations/seymour`
- `/locations/euroa`
- `/locations/nagambie`
- etc.

### Schema Markup
- `ElectricalContractor` on every page (root layout)
- `Service` schema on each service page
- `FAQPage` schema on the FAQ page
- `ElectricalContractor` with `areaServed` on each town page

### Sitemap
Auto-generated at `/sitemap.xml` covering all 40+ pages.

## Town Page SEO Notes

Your instinct to target "electrician [town name]" is correct for these small regional towns.
The pages are built with:
- H1: "ELECTRICIAN [TOWN NAME]" 
- Unique descriptive content per town (not duplicate content)
- Internal links to service pages from each town page
- Internal links back to town pages from footer
- LocalBusiness schema with `areaServed` per town

**Additional SEO tips for town pages:**
1. Get a Google Business Profile listing — optimise for the Seymour area
2. Aim for mentions/citations on local business directories (True Local, Yellow Pages, HiPages)
3. Consider adding a "testimonials" section to town pages citing the specific town
4. The town pages link to all services — this internal linking helps distribute page authority

## Deployment (Vercel)

```bash
vercel deploy
```

No special config needed. The App Router with `generateStaticParams` will
statically generate all service and town pages at build time.
# chuckelec
