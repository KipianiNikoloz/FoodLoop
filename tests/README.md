# Tests

The test suite targets framework-light business logic in `lib/`, including waitlist validation, admin authorization, and canonical site URL handling.

## Test Flow

```mermaid
flowchart LR
  Test[waitlist-core.test.ts]
  AdminTest[admin-auth.test.ts]
  SiteUrlTest[site-url.test.ts]
  Core[lib/waitlist-core.ts]
  Admin[lib/admin-auth.ts]
  SiteUrl[lib/site-url.ts]
  FakeInsert[Fake insert function]
  State[WaitlistFormState]

  Test --> Core
  Test --> FakeInsert
  Core --> State
  AdminTest --> Admin
  SiteUrlTest --> SiteUrl
```

## Running Tests

```bash
npm test
```

The tests use Node's built-in test runner through `tsx`, so TypeScript test files can run without a separate compile step.
