This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Personal sync information

The static information pages live in `public/conversations-sync/` and are served
at `/conversations-sync/`. This directory contains only public app information,
privacy information, use information, and styles. It has no archive data or logo.

The directory is excluded from the generated sitemap and disallowed in
`robots.txt`. Each HTML page also has a `noindex` meta tag, and Netlify serves an
`X-Robots-Tag` header using `public/_headers`. These are crawler directives, not
access controls. A crawler blocked by `robots.txt` cannot fetch the `noindex` tag;
robots rules alone cannot guarantee that a URL never appears in search results.

`npm run build` exports the site to `out/`, then generates the sitemap and
`robots.txt` directly into that deployment directory.

## Licenses

- `app/icon.png` by [Twitter, Inc](https://github.com/twitter/twemoji), used under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
