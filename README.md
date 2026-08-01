
# Rose App

Rose App is a bilingual flower shop built with Next.js. Customers can browse products and occasions, manage a cart and wishlist, complete cash or Visa checkout, save delivery addresses, review products, and track orders. Authenticated staff also have a dashboard for managing the catalogue and viewing store statistics.

The application is backed by the Elevate Flower API and uses NextAuth for credential-based sessions.

## Features

- Product catalogue with product details, related products, reviews, ratings, and search/filter support.
- Occasion browsing and category-based discovery.
- Cart, wishlist, checkout, saved addresses, and user orders.
- Cash and Visa payment flows through the backend API.
- Login, registration, password recovery, and JWT-backed NextAuth sessions.
- Dashboard pages for products, categories, occasions, profile data, and statistics.
- English and Arabic translations with automatic left-to-right/right-to-left layout handling.
- Address selection with Google Maps.

## Tech Stack

- Next.js 14 App Router and React 18
- TypeScript with strict checking
- Tailwind CSS and Radix UI primitives
- `next-intl` for localization
- NextAuth credentials provider for authentication
- React Hook Form and Zod for form handling and validation
- TanStack Query for client-side data fetching and caching

## Requirements

- Node.js 20 or newer
- Yarn 1.22.22 (the repository uses Yarn through `packageManager`)
- Access to the Elevate Flower API
- A Google Maps API key for the address map selector

## Getting Started

1. Install dependencies:

	```bash
	yarn install
	```

2. Create a local environment file at `.env.local`:

	```env
	API_URL=https://flower.elevateegy.com/api/v1
	NEXT_PUBLIC_API=https://flower.elevateegy.com/api/v1
	NEXTAUTH_SECRET=replace-with-a-long-random-secret
	GOOGLE_MAPS_API_KEY=replace-with-your-google-maps-key
	```

	`API_URL` is used by server-side actions and route handlers. `NEXT_PUBLIC_API` is used by browser-accessible services and selected server actions. Keep both values aligned with the same API version unless your deployment intentionally separates them.

3. Start the development server:

	```bash
	yarn dev
	```

4. Open [http://localhost:3000/en](http://localhost:3000/en) or [http://localhost:3000/ar](http://localhost:3000/ar).

Do not commit `.env.local` or expose `NEXTAUTH_SECRET`. The repository's local `.env` may contain machine-specific values and should be handled the same way.

## Available Scripts

| Command | Description |
| --- | --- |
| `yarn dev` | Start the development server with hot reload. |
| `yarn build` | Create a production build. |
| `yarn start` | Serve the production build. |
| `yarn lint` | Run the Next.js ESLint check. |

## Routes

All website routes are prefixed with a locale: `/en` or `/ar`.

| Area | Main routes |
| --- | --- |
| Storefront | `/home`, `/products`, `/products/[id]`, `/occasions` |
| Account | `/login`, `/register`, `/forgot-password` |
| Shopping | `/cart`, `/checkout`, `/allOrders` |
| Dashboard | `/dashboard`, `/dashboard/products`, `/dashboard/add-product`, `/dashboard/categories`, `/dashboard/occasions`, `/dashboard/profile` |

The middleware redirects unauthenticated users away from checkout, order history, and product management actions. Authenticated users are redirected away from login and registration pages.

## Project Structure

```text
src/
├── app/[locale]/       Localized pages, layouts, server actions, and dashboard
├── app/api/             Next.js route handlers that proxy authenticated API requests
├── components/          Shared UI, feature components, providers, and skeletons
├── i18n/                Locale routing and English/Arabic message files
└── lib/
	 ├── actions/         Mutations for cart, checkout, orders, products, and wishlist
	 ├── services/        Read-oriented API services
	 ├── schema/          Form validation schemas
	 ├── types/           Shared TypeScript types
	 └── utility/         Token and general-purpose helpers
```

The `@/*` path alias points to `src/*`. Add translations to both `src/i18n/messages/en.json` and `src/i18n/messages/ar.json` when introducing new user-facing copy.

## API and Authentication

The app consumes the Elevate Flower API, currently configured around the `/api/v1` API prefix. Most authenticated requests forward the access token stored in the NextAuth JWT. The Next.js handlers under `src/app/api` provide server-side proxy points for data such as cart contents, addresses, categories, reviews, and dashboard profile data.

Authentication uses the NextAuth credentials provider. Successful login stores the API access token and user data in a JWT session. The optional `rememberMe` flow uses a shorter session lifetime when it is not selected.

## Production

Build and run the application with:

```bash
yarn build
yarn start
```

Configure the same environment variables in the hosting provider. For production deployments, use a unique `NEXTAUTH_SECRET`, restrict the Google Maps key to the deployed domains, and verify that the API permits requests from the deployment origin. Vercel can deploy this Next.js application directly using the repository's build settings.

## Further Reading

- [Next.js App Router documentation](https://nextjs.org/docs/app)
- [NextAuth.js documentation](https://next-auth.js.org/)
- [next-intl documentation](https://next-intl.dev/)
- [Tailwind CSS documentation](https://tailwindcss.com/docs)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
