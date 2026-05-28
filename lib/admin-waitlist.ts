import { createSupabaseAdminClient } from "@/lib/supabase-admin";
import type { WaitlistSignupRow } from "@/lib/database.types";

export type { WaitlistSignupRow };

export async function getWaitlistRows() {
  const supabase = createSupabaseAdminClient();
  const { data, error, count } = await supabase
    .from("waitlist_signups")
    .select("id,email,role,locale,source,created_at", { count: "exact" })
    .order("created_at", { ascending: false })
    .limit(500);

  if (error) {
    throw new Error("Waitlist signups could not be loaded.");
  }

  return {
    rows: data ?? [],
    count: count ?? data?.length ?? 0,
  };
}
