## ADDED Requirements

### Requirement: Neighborhood Table visual direction
The system SHALL redesign the FoodLoop landing page around the approved "Neighborhood Table" concept, making the page warmer, more vibrant, more food-led, and more locally authored than the current restrained green/cream implementation.

#### Scenario: Visitor opens redesigned homepage
- **WHEN** a visitor opens the redesigned homepage
- **THEN** the first impression uses local food/neighborhood imagery, tactile paper or table materiality, tomato-red and herb-green brand energy, and a clear FoodLoop waitlist call to action.

### Requirement: Approved concept reference
The system SHALL use the generated concept at `C:\Users\nikol\.codex\generated_images\019e35b4-c80d-78e3-abcb-6e05add7158b\ig_00a4f6a71c476688016a09c021f880819baaaec92b700f6ef0.png` as the visual reference for art direction, section rhythm, palette, image behavior, and mobile continuity.

#### Scenario: Visual QA compares implementation
- **WHEN** the redesigned page is visually reviewed
- **THEN** the reviewer can compare the implementation against the approved concept for palette, imagery, spacing, section order, form placement, offer cards, partner section, and mobile treatment.

### Requirement: Georgian text remains code-native
The system SHALL keep all navigation, headings, body copy, labels, form messages, and buttons as code-native text and MUST NOT use generated-image text as source copy.

#### Scenario: Georgian text is inspected
- **WHEN** Georgian copy appears on the redesigned page
- **THEN** it is rendered by HTML/CSS, can be selected in the browser, and is verified for line height, wrapping, clipping, and button overflow.

### Requirement: Richer imagery system
The system SHALL include multiple food, market, cafe, or local-business image moments across the landing page, using original/reference imagery where suitable and generated imagery where gaps remain.

#### Scenario: Visitor scrolls through page
- **WHEN** a visitor scrolls through the landing page
- **THEN** the hero, offer examples, and partner invitation include imagery that makes FoodLoop feel like a local food product rather than a generic software landing page.

### Requirement: Original site inspiration without false proof
The system SHALL take stronger inspiration from the original FoodLoop/Tilda site's text tone and imagery while excluding placeholder testimonials, placeholder contact details, fake partner logos, fabricated partner names, and unsupported live-product claims.

#### Scenario: Trust content renders
- **WHEN** the page displays proof, partner, or community content
- **THEN** it uses honest launch/waitlist language and does not imply real partner relationships, live inventory, app downloads, map search, reservations, payments, or pickup tracking.

### Requirement: Selective shadcn primitive usage
The system SHALL initialize shadcn configuration and use shadcn-style source primitives selectively for core controls and repeated UI elements while preserving the custom Neighborhood Table art direction.

#### Scenario: UI primitives are reviewed
- **WHEN** the redesign implementation is reviewed
- **THEN** Button, Input, role selection, offer cards, and compact labels use shadcn primitives or shadcn-aligned composition where practical, without forcing generic rounded-card layouts throughout the page.

### Requirement: Waitlist contract preserved
The system SHALL preserve the current waitlist behavior, fields, Supabase table contract, duplicate handling, validation, and success/error states.

#### Scenario: Visitor submits redesigned waitlist form
- **WHEN** a visitor submits the redesigned waitlist form with email and role
- **THEN** the same server-side waitlist flow stores valid entries, rejects invalid input, treats duplicates as success-style responses, and displays recoverable error messages.

### Requirement: Responsive image-led layout
The system SHALL provide desktop, tablet, and mobile layouts that preserve the image-led art direction without horizontal overflow, clipped Georgian text, overlapping controls, or cropped primary content.

#### Scenario: Mobile visitor views redesigned page
- **WHEN** a mobile visitor opens and scrolls the redesigned page
- **THEN** the hero imagery, waitlist form, offer examples, partner section, final CTA, and sticky CTA remain readable, tappable, and visually cohesive.
