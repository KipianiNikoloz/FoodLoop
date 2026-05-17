# Tests

The test suite currently targets the waitlist business logic in `lib/waitlist-core.ts`.

## Test Flow

```mermaid
flowchart LR
  Test[waitlist-core.test.ts]
  Core[lib/waitlist-core.ts]
  FakeInsert[Fake insert function]
  State[WaitlistFormState]

  Test --> Core
  Test --> FakeInsert
  Core --> State
```

## Running Tests

```bash
npm test
```

The tests use Node's built-in test runner through `tsx`, so TypeScript test files can run without a separate compile step.

