# Dfetch — minimal Linktree-style demo (T3 stack)

This repository is a minimal demo built on top of a Create T3 App scaffold. It demonstrates a tiny "Linktree-style" app that serves demo brand profiles and routes so that visiting `/mybrandname` renders a simple, customizable profile wall.

The goal is to provide a small, deployable example that shows:

- dynamic app routes (app router)
- simple API routes (serverless route handlers)
- demo data seeding via JSON
- a Linktree-like UI (centered profile card, avatar initials, pill links)

This is intentionally small and easy to extend — swap the demo JSON for a database to make it production-ready.

Quick links

- Homepage: `src/app/page.tsx`
- Demo data: `src/data/demo.json`
- API (list): `src/app/api/brands/route.ts`
- API (single brand): `src/app/api/brands/[handle]/route.ts`
- Brand card component: `src/app/_components/BrandCard.tsx`
- Dynamic brand page: `src/app/[brand]/page.tsx`

Getting started (local)

1. Install dependencies

   Using npm:

   ```powershell
   npm install
   npm run dev
   ```

   Or using pnpm if you prefer:

   ```powershell
   pnpm install
   pnpm dev
   ```

2. Open the app
   - Visit `http://localhost:3000` (or the port printed by Next). The homepage lists demo brands. Click a brand or open `http://localhost:3000/mybrandname`.

3. API
   - GET `/api/brands` returns the demo JSON.
   - GET `/api/brands/:handle` returns a single brand object.

Project structure (short)

- `src/data/demo.json` — demo seed data for brands.
- `src/app/page.tsx` — homepage that lists brand cards.
- `src/app/[brand]/page.tsx` — dynamic brand profile page.
- `src/app/_components/BrandCard.tsx` — small reusable card component.
- `src/app/api/brands/*` — serverless API routes that expose demo data.
- `src/styles/globals.css` — small UI utilities used by components.

Design notes

- The UI uses Tailwind utility classes present in the default T3 scaffold. The brand profile uses a centered column with a circular avatar showing initials, large name and handle, and full-width pill-shaped links similar to Linktree.
- Colors and content come from `demo.json`. Replace this with a DB (e.g., Prisma + PostgreSQL) for persistence.

Deployment

- This is a standard Next.js app. Deploy to Vercel by connecting the repository (dynamic routes and API routes work out of the box).

This demo was assembled to show a minimal Linktree-like experience on top of a T3 app scaffold.
