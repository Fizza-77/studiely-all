# Studiely (merged)

This folder is the **combined** product:

- **Landing / marketing** — `/`, `/blog`, `/faqs`, …
- **Student web app** — `/login`, `/signup`, `/home`, `/generate`, `/library`, …

## Run locally

```bash
cd studiely_web
npm install
npm run dev
```

Open http://localhost:3000 (landing) and http://localhost:3000/login (app).

## Note on deploy

Student app routes need Node (`/api/callable`, `/api/ai`). Prefer **Vercel** for the merged Next app on studiely.com. The old Firebase static `out/` + Flutter `/app` merge is obsolete for the student app.

The sibling folder `../studiely-web` is the pre-merge app source (can keep as backup).
