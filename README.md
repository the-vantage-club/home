# The Vantage Club — Official Website

Official website for **The Vantage Club**, a student-led organization
helping students explore perspective, opportunity, and the paths that exist
beyond the classroom.

> **SEE FURTHER.**

## Stack

Plain HTML / CSS / JS, served by a small Express server. No build tooling,
no database, no framework.

```
index.html    Page markup (hero, philosophy, mission, projects, board, contact)
style.css     Full design system (tokens, layout, motion)
script.js     Nav state, mobile menu, cursor glow, scroll reveal
server.js     Express static server (Render-ready)
package.json  Dependencies + start script
logo.png      Site mark, used in the nav, footer, and favicon
logo.svg      Vector source for the mark
```

## Running locally

```bash
npm install
npm start
```

The site runs at `http://localhost:10000` (or `$PORT` if set).

## Deploying on Render

Configure as a **Web Service**, not a Static Site:

| Setting | Value |
|---|---|
| Source | GitHub — `the-vantage-club/home` |
| Branch | `main` |
| Language | Node |
| Build Command | `npm install` |
| Start Command | `npm start` |
| Plan | Free |
| Auto-Deploy | On Commit |

`server.js` reads `process.env.PORT`, which Render provides automatically —
no environment variables need to be set manually.

## About the logo

**`logo.png` in this package is a placeholder mark** (a thin ring with a
chevron, in the site's off-white), generated so the repo runs and looks
correct end-to-end. No official Vantage Club logo file was provided in this
conversation — swap `logo.png` (and `logo.svg` if you want a vector source)
for the real logo, keeping the same filename at the repository root. Every
reference in `index.html` already points to `logo.png` directly (not
`assets/logo.png`), so no other changes are needed.

## Content policy

No statistics, dates, participant counts, budgets, awards, sponsors, or
testimonials are used anywhere on the site — per the project's own rule
against fabricated data. Copy is limited to philosophy, mission, project
descriptions, and the three confirmed Managing Board members. If you want to
add real data later (event dates, board bios, press, etc.), search for the
matching section in `index.html` and drop it in directly.
