# Tests

The test suite targets framework-light business logic in `lib/`, including waitlist validation and admin authorization.

## Test Flow

```mermaid
flowchart LR
  Test[waitlist-core.test.ts]
  AdminTest[admin-auth.test.ts]
  Core[lib/waitlist-core.ts]
  Admin[lib/admin-auth.ts]
  FakeInsert[Fake insert function]
  State[WaitlistFormState]

  Test --> Core
  Test --> FakeInsert
  Core --> State
  AdminTest --> Admin
```

## Running Tests

```bash
npm test
```

The tests use Node's built-in test runner through `tsx`, so TypeScript test files can run without a separate compile step.
