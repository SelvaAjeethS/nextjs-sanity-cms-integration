# Next.js + Sanity CMS Integration

A production-ready demo of headless CMS architecture using **Next.js App Router** and **Sanity CMS**, built around an RCM (Revenue Cycle Management) Services landing page.

---

## Live Demo

[View Live Site](https://your-vercel-url.vercel.app)

---

## Architecture

┌─────────────────────┐ ┌──────────────────────┐

│ Sanity Studio │ │ Next.js Frontend │

│ (rcm-studio) │──API──▶ │ (rcm-frontend) │

│ │ │ │

│ Content Schemas: │ │ Pages: │

│ - Hero │ │ - app/page.tsx │

│ - Services │ │ │

│ - Why Choose Us │ │ Components: │

│ - Contact Section │ │ - Navbar │

│ │ │ - HeroSection │

│ Hosted on: │ │ - ServicesSection │

│ sanity.io cloud │ │ - WhyUsSection │

└─────────────────────┘ │ - ContactSection │

│ │

│ Hosted on: Vercel │

└──────────────────────┘

---

## Tech Stack

| Layer                 | Technology              |
| --------------------- | ----------------------- |
| Frontend Framework    | Next.js 14 (App Router) |
| Language              | TypeScript              |
| Styling               | Tailwind CSS            |
| CMS                   | Sanity v3               |
| CMS Client            | next-sanity             |
| Deployment (Frontend) | Vercel                  |
| Deployment (Studio)   | sanity.io cloud         |

---

## Use Case

This project demonstrates how a **headless CMS** works in a real-world scenario:

- Content editors can update hero text, services, stats, and contact info from the Sanity Studio — **without touching code**
- The Next.js frontend fetches content via Sanity's API at request time
- Any content change in Studio reflects on the live site **immediately**

---

## Project Structure

nextjs-sanity-cms-integration/

├── rcm-studio/ # Sanity Studio

│ ├── schemaTypes/

│ │ ├── hero.js # Hero section schema

│ │ ├── service.js # Services schema

│ │ ├── whyUs.js # Why Choose Us schema

│ │ ├── contactSection.js # Contact schema

│ │ └── index.js # Schema registry

│ └── sanity.config.ts

│

├── rcm-frontend/ # Next.js App

│ ├── app/

│ │ └── page.tsx # Main page, fetches all Sanity data

│ ├── components/

│ │ ├── Navbar.tsx

│ │ ├── HeroSection.tsx

│ │ ├── ServicesSection.tsx

│ │ ├── WhyUsSection.tsx

│ │ └── ContactSection.tsx

│ ├── lib/

│ │ └── sanityClient.ts # Sanity client config

│ └── .env.local # (not pushed — see below)

│

└── README.md

---

## Local Setup

### Prerequisites

- Node.js 18+
- Sanity account at sanity.io

### 1. Clone the repo

```bash
git clone https://github.com/SelvaAjeethS/nextjs-sanity-cms-integration.git
cd nextjs-sanity-cms-integration
```

### 2. Run Sanity Studio

```bash
cd rcm-studio
npm install
npm run dev
# Studio runs at localhost:3333
```

### 3. Set up environment variables

Create `rcm-frontend/.env.local`:
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id

NEXT_PUBLIC_SANITY_DATASET=production

### 4. Run Next.js Frontend

```bash
cd rcm-frontend
npm install
npm run dev
# App runs at localhost:3000
```

---

## Data Flow

User visits site

│

▼

Next.js page.tsx

│

├── fetch hero data ──▶ Sanity API

├── fetch services ──▶ Sanity API

├── fetch why us ──▶ Sanity API

└── fetch contact ──▶ Sanity API

│

▼

Components render with live content

---

## Key Concepts Demonstrated

- **Headless CMS pattern** — content and presentation are fully decoupled
- **Next.js App Router** with async server components for data fetching
- **Sanity schema design** — structured content modelling
- **CORS configuration** for secure API access
- **Environment variable management** for local vs production

---

## Environment Variables

| Variable                        | Description                                  |
| ------------------------------- | -------------------------------------------- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your Sanity project ID from sanity.io/manage |
| `NEXT_PUBLIC_SANITY_DATASET`    | Dataset name (default: production)           |

---

## Author

**Selva Ajeeth S** — Frontend / Full-Stack Developer  
[LinkedIn](https://linkedin.com/in/selvaajeeths) • [GitHub](https://github.com/SelvaAjeethS) • [Portfolio](https://selvaajeeths.github.io/My-Portfolio)
