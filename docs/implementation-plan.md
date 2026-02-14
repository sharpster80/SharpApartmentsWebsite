# Sharp Apartments Website — Implementation Plan

## Context

Jamie Sharp needs a professional static website for his apartment rental business in South Central PA. The site will showcase his current property (125 W Second Street, Waynesboro, PA — 3 units) and solicit property acquisitions. The site must be clean, professional, trustworthy, and easy for Jamie to maintain by editing HTML directly.

---

## Technology Stack

| Component | Choice | Why |
|-----------|--------|-----|
| **Markup** | Static HTML5 + CSS3 | Requested by client; simplest to maintain |
| **CSS Framework** | None (custom CSS) | Keeps it lightweight; full control over blue/white theme |
| **JavaScript** | Vanilla JS (minimal) | Mobile nav toggle, image lightbox gallery only |
| **Icons** | Font Awesome (CDN) | Free, professional icons for amenities/features |
| **Fonts** | Google Fonts — Montserrat (headings) + Open Sans (body) | Clean, modern, professional |
| **Contact Form** | Formspree (free tier) | Works with static sites; sends submissions directly to contact@sharp-apartments.com; 50 submissions/month free |
| **Image Gallery** | GLightbox (lightweight CDN library) | ~10KB, no dependencies, touch-friendly |
| **Hosting** | GitHub Pages (free) | Free, reliable, deploys from repo, custom domain support, free SSL |
| **Domain DNS** | GoDaddy → GitHub Pages | Point A records + CNAME to GitHub Pages IPs |

### Why Not Netlify/Vercel?
GitHub Pages is the simplest option — push to `main` and it deploys. No build step needed for static HTML. Netlify would also work but adds unnecessary complexity for a pure HTML site.

---

## File Structure

```
SharpApartmentsWebsite/
├── index.html                  (Home)
├── properties.html             (Our Properties)
├── sell-your-property.html     (Selling Your Property)
├── about.html                  (About)
├── contact.html                (Contact)
├── css/
│   └── styles.css              (All styles)
├── js/
│   └── main.js                 (Nav toggle, lightbox init)
├── images/
│   ├── logo/logo.png
│   ├── 125WestSecond/
│   │   ├── Exterior/
│   │   ├── Apartment 1/
│   │   ├── Apartment 2/
│   │   └── Apartment 3/
│   ├── hero-bg.jpg             (stock or exterior photo for hero)
│   └── jamie-placeholder.jpg   (About page placeholder)
├── docs/
│   └── instructions.md
├── CNAME                       (GitHub Pages custom domain)
└── README.md
```

---

## Color Palette & Design System

Derived from the Sharp Apartments logo (blue, gold, dark navy):

| Role | Color | Hex |
|------|-------|-----|
| Primary Blue | Logo blue | `#1a5fa8` |
| Dark Navy | Headings/nav | `#1a2b4a` |
| Gold Accent | CTAs, highlights | `#c8962e` |
| Light Blue BG | Section backgrounds | `#f0f6fc` |
| White | Main background | `#ffffff` |
| Text Gray | Body text | `#4a4a4a` |
| Light Gray | Borders, subtle bg | `#e8edf2` |

---

## Page-by-Page Plan & Suggested Copy

---

### 1. HOME PAGE (`index.html`)

**Layout:**
- Fixed top nav with logo + links to all pages
- Hero section with background image (exterior photo or stock), headline, and CTA button
- "Why Sharp Apartments" feature cards (3 columns)
- Property preview section with exterior photo + brief info + link to properties page
- Testimonial/trust section (placeholder for future reviews)
- Footer with contact info, social links, copyright

**Suggested Copy:**

**Hero Headline:** "Quality Rentals from a Landlord Who Cares"

**Hero Subtext:** "Sharp Apartments offers clean, updated, and well-maintained rental units in the heart of Waynesboro, PA. Locally owned and personally managed — not a faceless corporation."

**CTA Button:** "View Available Units"

**Why Sharp Apartments — Card 1: "Locally Owned & Operated"**
"Sharp Apartments is owned and managed by Jamie Sharp, a South Central PA local who takes personal pride in every property. When you need something, you're talking to the owner — not a call center."

**Why Sharp Apartments — Card 2: "Updated & Well-Maintained"**
"Every unit features fresh paint, newer windows, and modern flooring. We invest in our properties because our tenants deserve a comfortable place to call home."

**Why Sharp Apartments — Card 3: "Fair & Transparent"**
"No hidden fees, no corporate red tape. Just straightforward leasing with a landlord who treats tenants with respect and responds quickly when issues arise."

**Property Preview Section:**
"**125 West Second Street — Waynesboro, PA**
Three spacious units in a beautifully maintained historic building, right in the heart of downtown. Walking distance to local restaurants, shops, and breweries."

Button: "See All Units →"

---

### 2. OUR PROPERTIES PAGE (`properties.html`)

**Layout:**
- Page header with title
- Property overview card: exterior photos (carousel/gallery), address, building description, included utilities
- Three unit cards below, each with:
  - Photo gallery (thumbnails that open in lightbox)
  - Bed/bath/sqft specs
  - Availability badge (green "Available" / gray "Occupied") — **Jamie edits a single CSS class to toggle**
  - Key features list
  - "Inquire About This Unit" button (links to contact page)
- Utilities & policies info box

**Suggested Copy:**

**Page Title:** "Our Properties"

**Building Intro:**
"125 West Second Street is a three-story historic building in downtown Waynesboro, PA. Originally built in 1899 as a single-family home, it was converted to apartments in the 1950s and has been thoughtfully updated to provide modern comfort while preserving its character. Located in the heart of downtown, you'll be steps away from local restaurants, breweries, and shops."

**What's Included:**
- Water, sewer, and trash — paid by landlord
- Hot water — paid by landlord
- Tenant pays gas & electric
- No pets

**Unit 1 — First Floor**
"1 Bed · 1 Bath · 1,000 sq ft"

"A spacious first-floor unit — ideal for anyone who prefers single-level living with no stairs. Enter directly from the rear parking area into the kitchen. Features include a brand-new walk-in shower, fresh paint throughout, newer replacement windows, new LVP flooring, and a large pantry for storage. Enjoy your morning coffee on the generous front porch overlooking Second Street."

**Unit 2 — Second Floor**
"2 Bed · 1 Bath · 1,000 sq ft"

"A generously sized second-floor unit with a one-of-a-kind retro kitchen featuring original Kelvinator metal cabinets, a bold red countertop, and a vintage copper range hood. Includes one parking space, fresh paint, newer windows, and updated flooring throughout. The enclosed rear patio has louvered windows — perfect for catching a breeze on mild evenings."

**Unit 3 — Third Floor**
"2 Bed · 1 Bath · 1,000 sq ft"

"A large third-floor unit with beautiful original hardwood floors in the living areas and new LVP flooring in the kitchen and bath. Includes one parking space and a spacious rear patio with a built-in workbench area and room for outdoor seating. Louvered patio windows let you enjoy fresh air and natural light."

**Availability toggle instructions** (for Jamie): Simply change `class="badge available"` to `class="badge occupied"` on each unit card. Available = green badge, Occupied = gray badge.

---

### 3. SELL YOUR PROPERTY PAGE (`sell-your-property.html`)

**Layout:**
- Page header with title + intro
- Benefits list / key selling points
- "What We Buy" section
- How it works (simple 3-step process)
- CTA / contact form shortcut

**Suggested Copy:**

**Page Title:** "Thinking About Selling Your Property?"

**Intro:**
"If you're ready to move on from your rental property — or any property — we'd like to talk. Sharp Apartments is actively looking to acquire properties in the Waynesboro area and throughout South Central PA. No realtors, no commissions, no drawn-out process. Just a straightforward conversation between neighbors."

**Why Sell to Us:**

- **No Realtor Commissions** — "Deal directly with us and keep more of your sale price. No agents, no listing fees."
- **Any Condition** — "Don't worry about repairs, renovations, or cleaning. We'll buy your property as-is."
- **Fast & Flexible Closing** — "We work on your timeline. Need to close quickly? We can make that happen. Need more time? That's fine too."
- **Local Buyer** — "We're not an out-of-state investment group. We live here, and we're invested in this community."

**We're Especially Interested In:**
- Multi-family properties (duplexes, triplexes, apartment buildings)
- Single-family homes with conversion potential
- Properties in Waynesboro, Greencastle, Chambersburg, and surrounding areas
- Estates, inherited properties, or properties with deferred maintenance

**How It Works:**
1. **Reach Out** — "Contact us with some basic information about your property. No obligation."
2. **We'll Take a Look** — "We'll schedule a time to visit the property and discuss a fair offer."
3. **Close on Your Terms** — "If we agree on a price, we handle the paperwork and close when it works for you."

**CTA:** "Have a property you'd like to discuss? We'd love to hear from you."
Button: "Contact Us →"

---

### 4. ABOUT PAGE (`about.html`)

**Layout:**
- Page header
- Two-column layout: placeholder photo on left, bio text on right
- "Our Values" or "Our Commitment" section
- Community section about Waynesboro

**Suggested Copy:**

**Page Title:** "About Sharp Apartments"

**Bio:**
"Sharp Apartments is owned and operated by Jamie Sharp, a South Central Pennsylvania local with a genuine passion for providing quality rental housing. With five years of hands-on experience managing and improving properties in Waynesboro, Jamie built Sharp Apartments on a simple idea: tenants deserve a comfortable, well-maintained home — and they deserve a landlord who actually picks up the phone.

Unlike large property management corporations, Sharp Apartments is a one-on-one operation. Jamie personally oversees every unit, handles maintenance requests promptly, and takes the time to get to know each tenant. It's the kind of service that only comes from someone who truly cares about the properties they manage and the people who live in them."

**Our Commitment:**
"Every unit we offer is clean, updated, and move-in ready. We don't cut corners on maintenance, and we don't ignore repair requests. When something needs attention, we take care of it — because that's what we'd expect if we were the ones renting."

**Investing in Waynesboro:**
"Waynesboro is a community with deep roots and tremendous potential. We're proud to be part of its growth and revitalization. By maintaining quality rental housing downtown, we're doing our part to keep Waynesboro attractive, livable, and thriving. We believe in this town's future, and we're here for the long haul."

---

### 5. CONTACT PAGE (`contact.html`)

**Layout:**
- Page header
- Two-column: contact form on left, contact details + map on right
- Form fields: Name (required), Email (required), Phone (optional), Message (required)
- Embedded Google Map of 125 W Second Street
- Social links (Facebook)

**Suggested Copy:**

**Page Title:** "Get in Touch"

**Intro:** "Whether you're interested in renting a unit or want to discuss selling your property, we'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible."

**Contact Details:**
- Email: contact@sharp-apartments.com
- Facebook: Sharp Apartments Facebook Page (https://www.facebook.com/profile.php?id=61587066134883)

**Form submit confirmation message:** "Thanks for reaching out! We'll get back to you within 24 hours."

---

## Contact Form Technical Setup (Formspree)

Since this is a static site with no server, we'll use **Formspree** for the contact form:

1. Sign up at formspree.io with contact@sharp-apartments.com
2. Create a form — Formspree provides a unique endpoint URL
3. The HTML form's `action` attribute points to that endpoint
4. Submissions are emailed directly to contact@sharp-apartments.com
5. Free tier: 50 submissions/month (more than enough)
6. Includes spam protection (honeypot + reCAPTCHA option)

---

## Google Workspace Email Alias Setup Instructions

To create `contact@sharp-apartments.com` as an alias for `jamie@sharp-apartments.com`:

1. Go to admin.google.com → **Directory → Users**
2. Click on **jamie@sharp-apartments.com**
3. Click **User Information → Alternate email addresses (email alias)**
4. Click **Add Alternate Email** and enter `contact`
5. Click **Save**

Emails to contact@sharp-apartments.com will now arrive in Jamie's inbox. He can also send *from* that alias in Gmail by going to Settings → Accounts → "Send mail as" and adding the alias.

---

## Hosting & Deployment — GitHub Pages Setup

### Step 1: Initialize Git & Push to GitHub
```bash
cd /Users/jamie/Development/Personal/SharpApartmentsWebsite
git init
git add .
git commit -m "Initial commit: Sharp Apartments website"
gh repo create sharp-apartments-website --public --source=. --push
```

### Step 2: Enable GitHub Pages
1. Go to the repo on GitHub → **Settings → Pages**
2. Under "Source", select **Deploy from a branch**
3. Select **main** branch, **/ (root)** folder
4. Click **Save**

### Step 3: Configure Custom Domain
1. In the repo, create a `CNAME` file containing: `sharp-apartments.com`
2. In GoDaddy DNS settings, add these records:

| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | `<github-username>.github.io` |

3. Back in GitHub Pages settings, enter `sharp-apartments.com` as the custom domain
4. Check "Enforce HTTPS" (free SSL certificate from GitHub)
5. DNS propagation takes up to 24-48 hours

---

## Social Media Recommendation

**Facebook:** The existing page should be completed with the same branding, profile photo (logo), cover photo (exterior shot), and a link to the website.

**Instagram:** Recommended. Rental property searches increasingly happen on Instagram, especially for younger renters. Post photos of units, before/after maintenance work, and Waynesboro community content. Handle suggestion: `@sharp.apartments` or `@sharpapartments`

---

## Image Optimization Note

The current images are large (600KB–4MB each). During implementation, we will:
- Resize images to web-appropriate dimensions (max 1600px wide for galleries, 800px for thumbnails)
- Compress to JPEG/WebP at ~80% quality
- Create thumbnail versions for gallery grids
- This will dramatically improve page load times

---

## Implementation Order

1. ~~**CSS foundation** — Color palette, typography, responsive grid, nav, footer~~ ✅ Complete
2. ~~**Shared layout** — Nav + footer (repeated across all pages)~~ ✅ Complete
3. ~~**Home page** — Hero, feature cards, property preview~~ ✅ Complete
4. ~~**Properties page** — Building info, unit cards with photo galleries, availability badges~~ ✅ Complete
5. ~~**Sell Your Property page** — Benefits, process steps, CTA~~ ✅ Complete
6. ~~**About page** — Bio, values, community section~~ ✅ Complete
7. ~~**Contact page** — Formspree form, Google Map embed~~ ✅ Complete
8. ~~**Image optimization** — Resize/compress all photos~~ ✅ Complete (images/web/, all under 350KB)
9. **Mobile responsive polish** — Test all breakpoints *(handled via CSS media queries)*
10. **GitHub Pages deployment** — Repo setup, CNAME, DNS instructions

---

## Verification Checklist

- [ ] All 5 pages render correctly on desktop (1440px, 1024px)
- [ ] All pages are fully responsive (768px tablet, 375px mobile)
- [ ] Navigation works on all pages (including mobile hamburger menu)
- [ ] Image galleries open and close properly on all devices
- [ ] Contact form submits successfully to Formspree → email arrives at contact@sharp-apartments.com
- [ ] Availability badges toggle correctly between Available/Occupied
- [ ] All images are optimized (no single image over 200KB)
- [ ] Site loads in under 3 seconds on a standard connection
- [ ] Facebook link works
- [ ] Google Map embed displays correctly
