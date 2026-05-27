# Vercel Deployment

This project is a TanStack Start app that can be deployed to Vercel directly from your GitHub repo.

## One-time setup

1. Push this repo to GitHub.
2. In Vercel, **Add New… → Project** and import the repo.
3. Framework Preset: **Other** (leave as detected — `vercel.json` overrides it).
4. Build Command: `vite build` (already set in `vercel.json`).
5. Output Directory: `.vercel/output` (already set in `vercel.json`).
6. Install Command: leave default (`npm install` / `bun install`).
7. Click **Deploy**.

Vercel automatically sets the `VERCEL=1` env var during builds, which switches
`vite.config.ts` to the Nitro `vercel` preset and emits a `.vercel/output`
bundle that Vercel knows how to serve (SSR + static assets).

## Local production build for Vercel

```bash
NITRO_PRESET=vercel bun run build
```

The output lands in `.vercel/output/`.

## Environment variables

Add any `VITE_*` (client) and server-side secrets in **Vercel → Project → Settings → Environment Variables**. Redeploy after changing them.

## Custom domain

Add your domain in **Vercel → Project → Settings → Domains** and update your DNS as instructed.
