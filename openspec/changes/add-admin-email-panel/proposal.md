## Why

FoodLoop already collects waitlist emails, but there is no in-app way for operators to view them. An admin-only panel lets the team inspect received signups without direct database access or exposing email data publicly.

## What Changes

- Add a protected `/admin` area for viewing received waitlist signups.
- Add Supabase Auth magic-link sign-in for admin users.
- Authorize admin access with a server-side `ADMIN_EMAILS` allowlist.
- Display waitlist email rows newest-first with role, source, locale, and created timestamp metadata.
- Keep waitlist reads server-only through the existing Supabase service role boundary.

## Capabilities

### New Capabilities

- `admin-email-list`: Admin-only viewing of received waitlist emails and signup metadata.

### Modified Capabilities

None.

## Impact

- Adds Supabase SSR auth support and one new dependency.
- Adds auth callback and admin routes under the Next.js App Router.
- Adds environment configuration for a Supabase publishable key and admin email allowlist.
- Updates docs and tests around admin authorization behavior.
