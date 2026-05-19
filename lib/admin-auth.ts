export function parseAdminEmails(value: string | undefined) {
  return new Set(
    String(value ?? "")
      .split(",")
      .map((email) => email.trim().toLowerCase())
      .filter(Boolean),
  );
}

export function isAdminEmail(email: string | null | undefined, adminEmails = parseAdminEmails(process.env.ADMIN_EMAILS)) {
  if (!email) {
    return false;
  }

  return adminEmails.has(email.trim().toLowerCase());
}

export function getConfiguredAdminEmails() {
  return parseAdminEmails(process.env.ADMIN_EMAILS);
}
