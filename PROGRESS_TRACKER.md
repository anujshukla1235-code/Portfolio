# Progress Tracker: Project Vrittant (वृत्तांत)

This document tracks the progress of all Epic tasks and User Stories as per the Product Backlog and Sprint Plan.

## Legend
- `[x]` Completed
- `[/]` In Progress
- `[ ]` Pending

---

## Epic 1: Core Infrastructure & Setup
- `[x]` **US-001 (T-1.1):** Initialize Next.js project with Tailwind CSS & TypeScript.
- `[x]` **US-002 (T-1.2):** Configure CI/CD via GitHub Actions (Vitest, Playwright, ESLint).

## Epic 2: UI & Navigation
- `[x]` **US-003 (T-1.3):** Build Responsive Navbar (Home, Projects, Contact).
- `[x]` **US-004 (T-1.4):** Implement Dark/Light mode toggle (`next-themes`).
- `[x]` **US-005 (T-3.1):** Build Landing page summarizing expertise (Hero section & featured grid).
- `[x]` **US-006 (T-1.5):** Create customized 404 Not Found page.
- `[x]` **US-022:** Design revamp matching user screenshots (Dark/Light themes, About Me split section).
- `[x]` **US-025:** Add and configure user profile picture on Homepage.

## Epic 3: Content Pipeline (MDX & Projects)
- `[x]` **US-007 (T-2.1):** Setup core MDX Engine (`next-mdx-remote`, parse frontmatter).
- `[x]` **US-008 (T-2.2):** Integrate syntax highlighting for code blocks (`rehype-pretty-code`).
- `[x]` **US-009 (T-2.3):** Create copy-to-clipboard button on code blocks.
- `[x]` **US-010:** Write "Purvabhas: Demand Forecasting" MDX case study.
- `[x]` **US-011:** Write "Shastrarth: AI Interviewer" MDX case study.
- `[x]` **US-012:** Write "Sthirta: Enterprise Churn Intelligence" MDX case study.
- `[x]` **US-023:** Write "Chhal-Bhedak: Cost-Sensitive Fraud Detection" MDX case study.
- `[x]` **US-024:** Consolidate all 10 SDLC projects into unified `/projects` page with grid layout.

## Epic 4: Backend & APIs
- `[x]` **US-013 (T-3.2):** Build secure contact form UI (Zod/React Hook Form).
- `[x]` **US-014 (T-3.3):** Implement `/api/contact` route with Turnstile validation.
- `[x]` **US-015:** Build `/api/metrics/[slug]` for view counts using Redis.

## Epic 5: SEO, Performance & Syndication
- `[x]` **US-016 (T-5.1):** Generate dynamic `sitemap.xml` and `robots.txt`.
- `[x]` **US-017 (T-5.2):** Configure OpenGraph metadata tags.
- `[x]` **US-018 (T-5.3):** Implement MDX image optimization (`CustomImage`).
- `[x]` **US-019 (T-5.5):** Generate `/rss.xml` feed at build time.
- `[x]` **US-020 (T-5.4):** Integrate Plausible Analytics snippet.

## Epic 6: Version Control & Deployment
- `[x]` **US-026:** Initialize Git repository and link to GitHub remote.
- `[x]` **US-027:** Push complete portfolio codebase to GitHub repository.

---
**Status Update:** 
- Successfully applied modern UI designs based on provided reference screenshots. 
- Integrated all 10 Vedic project names from the SDLC docs into a unified `/projects` route. 
- Refined portfolio copy to ensure a natural, human-written professional tone. 
- Profile picture integrated and rendered successfully.
- Codebase successfully pushed to remote GitHub repository.
- Added RSS feed generation for syndication.
- Written Vitest unit tests and Playwright E2E tests, and configured CI/CD via GitHub Actions.
- **ALL SDLC EPICS COMPLETED 100%.**
