import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Input } from "@/components/ui/input";
import { isAdminEmail } from "@/lib/admin-auth";
import { getConfiguredSiteUrl } from "@/lib/site-url";
import { createClient } from "@/lib/supabase/server";
import { AdminLoginSubmitButton } from "./SubmitButton";

export const dynamic = "force-dynamic";

type AdminLoginPageProps = {
  searchParams: Promise<{
    sent?: string;
    error?: string;
    email?: string;
  }>;
};

function normalizeEmail(value: FormDataEntryValue | null) {
  return String(value ?? "").trim().toLowerCase();
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getLoginRedirect(params: Record<string, string>) {
  const searchParams = new URLSearchParams(params);
  return `/admin/login?${searchParams.toString()}`;
}

function getRequestOrigin(requestHeaders: Headers) {
  const origin = requestHeaders.get("origin");

  if (origin) {
    return origin;
  }

  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";

  return host ? `${protocol}://${host}` : null;
}

async function sendMagicLink(formData: FormData) {
  "use server";

  const email = normalizeEmail(formData.get("email"));

  if (!isValidEmail(email)) {
    redirect(getLoginRedirect({ error: "invalid-email", email }));
  }

  if (isAdminEmail(email)) {
    let sendFailed = false;

    try {
      const requestHeaders = await headers();
      const siteUrl = getConfiguredSiteUrl(getRequestOrigin(requestHeaders));
      const supabase = await createClient();
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${siteUrl}/auth/confirm?next=/admin`,
        },
      });

      if (error) {
        sendFailed = true;
      }
    } catch {
      sendFailed = true;
    }

    if (sendFailed) {
      redirect(getLoginRedirect({ error: "send-failed", email }));
    }
  }

  redirect(`/admin/login?sent=1&email=${encodeURIComponent(email)}`);
}

export default async function AdminLoginPage({ searchParams }: AdminLoginPageProps) {
  const params = await searchParams;

  return (
    <main className="adminShell adminLoginShell">
      <section className="adminLoginPanel" aria-labelledby="admin-login-title">
        <Link className="adminBackLink" href="/">
          FoodLoop
        </Link>
        <div>
          <p className="adminEyebrow">ადმინი</p>
          <h1 id="admin-login-title">შედით მიღებული ელფოსტების სანახავად</h1>
          <p className="adminLead">შეიყვანეთ ადმინისტრატორის ელფოსტა. Supabase გამოგიგზავნით უსაფრთხო შესვლის ბმულს.</p>
        </div>

        <form className="adminLoginForm" action={sendMagicLink}>
          <label htmlFor="admin-email">ელფოსტა</label>
          <Input
            id="admin-email"
            name="email"
            type="email"
            defaultValue={params.email ?? ""}
            autoComplete="email"
            placeholder="admin@example.com"
            required
          />
          <AdminLoginSubmitButton />
        </form>

        {params.sent ? (
          <p className="adminNotice adminNotice-positive" role="status">
            თუ ეს ელფოსტა ადმინისტრატორად არის დამატებული, შესვლის ბმული უკვე გაიგზავნა. შეამოწმეთ შემოსული წერილები.
          </p>
        ) : null}

        {params.error === "invalid-email" ? (
          <p className="adminNotice" role="alert">
            შეიყვანეთ სწორი ელფოსტის მისამართი.
          </p>
        ) : null}

        {params.error === "send-failed" ? (
          <p className="adminNotice" role="alert">
            ბმულის გაგზავნა ვერ მოხერხდა. შეამოწმეთ Supabase-ის პარამეტრები და სცადეთ თავიდან.
          </p>
        ) : null}

        {params.error === "auth" ? (
          <p className="adminNotice" role="alert">
            შესვლის ბმული არასწორია ან ვადა გაუვიდა. მოითხოვეთ ახალი ბმული.
          </p>
        ) : null}
      </section>
    </main>
  );
}
