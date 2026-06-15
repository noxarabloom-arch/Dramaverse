# DramaVerse

Discover, rate, and track dramas and movies from Korea, China, Japan, Thailand, Turkey, Pakistan, and Hollywood.

Built with TanStack Start (SSR), React 19, Tailwind CSS v4, and Supabase.  
Posters powered by [The Movie Database (TMDB)](https://www.themoviedb.org/).

---

## Deploy to Netlify (one-go checklist)

### 1 — Push to GitHub
```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/YOUR_USER/dramaverse.git
git push -u origin main
```

### 2 — Connect to Netlify
1. Go to [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project**
2. Pick your GitHub repo
3. Build settings are auto-detected from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `.output/public`
4. Click **Deploy site** — do NOT deploy yet, set env vars first (step 3)

### 3 — Set environment variables
In **Site settings → Environment variables**, add:

| Key | Value | Notes |
|-----|-------|-------|
| `SUPABASE_URL` | `https://xxx.supabase.co` | From Supabase → Settings → API |
| `SUPABASE_PUBLISHABLE_KEY` | `sb_publishable_...` | Anon/public key |
| `SUPABASE_PROJECT_ID` | `xxx` | Project ref ID |
| `VITE_SUPABASE_URL` | same as above | Needed for client-side |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | same as above | Needed for client-side |
| `VITE_SUPABASE_PROJECT_ID` | same as above | Needed for client-side |
| `SUPABASE_SERVICE_ROLE_KEY` | `eyJ...` | **Secret** — server only |
| `NODE_VERSION` | `20` | Already set in netlify.toml |

### 4 — Deploy
Click **Trigger deploy → Deploy site**. Build takes ~60–90s.

### 5 — Update Supabase redirect URLs
In Supabase → Authentication → URL Configuration:
- **Site URL:** `https://your-site.netlify.app`
- **Redirect URLs:** `https://your-site.netlify.app/**`

That's it — your site is live. 🎉

---

## Local development

```bash
# Install dependencies
npm install

# Copy env file and fill in your Supabase values
cp .env.example .env

# Start dev server
npm run dev
```

---

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | TanStack Start (SSR) |
| UI | React 19 + shadcn/ui + Tailwind v4 |
| Database / Auth | Supabase (Postgres + Row-Level Security) |
| Posters | TMDB API (with SVG fallback) |
| Hosting | Netlify (Nitro SSR via Node.js) |
| Build | Vite 8 + Nitro |

