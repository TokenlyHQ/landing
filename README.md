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

cp .env.example .env
# Edit .env with your email, WhatsApp number and optional Formspree endpoint

npm install
npm run dev
```

Open the URL printed by Vite (usually `http://localhost:5173`).

## Environment variables

| Variable | Purpose |
| --- | --- |
| `VITE_CONTACT_EMAIL` | Public contact email / mailto links |
| `VITE_WHATSAPP_NUMBER` | Digits with country code, e.g. `919876543210` |
| `VITE_SITE_URL` | Canonical site URL for SEO |
| `VITE_FORMSPREE_ENDPOINT` | Optional Formspree URL for server-side form delivery |

Without Formspree, the contact form opens WhatsApp (preferred) or a prefilled mailto draft when those values are set.

## Production build

```bash
npm run build
npm run preview
```

Static output is written to `dist/`.

## Deployment

Any static host works:

1. Set environment variables in the host (or bake a `.env` before build).
2. Build with `npm run build`.
3. Publish the `dist/` folder.

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

Update `index.html`, `public/sitemap.xml`, `public/robots.txt` and `VITE_SITE_URL` to your real domain before launch.

## Contact form backend

Recommended for production:

1. Create a form at [Formspree](https://formspree.io).
2. Set `VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-id`.
3. Rebuild.

Alternatives: Formspark, Getform, Basin, or a small API that emails via Resend/SendGrid.

## Missing brand information

Fill these before go-live:

- Legal / trading name confirmation (currently **Tokenly**, from the project name)
- Contact email
- WhatsApp number
- Production domain confirmation (`https://health.tokenly.in`)
- Contact email and WhatsApp number
- Privacy/terms review with counsel if required
