"use server";

import { createSupabaseAdminClient, type WaitlistRole } from "@/lib/supabase-admin";
import {
  initialWaitlistState,
  submitWaitlistForm,
  type WaitlistFormState,
} from "@/lib/waitlist-core";

export { initialWaitlistState };
export type { WaitlistFormState };

export async function joinWaitlist(
  _previousState: WaitlistFormState,
  formData: FormData,
): Promise<WaitlistFormState> {
  return submitWaitlistForm(formData, async ({ email, role }) => {
    const supabase = createSupabaseAdminClient();
    return supabase.from("waitlist_signups").insert({
      email,
      role: role as WaitlistRole,
      locale: "ka",
      source: "landing",
    });
  });
}
