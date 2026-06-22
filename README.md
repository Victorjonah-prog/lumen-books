# Lumen Books

A small online bookstore with a seller dashboard, built with Next.js 16 App Router.

## How to run locally

1. Clone the repo
2. Run `npm install`
3. Run `npm run dev`
4. Visit http://localhost:3000

Seller login: seller@lumenbooks.test / password123

## Rendering table

Route: /
Mode: Static + ISR
Why: Featured books are the same for every visitor, refreshed every hour automatically.

Route: /books
Mode: SSR
Why: Reads the URL for category and sort filters. Different URL means different result, so it must render fresh every request.

Route: /books/[slug]
Mode: SSG + ISR fallback
Why: All known book pages are pre-built at deploy time. New books added later render on their first visit.

Route: /login
Mode: Static
Why: Just a form. The actual login logic runs in a Server Action when the form is submitted.

Route: /dashboard
Mode: SSR
Why: Reads the login cookie to show this seller's books. Must render fresh per request.

Route: /dashboard/new
Mode: Static
Why: Just a form. The mutation runs in a Server Action when submitted.

Route: /api/books
Mode: Dynamic
Why: Returns live JSON for the live search box.

## Build output

next build showed:

/ is Static with ISR revalidating every 1 hour
/books is Dynamic, server-rendered on every request
/books/[slug] is SSG, pre-rendered for all 10 known book slugs
/dashboard is Dynamic, server-rendered on every request
/dashboard/new is Static
/login is Static
/api/books is Dynamic

Legend:
Static means prerendered as static content
SSG means prerendered with generateStaticParams
Dynamic means server-rendered on demand

## Bonus items

None attempted. Focused on getting the core requirements working correctly.

## Trade-off

For the category and sort filters on the books page, I used a plain HTML form instead of JavaScript. When the user clicks Apply, the browser updates the URL and the server re-renders the page with the new filters. This keeps the whole page a Server Component with no client-side code needed for filtering. The downside is a full page reload on every filter change, but it cleanly proves that SSR is driven by the URL search params, which is exactly what this route is meant to demonstrate.