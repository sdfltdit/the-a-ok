# The A-OK

Explore. Learn. Connect. — a home base built only for people in Bangladesh.

Built with [Astro](https://astro.build).

## Getting started

```bash
npm install
npm run dev       # http://localhost:4321
```

## Build for production

```bash
npm run build     # outputs to dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  components/   # Header, Hero, Mission, Pillars, Features, LocalFocus, JoinCta, Footer, ScallopDivider
  layouts/       # Layout.astro (site shell, fonts, scroll-reveal script)
  pages/         # index.astro
  styles/        # global.css (design tokens: color, type, spacing)
public/
  images/        # logo + photography
  video/         # hero video (compressed for web) + poster frame
```

## Notes

- The hero video was re-encoded from the original upload (1920x1080, ~10.7MB,
  h264 + AAC) down to 1280px wide, muted, ~2.7MB, so it's lighter for visitors
  on mobile data. The original is untouched in git history if you need it.
- Copy currently ships in English with Bengali accents (taglines, eyebrows).
  Swap `src/components/*.astro` text if you'd rather go fully Bengali or fully
  English — the two font stacks for each script are already wired up in
  `src/styles/global.css`.
- Social links in the footer point to `#` — drop in real profile URLs when
  you have them.
