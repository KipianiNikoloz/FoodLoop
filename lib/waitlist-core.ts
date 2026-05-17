import type { WaitlistRole } from "@/lib/supabase-admin";

export type WaitlistFormState = {
  status: "idle" | "success" | "duplicate" | "error";
  message: string;
};

export type WaitlistInsertResult = {
  error: { code?: string } | null;
};

export type WaitlistInsertFn = (entry: {
  email: string;
  role: WaitlistRole;
  locale: "ka";
  source: "landing";
}) => Promise<WaitlistInsertResult>;

export const initialWaitlistState: WaitlistFormState = {
  status: "idle",
  message: "შეიყვანეთ ელფოსტა და აირჩიეთ როლი.",
};

function normalizeEmail(value: FormDataEntryValue | null) {
  return String(value ?? "").trim().toLowerCase();
}

function parseRole(value: FormDataEntryValue | null): WaitlistRole | null {
  return value === "user" || value === "partner" ? value : null;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitWaitlistForm(
  formData: FormData,
  insertWaitlistEntry: WaitlistInsertFn,
): Promise<WaitlistFormState> {
  const email = normalizeEmail(formData.get("email"));
  const role = parseRole(formData.get("role"));

  if (!isValidEmail(email)) {
    return {
      status: "error",
      message: "გთხოვთ შეიყვანოთ სწორი ელფოსტის მისამართი.",
    };
  }

  if (!role) {
    return {
      status: "error",
      message: "გთხოვთ აირჩიოთ, როგორ გსურთ FoodLoop-ში ჩართვა.",
    };
  }

  try {
    const { error } = await insertWaitlistEntry({
      email,
      role,
      locale: "ka",
      source: "landing",
    });

    if (!error) {
      return {
        status: "success",
        message:
          role === "partner"
            ? "მადლობა. პარტნიორების სიაში დაგამატეთ და გაშვებამდე დაგიკავშირდებით."
            : "მადლობა. სიაში ხართ და FoodLoop-ის გაშვებას პირველებს შეგატყობინებთ.",
      };
    }

    if (error.code === "23505") {
      return {
        status: "duplicate",
        message: "ეს ელფოსტა უკვე სიაშია. გაშვების სიახლეს აუცილებლად მიიღებთ.",
      };
    }

    return {
      status: "error",
      message: "ამ მომენტში რეგისტრაცია ვერ მოხერხდა. გთხოვთ სცადოთ თავიდან.",
    };
  } catch {
    return {
      status: "error",
      message:
        "სერვისი ჯერ ბოლომდე არ არის დაკავშირებული. სცადეთ მოგვიანებით ან შეამოწმეთ Supabase პარამეტრები.",
    };
  }
}
