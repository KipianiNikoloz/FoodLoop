## 1. Content And Asset Preparation

- [x] 1.1 Audit the current landing page, waitlist form, CSS, and existing public/static assets.
- [x] 1.2 Audit the original FoodLoop/Tilda site for reusable text tone and image references.
- [x] 1.3 Identify and exclude placeholder testimonials, fake partner logos, fake contact details, unsupported product claims, app-download claims, live-offer claims, reservation/payment claims, and pickup-tracking claims.
- [x] 1.4 Preserve the approved Neighborhood Table concept reference with the change or project documentation for visual QA.
- [x] 1.5 Build an imagery inventory for hero, offer examples, partner/business invitation, and supporting food details.
- [x] 1.6 Generate or add missing bitmap imagery where original assets do not provide enough food/neighborhood specificity.

## 2. Design System And shadcn Setup

- [x] 2.1 Check whether shadcn is already initialized in the project.
- [x] 2.2 Initialize shadcn configuration if missing.
- [x] 2.3 Add the minimal primitives needed for the redesign: Button, Input, ToggleGroup or RadioGroup, Card, and Badge.
- [x] 2.4 Update global design tokens for tomato red, herb green, marigold yellow, cream paper, dark ink, borders, focus rings, and accessible contrast.
- [x] 2.5 Style shadcn primitives so they match the Neighborhood Table identity and do not look like generic default components.

## 3. Landing Page Redesign

- [x] 3.1 Rework the page structure around the approved concept: image-led hero, waitlist CTA, food-rescue explanation, offer examples, partner invitation, and final CTA.
- [x] 3.2 Build a hero section with strong food/neighborhood imagery, code-native Georgian headline text, and a visible waitlist entry point.
- [x] 3.3 Restyle the waitlist form using selected primitives while preserving all current fields, labels, validation states, loading state, success state, and recoverable error state.
- [x] 3.4 Replace restrained SaaS section styling with warmer paper/table textures, tomato-red emphasis, marigold highlights, herb-green accents, and dark ink typography.
- [x] 3.5 Add image-backed offer example cards that communicate future surplus-food bundles without implying live inventory.
- [x] 3.6 Add a locally flavored partner/business invitation section using honest waitlist-stage language.
- [x] 3.7 Add a final CTA that repeats the waitlist action without introducing new product promises.
- [x] 3.8 Ensure no nested card-in-card layouts, decorative gradient blobs, or one-note palette dominance.

## 4. Georgian And Responsive Quality

- [x] 4.1 Verify all Georgian copy is selectable HTML text, not embedded in generated images.
- [x] 4.2 Check Georgian text wrapping, line height, and button/card overflow at desktop, tablet, and mobile widths.
- [x] 4.3 Ensure imagery remains relevant and non-cropped in primary content areas across responsive layouts.
- [x] 4.4 Ensure tap targets, form controls, sticky or repeated CTAs, and section spacing remain usable on mobile.

## 5. Functional Preservation

- [x] 5.1 Preserve the Supabase waitlist table contract and migration files.
- [x] 5.2 Preserve the waitlist server action API and duplicate-email success-style behavior.
- [x] 5.3 Preserve form validation for email and role selection.
- [x] 5.4 Update tests only where UI structure changes require selector or copy adjustments.

## 6. Verification

- [x] 6.1 Run `openspec validate redesign-neighborhood-table-landing --strict`.
- [x] 6.2 Run the project test suite.
- [x] 6.3 Run the production build.
- [x] 6.4 Run browser visual QA at desktop and mobile sizes.
- [x] 6.5 Compare browser screenshots against the approved Neighborhood Table concept for palette, imagery density, layout rhythm, form placement, and mobile continuity.
- [x] 6.6 Inspect browser console for errors and fix any layout/runtime issues.
- [x] 6.7 Confirm `git status` contains only intentional redesign/OpenSpec changes.
