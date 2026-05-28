## Why

The app is functionally healthy, but the current implementation concentrates page composition, copy, styling, admin data access, and validation in a few files. Cleaning these boundaries now will make the next product changes safer while preserving the current landing page, waitlist, and admin behavior.

## What Changes

- Refactor the landing page into focused content and section modules without changing rendered copy or waitlist behavior.
- Split global CSS by concern so base styles, UI primitives, landing styles, and admin styles are easier to maintain.
- Centralize shared email normalization and validation for waitlist and admin login flows.
- Extract admin waitlist data access and presentational pieces out of the route file.
- Add typed Supabase table boundaries for `waitlist_signups` and remove redundant casts.
- Add automated quality gates for linting, typechecking, and copy encoding integrity.

## Capabilities

### New Capabilities

- `code-quality-structure`: Maintainable source organization, localized copy integrity, typed data access, and quality gate requirements for the FoodLoop app.

### Modified Capabilities

None.

## Impact

- Affects internal Next.js modules under `app/`, `components/`, and `lib/`.
- Affects CSS organization and imports, but not class-level visual behavior.
- Adds development lint dependencies and scripts.
- Does not change public routes, Supabase schema, environment variables, waitlist fields, admin auth behavior, or deployment requirements.
