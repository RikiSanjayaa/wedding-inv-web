# With Docker

This examples shows how to use Docker with Next.js based on the [deployment documentation](https://nextjs.org/docs/deployment#docker-image). Additionally, it contains instructions for deploying to Google Cloud Run. However, you can use any container-based deployment host.

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example with-docker nextjs-docker
# or
yarn create next-app --example with-docker nextjs-docker
# or
pnpm create next-app --example with-docker nextjs-docker
```

## Using Docker

1. [Install Docker](https://docs.docker.com/get-docker/) on your machine.
1. Build your container: `docker build -t nextjs-docker .`.
1. Run your container: `docker run -p 3000:3000 nextjs-docker`.

You can view your images created with `docker images`.

## Wedding Invitation — Next.js

This repository contains a small Next.js application used as an interactive wedding invitation website. It includes a landing page, couple profile, event date & map, story section, gallery, and a floating audio control.

The app was bootstrapped from a Next.js template and includes a Dockerfile and docker-compose configuration for containerized runs.

## Quick overview

- Framework: Next.js (React)
- Styling: Tailwind CSS (configured via PostCSS)
- Audio: background music played from `/public/bgm.mp3` with a floating play/pause button
- Main pages/components: `pages/index.js` composes components from `components/page/*` and `components/utilities/*`

## Requirements

- Node.js 18+ recommended
- npm (or yarn/pnpm) — package manager
- (Optional) Docker & docker-compose for containerized runs

## Local development

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open your browser at http://localhost:3000

Notes:

- The dev script runs `next dev` from `package.json`.
- Edit React components under `components/` and styles under `styles/`.

## Production build

Create an optimized production build and preview it locally:

```bash
npm run build
npx next start
```

The project uses `next.config.js` with `output: "standalone"` so the Docker image builds a standalone production bundle.

## Docker

Build and run using the provided `Dockerfile` and `docker-compose.yml`.

Build the image locally:

```bash
docker build -t wedding-inv-web .
```

Run with Docker (exposes port 3000 inside the container):

```bash
docker run -p 3000:3000 wedding-inv-web
```

Or use docker-compose (maps host port 3001 to container 3000 by default):

```bash
docker-compose up --build
```

Notes:

- The `Dockerfile` expects a lockfile (yarn.lock, package-lock.json or pnpm-lock.yaml) to install dependencies in CI-like mode. If you don't have one, Docker build may exit with "Lockfile not found." You can add a lockfile by running `npm install` locally before building.

## Project structure

- `pages/` — Next.js pages. `pages/index.js` is the main entry.
- `components/page/` — Page-level components (LandingPage, CoupleCard, DateAndMaps, Gallery, StorySection, Footer)
- `components/utilities/` — Reusable UI pieces (FloatingButton, TimerBlock, OneProfile, etc.)
- `public/` — Static assets (images, `bgm.mp3`, favicon)
- `styles/` — Global CSS and module styles (Tailwind + custom CSS)
- `Dockerfile`, `docker-compose.yml` — Containerization files
- `next.config.js` — Next configuration (standalone output)

## Environment & runtime notes

- The app serves static assets from `/public`.
- Background music file is loaded from `/bgm.mp3`. Autoplay may be blocked by browsers — the UI exposes a play/pause control (`FloatingButton`) and the landing page includes a toggle.

## Deployment suggestions

- Build the Docker image and deploy to any container host (AWS ECS, GCP Cloud Run, Azure App Service, Fly.io, DigitalOcean App Platform).
- When using the Dockerfile, ensure a lockfile exists in the repo so the build step can install dependencies.

## Troubleshooting

- If Docker build fails with "Lockfile not found.": create a lockfile by running `npm install` locally, then try building again.
- If audio won't autoplay: browsers often block autoplay with sound. Use the on-page play button to start audio.

## Next steps / improvements

- Add a CI workflow (GitHub Actions) to lint, typecheck, build and test the app.
- Add automated tests (Jest + React Testing Library) for key components.
- Add metadata badges (build status, node version) to README.

---

If you'd like, I can also:

- add a simple GitHub Actions workflow for builds,
- create a sample `.env.local.example` if there are environment variables to document,
- or adjust Docker ports/mapping in `docker-compose.yml`.
