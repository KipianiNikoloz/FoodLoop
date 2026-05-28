import assert from "node:assert/strict";
import test from "node:test";
import { isValidEmail, normalizeEmail } from "@/lib/email";

test("normalizes email input with trimming and lowercasing", () => {
  assert.equal(normalizeEmail(" Person@Example.COM "), "person@example.com");
});

test("validates basic email shape", () => {
  assert.equal(isValidEmail("person@example.com"), true);
  assert.equal(isValidEmail("not-an-email"), false);
  assert.equal(isValidEmail("missing-domain@"), false);
});
