## ADDED Requirements

### Requirement: Ultra-short waitlist form
The system SHALL provide an ultra-short waitlist form that collects only an email address and a role selection for `user` or `partner`.

#### Scenario: Visitor views waitlist form
- **WHEN** a visitor reaches the hero or final call-to-action area
- **THEN** the visitor can enter an email address, choose `user` or `partner`, and submit without providing additional required fields.

### Requirement: Server-side Supabase persistence
The system SHALL persist valid waitlist submissions to Supabase from server-side application code without exposing secret Supabase credentials to the browser.

#### Scenario: Visitor submits valid form
- **WHEN** a visitor submits a valid email address and role
- **THEN** the submission is stored in Supabase with email, role, locale, source, and creation timestamp.

### Requirement: Waitlist validation and feedback
The system SHALL validate required form inputs and provide accessible pending, success, duplicate, and error feedback on the page.

#### Scenario: Visitor submits invalid email
- **WHEN** a visitor submits the waitlist form with an invalid email address
- **THEN** the form displays a clear validation message and does not store the submission.

#### Scenario: Visitor submits duplicate email
- **WHEN** a visitor submits an email address that is already on the waitlist
- **THEN** the page displays a friendly already-registered success-style message.

#### Scenario: Supabase insert fails
- **WHEN** a valid submission cannot be stored due to a Supabase or network error
- **THEN** the page displays a recoverable error message and preserves the visitor's ability to try again.

### Requirement: Mobile sticky waitlist access
The system SHALL provide a mobile-friendly sticky call to action that moves visitors to the waitlist form without opening a separate page or modal.

#### Scenario: Mobile visitor taps sticky call to action
- **WHEN** a mobile visitor taps the sticky waitlist call to action
- **THEN** the page scrolls to an inline waitlist form on the same page.
