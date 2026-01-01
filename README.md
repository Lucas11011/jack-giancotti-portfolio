# Jack Giancotti Portfolio

A React-based portfolio that showcases Jack Giancotti’s videography, photography, and broadcast experience. The site combines a cinematic hero, detailed project highlights, and a gallery-style “All Work” page while staying performant on desktop and mobile.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Routing Overview](#routing-overview)
- [Content & Assets](#content--assets)
- [Deployment](#deployment)
- [Future Ideas](#future-ideas)

## Features
- **Cinematic hero**: A looping background video with a typewriter headline and instantaneous image fallback ensures quick perceived loads ([src/components/Header.js](src/components/Header.js)). Implemented with a preloaded MP4, `onLoadedData` state, and a poster-based fallback layer.
- **Sticky navigation + drawer**: Desktop anchors jump to on-page sections while mobile users get a slide-in drawer with links and an “All Work” shortcut ([src/components/Navbar.js](src/components/Navbar.js)). Built with React Router links, a mobile-only sidebar, and stateful open/close controls.
- **Rich storytelling sections**: About, Video Projects, Photography, Work Experience, and Affiliations each have dedicated components with bespoke copy and imagery. Each section is a self-contained component that imports its own media and stylesheet for clarity.
- **“All Work” gallery**: A routed page with tabbed views for videos and photos. Photos open in a lightbox; videos render in a responsive grid ([src/pages/AllWork.js](src/pages/AllWork.js)). Powered by a `selectedTab` state hook, button toggles, and reusable gallery components.
- **Scroll helpers**: Deep links, a “See all…” CTA that preserves tab intent, and a `ScrollToTop` button improve navigation. Implemented through anchor IDs, router state handoffs, and a scroll listener that reveals the floating button.
- **Responsive styling**: Hand-authored CSS modules in `src/css` keep typography, spacing, and media queries tuned for various breakpoints. Media queries within each stylesheet tailor layouts for tablets and phones without extra dependencies.

## Tech Stack
- [React 19](https://react.dev/) with functional components and hooks
- [React Router 6](https://reactrouter.com/) for page routing and shared layout
- Create React App (react-scripts 5) tooling
- Plain CSS (per-section styles) and local media assets
- Optional deployment via `gh-pages`

## Project Structure
```
jack-giancotti-portfolio/
├── package.json
├── README.md
├── public/
├── src/
│   ├── App.js               # Routes + layout
│   ├── index.js             # CRA bootstrap
│   ├── components/
│   │   ├── Header.js
│   │   ├── AboutMe.js
│   │   ├── VideoProjects.js
│   │   ├── Photography.js
│   │   ├── WorkExperience.js
│   │   ├── Affiliations.js
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── ScrollToTop.js
│   │   ├── AllPhotos.js
│   │   └── AllVideos.js
│   ├── pages/
│   │   └── AllWork.js       # Tabbed gallery view
│   ├── css/                 # Section-specific stylesheets
│   ├── photos/              # Photography stills
│   ├── videos/              # MP4/MOV showcase clips
│   └── imgs/                # Portraits, icons, logos
└── build/                   # Generated after `npm run build`
```

## Getting Started
1. **Install prerequisites**
	- Node.js 18+ (LTS recommended)
	- npm 9+
2. **Install dependencies**
	```bash
	npm install
	```
3. **Start the dev server**
	```bash
	npm start
	```
	The site opens on `http://localhost:3000` with hot reloading.

## Available Scripts
| Script | Description |
| --- | --- |
| `npm start` | Runs the app in development mode using CRA’s webpack dev server. |
| `npm run build` | Produces an optimized production bundle in `/build`. |
| `npm test` | Launches the Jest/Testing Library runner in watch mode. |
| `npm run eject` | Exposes CRA configs (irreversible). |
| `npm run deploy` | Builds and publishes the `/build` folder to GitHub Pages (uses `gh-pages`). |

## Routing Overview
- `Layout` (in [src/App.js](src/App.js)) wraps every route with `Navbar`, shared footer, and the floating `ScrollToTop` button.
- `/` renders the homepage sections in sequence.
- `/allwork` loads the gallery page and accepts `state.activeTab` so “See all photos/videos” links can preselect the right tab.
- `Navbar` swaps its internal links for a “Back to Home” button when visiting `/allwork`, keeping navigation focused.

## Content & Assets
- **Media**: Large MP4/MOV files and high-res photos live in `src/videos` and `src/photos`. Keep file sizes in check for reasonable build times.
- **Logos & icons**: Stored under `src/imgs` (with nested `icons/` and `affiliations/`).
- **Resume + external links**: Managed inside `AboutMe`, making it easy to point to an updated PDF or social profile.
- **Performance niceties**:
  - Hero video preloads via a `<link rel="preload">` hint and fades in after `onLoadedData` fires.
  - Background fallback image ensures the header never flashes blank.
  - Photo grid images use `loading="lazy"` and only mount the lightbox when needed.

## Deployment
1. Update the `homepage` field in `package.json` (if publishing to GitHub Pages or another host).
2. Run `npm run build` to generate static assets.
3. For GitHub Pages, configure the `deploy` script (already present) and execute `npm run deploy`.
4. For other hosts (Vercel, Netlify, etc.), point them to the `/build` output or let them run the build command automatically.

