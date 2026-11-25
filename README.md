# ASVA India LLP — Website

Front-end only Next.js (App Router) + Tailwind CSS website for ASVA India LLP.
All content and images come from `ASVA-PDF1.pptx`, `ASVA-PRICES-PDF2.pdf` and `ASVA-CATALOGUE.pdf`.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

## Pages

| Route | Content |
| --- | --- |
| `/` | Home: hero, mission, features, series, new launches, facility, clients, upcoming products |
| `/products` | All 30 products with series filter, search and sort |
| `/products/[slug]` | Product detail: specs table, size-wise USD price, related models |
| `/about` | Company story, mission, promoters, IGNIQUE, facility, FanAir, clients |
| `/contact` | Contact cards, enquiry form (opens WhatsApp pre-filled), map |
| `/catalogue` | Digital catalogue by series, full price list table, PDF downloads |

## Editing content

All text, specs and prices live in `lib/data.ts`. Images are in `public/images/`,
downloadable PDFs in `public/catalogue/`.

Brand colours (from the company deck) are defined in `app/globals.css`:
forest green `#1F6B63`, saffron orange `#F5A940`, mint `#EEF4F2`, white.
