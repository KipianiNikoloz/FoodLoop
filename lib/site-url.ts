export function normalizeSiteUrl(value: string | undefined) {
  const siteUrl = String(value ?? "").trim();

  if (!siteUrl) {
    return null;
  }

  return siteUrl.replace(/\/+$/, "");
}

export function getConfiguredSiteUrl(fallbackOrigin?: string | null, nodeEnv = process.env.NODE_ENV) {
  const configuredSiteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

  if (configuredSiteUrl) {
    return configuredSiteUrl;
  }

  if (nodeEnv !== "production") {
    return normalizeSiteUrl(fallbackOrigin ?? undefined) ?? "http://localhost:3000";
  }

  throw new Error("NEXT_PUBLIC_SITE_URL is not configured.");
}
