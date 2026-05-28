## Context

FoodLoop is a small Next.js App Router app with a Georgian-first landing page, Supabase-backed waitlist submissions, and a protected admin email list. Typecheck, tests, and production build currently pass, but the source has early maintainability pressure: the homepage and global stylesheet carry unrelated concerns, admin route code mixes authorization/data/UI, and email validation is duplicated.

## Goals / Non-Goals

**Goals:**

- Preserve all current user-facing behavior while improving module boundaries.
- Keep Georgian copy as code-native UTF-8 text and guard against actual encoding corruption.
- Make validation, admin data access, and Supabase row typing reusable and testable.
- Add linting as a real quality gate alongside typecheck, tests, and build.

**Non-Goals:**

- No redesign, route changes, database migration, new waitlist fields, pagination, export, or admin feature expansion.
- No copy rewrite beyond repairing actual encoding defects if found.
- No migration to a different UI framework or styling system.

## Decisions

- **Keep route files thin.** `app/page.tsx` and admin route files should compose imported content/components and own route-level flow only.
- **Use internal modules rather than broad abstraction.** Extract content, section components, and admin helpers only where they remove current concentration.
- **Split CSS through imports from `app/globals.css`.** This keeps Next's global CSS import model simple while separating base, UI, landing, and admin concerns.
- **Use a small shared validation module.** Email normalization and validation are common behavior; waitlist role parsing remains waitlist-specific.
- **Use a minimal local Supabase database type.** The app only uses one table today, so a checked local type is enough unless generated Supabase types are introduced later.
- **Treat mojibake as a testable source-integrity issue.** Browser-visible Georgian copy should be valid UTF-8, and tests should fail if common corrupted markers appear in app-facing source files.

## Risks / Trade-offs

- File movement can create noisy diffs -> keep class names and behavior stable, and move code in small focused steps.
- CSS splitting can accidentally change cascade order -> preserve the original ordering through `@import` order.
- ESLint adoption can surface unrelated issues -> configure it for practical Next/TypeScript checks without rewriting unrelated style.
- PowerShell may display Georgian incorrectly -> validate source bytes and browser rendering rather than relying on terminal output.
