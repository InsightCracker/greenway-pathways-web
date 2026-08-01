# Greenway Pathways Foundation — website

Vite + React + React Router + Tailwind v4, using the `src/` layout you picked:
`assets/ components/ pages/ layouts/ hooks/ services/ context/ utils/ routes/ theme/`.

## Getting started

```bash
npm install
npm run dev
```

## What's wired up

- **Routing** — `routes/AppRoutes.jsx` defines `/`, `/about`, `/programs`, `/contact`,
  all rendered inside `layouts/MainLayout.jsx` (shared Navbar + Footer).
- **Theme** — `context/ThemeContext.jsx` holds light/dark state, persists it to
  `localStorage`, and writes it to `<html data-theme="...">`. `index.css` reads
  that attribute — see the `:root[data-theme="dark"]` block. `hooks/useTheme.js`
  is the hook every component uses to read/flip it (`components/ThemeToggle.jsx`
  is the navbar control).
- **Pages** — `pages/Home.jsx`, `About.jsx`, `Programs.jsx`, `Contact.jsx` follow
  the wireframe: hero, impact stats, programme cards, donate banner, contact form.
- **Services** — `services/contactService.js` and `donationService.js` are thin
  `fetch` wrappers pointed at `/api/...` by default; set `VITE_API_BASE_URL` in
  a `.env` file to point at a real backend, or swap in your donation provider
  (Paystack/Flutterwave are the common choices for NGN).
- **Placeholders** — hero image, trustee photos, and the contact map are all
  dashed-border boxes for now. Drop real files into `assets/` and swap them in.

## Not included yet

- Real photography/logo (in `assets/`)
- A working backend for `/api/contact` and `/api/donations/initiate`
- Analytics / SEO meta tags
