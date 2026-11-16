# terrellgrenyion.com

Personal portfolio for **Terrell Grenyion**, Lead Security Analyst focused on GRC, risk, and audit readiness, backed by hands-on security operations.

Live site: <https://www.terrellgrenyion.com>

It's a plain static site (HTML, CSS, and a little JavaScript, with no build step), hosted on GitHub Pages with a custom domain (`CNAME`).

## Structure

```
/
├── index.html              Home: summary, experience, skills, certifications, education, publications
├── projects/index.html     Projects: Professional, Academic, Lab & Engineering
├── blog/index.html         Blog: post list (GRC pieces first)
├── grc-ai-whitepaper/      White paper: Building a Framework for Responsible Enterprise AI
├── ugc/                    Separate UGC creator portfolio (self-contained; see ugc/README.md)
├── 404.html                Shown by GitHub Pages for missing pages
├── styles.css              Shared styles for every page except /ugc
├── assets/js/theme.js      Applies light/dark theme before first paint (load in <head>, no defer)
├── assets/js/site.js       Theme toggle button + footer year (load with defer)
├── favicon.svg / .ico
├── robots.txt, sitemap.xml
└── CNAME                   www.terrellgrenyion.com
```

Academic deliverable PDFs are hosted in a separate repo, [`rell-portfolio-deliverables`](https://github.com/prollytrell/rell-portfolio-deliverables), and linked from the Projects page.

## Common edits

- **Add a blog post:** in `blog/index.html`, copy an `<article class="blog-card">` block, paste it at the top of the list, and update it. For a full post hosted on this site, create a new folder (e.g. `my-post/index.html`) using `grc-ai-whitepaper/index.html` as the template, then add the URL to `sitemap.xml`.
- **Add a project:** in `projects/index.html`, copy an `<article class="project-card">` into the right group. Add `<span class="project-status">IN PROGRESS</span>` to the title for unfinished work.
- **New page:** copy the `<head>` and `<header>` from an existing page. Use root-relative paths (`/styles.css`, `/projects/`) so links work at any depth, and give the current page's nav link `class="nav-link active"`.

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Privacy

The site deliberately shows no phone number. Contact is by email (terrellgrenyion@gmail.com) or LinkedIn. Professional project write-ups describe the work without client names or data.
