import assert from "node:assert/strict";
import test from "node:test";
import { submitWaitlistForm } from "@/lib/waitlist-core";

function form(email: string, role: string) {
  const data = new FormData();
  data.set("email", email);
  data.set("role", role);
  return data;
}

test("stores valid user signup with normalized email", async () => {
  const calls: unknown[] = [];
  const result = await submitWaitlistForm(form(" Person@Example.COM ", "user"), async (entry) => {
    calls.push(entry);
    return { error: null };
  });

  assert.equal(result.status, "success");
  assert.deepEqual(calls, [
    {
      email: "person@example.com",
      role: "user",
      locale: "ka",
      source: "landing",
    },
  ]);
});

test("stores valid partner signup", async () => {
  const result = await submitWaitlistForm(form("partner@example.com", "partner"), async () => ({
    error: null,
  }));

  assert.equal(result.status, "success");
  assert.match(result.message, /პარტნიორების/);
});

test("rejects invalid email before insert", async () => {
  let called = false;
  const result = await submitWaitlistForm(form("not-an-email", "user"), async () => {
    called = true;
    return { error: null };
  });

  assert.equal(result.status, "error");
  assert.equal(called, false);
});

test("rejects invalid role before insert", async () => {
  let called = false;
  const result = await submitWaitlistForm(form("person@example.com", "business"), async () => {
    called = true;
    return { error: null };
  });

  assert.equal(result.status, "error");
  assert.equal(called, false);
});

test("treats duplicate email as success-style duplicate state", async () => {
  const result = await submitWaitlistForm(form("person@example.com", "user"), async () => ({
    error: { code: "23505" },
  }));

  assert.equal(result.status, "duplicate");
});

test("returns recoverable error when insert fails", async () => {
  const result = await submitWaitlistForm(form("person@example.com", "user"), async () => ({
    error: { code: "XX000" },
  }));

  assert.equal(result.status, "error");
  assert.match(result.message, /სცადოთ თავიდან/);
});

test("returns recoverable error when Supabase client throws", async () => {
  const result = await submitWaitlistForm(form("person@example.com", "user"), async () => {
    throw new Error("connection failed");
  });

  assert.equal(result.status, "error");
  assert.match(result.message, /Supabase/);
});
