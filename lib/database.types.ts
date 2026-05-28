export type Database = {
  public: {
    Tables: {
      waitlist_signups: {
        Row: {
          id: string;
          email: string;
          role: WaitlistRole;
          locale: "ka";
          source: "landing";
          created_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          role: WaitlistRole;
          locale?: "ka";
          source?: "landing";
          created_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          role?: WaitlistRole;
          locale?: "ka";
          source?: "landing";
          created_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

export type WaitlistRole = "user" | "partner";
export type WaitlistSignupRow = Database["public"]["Tables"]["waitlist_signups"]["Row"];
export type WaitlistSignupInsert = Database["public"]["Tables"]["waitlist_signups"]["Insert"];
