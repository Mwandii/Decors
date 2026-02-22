# Mwandi's Décor — Event Decoration Website

Business website for an event decoration company. Built with React + Vite, Tailwind CSS v4, React Router, and EmailJS.

---

## Stack

- React 18 + Vite
- Tailwind CSS v4
- React Router v6
- EmailJS (contact form)

---

## Getting Started

```bash
npm install
npm install @emailjs/browser
cp .env.example .env   # fill in your EmailJS keys
npm run dev
```

---

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxx
```

Get these from [emailjs.com](https://www.emailjs.com) → your dashboard.
Add your domain to EmailJS allowed origins before deploying.

---

## Deployment

Push to GitHub, import on Vercel. Add the three `VITE_EMAILJS_*` variables in Vercel → Settings → Environment Variables.

When the owner connects a custom domain — add it to Vercel and to EmailJS allowed origins. No code changes needed.

---

## Updating Content

**Everything lives in `src/data/siteData.js`.**

- Add a portfolio event → add an object to `PORTFOLIO_ITEMS`
- Add a service → add an object to `SERVICES`
- Update contact details, testimonials, footer links → it's all in there

No component changes needed for content updates.

---

## Routes

| Route | Description |
|---|---|
| `/` | Landing page |
| `/portfolio` | Full gallery with filters and shareable URLs |