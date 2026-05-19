import assert from "node:assert/strict";
import test from "node:test";
import { getConfiguredSiteUrl, isLocalhostUrl, normalizeSiteUrl } from "@/lib/site-url";

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

test("detects localhost urls", () => {
  assert.equal(isLocalhostUrl("http://localhost:3000"), true);
  assert.equal(isLocalhostUrl("http://127.0.0.1:3000"), true);
  assert.equal(isLocalhostUrl("https://foodloop.example"), false);
});

test("uses production request origin when configured site url is localhost", () => {
  const previous = process.env.NEXT_PUBLIC_SITE_URL;
  process.env.NEXT_PUBLIC_SITE_URL = "http://localhost:3000";

  try {
    assert.equal(getConfiguredSiteUrl("https://foodloop.example", "production"), "https://foodloop.example");
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
