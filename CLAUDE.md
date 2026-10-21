# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal portfolio and blog for sayyedulawwab.com. Astro 7 static site, Tailwind CSS v4, deployed on Netlify. (README.md is the untouched Astro starter template, so ignore it.)

## Commands

Use **pnpm** (Netlify builds with `pnpm build`; Node version is in `.nvmrc` / `netlify.toml`).

- `pnpm dev`: dev server at localhost:4321
- `pnpm build`: runs `astro check` (type-checks `.astro` and `.ts`) and then `astro build` to `dist/`. Run this to validate any change.
- `pnpm preview`: serve the built `dist/`
- `pnpm format`: Prettier (with `prettier-plugin-astro`; single quotes, `arrowParens: avoid`)

There are no tests and no linter beyond `astro check`.

## Architecture

- **`src/data/info.ts` is the single source of truth** for every personal fact on the site: experience, capabilities, projects, recommendations, social links, and site metadata (`site`). Home-page components and `BaseLayout`'s JSON-LD all read from it. Its header comment sets a hard rule: only add facts Muhammad has actually stated. No invented metrics, technologies or reasoning. Leave a section empty instead; components hide empty sections. Recommendation `pullQuote`s must be exact excerpts of their `description`.
- **Blog** posts are Markdown files in `src/content/blog/`, loaded by the glob loader in `src/content.config.ts` (the schema lives there). A post's URL slug is its filename (`entry.id`); the frontmatter `slug` field is legacy and unused. Images go in `src/content/blog/attachments/`.
- **Always fetch posts through `getPosts()` in `src/lib/posts.ts`**, never `getCollection` directly. It hides `draft: true` and future-dated posts in production (dev shows everything) and sorts newest first. The post pages, tag pages, RSS and recent-articles list all depend on that filtering. Tag URLs come from `tagSlug()`.
- **`BaseLayout.astro`** handles all SEO: canonical URL, OG/Twitter tags, and the JSON-LD graph (Person + WebSite, plus BlogPosting + BreadcrumbList when the `article` prop is set). Pages pass `pageUrl` as a path with a trailing slash. `trailingSlash: 'always'` is set in `astro.config.mjs`, so internal links must end in `/`.
- **`projects[].writeups`** in `info.ts` holds blog post ids (filenames without `.md`). If you rename a post file, update these too.
- **Contact form** uses Netlify Forms (`data-netlify`, honeypot), which needs static output so Netlify can detect the form at deploy time. It posts to `/thanks/`, and that page is excluded from the sitemap and robots.txt. The EmailJS variables in `.env.example` are left over and unused. Only `PUBLIC_GA_ID` is read; analytics is emitted only when it is set.
- **Styling**: Tailwind v4 is configured in CSS (`src/styles/global.css`), not a JS config. Colors are CSS custom-property tokens (`--bg`, `--fg`, `--muted`, `--rule`, `--accent`, …). Dark mode follows `prefers-color-scheme` with no JS toggle. Use the token-based utilities (`text-muted`, `border-rule`, `text-accent`) rather than raw Tailwind colors.
- **`netlify.toml`** sets a strict Content-Security-Policy (scripts from `'self'` and googletagmanager.com only). Any new third-party script, font, image host or fetch target needs a CSP update there.
- pnpm is pinned through `packageManager` in `package.json`, and Netlify installs that version. `pnpm-workspace.yaml`'s `allowBuilds` must keep `sharp: true`, or image optimization breaks. (pnpm 11+ ignores the old `onlyBuiltDependencies` key.)
