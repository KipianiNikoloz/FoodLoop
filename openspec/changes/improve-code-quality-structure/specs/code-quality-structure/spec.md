## ADDED Requirements

### Requirement: Focused module boundaries
The system SHALL keep route files focused on route composition and route-level control flow, with reusable content, section UI, validation, and data access placed in dedicated internal modules.

#### Scenario: Developer edits the landing page
- **WHEN** a developer changes landing content or section layout
- **THEN** the developer can work in focused landing content or section modules without editing unrelated admin, validation, or Supabase code.

#### Scenario: Developer edits admin data behavior
- **WHEN** a developer changes admin waitlist row loading
- **THEN** the service-role query and row typing are isolated from the admin page presentation.

### Requirement: Localized copy integrity
The system SHALL keep Georgian user-facing copy as code-native UTF-8 text and detect common mojibake patterns in source files.

#### Scenario: Quality checks inspect copy
- **WHEN** the copy integrity check runs
- **THEN** it fails if app-facing source contains common corrupted text markers such as `áƒ`, `â‚`, `â€¢`, or `â™`.

### Requirement: Shared validation behavior
The system SHALL use a shared email normalization and validation implementation for flows that accept email input.

#### Scenario: Waitlist and admin login parse email
- **WHEN** either flow receives email input
- **THEN** it trims whitespace, lowercases the email, and applies the same validation rule.

### Requirement: Typed waitlist data access
The system SHALL type waitlist table rows and inserts through a shared Supabase database type boundary.

#### Scenario: Code inserts or reads waitlist rows
- **WHEN** server-side code writes or reads `waitlist_signups`
- **THEN** the selected fields and role values are checked against the shared table types instead of ad hoc casts.

### Requirement: Automated quality gates
The system SHALL provide separate scripts for linting, typechecking, tests, production build, and copy integrity checks.

#### Scenario: Developer verifies the refactor
- **WHEN** the developer runs the verification gates
- **THEN** lint, typecheck, tests, copy integrity, and production build all pass.
