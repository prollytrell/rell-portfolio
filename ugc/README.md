# Terrell UGC portfolio — setup guide

This folder is a self-contained, one-page UGC portfolio for `terrellgrenyion.com/ugc/`. It has no links to the résumé site, no external framework, and no paid dependency.

## Fastest path to launch

1. Add your portrait as `assets/images/terrell-portrait.webp`.
2. Add six exported videos to `assets/videos/` using the exact filenames below.
3. Confirm the contact email in the opening `<body>` tag of `index.html`.
4. Copy this entire `ugc` folder into the publishing source of your existing GitHub Pages repository.
5. Commit, push, and visit `https://www.terrellgrenyion.com/ugc/`.

## Exact media filenames

The placeholders disappear automatically when these files exist:

| Slot | Filename | Suggested sample |
| --- | --- | --- |
| 01 | `01-tech-demo.mp4` | Physical tech product demo |
| 02 | `02-app-walkthrough.mp4` | App or SaaS walkthrough |
| 03 | `03-problem-solution.mp4` | Everyday consumer product |
| 04 | `04-testimonial.mp4` | Direct-to-camera testimonial |
| 05 | `05-routine-integration.mp4` | Lifestyle or wellness routine |
| 06 | `06-visual-showcase.mp4` | Product B-roll with voiceover |

The portrait should be a vertical `4:5` or `3:4` image. A WebP around 1600–2200 pixels tall is plenty.

## Export settings for the website

Record your masters in 4K, but do **not** upload the 4K masters to GitHub. Export separate web copies:

- Resolution: `1080 × 1920` vertical
- Format: MP4
- Video codec: H.264
- Audio: AAC, 128–192 kbps
- Frame rate: match the recording, usually 24 or 30 fps
- Bitrate: roughly 6–10 Mbps, or use a high-quality variable bitrate preset
- Enable “fast start” / “web optimized” when your editor offers it
- Practical target: under 20–25 MB per portfolio video

Keep the original 4K files backed up for client delivery or future re-edits. The page uses `preload="metadata"`, so it does not download all six videos on arrival.

## Set the contact email once

Near the top of `index.html`, find:

```html
<body data-contact-email="ugc@terrellgrenyion.com">
```

Change that one value if you prefer another address. The email button, copy button, and displayed address update automatically.

## Add the folder to the current GitHub Pages site

First open the repository on GitHub and check **Settings → Pages → Build and deployment**. Then use the matching case:

### If Pages publishes from `main` and `/(root)`

Place the folder beside the existing home page:

```text
your-repository/
├── index.html
├── ugc/
│   ├── index.html
│   ├── README.md
│   └── assets/
└── ...your existing files
```

### If Pages publishes from `main` and `/docs`

Place the folder at `docs/ugc/`:

```text
your-repository/
└── docs/
    ├── index.html
    ├── ugc/
    │   ├── index.html
    │   └── assets/
    └── ...your existing files
```

### If Pages publishes through GitHub Actions

Put `ugc/` inside the static/public directory that your build copies into the deployed artifact. Common examples are `public/ugc/`, `static/ugc/`, or the final output folder. Confirm that the deployed artifact ends with this structure:

```text
artifact-root/
├── index.html
└── ugc/
    ├── index.html
    └── assets/
```

Do not change the existing `CNAME`. The same custom domain will serve the new subdirectory automatically.

## Test before pushing

From the publishing root—the directory containing the existing `index.html`—run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/ugc/`. Check every video, the email button, the mobile layout, and the lack of links back to the main site.

## Commit it

```bash
git switch -c add-ugc-portfolio
git add ugc
git commit -m "Add standalone UGC portfolio"
git push -u origin add-ugc-portfolio
```

If your publishing source is `/docs`, use `git add docs/ugc` instead. Merge the branch through your normal pull-request process, or commit directly to the publishing branch if that is how you already maintain the site.

## What “hidden” means

The page intentionally:

- contains no links to the résumé site;
- uses only on-page anchors;
- includes `noindex, nofollow` so search engines are asked not to index it.

It is still a public page. Anyone with the URL can open it, and `noindex` is not access control. That is appropriate for a portfolio link you send to brands. If you later want search traffic, change the robots tag in `index.html` to `index, follow`.

## Before sending it to brands

- Replace all six visible video placeholders.
- Replace the portrait placeholder.
- Watch every export on both a phone and desktop.
- Confirm the email alias can receive and send mail.
- Keep “Spec sample” on unpaid examples. Change it only when a card becomes real client work and you have permission to show it.
- Do not add client logos, performance claims, or testimonials until they are true and you have approval.
- Confirm that project agreements separately define paid usage, duration, channels, territory, revisions, raw footage, and exclusivity.

See `VIDEO-SHOT-LIST.md` for the six samples to record first.
