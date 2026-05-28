import { redirect } from "next/navigation";
import { AdminDenied } from "@/components/admin/AdminDenied";
import { AdminTable } from "@/components/admin/AdminTable";
import { AdminStats, AdminTopbar } from "@/components/admin/AdminTopbar";
import { isAdminEmail } from "@/lib/admin-auth";
import { getWaitlistRows } from "@/lib/admin-waitlist";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  if (!isAdminEmail(user.email)) {
    return <AdminDenied />;
  }

  const { rows, count } = await getWaitlistRows();

  return (
    <main className="adminShell">
      <AdminTopbar />
      <AdminStats count={count} shown={rows.length} userEmail={user.email} />
      <AdminTable rows={rows} />
    </main>
  );
}
