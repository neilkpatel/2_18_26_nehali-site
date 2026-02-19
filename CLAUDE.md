# Nehali Patel Portfolio — nehalipatel.com

## Overview
Personal portfolio & freelance consulting site for Nehali Patel (Neil's sister), a User Research & Digital Strategy Consultant with 12+ years experience (PwC, Peloton, Vimeo, Kellogg MBA).

## Tech Stack
- React 19 + Vite + Tailwind CSS
- Single-page app with smooth scroll navigation
- Hosted on Vercel, domain via Dreamhost

## URLs
- **Production:** https://nehalipatel.com
- **Vercel:** https://21826nehali-site.vercel.app
- **GitHub:** https://github.com/neilkpatel/2_18_26_nehali-site

## Domain Setup
- Domain registered on **Dreamhost**
- Nameservers pointed to Vercel (`ns1.vercel-dns.com`, `ns2.vercel-dns.com`)
- Vercel handles DNS, SSL, and deploys automatically on push

## Design
- **Color:** Teal accent palette (#0d9488 primary)
- **Base:** Warm stone-50 (not pure white)
- **Animations:** Scroll-triggered fade-ups, floating headshot, decorative blobs
- **Dark section:** Services uses accent-800 with glassmorphism cards

## Sections (in order)
1. Hero (headshot, name, title, stats, CTAs)
2. Services / What I Do (dark teal section, 4 cards)
3. Experience (timeline — Freelance, Peloton, Vimeo, PwC)
4. Education (Kellogg MBA, University of Miami BBA)
5. Contact (LinkedIn CTA only — no email on site)
6. Footer

## Key Decisions
- No email displayed on site (Nehali's preference)
- About section removed (redundant with Hero)
- Skills section removed (implied by Services + Experience)
- OG image: photo-forward dark teal layout for iMessage/social sharing

## Reference Files (gitignored, in project root)
- `nehali_headshot.png` — original headshot
- `Nehali Patel Resume 04.2.2025 - Researcher specific.docx.pdf`
- `linkedin_1.png`, `linkedin_2.png` — LinkedIn screenshots
