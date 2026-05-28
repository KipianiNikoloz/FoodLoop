## 1. OpenSpec Artifacts

- [x] 1.1 Create proposal, design, spec, and task artifacts for `improve-code-quality-structure`.

## 2. Landing And Styling Structure

- [x] 2.1 Extract landing content, brand mark, image helper, and section components from `app/page.tsx`.
- [x] 2.2 Split global CSS into base/theme, UI primitive, landing, and admin stylesheet imports while preserving cascade order.

## 3. Validation, Admin, And Types

- [x] 3.1 Add shared email validation helpers and update waitlist/admin login flows to use them.
- [x] 3.2 Extract admin waitlist data access, row typing, and presentational pieces from the admin route.
- [x] 3.3 Add a minimal Supabase database type boundary for `waitlist_signups` and remove redundant casts.

## 4. Quality Gates

- [x] 4.1 Add ESLint and separate lint/typecheck scripts.
- [x] 4.2 Add a copy integrity check for common mojibake markers and include it in verification.
- [x] 4.3 Update tests and documentation affected by renamed scripts or module boundaries.

## 5. Verification

- [x] 5.1 Run lint, typecheck, tests, copy integrity, and production build.
