# SummitShield Roofing — Vercel Deployment

## What's in this folder

This is a self-contained Vercel-ready version of the SummitShield Roofing website.

| Path | Purpose |
|---|---|
| `src/` | React + Vite frontend (all pages and components) |
| `api/contact.ts` | Vercel Serverless Function — handles all form submissions and forwards them to Pabbly |
| `public/` | Static assets (favicon, OG image, robots.txt) |
| `vercel.json` | Vercel routing config |
| `vite.config.ts` | Vite build config |
| `package.json` | All dependencies (standalone, no Replit workspace required) |

---

## How the Pabbly webhooks work

When a visitor submits the contact form, the frontend POSTs to `/api/contact`. Vercel runs `api/contact.ts` as a serverless function, which:

- Routes **emergency** submissions (`"Yes, I need help immediately"`) → `PABBLY_EMERGENCY_WEBHOOK_URL`
- Routes **regular** submissions → `PABBLY_NORMAL_WEBHOOK_URL`

---

## Deploy to Vercel — step by step

### 1. Push this folder to GitHub

Create a new GitHub repository and push the contents of this folder as the root of that repo.

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/summitshield-roofing.git
git push -u origin main
```

### 2. Import into Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Select the GitHub repo you just created
3. Vercel will auto-detect the Vite framework — no build settings need to change
4. Click **Deploy** (it will fail on the first deploy without env vars — that's expected)

### 3. Add environment variables in Vercel

In your Vercel project → **Settings → Environment Variables**, add:

| Variable Name | Value |
|---|---|
| `PABBLY_NORMAL_WEBHOOK_URL` | Your Pabbly webhook URL for regular form submissions |
| `PABBLY_EMERGENCY_WEBHOOK_URL` | Your Pabbly webhook URL for emergency/priority submissions |

Set these for **Production**, **Preview**, and **Development** environments.

### 4. Redeploy

After adding the environment variables, trigger a new deployment:
- Vercel dashboard → **Deployments** → **Redeploy**

The contact form, storm damage CTA, and quick quote banner will now all work correctly.

---

## Local development

```bash
npm install
npm run dev
```

For local form testing, create a `.env.local` file:

```
PABBLY_NORMAL_WEBHOOK_URL=https://connect.pabbly.com/workflow/sendwebhookdata/YOUR_NORMAL_URL
PABBLY_EMERGENCY_WEBHOOK_URL=https://connect.pabbly.com/workflow/sendwebhookdata/YOUR_EMERGENCY_URL
```

---

## Custom domain

In Vercel → **Settings → Domains**, add `summitshieldroofing.com` (or your actual domain) and follow the DNS instructions Vercel provides.
