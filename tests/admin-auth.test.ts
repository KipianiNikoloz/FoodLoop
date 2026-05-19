import assert from "node:assert/strict";
import test from "node:test";
import { isAdminEmail, parseAdminEmails } from "@/lib/admin-auth";

test("parses comma-separated admin emails with trimming and normalization", () => {
  const admins = parseAdminEmails(" Owner@Example.COM, ops@example.com ,, ");

  assert.equal(admins.has("owner@example.com"), true);
  assert.equal(admins.has("ops@example.com"), true);
  assert.equal(admins.size, 2);
});

test("matches admin emails case-insensitively", () => {
  const admins = parseAdminEmails("owner@example.com");

  assert.equal(isAdminEmail(" OWNER@example.COM ", admins), true);
});

test("rejects missing or non-allowlisted emails", () => {
  const admins = parseAdminEmails("owner@example.com");

  assert.equal(isAdminEmail(undefined, admins), false);
  assert.equal(isAdminEmail(null, admins), false);
  assert.equal(isAdminEmail("person@example.com", admins), false);
});
