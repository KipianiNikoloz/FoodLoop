import { loadEnvConfig } from "@next/env";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { parseAdminEmails } from "../lib/admin-auth";

const MIN_PASSWORD_LENGTH = 12;

loadEnvConfig(process.cwd());

function requireEnv(name: string) {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`${name} is not configured.`);
  }

  return value;
}

async function findUserIdByEmail(
  supabase: SupabaseClient,
  email: string,
) {
  const perPage = 1000;

  for (let page = 1; ; page += 1) {
    const { data, error } = await supabase.auth.admin.listUsers({
      page,
      perPage,
    });

    if (error) {
      throw error;
    }

    const user = data.users.find((candidate) => candidate.email?.toLowerCase() === email);

    if (user) {
      return user.id;
    }

    if (data.users.length < perPage) {
      return null;
    }
  }
}

async function main() {
  const supabaseUrl = requireEnv("NEXT_PUBLIC_SUPABASE_URL");
  const serviceRoleKey = requireEnv("SUPABASE_SERVICE_ROLE_KEY");
  const adminPassword = requireEnv("ADMIN_PASSWORD");
  const adminEmails = Array.from(parseAdminEmails(requireEnv("ADMIN_EMAILS")));

  if (adminPassword.length < MIN_PASSWORD_LENGTH) {
    throw new Error(`ADMIN_PASSWORD must be at least ${MIN_PASSWORD_LENGTH} characters.`);
  }

  if (adminEmails.length === 0) {
    throw new Error("ADMIN_EMAILS must contain at least one email address.");
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  for (const email of adminEmails) {
    const userId = await findUserIdByEmail(supabase, email);

    if (userId) {
      const { error } = await supabase.auth.admin.updateUserById(userId, {
        email_confirm: true,
        password: adminPassword,
      });

      if (error) {
        throw error;
      }

      console.log(`Updated admin user: ${email}`);
      continue;
    }

    const { error } = await supabase.auth.admin.createUser({
      email,
      password: adminPassword,
      email_confirm: true,
    });

    if (error) {
      throw error;
    }

    console.log(`Created admin user: ${email}`);
  }
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
