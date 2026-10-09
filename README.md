# Aurora Tech

Public studio site for [www.auroratech-ai.com](https://www.auroratech-ai.com).

The page introduces Aurora Tech as an early-stage independent studio working on single-player games and AI-assisted developer tools, with Claude and other AI tools in the workflow. Products are in development and not publicly released. Copy on this site stays general: it does not name unreleased projects, link store pages, or state traction figures.

Contact: jeff@auroratech-ai.com

## GitHub Pages

The site is static. GitHub Pages serves the repository root. There is no build step.

| Setting | Value |
| --- | --- |
| Source | Branch `main`, folder `/` (repository root) |
| Custom domain | `www.auroratech-ai.com`, from the `CNAME` file |
| Jekyll | Off. `.nojekyll` keeps Pages from running Jekyll |
| Enforce HTTPS | Leave this off until a certificate is issued, then turn it on in the repository’s GitHub Pages settings. Do not change that setting from a pull request. |

`404.html` is the custom missing-page response. `privacy.html` is linked from the footer.

Leave `CNAME` and `.nojekyll` in the root. Removing either breaks the domain or lets Jekyll process the site.

## Local preview

From the repository root:

```bash
python3 -m http.server 8080
```

Open `http://127.0.0.1:8080/`. Paths are root-relative (`/styles.css`, `/hero.jpg`), so open the site through that server rather than as a `file://` document. Try `/privacy.html` and a missing path such as `/missing` (GitHub Pages will use `404.html`; a local static server will only show `404.html` if you open it directly).

## Files

- `index.html` — home: hero, studio, how we work with AI, contact
- `privacy.html` — privacy notice (no analytics on this site)
- `404.html` — not found
- `styles.css`, `site.js` — shared presentation
- `hero.jpg` — hero photograph
- `favicon.svg`, `favicon.ico`, `favicon-32.png`, `apple-touch-icon.png` — icons
- `og-image.png` — Open Graph / Twitter preview, 1200×630
- `CNAME`, `.nojekyll` — Pages configuration
