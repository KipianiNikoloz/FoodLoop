export function normalizeSiteUrl(value: string | undefined) {
  const siteUrl = String(value ?? "").trim();

  if (!siteUrl) {
    return null;
  }

  return siteUrl.replace(/\/+$/, "");
}

export function isLocalhostUrl(value: string | null) {
  if (!value) {
    return false;
  }

  try {
    const url = new URL(value);
    return url.hostname === "localhost" || url.hostname === "127.0.0.1" || url.hostname === "::1";
  } catch {
    return false;
  }
}

function withProtocol(value: string | null) {
  if (!value) {
    return null;
  }

  return /^https?:\/\//i.test(value) ? value : `https://${value}`;
}

function getVercelDeploymentUrl() {
  return (
    normalizeSiteUrl(withProtocol(process.env.VERCEL_PROJECT_PRODUCTION_URL ?? null) ?? undefined) ??
    normalizeSiteUrl(withProtocol(process.env.NEXT_PUBLIC_VERCEL_URL ?? null) ?? undefined) ??
    normalizeSiteUrl(withProtocol(process.env.VERCEL_URL ?? null) ?? undefined)
  );
}

export function getConfiguredSiteUrl(fallbackOrigin?: string | null, nodeEnv = process.env.NODE_ENV) {
  const configuredSiteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
  const normalizedFallbackOrigin = normalizeSiteUrl(fallbackOrigin ?? undefined);
  const vercelDeploymentUrl = getVercelDeploymentUrl();

  if (configuredSiteUrl && (nodeEnv !== "production" || !isLocalhostUrl(configuredSiteUrl))) {
    return configuredSiteUrl;
  }

  if (normalizedFallbackOrigin && (nodeEnv !== "production" || !isLocalhostUrl(normalizedFallbackOrigin))) {
    return normalizedFallbackOrigin;
  }

  if (nodeEnv === "production" && vercelDeploymentUrl) {
    return vercelDeploymentUrl;
  }

  if (nodeEnv !== "production") {
    return "http://localhost:3000";
  }

  throw new Error("NEXT_PUBLIC_SITE_URL is not configured.");
}
