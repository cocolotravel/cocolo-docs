# Starlight Starter Kit: Basics

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

```
npm create astro@latest -- --template starlight
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
│   └── admin/          # Decap CMS (see "Content editing" below)
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 📝 Content editing (Decap CMS)

Non-technical editors can edit content through a web UI at `/admin/`, powered by [Decap CMS](https://decapcms.org). Its config lives in `public/admin/config.yml`, with one collection per content folder under `src/content/docs/fr/`.

- **Auth**: handled by [DecapBridge](https://decapbridge.com) (`identity_url`/`gateway_url` in `config.yml`), not Netlify Identity — Netlify deprecated Identity/Git Gateway and no longer offers it for new sites. Collaborators are invited by email from the DecapBridge dashboard.
- **Images**: the CMS's media library is wired to Cloudinary (cloud name `dzltvayos`, same account used for existing content images), so editors browse/upload directly into Cloudinary instead of committing files to the repo.
- **Local editing**: run `npx decap-server` alongside `npm run dev` to edit against your local filesystem without going through DecapBridge auth (`local_backend: true` in `config.yml` enables this).

## 🗺️ Sitemap & broken link checking

- [`@astrojs/sitemap`](https://docs.astro.build/en/guides/integrations-guide/sitemap/) generates `sitemap-index.xml`/`sitemap-0.xml` on every build. Note the site currently sends `X-Robots-Tag: noindex, nofollow` (see `netlify.toml`/`astro.config.mjs`), so search engines won't act on it until that's lifted.
- [`astro-broken-links-checker`](https://github.com/imazen/astro-broken-link-checker) checks internal and external links on every build (`checkExternalLinks: true`) and logs any broken ones to the console — it doesn't fail the build (`throwError` defaults to `false`). Some external results are known false positives (`maps.app.goo.gl` and Cloudinary links can reject scripted requests that work fine in a browser).
- After each build, `scripts/publish-broken-links-log.mjs` copies the checker's `.link-checker/broken-links.log` into `dist/broken-links.log`, so it's published at `https://docs.cocolotravel.com/broken-links.log` on every deploy — a live, no-login-required reference for staff to check for outstanding broken links.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
