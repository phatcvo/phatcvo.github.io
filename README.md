# Phat C. Vo

Source for [phatcvo.github.io](https://phatcvo.github.io/), my portfolio and technical writing on robotics, motion planning, and fleet coordination.

The site covers my experience, projects, and publications, plus long-form series on building an autonomous mobile robot, model predictive control, deep reinforcement learning, and robot dynamics.

## Stack

- [Hugo](https://gohugo.io/) (extended, 0.128.0) for the site build
- [Tailwind CSS](https://tailwindcss.com/) v4 for styling
- [Pagefind](https://pagefind.app/) for static search
- GitHub Actions and GitHub Pages for deployment

## Run locally

```sh
npm install
hugo server
```

Search needs an index, which `hugo server` does not build. To try it locally:

```sh
hugo
npx -y pagefind --site public --serve
```

## Update content

- Profile, experience, projects, and links: [`config.yaml`](config.yaml)
- Articles and series: [`content/blog/`](content/blog/)
- After adding or replacing a project image, regenerate the thumbnails with `python3 scripts/make-thumbs.py` (requires Pillow).

## Deployment

Every push to `main` builds the site and search index and publishes them to GitHub Pages through [`.github/workflows/hugo.yml`](.github/workflows/hugo.yml).
