export function normalizeEmail(value: FormDataEntryValue | string | null | undefined) {
  return String(value ?? "").trim().toLowerCase();
}

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
