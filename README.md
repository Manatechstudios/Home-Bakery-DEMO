# 🧁 Sweet Crumbs Home Bakery — Website DEMO 

> **Freshly Baked Happiness at Your Doorstep**
> A premium, elegant, fully responsive static website for a home bakery business based in Hyderabad, India.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Live Preview](#live-preview)
- [Project Structure](#project-structure)
- [Features](#features)
- [Sections](#sections)
- [Design System](#design-system)
- [Technologies Used](#technologies-used)
- [How to Run Locally](#how-to-run-locally)
- [How to Deploy on Vercel](#how-to-deploy-on-vercel)
- [Customisation Guide](#customisation-guide)
- [WhatsApp Integration](#whatsapp-integration)
- [SEO](#seo)
- [Browser Support](#browser-support)
- [Credits](#credits)

---

## Overview

Sweet Crumbs Home Bakery is a **static HTML/CSS/JS website** built for a home bakery business. It is designed with a premium, minimal aesthetic — clean layout, soft cream tones, elegant typography, and smooth animations — to reflect the warmth and quality of homemade baked goods.

The site requires **no frameworks, no build tools, and no backend**. It is ready to deploy as-is on any static hosting platform.

---

## Live Preview

To preview locally, simply open `index.html` in any modern browser. No server required.

---

## Project Structure

```
sweet-crumbs/
├── index.html       # Main HTML file — all sections and content
├── style.css        # All styles — layout, colours, animations, responsive
├── script.js        # JavaScript — navbar, scroll reveal, gallery, interactions
└── README.md        # This file
```

All three files are self-contained. There are no external asset dependencies beyond Google Fonts (loaded via CDN).

---

## Features

### UI & Design
- ✅ Premium, minimal, elegant visual design
- ✅ Fully responsive — mobile-first layout
- ✅ Smooth scroll reveal animations (fade-in + translateY)
- ✅ Subtle 3D card tilt effect on hover (desktop)
- ✅ Hero section parallax background (desktop)
- ✅ Gallery lightbox (click to expand)
- ✅ Custom scrollbar styling
- ✅ Text selection colour matching brand

### Navigation
- ✅ Sticky navbar — transparent over hero, frosted glass on scroll
- ✅ Active section highlight in navbar
- ✅ Smooth anchor scrolling
- ✅ Animated hamburger menu for mobile

### Business Features
- ✅ Floating WhatsApp button with pulse animation
- ✅ Direct WhatsApp order links per product
- ✅ Instagram profile link
- ✅ Click-to-call phone link
- ✅ Google Fonts (Playfair Display + Poppins)

### Performance & SEO
- ✅ Basic SEO meta tags (title, description, keywords, OG tags)
- ✅ Emoji favicon (no external file needed)
- ✅ Passive scroll event listeners
- ✅ IntersectionObserver for animations (no layout thrashing)
- ✅ Font preconnect for faster Google Fonts loading

---

## Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | **Hero** | Full-width banner, business name, tagline, Order Now + View Menu CTAs |
| 2 | **About Us** | Baker's story, freshness focus, feature pills |
| 3 | **Specialties** | 6 product cards — Birthday Cakes, Wedding Cakes, Custom Cakes, Cupcakes, Cookies, Brownies |
| 4 | **Gallery** | CSS grid layout with hover zoom and click-to-lightbox |
| 5 | **Reviews** | 4 customer testimonials in card layout |
| 6 | **Order Process** | 3-step guide — Choose → Customise → WhatsApp |
| 7 | **Contact** | Phone, WhatsApp, Instagram, Location |
| 8 | **Footer** | Social icons, quick links, credits |

---

## Design System

### Colour Palette

| Role | Variable | Hex | Usage |
|------|----------|-----|-------|
| Background | `--bg` | `#FFF8F5` | Page background, section backgrounds |
| Primary | `--primary` | `#E8AFA6` | Dusty rose — accents, tags, hover states |
| Primary Dark | `--primary-d` | `#D4918A` | Deeper rose — hover variants |
| Accent | `--accent` | `#6D4C41` | Warm brown — headings, CTAs, icons |
| Accent Light | `--accent-l` | `#8D6E63` | Lighter brown — secondary uses |
| Text | `--text` | `#2E2E2E` | Charcoal — body text |
| Text Medium | `--text-m` | `#5A5A5A` | Paragraph text |
| Text Light | `--text-l` | `#8A8A8A` | Captions, labels |
| White | `--white` | `#FFFFFF` | Cards, overlays |

### Typography

| Role | Font | Weights Used |
|------|------|-------------|
| Headings | Playfair Display | 400, 600, 700 (+ italic variants) |
| Body / UI | Poppins | 300, 400, 500, 600 |

### Spacing & Shape

| Property | Value |
|----------|-------|
| Border Radius (small) | `12px` |
| Border Radius (medium) | `16px` |
| Border Radius (large) | `24px` |
| Transition | `0.35s cubic-bezier(0.4, 0, 0.2, 1)` |
| Shadow (small) | `0 2px 12px rgba(110,76,65,0.08)` |
| Shadow (medium) | `0 8px 32px rgba(110,76,65,0.12)` |
| Shadow (large) | `0 20px 60px rgba(110,76,65,0.16)` |

---

## Technologies Used

| Technology | Purpose |
|-----------|---------|
| HTML5 | Semantic page structure |
| CSS3 | Styling, animations, Grid, Flexbox, custom properties |
| Vanilla JavaScript (ES6+) | Interactivity, scroll effects, lightbox |
| Google Fonts | Playfair Display + Poppins typography |
| IntersectionObserver API | Scroll reveal animations |
| CSS Grid | Gallery layout, card grids |
| CSS Flexbox | Navigation, step layout, contact cards |

No npm, no build step, no dependencies to install.

---

## How to Run Locally

### Option 1 — Open directly
Simply double-click `index.html` to open it in your default browser.

### Option 2 — Use VS Code Live Server
1. Install the **Live Server** extension in VS Code
2. Right-click `index.html` → **Open with Live Server**
3. The site opens at `http://127.0.0.1:5500`

### Option 3 — Use Python's built-in server
```bash
# Navigate to the project folder
cd sweet-crumbs

# Python 3
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

---

## How to Deploy on Vercel

Vercel auto-detects static HTML projects with zero configuration.

### Method 1 — Drag & Drop (easiest)
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **Add New → Project**
3. Drag and drop the `sweet-crumbs` folder
4. Click **Deploy**
5. Your site is live in under 60 seconds ✅

### Method 2 — Via GitHub
1. Push the `sweet-crumbs` folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **Add New → Project**
3. Import your GitHub repository
4. Leave all settings as default (Framework: Other)
5. Click **Deploy**

### Method 3 — Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to project folder
cd sweet-crumbs

# Deploy
vercel

# Follow the prompts — no special config needed
```

> **Note:** No `vercel.json` config file is needed. Vercel serves `index.html` automatically.

### Other Hosting Options
The site works on any static host:
- **Netlify** — drag & drop the folder at [netlify.com/drop](https://netlify.com/drop)
- **GitHub Pages** — push to a repo, enable Pages in settings
- **Firebase Hosting** — `firebase init hosting` → `firebase deploy`
- **Render** — connect repo, set type to "Static Site"

---

## Customisation Guide

### 1. Update Business Details

Open `index.html` and find/replace the following:

| Placeholder | Replace with |
|-------------|-------------|
| `+919876543210` | Your actual WhatsApp/phone number |
| `sweetcrumbshyd` | Your actual Instagram handle |
| `Sweet Crumbs Home Bakery` | Your business name (if different) |
| `Hyderabad, Telangana` | Your city/location |
| `Priya` | Your actual name |

### 2. Update WhatsApp Number

All WhatsApp links follow this format:
```
https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%20want%20to%20place%20an%20order!
```
Replace `91XXXXXXXXXX` with your country code + phone number (no spaces, no `+`).

Example for `+91 98765 43210`:
```
https://wa.me/919876543210
```

### 3. Change Colours

All colours are CSS custom properties in `style.css` at the top:
```css
:root {
  --bg:        #FFF8F5;
  --primary:   #E8AFA6;
  --accent:    #6D4C41;
  --text:      #2E2E2E;
  /* ... */
}
```
Edit these values to instantly retheme the entire site.

### 4. Add Real Images

Replace the emoji placeholders in the gallery and about sections with real `<img>` tags:

In `index.html`, find `.gallery-placeholder` divs and replace with:
```html
<img src="your-image.jpg" alt="Description of baked item" loading="lazy" />
```

In `style.css`, add to `.gallery-placeholder`:
```css
.gallery-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

### 5. Add or Remove Menu Items

Each specialty card in the **Specialties** section follows this structure:
```html
<div class="card reveal">
  <div class="card-icon-wrap" style="background: linear-gradient(...);">
    <span class="card-icon">🎂</span>
  </div>
  <h3 class="card-title">Title Here</h3>
  <p class="card-text">Description here.</p>
  <div class="card-tags">
    <span>Tag 1</span><span>Tag 2</span>
  </div>
  <a href="https://wa.me/..." class="card-link" target="_blank">Order →</a>
</div>
```
Copy, paste, and edit to add new items.

### 6. Update Reviews

Each review card follows this structure in `index.html`:
```html
<div class="review-card reveal">
  <div class="review-stars">★★★★★</div>
  <p class="review-text">"Your customer quote here."</p>
  <div class="reviewer">
    <div class="reviewer-avatar" style="background: linear-gradient(...);">A</div>
    <div>
      <p class="reviewer-name">Customer Name</p>
      <p class="reviewer-loc">📍 Location</p>
    </div>
  </div>
</div>
```

---

## WhatsApp Integration

The site uses WhatsApp's click-to-chat URL format throughout:

```
https://wa.me/<number>?text=<pre-filled message>
```

Each product card has a pre-filled message so customers land in WhatsApp with context already typed. To customise the pre-filled message, edit the `text=` parameter (URL-encoded).

Example:
```
https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20order%20a%20Birthday%20Cake!
```

Decodes to: `Hi, I want to order a Birthday Cake!`

---

## SEO

The following meta tags are included in `<head>`:

```html
<meta name="description" content="..." />
<meta name="keywords" content="..." />
<meta name="author" content="Sweet Crumbs Home Bakery" />
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:type" content="website" />
```

**To further improve SEO:**
- Add `<meta property="og:image" content="URL to a bakery photo">` with a real image URL
- Add `<meta property="og:url" content="https://your-domain.com">`
- Submit your site URL to Google Search Console after deployment
- Add a `sitemap.xml` if needed (simple for a single-page site)

---

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome 90+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Edge 90+ | ✅ Full |
| Opera 76+ | ✅ Full |
| iOS Safari 14+ | ✅ Full |
| Android Chrome 90+ | ✅ Full |

> IntersectionObserver, CSS Grid, CSS Custom Properties, and `backdrop-filter` are all widely supported in modern browsers. A simple fallback is included for older browsers that don't support IntersectionObserver.

---

## Credits

| Role | Details |
|------|---------|
| Design & Development | Design Spaces |
| Fonts | Google Fonts — Playfair Display, Poppins |
| Icons | Unicode Emoji (no external icon library required) |
| WhatsApp Button | Native WhatsApp click-to-chat API |

---

## License

This website was created as a **demo project** by Design Spaces for Sweet Crumbs Home Bakery.

Feel free to customise and use it for your business. Attribution appreciated but not required.

---

*Made with ❤️ and a lot of 🧁 by Design Spaces*
