# Sharp Apartments Website

Professional static website for Sharp Apartments — quality rental housing in downtown Waynesboro, PA.

**Live site:** [sharp-apartments.com](https://sharp-apartments.com)

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Overview, features, property preview |
| Our Properties | `properties.html` | 125 W Second St — 3 unit listings with photo galleries |
| Sell Your Property | `sell-your-property.html` | Property acquisition page |
| About | `about.html` | About Jamie Sharp and Sharp Apartments |
| Contact | `contact.html` | Contact form + Google Map |

## Structure

```
SharpApartmentsWebsite/
├── index.html
├── properties.html
├── sell-your-property.html
├── about.html
├── contact.html
├── css/styles.css
├── js/main.js
├── images/
│   ├── web/          ← web-optimized images (used by site)
│   └── 125WestSecond/ ← original full-resolution images
├── docs/
│   ├── instructions.md
│   └── implementation-plan.md
├── CNAME
└── README.md
```

## Updating Unit Availability

Open `properties.html` and find the relevant unit. Change the badge class:

```html
<!-- Available (green) -->
<span class="badge available">Available</span>

<!-- Occupied (gray) -->
<span class="badge occupied">Occupied</span>
```

## Contact Form Setup (Formspree)

The contact form in `contact.html` uses [Formspree](https://formspree.io) to send submissions via email:

1. Sign up at formspree.io with `contact@sharp-apartments.com`
2. Create a new form — you'll receive a unique endpoint URL
3. In `contact.html`, replace `YOUR_FORM_ID` in the form's `action` attribute:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" ...>
   ```
4. Free tier includes 50 submissions/month

## Hosting (GitHub Pages)

This site is hosted on GitHub Pages. Any push to the `main` branch automatically deploys the site.

### Custom Domain DNS (GoDaddy)

In GoDaddy DNS settings, add these records:

| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | sharpster80.github.io |

### Google Workspace Email Alias

To receive mail at `contact@sharp-apartments.com` in your `jamie@sharp-apartments.com` inbox:

1. Go to admin.google.com → **Directory → Users**
2. Click on **jamie@sharp-apartments.com**
3. Click **User Information → Alternate email addresses (email alias)**
4. Add `contact` and save

To send *from* the alias: Gmail Settings → **Accounts → Send mail as → Add another email address**
