# Brahams Foundation — Official Website

> Empowering Globally. Uniting. Changing Lives.

A production-ready Next.js 14 website for Brahams Foundation, a Kenyan NGO dedicated to sports talent development, social economic empowerment, cultural advancement, girl child empowerment, and education.

## Tech Stack

- **Next.js 14** — App Router (JavaScript)
- **Sanity CMS v3** — Embedded studio at `/studio`
- **Vercel** — Deployment & hosting

## Getting Started

### 1. Clone and install

```bash
git clone https://github.com/YOUR_USERNAME/Brahams-Foundation-v2.git
cd Brahams-Foundation-v2
npm install
```

### 2. Set up Sanity

1. Go to [sanity.io/manage](https://sanity.io/manage) and create a new project
2. Copy your **Project ID**

### 3. Configure environment variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### 4. Run locally

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) for the website.  
Visit [http://localhost:3000/studio](http://localhost:3000/studio) for the CMS.

## CMS Sections

| Section | Description |
|---------|-------------|
| 🗓️ Events | Create upcoming, ongoing, and past events |
| 📸 Gallery | Upload photo albums by category |
| 📰 News | Publish articles and announcements |
| 👥 Team | Add team member profiles |
| ⚙️ Settings | Update site-wide content |

## Deployment

```bash
vercel --prod
```

Add these environment variables in Vercel dashboard:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`

## Contact

- **Email:** brahamsfoundation2@gmail.com
- **Phone:** +254 794 432 183
- **Location:** Nyasrek Mall, Ukwala, Ugenya, Siaya County, Kenya
