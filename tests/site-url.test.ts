import assert from "node:assert/strict";
import test from "node:test";
import { getConfiguredSiteUrl, isLocalhostUrl, normalizeSiteUrl } from "@/lib/site-url";

function withEnv(values: Record<string, string | undefined>, run: () => void) {
  const previous = Object.fromEntries(Object.keys(values).map((key) => [key, process.env[key]]));

  try {
    for (const [key, value] of Object.entries(values)) {
      if (value === undefined) {
        delete process.env[key];
      } else {
        process.env[key] = value;
      }
    }

    run();
  } finally {
    for (const [key, value] of Object.entries(previous)) {
      if (value === undefined) {
        delete process.env[key];
      } else {
        process.env[key] = value;
      }
    }
  }
}

test("normalizes configured site urls", () => {
  assert.equal(normalizeSiteUrl(" https://foodloop.example/ "), "https://foodloop.example");
  assert.equal(normalizeSiteUrl("https://foodloop.example/admin///"), "https://foodloop.example/admin");
  assert.equal(normalizeSiteUrl(""), null);
});

test("uses NEXT_PUBLIC_SITE_URL before request origin", () => {
  withEnv({ NEXT_PUBLIC_SITE_URL: "https://foodloop.example/" }, () => {
    assert.equal(getConfiguredSiteUrl("http://localhost:3000"), "https://foodloop.example");
  });
});

test("detects localhost urls", () => {
  assert.equal(isLocalhostUrl("http://localhost:3000"), true);
  assert.equal(isLocalhostUrl("http://127.0.0.1:3000"), true);
  assert.equal(isLocalhostUrl("https://foodloop.example"), false);
});

test("uses production request origin when configured site url is localhost", () => {
  withEnv({ NEXT_PUBLIC_SITE_URL: "http://localhost:3000" }, () => {
    assert.equal(getConfiguredSiteUrl("https://foodloop.example", "production"), "https://foodloop.example");
  });
});

test("uses the Vercel production url when production config only has localhost", () => {
  withEnv(
    {
      NEXT_PUBLIC_SITE_URL: "http://localhost:3000",
      VERCEL_PROJECT_PRODUCTION_URL: "foodloop.example",
      NEXT_PUBLIC_VERCEL_URL: undefined,
      VERCEL_URL: undefined,
    },
    () => {
      assert.equal(getConfiguredSiteUrl(null, "production"), "https://foodloop.example");
    },
  );
});

test("uses Vercel deployment url instead of a localhost production request origin", () => {
  withEnv(
    {
      NEXT_PUBLIC_SITE_URL: "http://localhost:3000",
      VERCEL_PROJECT_PRODUCTION_URL: undefined,
      NEXT_PUBLIC_VERCEL_URL: undefined,
      VERCEL_URL: "foodloop-git-main-example.vercel.app",
    },
    () => {
      assert.equal(getConfiguredSiteUrl("http://localhost:3000", "production"), "https://foodloop-git-main-example.vercel.app");
    },
  );
});

test("uses request origin as a development fallback", () => {
  withEnv({ NEXT_PUBLIC_SITE_URL: "" }, () => {
    assert.equal(getConfiguredSiteUrl("http://localhost:3000", "development"), "http://localhost:3000");
  });
});

test("keeps the localhost default in development even when Vercel env exists", () => {
  withEnv({ NEXT_PUBLIC_SITE_URL: "", VERCEL_URL: "foodloop.example" }, () => {
    assert.equal(getConfiguredSiteUrl(null, "development"), "http://localhost:3000");
  });
});
