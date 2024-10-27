import { supabase } from "@/utils/supabase";
import { createContext, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Database } from "@/utils/database.types";

type ProviderType = {
  first_name: string | null;
  last_name: string | null;
  profile_url: string;
};

type AvailabilityType = {
  start_time: string | null;
  end_time: string | null;
};

export type BookingType = Database["public"]["Tables"]["bookings"]["Row"] & {
  providers: ProviderType | null;
  availability: AvailabilityType | null;
};

type BookingContextTypes = {
  getBookingHandler: (status: string[]) => Promise<BookingType[] | null>;
};

export const BookingContext = createContext<BookingContextTypes>({
  getBookingHandler: async () => null,
});

export function BookingContextProvider({ children }: { children: React.ReactNode }) {
  const { user } = useContext(AuthContext);

  async function getBookingHandler(status: string[]): Promise<BookingType[] | null> {
    let { data: bookings, error } = await supabase
      .from("bookings")
      .select(
        `
        *,
        providers (
        first_name,
        last_name,
        profile_url
        ),
        availability (
         start_time,
         end_time
        )
        `
      )
      .eq("client_id", user?.id)
      .in("status", status)
      .order("created_at", { ascending: false })
      .returns<BookingType[] | null>();

    if (error) {
      console.error("Error fetching bookings:", error.message);
      return null; // return null in case of error
    }

    if (!bookings || bookings.length === 0) {
      console.log("No bookings found for the given status.");
      return null;
    }

    // console.log(JSON.stringify(bookings, undefined, 2));
    return bookings;
  }

  return (
    <BookingContext.Provider value={{ getBookingHandler }}>{children}</BookingContext.Provider>
  );
}
