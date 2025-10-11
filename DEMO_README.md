Demo T3 Linktree-style app

What I added:

- `src/data/demo.json` — demo brands used by the app
- `src/app/api/brands/route.ts` — API endpoint returning all brands
- `src/app/api/brands/[handle]/route.ts` — API endpoint for a single brand
- `src/app/_components/BrandCard.tsx` — small card linking to brand pages
- Updated `src/app/page.tsx` to show demo brands on the homepage
- `src/app/[brand]/page.tsx` — dynamic brand profile pages

How to run locally:

1. Install dependencies: `pnpm install` or `npm install`
2. Run the dev server: `pnpm dev` or `npm run dev`
3. Visit `http://localhost:3000` and click a demo card, or open `http://localhost:3000/mybrandname` to see the example in the screenshot.

Deployment:

- This is a standard Next.js app (T3 stack). Deploy to Vercel by connecting the repo; the dynamic routes and API routes work out of the box.

Notes / Next steps:

- Replace demo JSON with a database if you need persistence.
- Add TypeScript interfaces across components for stricter typing.
- Improve styling with Tailwind classes or a component library.
