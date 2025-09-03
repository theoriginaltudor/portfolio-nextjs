
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Fallback disabled client to avoid hard crashes when env vars are missing locally.
interface DisabledSupabaseLike {
  auth: {
    getUser: () => Promise<{ data: { user: null }; error: null }>;
    getSession: () => Promise<{ data: { session: null }; error: null }>;
  };
  from: (_: string) => {
    select: () => Promise<{ data: null; error: Error }>;
    insert: () => Promise<{ data: null; error: Error }>;
    update: () => Promise<{ data: null; error: Error }>;
    delete: () => Promise<{ data: null; error: Error }>;
  };
}

function createDisabledClient(): DisabledSupabaseLike {
  const disabledError = () => new Error("Supabase disabled: missing env vars");
  return {
    auth: {
      getUser: async () => ({ data: { user: null }, error: null }),
      getSession: async () => ({ data: { session: null }, error: null }),
    },
    from: () => ({
      select: async () => ({ data: null, error: disabledError() }),
      insert: async () => ({ data: null, error: disabledError() }),
      update: async () => ({ data: null, error: disabledError() }),
      delete: async () => ({ data: null, error: disabledError() }),
    }),
  };
}

export const createClient = async () => {
  if (!supabaseUrl || !supabaseKey) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "Supabase env vars missing (NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY). Running in disabled mode.",
      );
    }
    return createDisabledClient();
  }

  const cookieStore = await cookies();
  return createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      async setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options),
          );
        } catch {
          console.error("Error setting cookies in Supabase client creation");
        }
      },
    },
  });
};
