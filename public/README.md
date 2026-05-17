# Public Assets

This folder contains static assets served by Next.js.

## Asset Map

```mermaid
flowchart TD
  Images[images/]
  MarketSheet[foodloop-market-sheet.png]
  UIDeck[ui-deck/]
  ConceptFrames[foodloop-ui-1..7.png]
  Page[app/page.tsx]
  Docs[README and docs]

  Images --> MarketSheet
  MarketSheet --> Page
  UIDeck --> ConceptFrames
  ConceptFrames --> Docs
```

## Current Assets

- [`images/foodloop-market-sheet.png`](./images/foodloop-market-sheet.png) is the main landing-page source image.
- [`ui-deck/`](./ui-deck) contains concept/reference frames for visual direction.

When replacing assets, keep filenames stable unless you also update `app/page.tsx` and any documentation references.

