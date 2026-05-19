import { redirect } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { isAdminEmail } from "@/lib/admin-auth";
import { createSupabaseAdminClient, type WaitlistRole } from "@/lib/supabase-admin";
import { createClient } from "@/lib/supabase/server";
import { signOutAdmin } from "./actions";

export const dynamic = "force-dynamic";

type WaitlistSignupRow = {
  id: string;
  email: string;
  role: WaitlistRole;
  locale: string;
  source: string;
  created_at: string;
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

async function getWaitlistRows() {
  const supabase = createSupabaseAdminClient();
  const { data, error, count } = await supabase
    .from("waitlist_signups")
    .select("id,email,role,locale,source,created_at", { count: "exact" })
    .order("created_at", { ascending: false })
    .limit(500);

  if (error) {
    throw new Error("Unable to load waitlist signups.");
  }

  return {
    rows: (data ?? []) as WaitlistSignupRow[],
    count: count ?? data?.length ?? 0,
  };
}

export default async function AdminPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  if (!isAdminEmail(user.email)) {
    return (
      <main className="adminShell">
        <section className="adminDenied" aria-labelledby="admin-denied-title">
          <Badge variant="tomato">403</Badge>
          <h1 id="admin-denied-title">Not authorized</h1>
          <p>This signed-in account is not configured in the admin allowlist.</p>
          <form action={signOutAdmin}>
            <Button type="submit" variant="secondary">
              Sign out
            </Button>
          </form>
        </section>
      </main>
    );
  }

  const { rows, count } = await getWaitlistRows();

  return (
    <main className="adminShell">
      <header className="adminTopbar">
        <div>
          <p className="adminEyebrow">FoodLoop Admin</p>
          <h1>Received emails</h1>
        </div>
        <form action={signOutAdmin}>
          <Button type="submit" variant="secondary">
            Sign out
          </Button>
        </form>
      </header>

      <section className="adminStats" aria-label="Waitlist summary">
        <article>
          <span>Total received</span>
          <strong>{count}</strong>
        </article>
        <article>
          <span>Showing newest</span>
          <strong>{rows.length}</strong>
        </article>
        <article>
          <span>Signed in as</span>
          <strong>{user.email}</strong>
        </article>
      </section>

      <section className="adminTableSection" aria-labelledby="admin-table-title">
        <div className="adminTableHeader">
          <h2 id="admin-table-title">Waitlist signups</h2>
          <Badge variant="paper">Newest first</Badge>
        </div>

        {rows.length > 0 ? (
          <div className="adminTableWrap">
            <table className="adminTable">
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Source</th>
                  <th>Locale</th>
                  <th>Received</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id}>
                    <td>
                      <a href={`mailto:${row.email}`}>{row.email}</a>
                    </td>
                    <td>{row.role}</td>
                    <td>{row.source}</td>
                    <td>{row.locale}</td>
                    <td>{formatDate(row.created_at)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="adminEmpty">
            <h3>No emails received yet</h3>
            <p>Waitlist signups will appear here once visitors submit the public form.</p>
          </div>
        )}
      </section>
    </main>
  );
}
