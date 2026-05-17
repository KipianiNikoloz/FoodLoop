# Product Notes

FoodLoop is positioned as a neighborhood marketplace for affordable meals and lower food waste. The current release is a polished landing page whose job is to validate interest from two groups before the full marketplace exists.

## Audience

| Audience | Need | Current App Response |
| --- | --- | --- |
| Customers | Discover affordable daily food offers nearby. | Georgian-language narrative, offer examples, and a customer waitlist role. |
| Partners | Reach nearby buyers for surplus or daily prepared food. | Partner section, business-oriented copy, and a partner waitlist role. |
| Operators | Collect clean early demand signals. | Supabase waitlist table with role, locale, source, and timestamp. |

## Experience Flow

```mermaid
journey
  title FoodLoop landing-page journey
  section Awareness
    Sees neighborhood food promise: 5: Customer
    Reads how FoodLoop works: 4: Customer, Partner
  section Evaluation
    Reviews example offers: 4: Customer
    Reads partner benefits: 4: Partner
  section Conversion
    Chooses role: 5: Customer, Partner
    Submits email: 5: Customer, Partner
    Receives success or duplicate message: 4: Customer, Partner
```

## Product Boundaries

In scope:

- Landing-page storytelling.
- Customer and partner waitlist capture.
- Duplicate email handling.
- Georgian locale metadata.

Out of scope for the current codebase:

- Public offer inventory.
- Customer accounts.
- Partner dashboards.
- Payments, pickup windows, or notifications.

