# FOB Theme — Architecture Guide

## How the Template Works

The entire design (CSS + layout + renderer) is locked in one file.
**Only the `POST` object at the top changes per post.**

```
fob-theme-template.html
│
├── <style>          ← FOB Theme CSS — never touch
├── <body HTML>      ← Shell only (nav, engagement bar, overlays)
├── POST = { ... }   ← ✅ EDIT THIS for every new post
└── <script>         ← Renderer + interactivity — never touch
```

---

## Creating a New Post (3 Steps)

### Step 1 — Duplicate the template
```
cp fob-theme-template.html chicken-biryani-under-199.html
```

### Step 2 — Edit only the POST object
Open the file, scroll to the `POST = { ... }` section (it's clearly marked).
Fill in your recipe data.

### Step 3 — Save and upload
Done. The renderer does the rest automatically.

---

## POST Object Reference

```js
const POST = {
  // Page identity
  title:              "Chicken Biryani",
  titleEmphasis:      "Under ₹199",       // italic gold subtitle
  category:           "Indian Budget",
  subcategory:        "Under ₹199",
  date:               "Feb 2026",
  views:              "0",
  emoji:              "🍚",               // shown in hero if no image
  image:              "",                 // set to image URL if available
  savingsBadgeAmount: "₹201",
  savingsBadgeSub:    "vs resto",
  initialLikes:       0,

  stats: [
    { icon: "💰", value: "₹199",   label: "Total Cost"  },
    { icon: "⏱️", value: "40 min", label: "Total Time"  },
    // add/remove stat cards freely (3–6 recommended)
  ],

  intro: {
    lead:       "One line hook sentence.",
    body:       ["Paragraph 1.", "Paragraph 2."],
    highlights: ["Benefit 1", "Benefit 2", ...],
  },

  costTable: {
    heading:        "Cost Breakdown",
    headingIcon:    "₹",
    ingredients:    [{ name, qty, cost }, ...],
    totalServings:  "4 Servings",
    totalCost:      "₹199",
    perServing:     "~₹50",
    restaurantCost: "₹400",
    saving:         "₹350!",
    tip:            { type: "gold", icon: "💡", label: "Tip", text: "..." },
  },

  ingredients: [
    { groupName: "For the Rice",     items: ["...", ...] },
    { groupName: "For the Chicken",  items: ["...", ...] },
  ],

  steps: [
    {
      title: "Step name — X min",
      paras: ["Para 1", "Para 2"],
      tip:   { type: "gold|red|green", icon: "⭐", label: "Label", text: "..." },
    },
  ],

  tips: [
    { bold: "Bold heading.", text: "Explanation text." },
  ],

  substitutions: [
    { original: "...", swap: "...", saves: "~₹20" },
  ],

  variations: [
    { name: "🌶️ Name", desc: "Description.", price: "+₹X", full: false },
    // full: true = spans 2 columns
  ],

  savingsTable: {
    rows: [{ scenario, restCost, homeCost }, ...],
    tip: "Summary text.",
  },

  nutrition: [
    { value: "350",  label: "Calories" },
    { value: "45g",  label: "Carbs"    },
  ],

  faq: [
    { q: "Question?", a: "Answer." },
  ],

  related: [
    { emoji: "🍝", title: "Recipe name", price: "Under ₹149", href: "/posts/..." },
  ],

  seedComments: [
    { name, color1, color2, stars, text, date },
  ],
};
```

---

## IDE vs Admin Panel — What's Best for You?

### Option A — IDE (VS Code) + GitHub + Vercel ✅ Best now
**How it works:**
1. Duplicate template → fill in POST object → commit to GitHub
2. Vercel auto-deploys on every push
3. Your site updates in ~30 seconds

**Pros:** Free, fast, full control, no monthly cost
**Cons:** You edit code files (but POST object is just text/data — no coding needed)

**Folder structure:**
```
flavorsonbudget/
├── index.html
├── posts/
│   ├── creamy-garlic-pasta.html
│   ├── chicken-biryani.html
│   ├── anda-bhurji.html
│   └── ...
└── fob-theme-template.html   ← master copy, never publish
```

---

### Option B — Admin Panel (Recommended when you reach 20+ posts)

Use **Decap CMS** (free, open source) — it gives you a beautiful admin panel
that writes directly to your GitHub files.

**Setup:**
1. Add 2 config files to your Vercel repo
2. Go to `yoursite.com/admin` → login with GitHub
3. Fill in a form → it auto-generates the HTML file and pushes to GitHub
4. Vercel deploys automatically

**Looks like:** Notion / WordPress editor but outputs your FOB Theme files.
Cost: $0

**Or use Netlify CMS / Sanity.io** — slightly more powerful, still free tier.

---

### Option C — Next.js + Markdown (Best long-term, 50+ posts)

Migrate to Next.js on Vercel:
- Each post is a `.md` or `.mdx` file with a JSON frontmatter block
- FOB Theme becomes a React component
- All posts share the exact same design automatically
- You get a `/posts` index page, SEO, sitemaps for free

**Frontmatter example:**
```yaml
---
title: "Chicken Biryani"
subtitle: "Under ₹199"
category: "Indian Budget"
totalCost: "₹199"
perServing: "₹50"
restaurantCost: "₹400"
emoji: "🍚"
---

Your recipe text in markdown here...
```

---

## My Recommendation for FlavorsOnBudget

| Stage | Posts | Use |
|-------|-------|-----|
| **Now (0–20 posts)** | Duplicate HTML template in VS Code | Fast, zero setup |
| **Growth (20–50 posts)** | Add Decap CMS admin panel | Edit from phone/tablet |
| **Scale (50+ posts)** | Migrate to Next.js + Markdown | Professional, SEO-optimized |

**Start with Option A today.** It takes 10 minutes per post and you stay
in full control. When posting feels tedious, that's when to add the admin panel.

---

## Quick Start Checklist

- [ ] Download `fob-theme-template.html`
- [ ] Create a `/posts` folder on your Vercel project
- [ ] Duplicate template for your next recipe
- [ ] Edit only the `POST = { ... }` section
- [ ] Test locally by opening in browser
- [ ] Commit and push to GitHub
- [ ] Vercel deploys automatically ✅
