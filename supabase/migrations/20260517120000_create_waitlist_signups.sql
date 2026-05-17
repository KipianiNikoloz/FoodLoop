create table if not exists public.waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  role text not null check (role in ('user', 'partner')),
  locale text not null default 'ka',
  source text not null default 'landing',
  created_at timestamptz not null default now()
);

alter table public.waitlist_signups enable row level security;

-- Public clients must not read or mutate waitlist data directly.
-- The Next.js server action inserts with a server-side service role key.
