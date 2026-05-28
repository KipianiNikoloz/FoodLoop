"use server";

import { createSupabaseAdminClient } from "@/lib/supabase-admin";
import { submitWaitlistForm, type WaitlistFormState } from "@/lib/waitlist-core";

export async function joinWaitlist(
  _previousState: WaitlistFormState,
  formData: FormData,
): Promise<WaitlistFormState> {
  return submitWaitlistForm(formData, async ({ email, role }) => {
    const envStatus = {
      hasSupabaseUrl: Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL),
      hasServiceRoleKey: Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY),
    };

    try {
      const supabase = createSupabaseAdminClient();
      const result = await supabase.from("waitlist_signups").insert({
        email,
        role,
        locale: "ka",
        source: "landing",
      });

      if (result.error) {
        console.error("Waitlist signup insert failed", {
          ...envStatus,
          code: result.error.code,
          message: result.error.message,
          details: result.error.details,
          hint: result.error.hint,
        });
      }

      return result;
    } catch (error) {
      console.error("Waitlist signup insert threw", {
        ...envStatus,
        message: error instanceof Error ? error.message : "Unknown waitlist insert error",
      });

      throw error;
    }
  });
}
