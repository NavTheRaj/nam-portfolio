# Namrata Portfolio

A themed insurance-operations portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Customize quickly

- Update hero text and contact link in `app/page.tsx`.
- Add or remove technologies in the `skills` array in `app/page.tsx`.
- Update timeline entries in the `experience` array in `app/page.tsx`.

## Deploy to Netlify

### Option 1: Netlify Dashboard (recommended)

1. Push this project to GitHub.
2. In Netlify, click **Add new site** -> **Import an existing project**.
3. Select your GitHub repo.
4. Keep defaults:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Click **Deploy site**.

### Option 2: Netlify CLI

```bash
npm install
npx netlify login
npx netlify link
npm run netlify:deploy:preview
```

For production deploy:

```bash
npm run netlify:deploy:prod
```
