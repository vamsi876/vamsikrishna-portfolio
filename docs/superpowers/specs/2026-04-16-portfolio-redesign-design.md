# Portfolio Redesign: Dark Zinc + Green Signal

## Overview

Complete visual redesign of the Vamsi Krishna portfolio. Every page, every component, every interaction gets updated to a cohesive dark theme with a single green accent, bento grid homepage, and rich microinteractions.

**Stack:** React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion + Three.js (existing)

**Constraints:**
- No gradient colors anywhere (they look AI-generated)
- Single accent color: `#22c55e` (green), used sparingly
- All personality comes from typography, layout, spacing, and interaction design

---

## Color System

```
--background:       #0a0a0a   (page bg)
--surface:          #111113   (elevated sections)
--card:             #18181b   (card bg)
--card-border:      #27272a   (card borders, dividers)
--border-subtle:    #1c1c1e   (subtle separators)

--text-primary:     #fafafa   (headings, emphasis)
--text-secondary:   #a1a1aa   (body text)
--text-muted:       #52525b   (labels, captions, monospace)
--text-dim:         #3f3f46   (disabled, decorative)

--accent:           #22c55e   (green — links, active states, status)
--accent-muted:     rgba(34, 197, 94, 0.15)  (accent backgrounds)
--accent-border:    rgba(34, 197, 94, 0.3)   (hover borders)
```

No light mode. Dark only.

---

## Typography

- **Headings:** Inter, weight 700-800, tight letter-spacing (-1px to -2px)
- **Body:** Inter, weight 400, color `--text-secondary`
- **Labels/Mono:** Monospace (JetBrains Mono or system monospace), uppercase, letter-spacing 2-3px, color `--text-muted`, font-size 11-12px
- **Section numbering:** Monospace, format `01 —`, color `--text-muted`

---

## Navigation: Floating Pill

- Fixed, centered horizontally, top: 16px
- Background: `rgba(17, 17, 19, 0.8)` with `backdrop-blur-xl`
- Border: `1px solid #27272a`, rounded-full (pill shape)
- Padding: `py-2 px-6`
- Links: `--text-muted` default, `--text-primary` on hover, `--accent` when active
- Text scramble effect on hover (letters randomize then settle)
- Logo ("VK") on left inside pill, links center, Resume button right (green outline)
- On scroll: subtle shadow appears
- Mobile: collapses to centered pill with hamburger, opens to full-screen dark overlay with staggered link animations
- Framer Motion for mount/unmount

---

## Homepage (Index): Bento Dashboard

### Hero Section
- Left-aligned within container, top of page
- Green status dot + "AVAILABLE FOR WORK" in monospace
- Name: large bold (text-5xl md:text-7xl), color `--text-primary`, typewriter animation on first load
- Subtitle: "Full-Stack Developer" in `--text-secondary`
- One-line bio fading in word-by-word
- CTA buttons: "Get in Touch" (green filled), "Resume" (outline `--card-border`)
- Magnetic hover effect on buttons (slight pull toward cursor)

### Bento Grid (below hero)
Asymmetric grid layout. Cards have spotlight hover (cursor-tracking radial light) and expand to reveal extra content.

```
Layout (desktop):
┌──────────────────┬──────────┐
│    ABOUT (2col)  │  STATS   │
│                  │  2+ yrs  │
├─────────┬────────┼──────────┤
│ SKILLS  │  OPEN  │ LATEST   │
│         │ SOURCE │ PROJECT  │
│         │  3 pkg │          │
├─────────┴────────┴──────────┤
│      EXPERIENCE TIMELINE    │
└─────────────────────────────┘
```

Each card:
- Background: `--card`, border: `--card-border`, border-radius: 12px
- Monospace label at top (e.g., `ABOUT`, `SKILLS`)
- Spotlight hover: `radial-gradient` follows cursor position via `onMouseMove`
- On hover: card reveals extra content (tags, links, mini descriptions) via height animation
- Click navigates to full page via react-router
- Staggered entrance animation on scroll (framer-motion, 50ms delay per card)

**About card (spans 2 columns):**
- Short bio text (2-3 lines), education summary
- Hover reveals: location, degree details

**Stats card:**
- Large number "2+" with label "years industry experience"
- Hover reveals: company names

**Skills card:**
- Top 8-10 skill chips in `--card-border` bg
- Hover reveals: full category breakdown

**Open Source card:**
- Large "3" with "PyPI packages"
- Hover reveals: package names as chips

**Latest Project card:**
- Project name + one-line description
- Hover reveals: tech tags

**Experience Timeline card (full width):**
- Horizontal mini-timeline showing 3 roles with dates
- Active role (AIDM) highlighted with green dot
- Hover reveals: title + company for each

Mobile: single column stack, cards full-width.

---

## About Page

- Section number: `01 — ABOUT`
- Left column: bio text with animated paragraph reveals on scroll
- Right column: two dark cards stacked
  - Education card: degrees with school, dates, GPA
  - Open Source card: 3 PyPI packages with links
- Key Focus Areas as a horizontal chip list
- Current Work section with bullet points
- Download Resume + View Projects buttons (matching theme)

---

## Skills Page

- Section number: `02 — SKILLS`
- Bento grid of skill category cards (Languages, Frontend, Backend, Databases, Cloud & DevOps, AI & LLM, Tools)
- Each category card: icon + title + skill chips
- Skill chips: `--card` bg, `--card-border` border, `--text-secondary` text
- Chip hover: bg brightens, text goes `--text-primary`, icon gets green tint
- Category card hover: spotlight effect + icon rotates 12deg
- Staggered entrance per card, then per chip within each card

---

## Experience Page

- Section number: `03 — EXPERIENCE`
- Vertical timeline on left (thin line in `--card-border`, green dots for each role)
- Active role: green dot pulses, card border is `--accent-border`
- Company selector tabs on left (styled as dark buttons, active = green left border)
- Job detail on right: title, company, location, date, bullet points
- Bullet points use green `ChevronRight` icons
- Scroll-triggered entrance: timeline draws itself, then cards fade in
- Tab switch: content cross-fades

---

## Projects Page

- Section number: `04 — PROJECTS`
- Stacked project cards, alternating layout (image left/right)
- Project card: dark surface, image area with hover zoom
- Tech tags as chips below description
- GitHub + Live Demo buttons matching theme
- Hover: image scales slightly, card border shifts to `--accent-border`
- Staggered scroll entrance, 100ms delay between cards

---

## Contact Page

- Section number: `05 — CONTACT`
- Split layout: info left, form right
- Contact info: email, phone, location with icon circles (`--card` bg, `--accent` icons)
- Social links: dark rounded squares, hover fills green
- Form: dark card surface, inputs with `--card` bg, `--card-border` border
- Input focus: border `--accent`, subtle green glow
- Submit button: green filled, magnetic hover
- Success toast: dark with green accent

---

## Resume Page

- Styled dark document matching theme
- Header: name large bold, contact links as chips
- Sections: Summary, Skills, Experience, Education, Projects & Open Source
- Each section in `--card` bg cards
- Download PDF button: green outline, bottom center

---

## Header (Floating Pill Nav)

As specified in Navigation section above.

---

## Footer

- Minimal: single row
- Copyright left, social icons right (GitHub, LinkedIn)
- Social icons: `--card` bg circles, `--text-muted` icons, hover `--accent`
- Thin top border: `--card-border`
- Background: transparent (page bg shows through)

---

## ChatBot

- Floating trigger: dark rounded button (bottom-right), green dot indicator
- Smooth scale-up animation on open (framer-motion)
- Chat window: `--card` bg, `--card-border` border, rounded-xl
- Header: "Chat with Vamsi's Assistant", close button
- Bot messages: `--surface` bg
- User messages: `--accent` bg with dark text
- Typing indicator: 3 green dots bouncing
- Input: `--card` bg, `--card-border` border, focus green
- Send button: green

---

## Background3D (Particle System)

- Background color: `--background` (#0a0a0a)
- Particles: `--text-dim` color (#3f3f46), opacity 0.3, smaller count (1500)
- Mouse reactivity: increased influence (particles drift toward/away from cursor)
- Subtle slow rotation
- Performance: respect `prefers-reduced-motion`

---

## Microinteractions Inventory

| Interaction | Where | Implementation |
|---|---|---|
| Typewriter text | Hero title | Custom hook, typing + blinking cursor |
| Word-by-word reveal | Hero bio | Framer-motion staggered `span` animations |
| Text scramble | Nav links on hover | Random characters cycle then settle |
| Magnetic buttons | CTAs, nav | `onMouseMove` transforms toward cursor |
| Spotlight hover | All bento cards | `radial-gradient` position via `onMouseMove` |
| Content expand | Bento cards | `max-height` + opacity transition on hover |
| Staggered entrance | Card grids | Framer `staggerChildren` on viewport enter |
| Page transitions | Route changes | `AnimatePresence` with fade + slide |
| Scroll progress | Top of page | Thin green line showing scroll % |
| Timeline draw | Experience | SVG line `stroke-dashoffset` animation |
| Parallax | Hero bg particles | Slight Y-offset based on scroll position |
| Button press | All buttons | `scale(0.97)` on mousedown |
| Link underline | Text links | Width-animated underline from left |
| Counter | Stats cards | Number counts up on viewport enter |
| Pulse | Green status dot | CSS `@keyframes` pulse animation |

---

## Page Transitions

Wrap `<Routes>` in `AnimatePresence`. Each page component:
- Enter: `opacity: 0, y: 20` -> `opacity: 1, y: 0` (300ms ease-out)
- Exit: `opacity: 1` -> `opacity: 0` (200ms)
- Scroll to top on route change

---

## Mobile Considerations

- Bento grid: single column stack
- Floating pill: shrinks, hamburger menu
- Mobile menu: full-screen dark overlay, staggered link animations
- Spotlight hover: disabled on touch (no cursor tracking)
- Magnetic buttons: disabled on touch
- Text scramble: disabled on touch
- All scroll animations work on mobile
- Touch-friendly tap targets (min 44px)

---

## Files to Modify

1. `src/index.css` — new color variables, dark theme, utility classes
2. `tailwind.config.ts` — updated colors, new animations/keyframes
3. `src/App.tsx` — add AnimatePresence page transitions
4. `src/components/Header.tsx` — floating pill redesign
5. `src/components/Logo.tsx` — "VK" monogram
6. `src/components/Hero.tsx` — bento dashboard homepage
7. `src/components/Footer.tsx` — minimal dark footer
8. `src/components/About.tsx` — dark themed, animated
9. `src/components/Skills.tsx` — bento grid with spotlight
10. `src/components/Experience.tsx` — timeline with scroll animations
11. `src/components/Projects.tsx` — dark stacked cards
12. `src/components/Contact.tsx` — dark split layout + form
13. `src/components/Resume.tsx` — dark document style
14. `src/components/ChatBot.tsx` — dark zinc + green themed
15. `src/components/Background3D.tsx` — darker, subtler particles
16. `src/pages/Index.tsx` — bento dashboard layout
17. `src/pages/About.tsx` — page wrapper
18. `src/pages/SkillsPage.tsx` — page wrapper
19. `src/pages/ExperiencePage.tsx` — page wrapper
20. `src/pages/ProjectsPage.tsx` — page wrapper
21. `src/pages/ContactPage.tsx` — page wrapper
22. `src/pages/ResumePage.tsx` — page wrapper
23. `src/pages/NotFound.tsx` — themed 404
24. `index.html` — dark meta theme-color, updated title/description
25. New: `src/hooks/useSpotlight.ts` — cursor-tracking radial light hook
26. New: `src/hooks/useMagnetic.ts` — magnetic button hook
27. New: `src/hooks/useTextScramble.ts` — text scramble effect hook
28. New: `src/hooks/useTypewriter.ts` — typewriter text hook
29. New: `src/components/PageTransition.tsx` — framer-motion page wrapper
30. New: `src/components/ScrollProgress.tsx` — top scroll progress bar
