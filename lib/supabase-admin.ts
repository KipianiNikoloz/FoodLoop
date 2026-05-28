import { createClient } from "@supabase/supabase-js";
import type { Database, WaitlistRole, WaitlistSignupInsert } from "@/lib/database.types";

export type { WaitlistRole, WaitlistSignupInsert as WaitlistInsert };

export function createSupabaseAdminClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Supabase environment variables are not configured.");
  }

  return createClient<Database>(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
