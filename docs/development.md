# Development Guide

## Prerequisites

- Node.js compatible with Next.js 16.
- npm.
- A Supabase project when testing real waitlist inserts.

## Local Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Add these values to `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
ADMIN_EMAILS=owner@example.com
ADMIN_PASSWORD=change-this-long-password
```

The service role key and admin password are required only on the server side. Do not expose them to client components. The publishable key is used for Supabase Auth session handling, `ADMIN_EMAILS` controls which signed-in users can view `/admin`, and `ADMIN_PASSWORD` is used by `npm run seed:admins` to create or rotate those admin passwords.

After configuring the environment, seed the admin accounts:

```bash
npm run seed:admins
```

## Daily Workflow

```mermaid
flowchart LR
  Edit[Edit source]
  Typecheck[npm run lint]
  Test[npm test]
  Build[npm run build]
  Review[Browser/visual review]

  Edit --> Typecheck
  Typecheck --> Test
  Test --> Build
  Build --> Review
```

## Common Tasks

| Task | Where to Work |
| --- | --- |
| Change landing copy or section order | [`app/page.tsx`](../app/page.tsx) |
| Change layout, color, spacing, or responsive behavior | [`app/globals.css`](../app/globals.css) |
| Change form controls or pending state | [`components/WaitlistForm.tsx`](../components/WaitlistForm.tsx) |
| Change validation or duplicate behavior | [`lib/waitlist-core.ts`](../lib/waitlist-core.ts) and [`tests/waitlist-core.test.ts`](../tests/waitlist-core.test.ts) |
| Change admin access rules | [`lib/admin-auth.ts`](../lib/admin-auth.ts) and [`tests/admin-auth.test.ts`](../tests/admin-auth.test.ts) |
| Change admin email list UI | [`app/admin/page.tsx`](../app/admin/page.tsx) and [`app/globals.css`](../app/globals.css) |
| Change database fields | [`supabase/migrations`](../supabase/migrations) and the waitlist insert types |

## Encoding Note

The app uses Georgian copy. Keep files saved as UTF-8 and review rendered pages in the browser after changing localized strings.
