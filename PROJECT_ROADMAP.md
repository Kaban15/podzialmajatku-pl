# PROJECT ROADMAP: podzialmajatku.pl (High-Performance Lead Gen)

## 1. Project Context & Goals
- **Type:** Legal Service Lead Generation Website.
- **Goal:** Maximum SEO performance, fast load times (Core Web Vitals), and clear Conversion Paths (Contact Form/Phone Call).
- **Target Audience:** Individuals seeking legal help with property division, divorce, and inheritance.
- **Design System:** Minimalist, trustworthy (Blue/Navy/White palette), high readability.

## 2. Tech Stack (Strict)
- **Framework:** Next.js 14+ (App Router).
- **Language:** TypeScript (Strict mode).
- **Styling:** Tailwind CSS.
- **Components:** Shadcn/UI (Radix primitives).
- **Forms:** React Hook Form + Zod (Validation).
- **Icons:** Lucide React.
- **Analytics/SEO:** `next-sitemap`, Schema.org (JSON-LD).
- **Email:** Resend (or simulation for MVP).

## 3. Directory Structure (App Router)
```text
/app
  /layout.tsx        # Global layout (Navbar, Footer, Font optimization)
  /page.tsx          # Homepage (General Offer)
  /rozwod/
    page.tsx         # "Podział majątku po rozwodzie"
  /zniesienie-wspolwlasnosci/
    page.tsx         # "Zniesienie współwłasności"
  /spadek/
    page.tsx         # "Dział spadku"
  /kontakt/
    page.tsx         # Dedicated Contact Page
  /api/
    /send/           # API Route for form submission
/components
  /ui/               # Shadcn components (button, input, card, etc.)
  /sections/         # Semantic sections (Hero, Features, FAQ)
  /forms/            # ContactForm component
  /seo/              # JsonLd component
/lib
  utils.ts           # Tailwind merge etc.
  schemas.ts         # Zod definitions for forms