# Welcome to 🔋 Jumpstart

🔋 Jumpstart is batteries-included Remix starter kit by [Philipp Spiess](https://spiess.dev).

## What's included

- **🧱 App framework:** [Remix](https://remix.run), [Vite](https://vitejs.dev) and [React](https://reactjs.org)
- **🪲 Linting and Typechecking**: [TypeScript](https://www.typescriptlang.org) and [Biome](https://biomejs.dev/)
- **🔬 Testing**: [Vitest](https://vitest.dev) and [React Testing Library](https://testing-library.com)
- **🗄️ ORM**: [Drizzle](https://orm.drizzle.team/) on [Cloudflare D1](https://developers.cloudflare.com/d1)
- **🎨 UI and Styling**: [Tailwind](https://tailwindcss.com), [shadecn/ui](https://ui.shadcn.com), and [Taxonomy](https://tx.shadcn.com/).
- **🔒 Authentication**: [remix-auth](https://github.com/sergiodxa/remix-auth) and [remix-auth-github](https://github.com/sergiodxa/remix-auth-github)
- **🌩️ Deployment**: [Cloudflare Pages](https://pages.cloudflare.com)
- **🔄 CI/CD**: [Github Actions](https://github.com/features/actions)

## What's coming?

Here are some features that I want to add in the future. Create an issue if you want to see something else.

- [ ] Analytics, error logging, logs, and tracing via [Logkit](https://logkit.co)
- [ ] Dark/light mode support
- [ ] Feature flags
- [ ] Authorization
- [ ] Mutli-tenancy and teams
- [ ] Self service via [Stripe](https://stripe.com)
- [ ] Emails and background/scheduled workers
- [ ] Admin panel
- [ ] Marketing tools (Blog, Docs)
- [ ] Blob handling via Cloudflare R2

## Learn more

📖 See the [Remix docs](https://remix.run/docs) and the [Remix Vite docs](https://remix.run/docs/en/main/future/vite) for details on supported features.

## Development

```bash
pnpm run dev
```

## Deployment

First, build your app for production:

```bash
pnpm run build
```

Then run the app in production mode:

```bash
pnpm start
```
