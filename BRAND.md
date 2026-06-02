# Brand & Design System

## Identity

**Name:** Saffiullah K.  
**Tagline:** Building Mobile, Web & IoT products that ship.  
**Role label:** Software Engineer  
**Domain:** saffiullah.dev  
**Positioning:** Senior-leaning engineer who owns delivery end-to-end — rare combo of Mobile + Web + hardware.

---

## Voice & Tone

| Context | Tone |
|---------|------|
| Headlines | Bold, declarative. "Products that ship." not "I am passionate about..." |
| Body copy | Direct and specific. Numbers beat adjectives. |
| CTAs | Action-first: "Let's Talk", "See My Work", "Download CV" |
| Eyebrows | ALL CAPS, spaced, 0.72rem — frames every section |

**Do:** "Shipped v1 in 10 weeks. Zero critical bugs at launch."  
**Don't:** "I deliver high-quality solutions in an agile environment."

---

## Color Tokens

All tokens are CSS custom properties. Dark is default. Light overrides in `[data-theme="light"]`.

### Dark (default)

| Token | Value | Role |
|-------|-------|------|
| `--bg` | `#04050f` | Page background |
| `--surface` | `#0a0d1c` | Card / panel fill |
| `--surface-2` | `#0f1428` | Elevated surface, inputs |
| `--surface-3` | `#141932` | Top-level elevated |
| `--text` | `#eef2ff` | Primary text |
| `--text-muted` | `#8b98c8` | Body copy, descriptions |
| `--text-subtle` | `#525d7e` | Labels, timestamps |
| `--accent` | `#818cf8` | Indigo — primary brand |
| `--accent-2` | `#22d3ee` | Cyan — secondary brand |
| `--gold` | `#fbbf24` | Amber — CTAs, highlights |
| `--border` | `rgba(129,140,248,0.12)` | Default borders |
| `--border-hover` | `rgba(129,140,248,0.4)` | Hover borders |

### Light

Same token names. Key values: `--accent #6366f1`, `--accent-2 #0ea5e9`, `--gold #d97706`, `--bg #f5f7ff`.

### Gradients

| Name | Value | Usage |
|------|-------|-------|
| `--grad` | `135deg, accent → accent-2` | Section headings, dividers, timeline |
| `--grad-gold` | `135deg, gold → orange` | **Primary CTA button** |

---

## Typography

| Role | Size | Weight | Notes |
|------|------|--------|-------|
| Hero H1 | `clamp(2.2rem, 5.5vw, 4.4rem)` | 800 | `letter-spacing: -0.03em` |
| Section H2 | `clamp(1.65rem, 3.2vw, 2.5rem)` | 700 | `letter-spacing: -0.02em` |
| Card H3 | `1.05–1.2rem` | 700 | |
| Eyebrow | `0.72rem` | 700 | UPPERCASE, `0.16em` tracking, gradient bar before |
| Body | `0.88–0.95rem` | 400 | `line-height: 1.6–1.7` |
| Mono (code) | `clamp(0.78rem, 1vw, 0.87rem)` | 400 | Geist Mono |

Font: **Geist Sans** (body) + **Geist Mono** (code card). Both loaded via `next/font`.

---

## Components

### Buttons

| Class | Style | Use |
|-------|-------|-----|
| `.btn-primary` | Gold gradient, dark text | Main CTA — "Let's Talk" |
| `.btn-ghost` | Surface-2 fill, border | Secondary actions |
| `.nav-cta` | Accent gradient pill | Nav "Hire Me" |

### Cards

| Component | File | Notes |
|-----------|------|-------|
| Project card | `case-studies.tsx` | Accent-coloured top bar, outcome in cyan |
| Cap card | `capabilities.tsx` | Icon chip, checkmark list |
| Stack card | `tech-stack.tsx` | Category dot + colour header |
| Timeline card | `experience.tsx` | Period + type badge, tag chips |
| Testimonial card | `testimonials.tsx` | Stars, quote, avatar with gradient |
| Process card | `process.tsx` | Large muted number + title |

All interactive cards receive `.tilt-card` for 3D hover (pointer devices only).

### `.reveal`
Scroll-reveal: `opacity 600ms + translateY 600ms cubic-bezier(0.22,1,0.36,1)`. JS (`interactions.tsx`) adds `.is-visible` on viewport entry via IntersectionObserver.

### `.tilt-card`
3D perspective tilt (`@media (hover: hover) and (pointer: fine)` only). CSS vars `--rx`, `--ry`, `--mx`, `--my` set by `interactions.tsx`. Uses `::after` pseudo-element for cursor-following glow.

### Eyebrow
`::before` gradient bar. Always appears above a heading to frame sections.

---

## Section Structure

| Section | ID | Component file |
|---------|-----|----------------|
| Hero | `#about` | `sections/hero.tsx` |
| Stats bar | — | `sections/stats-bar.tsx` |
| Expertise tabs | — | `expertise-tabs.tsx` |
| Case Studies | `#case-studies` | `sections/case-studies.tsx` |
| Capabilities | `#capabilities` | `sections/capabilities.tsx` |
| Tech Stack | `#stack` | `sections/tech-stack.tsx` |
| Experience | `#experience` | `sections/experience.tsx` |
| Testimonials | `#testimonials` | `sections/testimonials.tsx` |
| Process | — | `sections/process.tsx` |
| Contact | `#contact` | `sections/contact.tsx` |

Nav links and scroll-spy live in `site-nav.tsx`. Each section scrolls to `scroll-margin-top: 6rem`.

---

## Layout

- **Page padding:** `1rem` (mobile: `0.65rem`)
- **Content max-width:** `1180px`
- **Section gap:** `5rem`
- **Card grid gap:** `1.1–1.2rem`
- **Border radius:** cards `1.2rem`, hero/contact `1.5rem`, pills `999px`

### Breakpoints

| Breakpoint | Change |
|------------|--------|
| `≤ 1024px` | Hero stacks, 2-col project/cap/testi grids, contact stacks |
| `≤ 960px` | 2-col stats, 1-col stack, hamburger nav |
| `≤ 640px` | 1-col everything, hero chips hidden, reduced padding |

---

## Background

**Hive** (`hive-background.tsx`): Full-viewport flat-top hex canvas. Glows on hover (pointer) or random flicker (touch). Respects `prefers-reduced-motion`.

**Body glow**: Three fixed radial gradients — `--glow-a` (indigo) top-left, `--glow-b` (cyan) top-right, `--glow-a` bottom-centre.

**Hero + Contact blobs**: Positioned `::div` elements with blurred radial gradients for depth.

---

## Assets

| File | Purpose |
|------|---------|
| `public/resume.pdf` | Downloadable CV — keep current |
| `src/app/opengraph-image.tsx` | OG card for social previews |
| `src/app/layout.tsx` | SEO metadata, fonts, theme init script |
