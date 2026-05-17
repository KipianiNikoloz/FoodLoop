## Context

FoodLoop already has a complete Next.js landing page and a working Supabase-backed waitlist, but the current interface reads as restrained, green, and SaaS-like. The user wants a more vibrant, local, non-generic visual system that takes stronger inspiration from the original FoodLoop/Tilda site while keeping the product honest as a waitlist-stage launch.

The approved art direction is "Neighborhood Table": a warm, image-led Tbilisi food market landing page with tactile paper/table materiality, tomato-red accents, herb-green support color, richer food imagery, visible Georgian typography, and a waitlist form that feels part of the page rather than a bolted-on SaaS panel.

The approved concept image is:

`C:\Users\nikol\.codex\generated_images\019e35b4-c80d-78e3-abcb-6e05add7158b\ig_00a4f6a71c476688016a09c021f880819baaaec92b700f6ef0.png`

That concept is a visual reference only. Its generated Georgian-looking text is not source copy.

## Goals

- Make the landing page feel vibrant, local, food-led, and authored rather than generic.
- Use multiple food, cafe, market, and local-business image moments across the page.
- Reuse suitable FoodLoop/original-site text and imagery where possible, with generated imagery used to fill gaps.
- Preserve all current waitlist behavior, validation, Supabase schema assumptions, duplicate handling, and success/error behavior.
- Render Georgian copy as selectable HTML text with careful line height, wrapping, and mobile behavior.
- Use shadcn primitives selectively for controls and repeated UI building blocks without turning the design into a default shadcn catalog.
- Validate the finished page in browser against desktop and mobile viewports, including visual comparison to the approved concept.

## Non-Goals

- No new Supabase schema or environment variable changes.
- No app download, map search, live inventory, reservation, payment, or pickup-tracking features.
- No fabricated testimonials, partner logos, partner names, contact details, or proof points.
- No reliance on generated-image text for Georgian UI copy.
- No broad product refactor beyond the landing page, styling, imagery, and waitlist form presentation.

## Decisions

### Visual Direction

Use "Neighborhood Table" as the source of truth for the redesign. The page should feel like a warm Tbilisi market table: real food, local business energy, dense but readable sections, and a strong waitlist CTA. The palette should move away from the current quiet green/cream system toward tomato red, herb green, marigold yellow, cream paper, and dark ink.

### Copy And Trust

Current and original-site copy can be reused and tightened, but every claim must match the waitlist-stage product. The page can invite customers and partner businesses, explain the surplus-food idea, and describe the future marketplace. It must not imply that real offers, pickup flows, partner networks, or live app functionality are already available.

### Imagery

Prefer existing/original imagery when it is suitable and sufficiently high quality. Generate additional bitmap imagery for hero, offer examples, partner/business moments, or atmospheric food details when the available assets do not carry the desired local market feeling. Keep images inspectable and relevant: food, cafe counters, baked goods, produce, neighborhood market texture, and takeaway bags.

### Georgian Text

All Georgian copy must be code-native text. During implementation, verify in the browser rather than trusting PowerShell terminal output, because the terminal can display UTF-8 Georgian as mojibake. Pay special attention to button labels, compact badges, card headings, and responsive line breaks.

### shadcn Usage

Initialize shadcn if the project does not already have `components.json`. Use primitives such as Button, Input, ToggleGroup or RadioGroup, Card, and Badge where they help consistency and accessibility. Style them through project tokens and local class composition so they support the Neighborhood Table art direction instead of imposing generic defaults.

### Component Shape

Keep the waitlist server action and Supabase integration intact. The redesign may split the landing page into focused components or sections if that improves maintainability, but it should avoid unnecessary abstraction. The form can be restyled and repositioned, but the submitted fields and server-side contract stay the same.

## Risks And Mitigations

- Generated concept text is unusable as copy: use it only for composition and visual rhythm; source all Georgian text from code.
- More imagery can hurt performance: use optimized local assets, responsive sizes, and Next image handling where practical.
- shadcn defaults can make the page look generic: customize tokens, avoid nested card stacks, and limit primitive use to controls/repeated elements.
- Original site content may include placeholders or stale claims: perform a content audit before reuse.
- Georgian can clip or overflow in dense UI: test mobile and desktop browser rendering with real copy.

## Implementation Approach

1. Audit current landing sections, waitlist form, tests, and available assets.
2. Audit original FoodLoop/Tilda content and imagery for usable material and excluded proof claims.
3. Preserve the approved concept reference in the change or project docs so future implementation can compare against it.
4. Add or initialize shadcn primitives with minimal surface area.
5. Rebuild the landing sections around the Neighborhood Table rhythm: image-led hero with inline form, lively process section, image-backed offer examples, partner invitation, and final CTA.
6. Keep all waitlist tests passing and add/adjust UI tests only where behavior changes.
7. Run OpenSpec validation, app tests, build checks, and browser visual QA at desktop and mobile sizes.

## Open Questions

None. The user approved the Neighborhood Table concept, original plus generated imagery, a single OpenSpec redesign change, concept-level vibrance, and shadcn primitives only.
