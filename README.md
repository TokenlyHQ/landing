# Tokenly — Healthcare Software Landing Page

Premium B2B marketing site for Tokenly: custom hospital, pharmacy and business software built around real workflows.

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
- React Router

## Local development

```bash
# Use Node 20+
nvm use

npm install
npm run dev
```

Open the URL printed by Vite (usually `http://localhost:5173`).

Contact details live in `src/config/brand.ts` (email + WhatsApp). The consultation form opens WhatsApp with a prefilled enquiry.

## Production build

```bash
npm run build
npm run preview
```

Static output is written to `dist/`.

## Deployment

Any static host works:

1. Build with `npm run build`.
2. Publish the `dist/` folder.

**Vercel / Netlify / Cloudflare Pages**

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Add SPA fallback so `/privacy` and `/terms` resolve to `index.html`

**Nginx example**

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

Canonical SEO URLs currently point to `https://health.tokenly.in` in `index.html`, `public/sitemap.xml`, and `public/robots.txt`.

## CI/CD (GitHub Pages)

Workflow: `.github/workflows/production-client.yml`

1. In the repo, set secret `DEPLOYMENT_EMAIL` to the authorized deployer email.
2. Enable **GitHub Pages** → Source: **GitHub Actions**.
3. Run **Actions → Production-Client → Run workflow**, enter the same email, and deploy.

The workflow verifies the email, builds the Vite app, uploads `dist/`, and deploys to GitHub Pages.
