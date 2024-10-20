export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      availability: {
        Row: {
          day: string;
          end_time: string;
          id: number;
          provider_id: string | null;
          start_time: string;
          status: string;
          time_of_day: string;
        };
        Insert: {
          day?: string;
          end_time?: string;
          id?: number;
          provider_id?: string | null;
          start_time?: string;
          status: string;
          time_of_day?: string;
        };
        Update: {
          day?: string;
          end_time?: string;
          id?: number;
          provider_id?: string | null;
          start_time?: string;
          status?: string;
          time_of_day?: string;
        };
        Relationships: [
          {
            foreignKeyName: "availability_provider_id_fkey";
            columns: ["provider_id"];
            isOneToOne: false;
            referencedRelation: "providers";
            referencedColumns: ["id"];
          }
        ];
      };
      bookings: {
        Row: {
          appointment_date: string;
          availability_id: number;
          client_id: string;
          created_at: string;
          id: string;
          price: number;
          provider_id: string;
          status: string;
        };
        Insert: {
          appointment_date: string;
          availability_id: number;
          client_id?: string;
          created_at?: string;
          id?: string;
          price: number;
          provider_id?: string;
          status?: string;
        };
        Update: {
          appointment_date?: string;
          availability_id?: number;
          client_id?: string;
          created_at?: string;
          id?: string;
          price?: number;
          provider_id?: string;
          status?: string;
        };
        Relationships: [
          {
            foreignKeyName: "bookings_availability_id_fkey";
            columns: ["availability_id"];
            isOneToOne: false;
            referencedRelation: "availability";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "bookings_client_id_fkey";
            columns: ["client_id"];
            isOneToOne: false;
            referencedRelation: "client";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "bookings_provider_id_fkey";
            columns: ["provider_id"];
            isOneToOne: false;
            referencedRelation: "providers";
            referencedColumns: ["id"];
          }
        ];
      };
      client: {
        Row: {
          address: string | null;
          created_at: string;
          email: string | null;
          first_name: string | null;
          id: string;
          last_name: string | null;
          phone: string | null;
        };
        Insert: {
          address?: string | null;
          created_at?: string;
          email?: string | null;
          first_name?: string | null;
          id?: string;
          last_name?: string | null;
          phone?: string | null;
        };
        Update: {
          address?: string | null;
          created_at?: string;
          email?: string | null;
          first_name?: string | null;
          id?: string;
          last_name?: string | null;
          phone?: string | null;
        };
        Relationships: [];
      };
      providers: {
        Row: {
          address: string;
          avg_ratings: number;
          banner: string | null;
          created_at: string;
          email: string | null;
          first_name: string;
          id: string;
          last_name: string;
          phone: string;
          price: string;
          profession: string;
          profile_url: string;
          schedule: Json | null;
          service_details: string;
          zip_code: string | null;
        };
        Insert: {
          address?: string | null;
          avg_ratings?: number | null;
          banner?: string | null;
          created_at?: string;
          email?: string | null;
          first_name?: string | null;
          id?: string;
          last_name?: string | null;
          phone?: string | null;
          price?: string | null;
          profession?: string | null;
          profile_url?: string | null;
          schedule?: Json | null;
          service_details?: string | null;
          zip_code?: string | null;
        };
        Update: {
          address?: string | null;
          avg_ratings?: number | null;
          banner?: string | null;
          created_at?: string;
          email?: string | null;
          first_name?: string | null;
          id?: string;
          last_name?: string | null;
          phone?: string | null;
          price?: string | null;
          profession?: string | null;
          profile_url?: string | null;
          schedule?: Json | null;
          service_details?: string | null;
          zip_code?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] & PublicSchema["Views"])
  ? (PublicSchema["Tables"] & PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends keyof PublicSchema["Tables"] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends keyof PublicSchema["Tables"] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends keyof PublicSchema["Enums"] | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
  ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
  : never;
