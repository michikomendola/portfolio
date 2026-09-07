# Michiko Mendola — QA Portfolio

Personal QA portfolio layout: Home, About, Certificates, Services, Work, and Contact.

Repository: https://github.com/michikomendola/portfolio

GitHub Pages URL after you enable it:

https://michikomendola.github.io/portfolio/

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
| Contact email | `assets/js/main.js` → `CONTACT_EMAIL` (set to michimendola@gmail.com) |
| Photo | `assets/img/profile.png` |
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
