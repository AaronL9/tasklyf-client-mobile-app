import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import Star from "../svg/Star";
import PrimaryButton from "../PrimaryButton";
import { Database } from "@/utils/database.types";
import { convertTo12HourFormat, formatDateLong } from "@/utils/DateFormatter";
import StatusIndicator from "./StatusIndicator";
import { BookingType } from "@/context/BookingContext";

export default function BookingCard({ data }: { data: BookingType }) {
  return (
    <View style={styles.bookingCardContainer}>
      <View style={styles.bookingTopWrapperContent}>
        <View style={{ gap: 4 }}>
          <Text style={{ fontFamily: "Poppins-Medium", textDecorationLine: "underline" }}>
            #{data.id}
          </Text>
          <Text style={{ fontFamily: "Archivo Black", fontSize: 16 }}>{data.service}</Text>
          <Text style={styles.timeSlotStyle}>{formatDateLong(data.appointment_date)}</Text>
          {data.availability?.start_time && data.availability.end_time && (
            <Text style={styles.timeSlotStyle}>
              {convertTo12HourFormat(data.availability?.start_time)} -{" "}
              {convertTo12HourFormat(data.availability.end_time)}
            </Text>
          )}
        </View>

        <View>
          <StatusIndicator status={data.status} />
          <Text
            style={{ marginTop: "auto", alignSelf: "flex-end", fontFamily: "Poppins-SemiBold" }}
          >
            ₱{data.price}
          </Text>
        </View>
      </View>

      <View style={{ borderWidth: 1, borderColor: Colors["tertiary-grey"] }}></View>

      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <View>
          <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 16 }}>
            {data.providers?.first_name} {data.providers?.last_name}
          </Text>
          <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
            <Star color={Colors.yellow} />
            <Text>4.8</Text>
          </View>
          <Text style={{ color: Colors["primary-grey"] }}>192 Ratings</Text>
        </View>
        <Image
          style={{ borderRadius: 80 }}
          width={40}
          height={40}
          source={{
            uri: data.providers?.profile_url,
          }}
        />
      </View>

      <View style={{ gap: 12 }}>
        <PrimaryButton buttonLabel="Message" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bookingCardContainer: {
    borderRadius: 12,
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderColor: Colors["seoncdary-grey"],
    gap: 20,
  },
  bookingTopWrapperContent: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  timeSlotStyle: { fontFamily: "Poppins-Medium", color: Colors["primary-grey"] },
});
