# ValveTech Website

Company website for an industrial valve manufacturer, built with Next.js (App Router), TypeScript and Tailwind CSS.

## Pages

| Route | Description |
| --- | --- |
| `/` | Home: hero, stats, featured products, why choose us, industries, call to action |
| `/products` | All products grouped by category |
| `/products/[slug]` | Product details: specs, materials, applications, quote button |
| `/download` | Catalogues, datasheets, certificates and manuals |
| `/contact` | Contact details and an enquiry form (Server Action with validation) |

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Customising

- **Company name, phone, email, address:** `lib/site.ts`
- **Products:** `lib/products.ts`
- **Downloads:** `lib/downloads.ts`. Put the real PDF files in `public/downloads/`; the current files are placeholders.
- **Contact form delivery:** `app/contact/actions.ts`. Enquiries are only logged for now. Hook up an email service or a database where the `TODO` is.
