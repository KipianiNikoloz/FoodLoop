import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { isAdminEmail } from "@/lib/admin-auth";
import { createClient } from "@/lib/supabase/server";

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

async function sendMagicLink(formData: FormData) {
  "use server";

  const email = normalizeEmail(formData.get("email"));

  if (!isValidEmail(email)) {
    redirect("/admin/login?error=invalid-email");
  }

  if (isAdminEmail(email)) {
    const requestHeaders = await headers();
    const origin = requestHeaders.get("origin") ?? "http://localhost:3000";
    const supabase = await createClient();

    await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${origin}/auth/confirm?next=/admin`,
      },
    });
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
          <p className="adminEyebrow">Admin</p>
          <h1 id="admin-login-title">Sign in to view received emails</h1>
          <p className="adminLead">Enter an allowlisted admin email. Supabase will send a secure magic link.</p>
        </div>

        <form className="adminLoginForm" action={sendMagicLink}>
          <label htmlFor="admin-email">Email</label>
          <Input
            id="admin-email"
            name="email"
            type="email"
            defaultValue={params.email ?? ""}
            autoComplete="email"
            placeholder="admin@example.com"
            required
          />
          <Button type="submit">Send magic link</Button>
        </form>

        {params.sent ? (
          <p className="adminNotice adminNotice-positive" role="status">
            If that email is configured as an admin, a magic link is on its way.
          </p>
        ) : null}

        {params.error === "invalid-email" ? (
          <p className="adminNotice" role="alert">
            Enter a valid email address.
          </p>
        ) : null}
      </section>
    </main>
  );
}
