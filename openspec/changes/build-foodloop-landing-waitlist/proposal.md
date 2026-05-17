## Why

FoodLoop needs a credible launch website for Tbilisi that explains the local surplus-food marketplace clearly, looks strong in Georgian, and converts early interest into a waitlist. The existing Tilda reference has useful mission copy and imagery, but the final site should feel more polished, product-led, and trustworthy.

## What Changes

- Build a Georgian-first responsive landing page for FoodLoop using the existing UI deck as the visual foundation.
- Reuse appropriate copy and imagery from the Tilda reference while removing placeholder testimonials, placeholder contact details, unconfirmed partner logos, and template-like sections.
- Present FoodLoop as a coming-soon Tbilisi marketplace for discounted surplus food, without implying live app downloads, live inventory, map search, or reservation functionality.
- Add an ultra-short waitlist signup form for both consumers and partners.
- Store waitlist submissions in Supabase and provide clear on-page success and error states.
- Prepare the app for deployment on Vercel with Next.js.

## Capabilities

### New Capabilities

- `landing-page`: Public Georgian-first marketing page that communicates the FoodLoop concept, product promise, impact, and partner invitation.
- `waitlist-signup`: Waitlist form and persistence flow for collecting early-access interest from users and partners.

### Modified Capabilities

None.

## Impact

- Adds a new Next.js App Router frontend where no app scaffold currently exists.
- Adds Supabase database requirements for storing waitlist signups.
- Introduces environment configuration for Supabase and Vercel deployment.
- Uses static assets from `static/ui-deck` and selected FoodLoop/Tilda imagery where appropriate.
