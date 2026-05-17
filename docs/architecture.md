# Architecture

FoodLoop uses Next.js App Router with a small server-action boundary and Supabase as the persistence layer. The most important design choice is keeping waitlist validation in `lib/waitlist-core.ts`, away from React and Supabase, so it can be tested with plain Node tests.

## System Diagram

```mermaid
flowchart TD
  subgraph Client
    Browser[Browser]
    Page[app/page.tsx]
    Form[components/WaitlistForm.tsx]
    UI[components/ui primitives]
  end

  subgraph Server
    Action[app/actions/waitlist.ts]
    Core[lib/waitlist-core.ts]
    SupabaseAdmin[lib/supabase-admin.ts]
  end

  subgraph Data
    Table[(public.waitlist_signups)]
  end

  Browser --> Page
  Page --> Form
  Form --> UI
  Form -- form action --> Action
  Action --> Core
  Action --> SupabaseAdmin
  SupabaseAdmin --> Table
```

## Waitlist Submission Sequence

```mermaid
sequenceDiagram
  participant U as Visitor
  participant F as WaitlistForm
  participant A as joinWaitlist
  participant C as submitWaitlistForm
  participant S as Supabase

  U->>F: Enter email and choose role
  F->>A: Submit FormData
  A->>C: Validate and normalize
  alt Invalid email or role
    C-->>A: error state
    A-->>F: render message
  else Valid submission
    C->>A: normalized entry
    A->>S: insert waitlist_signups row
    S-->>A: insert result
    A-->>F: success, duplicate, or recoverable error
  end
```

## Source Boundaries

| File | Responsibility |
| --- | --- |
| [`app/page.tsx`](../app/page.tsx) | Landing page composition and product storytelling. |
| [`components/WaitlistForm.tsx`](../components/WaitlistForm.tsx) | Client-side form state, role choice, and submit button pending state. |
| [`app/actions/waitlist.ts`](../app/actions/waitlist.ts) | Server action that connects form submissions to Supabase. |
| [`lib/waitlist-core.ts`](../lib/waitlist-core.ts) | Email normalization, role validation, duplicate mapping, and message-state decisions. |
| [`lib/supabase-admin.ts`](../lib/supabase-admin.ts) | Server-only Supabase admin client creation. |
| [`supabase/migrations/20260517120000_create_waitlist_signups.sql`](../supabase/migrations/20260517120000_create_waitlist_signups.sql) | Waitlist table schema and RLS enablement. |

## State Model

```mermaid
stateDiagram-v2
  [*] --> idle
  idle --> error: invalid email or role
  idle --> success: inserted
  idle --> duplicate: unique email conflict
  idle --> error: database failure
  error --> success: resubmit valid data
  duplicate --> duplicate: resubmit same email
  success --> duplicate: resubmit same email
```

## Security Shape

The browser never receives the Supabase service role key. Form submissions go through a Next.js server action, which creates the Supabase client server-side and inserts into a table with row-level security enabled.

```mermaid
flowchart LR
  Browser[Browser] -- no service key --> ServerAction[Server action]
  ServerAction -- service role key from env --> Supabase[(Supabase)]
  Supabase --> RLS[RLS enabled on table]
```

