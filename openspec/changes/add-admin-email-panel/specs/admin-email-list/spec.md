## ADDED Requirements

### Requirement: Admin authentication
The system SHALL require Supabase Auth authentication before displaying the admin email list.

#### Scenario: Unauthenticated visitor opens admin panel
- **WHEN** a visitor without a valid Supabase Auth session opens `/admin`
- **THEN** the system redirects the visitor to `/admin/login`

#### Scenario: Admin signs in with magic link
- **WHEN** an admin submits a valid email address on `/admin/login`
- **THEN** the system requests a Supabase Auth magic link for that email address

### Requirement: Admin authorization
The system SHALL only display waitlist email data to authenticated users whose email address is listed in the server-side admin allowlist.

#### Scenario: Non-admin authenticated user opens admin panel
- **WHEN** an authenticated user's email is not present in `ADMIN_EMAILS`
- **THEN** the system does not query or display waitlist email rows

#### Scenario: Allowlisted admin opens admin panel
- **WHEN** an authenticated user's email is present in `ADMIN_EMAILS`
- **THEN** the system displays the admin email list

### Requirement: Waitlist email list
The system SHALL display received waitlist signups newest-first with email, role, source, locale, and created timestamp metadata.

#### Scenario: Admin views received emails
- **WHEN** an allowlisted admin opens `/admin`
- **THEN** the system shows waitlist signup rows sorted by `created_at` descending

#### Scenario: No received emails exist
- **WHEN** an allowlisted admin opens `/admin` and the waitlist table has no rows
- **THEN** the system displays an empty state instead of an empty table
