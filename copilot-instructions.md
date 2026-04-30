# Portfolio — Copilot Instructions

Owner: **Saffiullah K.** — Software Engineer (Mobile · Web · IoT)
Live: https://portfolio-suk.vercel.app
Stack: Next.js 16 (App Router) · TypeScript · Tailwind v4 · Static Export · Vercel

---

## Project Structure

```
src/
  app/
    layout.tsx        — Root layout: fonts, theme init script, HiveBackground, Interactions, SiteNav
    page.tsx          — Single page: all sections as server component + data arrays
    globals.css       — All styles (CSS custom properties, theming, animations, responsive)
    icon.svg          — Favicon (SK monogram, indigo gradient)
  components/
    site-nav.tsx      — Client: sticky header, hamburger mobile nav, theme toggle
    hive-background.tsx — Client: full-page canvas hex animation (mouse hover activates cells)
    interactions.tsx  — Client: IntersectionObserver scroll-reveal + 3D tilt (mousemove CSS vars)
    theme-toggle.tsx  — Client: dark/light toggle using data-theme on <html>
    expertise-tabs.tsx — Client: tab switcher for expertise section
public/
  resume.pdf          — Downloadable resume
```

---

## Page Sections (in order)

| Section | ID | Class | Notes |
|---|---|---|---|
| Hero | `#about` | `.hero.anchor-section` | Full-width card with hive bg visible behind it |
| Stats | — | `.stats` | 4 highlight pills (years, products, domains, delivery) |
| Expertise | — | `.section` | Tabbed: Mobile / Web / IoT (ExpertiseTabs client component) |
| Selected Work | `#case-studies` | `.section.anchor-section` | 3-col grid of case study cards |
| Core Capability Matrix | `#capabilities` | `.section.anchor-section` | 3-col grid of capability cards |
| Technology Stack | `#stack` | `.section.anchor-section` | 2-col grid of tech group cards with react-icons |
| Career Timeline | `#experience` | `.section.anchor-section` | Vertical timeline with gradient line + glowing dots |
| How I Work | — | `.section.process` | 2-col grid of 4 numbered process step cards |
| Contact | `#contact` | `.section.reveal.contact.anchor-section` | Contact card with highlights + CTA links |

Nav links: About · Work · Stack · Experience · Contact + "Hire Me" CTA

---

## Design System

### CSS Custom Properties (globals.css)

**Dark theme (default `:root`):**
```
--background: #07090f       --foreground: #e8edf8
--card: rgba(15,18,30,0.76) --line: rgba(255,255,255,0.08)
--accent: #7c9bff           --accent-2: #32d2ff
--muted: #8892a4            --muted-strong: #b0bcd4
--on-accent: #fff
```

**Light theme (`[data-theme="light"]`):**
```
--background: #f4f6fb       --foreground: #11192b
--card: rgba(255,255,255,0.78) --line: rgba(0,0,0,0.09)
--accent: #4b6dff           --accent-2: #00a7d4
```

Theme is toggled via `data-theme` attribute on `<html>`. An inline script in `layout.tsx` reads `localStorage` before paint to prevent FOUC.

### Key CSS Classes

| Class | Purpose |
|---|---|
| `.panel` | Standard card: border, bg, border-radius 1rem, `display: grid`, `gap: 0.68rem` |
| `.tilt-card` | 3D perspective tilt on hover (desktop only). Uses `--rx`, `--ry`, `--mx`, `--my` CSS vars set by `interactions.tsx` |
| `.reveal` | Scroll-reveal: `opacity:0; transform:translateY(20px)` → `.is-visible` triggered by IntersectionObserver |
| `.section-head` | Section heading wrapper — always visible, no `.reveal` |
| `.section-divider` | Gradient + blur glow line between sections |
| `.eyebrow` | Small accent label above section h2 |
| `.grid-3` | 3-column responsive card grid |
| `.tech-groups` | 2-column tech stack grid |
| `.process-steps` | 2-column process card grid |
| `.timeline` | Vertical timeline with gradient line |
| `.anchor-section` | Sections that appear in nav |

### Gradient Pattern
All accent gradients: `linear-gradient(135deg, var(--accent), var(--accent-2))`
Used for: h1 text, eyebrow dash, stat values, process numbers, timeline line, buttons.

---

## Animation System

### Scroll Reveal (`interactions.tsx`)
- IntersectionObserver: `threshold: 0.05`, `rootMargin: "0px 0px 80px 0px"`
- Adds `.is-visible` to `.reveal` elements when they enter the viewport
- **Rule**: Never add `.reveal` to `.section-head` divs — they must always be visible

### 3D Tilt (`interactions.tsx`)
- Desktop-only: `@media (hover: hover) and (pointer: fine)`
- `mousemove` → sets `--rx`, `--ry` (rotation), `--mx`, `--my` (cursor position %) per card
- Max tilt: 6 degrees. `mouseleave` resets to `0deg`
- `::before` pseudo-element on `.tilt-card` uses `--mx/--my` for radial spotlight

### Hive Background (`hive-background.tsx`)
- Full-page canvas, `position: fixed; z-index: 0; pointer-events: none`
- Hexagonal grid; cells near mouse cursor glow on hover
- Reads `--hive-stroke`, `--hive-glow-color`, `--hive-fill` CSS vars for theming
- Pauses via Visibility API when tab is hidden

---

## Adding / Updating Content

### Update a section's copy
Edit the data array or JSX in `src/app/page.tsx`. All data is colocated:
- `caseStudies[]` — Selected Work cards
- `capabilities[]` — Core Capability Matrix cards
- `technologyStack[]` — Tech Stack groups + tools
- `experience[]` — Career Timeline items
- `processSteps[]` — How I Work steps (num, title, body)
- `expertiseAreas[]` — Expertise tabs content (in `expertise-tabs.tsx`)

### Add a new card to an existing grid
Wrap it in `<div className="reveal"><article className="panel tilt-card">...</article></div>`.
Add `style={{ transitionDelay: \`${i * 80}ms\` }}` for stagger animation.

### Add a new section
1. Add section JSX to `page.tsx` between existing sections
2. Add a `<div className="section-divider" />` before/after it
3. If it needs nav access, add `id="my-section"` and `anchor-section` class, then add link to `site-nav.tsx`
4. Use `.section-head` (no `.reveal`) for heading, `.reveal` for individual content items

### Change accent colors
Update `--accent` and `--accent-2` in both `:root` (dark) and `[data-theme="light"]` blocks in `globals.css`.

---

## Deployment

- **Platform**: Vercel — auto-deploys on every push to `main`
- **Build command**: `next build` (no special config needed)
- **Deploy**: `git add -A && git commit -m "message" && git push`
- Resume: `public/resume.pdf` — replace file to update downloadable resume

---

## Quality Gates (run before every push)

```bash
npm run build   # Must pass with 0 errors
npm run lint    # Fix any lint errors introduced
```

---

## Non-Negotiables

- Do not add `.reveal` to `.section-head` elements — sections must always show their heading
- Do not use `overflow: hidden` on `.tilt-card` — it breaks 3D transform in Safari
- Do not set non-standard font weights (640, 650) — use 400 / 500 / 600 / 700 only
- Do not break the dark/light theme — always test both themes after CSS changes
- Do not commit secrets, credentials, or sensitive personal data
- Do not introduce unused dependencies or dead code
- Do not modify unrelated sections when fixing a specific bug
