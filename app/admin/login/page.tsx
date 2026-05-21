import Link from "next/link";
import { redirect } from "next/navigation";
import { Input } from "@/components/ui/input";
import { isAdminEmail } from "@/lib/admin-auth";
import { createClient } from "@/lib/supabase/server";
import { AdminLoginSubmitButton } from "./SubmitButton";

export const dynamic = "force-dynamic";

type AdminLoginPageProps = {
  searchParams: Promise<{
    error?: string;
    email?: string;
  }>;
};

function normalizeEmail(value: FormDataEntryValue | null) {
  return String(value ?? "").trim().toLowerCase();
}

function normalizePassword(value: FormDataEntryValue | null) {
  return String(value ?? "");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getLoginRedirect(params: Record<string, string>) {
  const searchParams = new URLSearchParams(params);
  return `/admin/login?${searchParams.toString()}`;
}

async function signInAdmin(formData: FormData) {
  "use server";

  const email = normalizeEmail(formData.get("email"));
  const password = normalizePassword(formData.get("password"));

  if (!isValidEmail(email) || !password || !isAdminEmail(email)) {
    redirect(getLoginRedirect({ error: "invalid-credentials", email }));
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    redirect(getLoginRedirect({ error: "invalid-credentials", email }));
  }

  redirect("/admin");
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
          <p className="adminLead">გამოიყენეთ ამ გარემოსთვის შექმნილი ადმინის ელფოსტა და პაროლი.</p>
        </div>

        <form className="adminLoginForm" action={signInAdmin}>
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
          <label htmlFor="admin-password">პაროლი</label>
          <Input id="admin-password" name="password" type="password" autoComplete="current-password" required />
          <AdminLoginSubmitButton />
        </form>

        {params.error === "invalid-credentials" ? (
          <p className="adminNotice" role="alert">
            ელფოსტა ან პაროლი არასწორია.
          </p>
        ) : null}
      </section>
    </main>
  );
}
