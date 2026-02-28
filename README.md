# LM Infotech Institute — Website

Mobile repairing institute website for LM Infotech, featuring H Kumar (20+ years experience).

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v3
- **Language**: JavaScript (no TypeScript)
- **Fonts**: Syne + DM Sans + JetBrains Mono
- **Theme**: Sky Blue (#0369a1) + Amber (#f59e0b)

---

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

---

## 📸 How to Add Photos

### Instructor Photo (H Kumar)

1. Name the file: `instructor.jpg`
2. Place it at: `/public/images/instructor.jpg`
3. Open `components/Instructor.js`
4. Find the comment block that says `PHOTO SLOT — H Kumar`
5. Replace the placeholder `<div>` with:

```jsx
import Image from 'next/image'

// Inside the component:
<div className="relative h-80 w-full">
  <Image
    src="/images/instructor.jpg"
    alt="H Kumar — Lead Instructor"
    fill
    className="object-cover object-top"
    priority
  />
</div>
```

---

### Hero Section — Instructor Card

Same as above — open `components/Hero.js`, find the `PHOTO SLOT` comment, and replace with:

```jsx
<div className="relative h-64 w-full">
  <Image
    src="/images/instructor.jpg"
    alt="H Kumar"
    fill
    className="object-cover object-top"
    priority
  />
</div>
```

---

### Gallery Photos (Lab & Classroom)

1. Place images in: `/public/images/gallery/`
   - Recommended filenames: `lab-overview.jpg`, `microscope.jpg`, `classroom.jpg`, etc.

2. Open `components/Gallery.js`

3. Add `src` to each gallery item at the top:

```js
const galleryItems = [
  { id: 1, src: '/images/gallery/lab-overview.jpg',  title: 'Lab Overview', ... },
  { id: 2, src: '/images/gallery/microscope.jpg',    title: 'Microscope Station', ... },
  // ... etc
]
```

4. Find the `PHOTO SLOT` comment block inside the map function and replace the placeholder `<div>` with:

```jsx
import Image from 'next/image'

// Replace placeholder div with:
<Image
  src={item.src}
  alt={item.title}
  fill
  className="object-cover group-hover:scale-105 transition-transform duration-500"
/>
```

---

### Recommended Image Sizes

| Use | Recommended Size | Format |
|-----|-----------------|--------|
| Instructor photo | 600×800px (portrait) | JPG/WebP |
| Gallery regular | 600×400px (landscape) | JPG/WebP |
| Gallery tall card | 600×800px (portrait) | JPG/WebP |
| OG image | 1200×630px | JPG |

---

## Project Structure

```
lm-institute/
├── app/
│   ├── layout.js          # Root layout + SEO metadata
│   ├── page.js            # Home page
│   └── globals.css        # Global styles + Tailwind
├── components/
│   ├── Navbar.js          # Sticky navbar
│   ├── Footer.js          # Footer
│   ├── Hero.js            # Hero with instructor card
│   ├── Strip.js           # Animated ticker
│   ├── Courses.js         # 3-tier course cards
│   ├── Syllabus.js        # Full syllabus with accordion
│   ├── Instructor.js      # H Kumar profile section
│   ├── WhyUs.js           # Differentiators + FAQ
│   ├── Gallery.js         # Photo gallery
│   └── Contact.js         # Enrollment form
└── public/
    └── images/            # ← Put all photos here
        ├── instructor.jpg
        ├── og-image.jpg
        └── gallery/
            ├── lab-overview.jpg
            └── ...
```

---

## Customization

- **Phone/Email/Address**: Update in `components/Footer.js` and `components/Contact.js`
- **Batch dates**: Update the badge text in `components/Hero.js`
- **Course fees**: Update `price` in `components/Courses.js` or direct users to contact form
- **Social links**: Update href values in `components/Footer.js`
- **Domain**: Update `metadataBase` in `app/layout.js`

---

## Deployment

```bash
# Build
npm run build

# Deploy to Vercel (easiest)
npx vercel

# Or deploy to any Node 18+ host
npm start
```
