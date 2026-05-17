## Context

The repository currently contains the OpenSpec workspace and the `static/ui-deck` image deck, but no Next.js application scaffold. The FoodLoop website should use the deck as the primary art direction source and the Tilda reference as content/source material, while improving credibility, hierarchy, and conversion.

The first launch surface is not a working marketplace. It is a Georgian-first coming-soon landing page for Tbilisi that collects waitlist interest from consumers and partners.

## Goals / Non-Goals

**Goals:**

- Ship a responsive, polished landing page that looks intentionally designed in Georgian.
- Make FoodLoop feel like a credible local food-rescue marketplace without overstating product readiness.
- Collect ultra-short waitlist submissions in Supabase with reliable validation and feedback.
- Prepare the project for Vercel deployment.

**Non-Goals:**

- No live map, search, inventory, reservation, payment, pickup, authentication, or app download flow.
- No fake partner logos, fake testimonials, fabricated venue names, or placeholder contact data.
- No separate waitlist page or modal-only signup flow for v1.

## Decisions

- **Use Next.js App Router with TypeScript.** This gives a Vercel-native deployment path and supports server-side form handling without adding a separate backend. Alternative considered: static HTML with a hosted form endpoint; rejected because Supabase persistence and future app growth are expected.
- **Use an inline waitlist form with a sticky mobile CTA.** The hero and final CTA should contain the form directly, while mobile visitors get a sticky button that scrolls to the form. Alternative considered: modal or separate `/waitlist` page; rejected to reduce friction.
- **Use server-side submission to Supabase.** The form should submit through a Server Action or route handler so secret credentials are never exposed and validation can be centralized. Alternative considered: direct browser insert with public anon key and RLS; acceptable in some cases, but server-side insert is simpler for a public waitlist and keeps the data surface smaller.
- **Use a minimal waitlist schema.** Store email, role, locale, source, and created timestamp. The user explicitly chose an ultra-short form, so no name, phone, district, or partner business fields are required for v1.
- **Design Georgian-first.** Select Georgian-capable fonts and test real Georgian strings before polishing English typography. The deck's palette and warm modern tone should guide the interface, but English-oriented display fonts must not compromise Georgian readability.
- **Use category-based offer previews.** Show realistic future categories such as bakery, cafe lunch, groceries, or prepared meals, clearly as examples. Avoid map/search widgets because the user chose a product-led direction without map/search.

## Risks / Trade-offs

- **Georgian font rendering may differ across devices** -> Use robust web fonts with Georgian support, conservative line-height, and browser QA at mobile and desktop widths.
- **Using Tilda content too literally could preserve template weaknesses** -> Treat Tilda as source material and exclude placeholder testimonials, placeholder contact info, and unsupported claims.
- **A very short form gives limited launch insight** -> Store role and source cleanly so the team can still segment consumers and partners.
- **Duplicate email handling can feel like an error** -> Treat duplicates as a friendly success-style state.
- **Supabase environment may not be configured during local development** -> Implement clear env variable requirements and graceful error feedback.

## Migration Plan

1. Create the Next.js app scaffold in the existing repository.
2. Add the Supabase waitlist table migration or documented SQL required for `waitlist_signups`.
3. Configure local `.env.example` entries for Supabase URL and server-side secret key.
4. Build and test locally across responsive viewports.
5. Deploy on Vercel with production Supabase environment variables.

Rollback is low risk for v1: disable the Vercel deployment or revert the app files and Supabase migration if the launch page should be withdrawn.

## Open Questions

None for v1. Confirmed defaults are Georgian-first, coming-soon positioning, no map/search, no real logos, ultra-short form, inline CTA, and on-page success state.
