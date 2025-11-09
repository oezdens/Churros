# Churros Weihnachtsmarkt — Webseite

This repository contains the Churros Weihnachtsmarkt site (Vite + React + TypeScript + Tailwind).

Goal: deploy seasonal landing and site to GitHub + Vercel.

---

## Quick steps to push to GitHub (PowerShell)
Replace the remote URL below with `https://github.com/oezdens/Churros.git`.

1. If you haven't initialized git:

```powershell
# initialize (if needed)
git init

git add .
git commit -m "Initial site for Churros Weihnachtsmarkt"

# add remote repo (replace if already set)
git remote add origin https://github.com/oezdens/Churros.git
# ensure branch name
git branch -M main

git push -u origin main
```

If the remote already exists and you need to update it:

```powershell
git remote set-url origin https://github.com/oezdens/Churros.git
```

If push is rejected (non-fast-forward), run:

```powershell
# only use if you know remote is empty or you want to overwrite
git push -u origin main --force
```

---

## Deploy to Vercel (recommended)
Two options:

Option A — connect GitHub repo in Vercel dashboard (recommended):
1. Go to https://vercel.com/new
2. Select the `oezdens/Churros` repository
3. Vercel detects framework (Vite). Use build command: `npm run build` and output directory: `dist`.
4. Add any environment variables if needed and deploy.

Option B — Vercel CLI:

```powershell
npm i -g vercel
vercel login
vercel --prod
```

---

## Files added for deployment convenience
- `.gitignore` — ignore node_modules, dist, .env files, editor files
- `vercel.json` — config for Vercel static build
- `favicon.svg` — small Christmas tree favicon

---

## Notes & next steps
- Add an `og:image` and meta tags for better sharing previews. I can add these if you want.
- If you want automated toggling of seasonal content, I can add a small `src/lib/season.ts` helper and conditional rendering.

---

If you want, I can push these changes to a remote for you (I can't run git push to your GitHub), but I prepared everything so you can run the commands above.
