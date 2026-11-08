# Ghost to GitHub Pages starter

A starter for moving a Ghost site to a free static site on GitHub Pages, with the posts as Markdown files in a repo. It builds with [Eleventy](https://www.11ty.dev/) and uses Ghost's own **Casper** theme (MIT licence, Ghost Foundation), rewritten as Nunjucks templates so it runs without Ghost.

It was made from a working move of a Ghost fiction site in November 2026, with that site's content and settings taken out. The steps below are the ones that move used. The import was tested on that site's real export: 21 posts and 2 pages came across, 112 images copied, and 1,271 internal links and images checked with none broken.

## What you get

- `scripts/import-ghost.mjs` turns a Ghost export into Markdown posts and pages, keeps Ghost's cards looking the same, copies the images, saves Ghost's code injection, and prints the settings to copy into `site.json`.
- Casper in `src/_includes/themes/casper/` and `src/assets/themes/casper/`, with light, dark or automatic color.
- Every page Ghost made for you: topic pages at `/tag/<slug>/`, the author page, a list of all posts at `/all/`, a feed at `/rss.xml` with every post, `sitemap.xml`, a 404 page, `robots.txt`, `llms.txt` and `llms-full.txt`.
- `.github/workflows/deploy.yml`, which publishes the site to GitHub Pages on every push to `main`.

## Move the site

### 1. Export from Ghost, before anything else

Ghost Admin, **Settings, Advanced, Import/Export, Export, All data**. Tick media files and themes. Ghost emails a download link that lasts 7 days. If the account is about to be suspended, do this first, because the export may stop working after.

Unzip it into `ghost-export/` so you have `ghost-export/export.json` and `ghost-export/content/images/`. Keep a backup of the zip somewhere else. It holds subscriber emails and your images, and `.gitignore` keeps it out of git.

Also download the members list (Ghost Admin, Members, Export) as `members.csv`, for Substack or whichever email tool you move to.

### 2. Import

```bash
npm install
rm src/posts/hello-world.md src/pages/about.md   # the samples
npm run import
npm run images
```

`npm run import` reports the posts, pages and images it copied, and any picture missing from the export. It then prints values to paste into `src/_data/site.json` (title, description, author, icon, timezone), Ghost's accent color for `src/assets/css/colors.css`, Ghost's main menu for `nav`, and any custom pages from Ghost's `routes.yaml`.

`npm run images` makes the smaller picture copies Ghost used to serve at `/content/images/size/w300/` and so on, and needs macOS (it uses `sips`). Don't skip it: the posts' pictures name those smaller copies, so without them the pictures fail to load. On another system, replace that step with a tool that makes the same files.

### 3. Fill in `src/_data/site.json`

Set `title`, `description`, `url` (the real domain, with `https://`), `author`, `authorSlug`, `timezone` and `nav`. Everything else may stay empty, and the page leaves out what's empty:

| Setting | What it does |
|---|---|
| `colorScheme` | `"auto"` follows the reader's device, `"dark"` or `"light"` forces one |
| `authorImage`, `icon`, `defaultImage`, `coverImage` | Pictures, as `/content/images/...` paths from the import |
| `twitter` | Handle without the `@`, for link previews |
| `subscribeUrl` | Where every Subscribe button goes. Ghost's member signup can't run on a static site |
| `tipUrl` | A tip or support link, such as a Stripe Payment Link |
| `cloudflareAnalyticsToken` | Cloudflare Web Analytics token. The script is added only to real builds |
| `copyright`, `notice` | The owner's name, and a line shown under every page and in `llms.txt`, such as a health or fiction disclaimer |
| `channels` | Custom pages such as `/episodes/` (see below) |

Replace the accent color in `src/assets/css/colors.css` with Ghost's. If the Ghost site set colors in Code injection, the import saved them in `theme/`, and you can copy them into `src/assets/css/custom.css`.

**Custom pages.** Ghost's `routes.yaml` can make a page like `/episodes/` that lists posts with one tag. It's in the export, but not in the posts. The import prints each one it finds. Add it to `channels`:

```json
"channels": [
  { "name": "Episodes", "slug": "episodes", "topic": "Episodes", "oldestFirst": true }
]
```

`topic` is the name of the Ghost tag that was public on the posts. `oldestFirst` lists the oldest post first, for a serial.

### 4. Check it before it goes live

```bash
npm start
```

Open http://localhost:8080. Compare it with the live Ghost site:
- every post's text and pictures, on a desktop and a phone-width window;
- the menu, the Subscribe button, the footer;
- that every old web address still works. Posts and pages keep their Ghost address, tags stay at `/tag/<slug>/` and the author page at `/author/<slug>/`. A custom page, a `/page/2` list, `/rss/` or anything else Ghost made is not automatic. `/rss/` redirects to `/rss.xml`, and `/page/2` lists are replaced by `/all/`.

Fix anything the import copied as it found it, such as stray formatting, only if you want to.

### 5. Put it on GitHub

1. Create the repo under the account the site belongs to, and make it **public**. Free GitHub Pages needs a public repo.
2. Make sure nothing private is in it. `.gitignore` already leaves out `ghost-export/`, zip files, member CSVs and `drafts/`. Run `git status` before the first commit and look.
3. Push to `main`. In the repo's **Settings, Pages**, set the source to **GitHub Actions**. The workflow in `.github/workflows/deploy.yml` builds and publishes on every push.
4. Check that the site loads at `https://<account>.github.io/<repo>/`. That temporary address needs a path prefix, so when a page looks unstyled there, it's the prefix, and it goes away on the real domain.

If more than one GitHub account lives on the computer, set the repo's own `user.name` and `user.email`, and push with a deploy key for this repo only, so commits and pushes use the right account.

### 6. Point the domain at GitHub

At the domain's DNS settings:

| Type | Name | Value |
|---|---|---|
| CNAME | `www` | `<account>.github.io` |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

Delete only the old Ghost `CNAME` and the old `A` record, and do it in one go, since a name can have only one CNAME. **Leave NS, SOA, MX and TXT records alone.** Deleting NS or SOA can take the whole domain offline.

Then in the repo's **Settings, Pages**, enter the custom domain, wait for the certificate, and tick **Enforce HTTPS**. Your own computer may keep showing the Ghost site for up to an hour because of its DNS cache. Check from a phone on mobile data, or from a public DNS lookup.

### 7. Move the email

On Substack: **Settings, Import**. Import the subscribers from `members.csv`, then the posts from `https://<your domain>/rss.xml`, which carries every post. Ghost's own feed shows only 15. Set the imported posts to free, then open each one and check its audience says **Everyone**. Imported posts can arrive paid-only. Check the post count, and remove any duplicates.

### 8. Cancel Ghost

Only after your own browser shows the new site, with no "Powered by Ghost" in the footer, and after exporting every other site on the same Ghost account.

## Day to day

- **Write a post:** add `src/posts/<slug>.md` with this front matter, then push. The file name is the address.

  ```yaml
  ---
  title: "Post title"
  date: "2026-01-01T12:00:00.000Z"
  updated: "2026-01-01T12:00:00.000Z"
  excerpt: "One or two sentences, shown on cards and in link previews."
  feature_image: "/content/images/2026/01/picture.jpg"
  feature_image_alt: "What the picture shows"
  topics: ["Tag name"]
  ---
  ```

  Put pictures in `src/content/images/YYYY/MM/` and run `npm run images`.
- **Change the look:** `src/assets/css/colors.css` for the accent, `src/assets/css/custom.css` for anything else. Casper's own files are in `src/assets/themes/casper/built/`, and they are better left alone.
- **Try another Ghost theme:** copy its `assets/built/` into `src/assets/themes/<name>/built/`, rewrite its Handlebars templates as `src/_includes/themes/<name>/` (`base`, `home`, `listing`, `post`, `page`, `card`, `feed`, `404`), and preview it with `THEME=<name> npm start`. Check its licence first: Ghost's own themes are MIT, but some paid themes forbid publishing their files, and this repo is public.

## Things that went wrong the first time

- Ghost's feed showed 15 of 21 posts, so import into Substack from the new feed.
- Imported Substack posts arrived paid-only. Check every one.
- The Mac that did the work kept showing the old site after DNS changed, which looked like a failed move.
- The export holds subscriber emails. It must stay out of a public repo.
- A copied-over typo is still a typo. Fix them after the move, not during.
