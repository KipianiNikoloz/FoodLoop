## Context

The current app is a Next.js App Router landing page with a Supabase-backed `waitlist_signups` table. Inserts already run server-side with a service role key, RLS is enabled, and there is no user authentication or admin route today.

## Goals / Non-Goals

**Goals:**

- Add a protected admin route for viewing received waitlist signup emails.
- Use seeded Supabase Auth email/password accounts for admin identity.
- Limit access to allowlisted admin email addresses.
- Keep email data reads server-only and avoid exposing service role credentials to the browser.

**Non-Goals:**

- CSV export, filtering, deletion, editing, or pagination beyond a bounded newest-first list.
- A general user account area.
- Database schema changes or public read policies.

## Decisions

- Use `@supabase/ssr` for Auth session handling in App Router. This follows Supabase's current SSR guidance and keeps sessions in cookies for server-rendered admin routes.
- Use password authentication with a seed script. This avoids email redirect/template configuration while still relying on Supabase Auth sessions.
- Use `ADMIN_EMAILS` as the admin authorization source. This is explicit, easy to deploy, and avoids adding a new admin table or relying on user metadata management.
- Query waitlist rows with the existing service role client only after validating the signed-in user's allowlisted email. This preserves the existing RLS posture and keeps browser clients unable to read the table directly.
- Render the admin list as a server component. The first version does not need live client interactivity, and server rendering minimizes client-side exposure of operational data handling logic.

## Risks / Trade-offs

- Seeded passwords require careful secret handling and rotation -> keep `ADMIN_PASSWORD` server-only and rerun the seed script when rotating credentials.
- A misconfigured `ADMIN_EMAILS` value could lock out valid admins -> show a clear not-authorized state and document comma-separated matching.
- Service role reads can bypass RLS -> keep the query inside server-only code and perform auth and allowlist checks before any data fetch.
- The first version fetches a bounded newest-first list -> document the 500-row limit and defer pagination/export until needed.
