import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { ServiceProviderContext } from "@/context/ServiceProviderContext";
import { Colors } from "@/constants/Colors";
import DatePicker from "@/components/appointment/DatePicker";
import TimePicker from "@/components/appointment/TimePicker";
import { supabase } from "@/utils/supabase";
import { Database } from "@/utils/database.types";
import { getDayOfWeek } from "@/utils/DateFormatter";
import PrimaryButton from "@/components/PrimaryButton";

export type TimeSlotTypes = Database["public"]["Tables"]["availability"]["Row"];
export type BookingTypes = Pick<Database["public"]["Tables"]["bookings"]["Row"], "availability_id">;

export default function Appointment() {
  const local = useLocalSearchParams();
  const { providerInfo } = useContext(ServiceProviderContext);

  const [timeSlots, setTimeSlots] = useState<TimeSlotTypes[] | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<number | null>(null);
  const [bookings, setBookings] = useState<number[]>([]);

  const [isoDate, setIsoDate] = useState<string>(new Date().toISOString());
  const [isLoading, setIsLoading] = useState(true);

  async function getTimeSlot() {
    try {
      let { data: availability, error } = await supabase
        .from("availability")
        .select("*")
        .eq("day", getDayOfWeek(isoDate))
        .returns<TimeSlotTypes[] | null>();

      if (error) throw new Error(error.message);

      setTimeSlots(availability);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  async function getTakenBooking() {
    let { data: bookings, error } = await supabase
      .from("bookings")
      .select("availability_id")
      .eq("status", "request")
      .eq("appointment_date", isoDate)
      .returns<BookingTypes[] | null>();

    if (error) return console.log(error.message);
    if (!bookings) return;

    setBookings(bookings.map(({ availability_id }) => availability_id));
  }

  useEffect(() => {
    setIsLoading(true);
    getTakenBooking();
    getTimeSlot();
  }, [isoDate]);

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <View>
          <Text style={{ fontFamily: "Archivo Black", fontSize: 24 }}>
            {providerInfo?.profession}
          </Text>
          <Text style={{ fontSize: 12, fontFamily: "Poppins" }}>
            {providerInfo?.service_details}
          </Text>
        </View>
        <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 18 }}>{providerInfo?.price}</Text>
      </View>

      <View
        style={{ borderWidth: 1, borderColor: Colors["seoncdary-grey"], marginVertical: 38 }}
      ></View>

      <Text style={{ fontFamily: "Archivo Black", fontSize: 24 }}>Schedule</Text>

      <DatePicker label="Pick a Day" setIsoDate={setIsoDate} />

      <View style={{ marginTop: 20 }}>
        <TimePicker
          timeOfDay="Morning"
          timeSlots={timeSlots?.filter(({ time_of_day }) => time_of_day === "morning")}
          takenTimeSlots={bookings}
          isLoading={isLoading}
          selectedTimeSlot={selectedTimeSlot}
          setSelectedTimeSlot={setSelectedTimeSlot}
        />
        <TimePicker
          timeOfDay="Afternoon"
          timeSlots={timeSlots?.filter(({ time_of_day }) => time_of_day === "afternoon")}
          takenTimeSlots={bookings}
          isLoading={isLoading}
          selectedTimeSlot={selectedTimeSlot}
          setSelectedTimeSlot={setSelectedTimeSlot}
        />
        <TimePicker
          timeOfDay="Evening"
          timeSlots={timeSlots?.filter(({ time_of_day }) => time_of_day === "evening")}
          takenTimeSlots={bookings}
          isLoading={isLoading}
          selectedTimeSlot={selectedTimeSlot}
          setSelectedTimeSlot={setSelectedTimeSlot}
        />
      </View>

      <View style={styles.bookButtonWrapper}>
        <Link
          href={{
            pathname: "/payment",
          }}
          asChild
        >
          <PrimaryButton
            color={!selectedTimeSlot ? Colors["seoncdary-grey"] : undefined}
            disable={!selectedTimeSlot ? true : false}
            buttonLabel="Proceed"
          />
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bookButtonWrapper: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.0,
    elevation: 24,
  },
});
