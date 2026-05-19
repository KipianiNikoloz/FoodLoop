import assert from "node:assert/strict";
import test from "node:test";
import { getConfiguredSiteUrl, normalizeSiteUrl } from "@/lib/site-url";

test("normalizes configured site urls", () => {
  assert.equal(normalizeSiteUrl(" https://foodloop.example/ "), "https://foodloop.example");
  assert.equal(normalizeSiteUrl("https://foodloop.example/admin///"), "https://foodloop.example/admin");
  assert.equal(normalizeSiteUrl(""), null);
});

test("uses NEXT_PUBLIC_SITE_URL before request origin", () => {
  const previous = process.env.NEXT_PUBLIC_SITE_URL;
  process.env.NEXT_PUBLIC_SITE_URL = "https://foodloop.example/";

  try {
    assert.equal(getConfiguredSiteUrl("http://localhost:3000"), "https://foodloop.example");
  } finally {
    process.env.NEXT_PUBLIC_SITE_URL = previous;
  }
});

test("uses request origin as a development fallback", () => {
  const previousSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  process.env.NEXT_PUBLIC_SITE_URL = "";

  try {
    assert.equal(getConfiguredSiteUrl("http://localhost:3000", "development"), "http://localhost:3000");
  } finally {
    process.env.NEXT_PUBLIC_SITE_URL = previousSiteUrl;
  }
});
