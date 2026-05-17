## 1. Project Setup

- [x] 1.1 Scaffold a Next.js App Router project with TypeScript in the repository root.
- [x] 1.2 Add styling, lint/build scripts, and responsive base layout configuration.
- [x] 1.3 Add `.env.example` entries for Supabase project URL and server-side insert credentials.
- [x] 1.4 Organize reusable assets from `static/ui-deck` and any selected FoodLoop/Tilda imagery for use in the app.

## 2. Landing Page

- [x] 2.1 Build the Georgian-first homepage shell with header, hero, main content, and footer.
- [x] 2.2 Implement hero and final call-to-action sections with inline waitlist form placement.
- [x] 2.3 Implement how-it-works, coming offer examples, impact snapshot, and partner invitation sections.
- [x] 2.4 Apply the deck-inspired visual system with Georgian-capable typography, responsive spacing, and accessible contrast.
- [x] 2.5 Remove or avoid placeholder testimonials, placeholder contact details, unconfirmed partner logos, map/search UI, download claims, and live marketplace actions.

## 3. Waitlist Signup

- [x] 3.1 Add Supabase waitlist schema/migration for `waitlist_signups` with email, role, locale, source, and created timestamp.
- [x] 3.2 Implement server-side waitlist submission using a Server Action or route handler.
- [x] 3.3 Validate required email and role fields before inserting.
- [x] 3.4 Handle duplicate emails as a success-style already-registered response.
- [x] 3.5 Add accessible pending, success, duplicate, and recoverable error states to the form.
- [x] 3.6 Add a mobile sticky call to action that scrolls to the inline waitlist form.

## 4. Verification

- [x] 4.1 Run the production build and resolve any build or type errors.
- [x] 4.2 Verify responsive layout at mobile, tablet, and desktop widths.
- [x] 4.3 Verify Georgian text rendering for line height, clipping, wrapping, and button overflow.
- [x] 4.4 Test waitlist form scenarios: valid user, valid partner, invalid email, duplicate email, and Supabase failure.
- [x] 4.5 Confirm the page does not expose secret Supabase credentials in client-side code.
