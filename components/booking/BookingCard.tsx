import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import Star from "../svg/Star";
import PrimaryButton from "../PrimaryButton";

export default function BookingCard() {
  return (
    <View style={styles.bookingCardContainer}>
      <View style={styles.bookingTopWrapperContent}>
        <View style={{ gap: 4 }}>
          <Text style={{ fontFamily: "Poppins-Medium", textDecorationLine: "underline" }}>
            #003216
          </Text>
          <Text style={{ fontFamily: "Archivo Black", fontSize: 16 }}>Pest Control</Text>
          <Text style={{ fontFamily: "Poppins-Medium", color: Colors["primary-grey"] }}>
            22 Sep 21, 04:30 PM
          </Text>
        </View>

        <View>
          <Text
            style={{
              backgroundColor: "#fbcd5034",
              color: "#FBCE50",
              paddingVertical: 2,
              paddingHorizontal: 12,
              borderRadius: 8,
              fontFamily: "Poppins-SemiBold",
            }}
          >
            Pending
          </Text>
          <Text
            style={{ marginTop: "auto", alignSelf: "flex-end", fontFamily: "Poppins-SemiBold" }}
          >
            ₱150
          </Text>
        </View>
      </View>

      <View style={{ borderWidth: 1, borderColor: Colors["tertiary-grey"] }}></View>

      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <View>
          <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 16 }}>John Doe</Text>
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
            uri: "https://cdn.vectorstock.com/i/500p/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.jpg",
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
});
