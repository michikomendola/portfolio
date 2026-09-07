# Michiko Mendola — QA Portfolio

Personal QA portfolio layout: Home, About, Certificates, Services, Work, and Contact.

Live URL after you enable GitHub Pages:

`https://<your-github-username>.github.io/<repo-name>/`

If the repository is named `<username>.github.io`, the site is the root of that domain.

## Publish on GitHub Pages

1. Create a new GitHub repository (public).
2. Push this folder:

```bash
git init
git add .
git commit -m "Add QA portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

3. In the repo: **Settings → Pages → Build and deployment**.
4. Source: **Deploy from a branch**. Branch: `main`, folder: `/ (root)`.
5. Open the Pages URL after a minute.

## Customize before you send it to recruiters

| Item | Where |
| --- | --- |
| Contact email | `assets/js/main.js` → `CONTACT_EMAIL` |
| Photo | Replace the initials block in `index.html` (`.avatar-mark`) with an `<img>` |
| GitHub username / extra certs | `index.html` |
| LinkedIn | already set to [michikomendola](https://www.linkedin.com/in/michikomendola) |

## Local preview

Open `index.html` in a browser, or from this folder:

```bash
npx --yes serve .
```

## What’s inside

- `index.html` — one-page portfolio
- `work/` — case studies and sample artifacts
- `samples/cypress/` — example Cypress specs
- `assets/` — CSS, JS, favicon
