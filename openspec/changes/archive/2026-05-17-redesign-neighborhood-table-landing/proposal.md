## Why

The current FoodLoop landing page is structurally complete but feels too restrained, generic, and SaaS-like for a local Tbilisi food-rescue product. This change makes the page feel more human, vibrant, food-led, and locally authored while preserving the working waitlist flow.

## What Changes

- Redesign the landing page around the approved "Neighborhood Table" art direction.
- Use the generated concept as a visual reference for layout rhythm, palette, imagery density, tactile materiality, and mobile continuity.
- Take more inspiration from the original Tilda site's food/community tone and suitable imagery, while still excluding placeholder testimonials, fake partner logos, fake contact details, and unsupported product claims.
- Add a richer image system with original/reference imagery where suitable and generated food/neighborhood imagery where gaps remain.
- Replace the current green/cream SaaS feel with a warmer palette: tomato red, herb green, marigold yellow, cream paper, and dark ink.
- Initialize and use shadcn primitives selectively for form controls and repeated UI primitives without collapsing the page into a generic shadcn card catalog.
- Preserve the current public waitlist behavior and Supabase data model.

## Capabilities

### New Capabilities

- `neighborhood-table-redesign`: Visual, content, imagery, and component-system requirements for making the FoodLoop landing page more vibrant, local, and non-generic.

### Modified Capabilities

None.

## Impact

- Affects the Next.js landing page, global styling, waitlist form presentation, imagery assets, and UI primitive setup.
- May add shadcn configuration and source components for Button, Input, ToggleGroup or RadioGroup, Card, and Badge.
- Does not change Supabase schema, waitlist fields, server action contract, or deployment environment variables.
- Requires browser visual QA against the approved concept reference:
  `C:\Users\nikol\.codex\generated_images\019e35b4-c80d-78e3-abcb-6e05add7158b\ig_00a4f6a71c476688016a09c021f880819baaaec92b700f6ef0.png`
