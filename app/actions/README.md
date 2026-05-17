# Server Actions

This folder contains server-side actions that can be called from React forms.

## Waitlist Action

```mermaid
flowchart LR
  Form[WaitlistForm]
  Action[joinWaitlist]
  Core[submitWaitlistForm]
  Supabase[Supabase admin client]
  Table[(waitlist_signups)]

  Form --> Action
  Action --> Core
  Action --> Supabase
  Supabase --> Table
```

`waitlist.ts` receives `FormData`, delegates validation and result mapping to `lib/waitlist-core.ts`, and inserts valid signups into Supabase with a server-side service role key.

