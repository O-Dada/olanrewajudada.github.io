# Olanrewaju Dada — Portfolio Website

A static portfolio site (plain HTML, CSS and a little JavaScript) built for GitHub Pages. No build tools or frameworks needed.

## What's in the folder

```
index.html          ← all the page content (edit text here)
styles.css          ← colours, fonts and layout (colours are at the top)
script.js           ← project filter buttons + footer year
assets/
  favicon.svg       ← browser-tab icon
  img/              ← put your portrait and photos here
  Olanrewaju-Dada-CV.pdf   ← ADD your CV with exactly this name
```

---

## Publish it on GitHub Pages (no command line needed)

1. **Sign in** to GitHub (create a free account if needed).
2. **Create a repository**: click **+ → New repository**.
   - Name it exactly **`<your-username>.github.io`** (e.g. `odada.github.io`). This gives you the clean address `https://<your-username>.github.io`.
   - Set it to **Public** (Pages is free for public repositories).
   - Tick **Add a README file**, then **Create repository**.
3. **Upload the files**: in the repository, click **Add file → Upload files**, then drag in `index.html`, `styles.css`, `script.js` and the whole `assets` folder. Click **Commit changes**.
4. **Turn on Pages**: go to **Settings → Pages**. Under *Build and deployment*, choose **Deploy from a branch**, select **main** and **/(root)**, then **Save**.
5. **Wait a minute or two**, then visit `https://<your-username>.github.io`. The Pages settings screen shows the live link when it's ready.

To update the site later, edit a file on GitHub (pencil icon) or upload a new version — it redeploys automatically.

### Prefer git? (you'll know how)

```bash
git clone https://github.com/<your-username>/<your-username>.github.io.git
cd <your-username>.github.io
# copy the site files in, then:
git add .
git commit -m "Launch portfolio"
git push
```

---

## Before you share the link — checklist

- [ ] **Replace every placeholder.** Search `index.html` for `[` — every `[LIKE THIS]` tag needs real content (findings, lessons, photo captions, talks).
- [ ] **Rewrite the "Why I do this research" paragraphs** in your own voice.
- [ ] **Add your CV** as `assets/Olanrewaju-Dada-CV.pdf`.
- [ ] **Add your portrait**: save as `assets/img/portrait.jpg`, then follow the `REPLACE` comment in the hero.
- [ ] **Add photos** to `assets/img/` and swap each gallery placeholder for an `<img>` (instructions are in the HTML comment). Only use photos of others with their consent.
- [ ] **Fill in the contact links**: search for `href="#"` and `you@example.com`.
- [ ] **Add a social-preview image** (1200×630) as `assets/img/og-image.jpg` so the link looks good on LinkedIn and WhatsApp.
- [ ] **Check with co-authors** before listing manuscripts or naming collaborators.
- [ ] Open the site on your phone as well as a laptop.

## Tailoring it for each PhD application

1. **"Currently exploring"** line in the hero — search for `EDIT PER APPLICATION` and change the text.
2. **Research interests** — reorder the chips so the most relevant one comes first.
3. **Projects** — point a supervisor to a filter, e.g. "see the Qualitative filter".

## Common edits

- **Change the accent colour**: in `styles.css`, change `--accent` (alternatives are suggested next to it).
- **Add a project**: copy one `<article class="project">…</article>` block and set its `data-tags` to any of `qual mixed evidence digital services`. The filters and count update automatically.
- **Custom domain (optional, ~£10/year)**: buy a domain from a registrar, then enter it under **Settings → Pages → Custom domain** and follow GitHub's DNS instructions.
