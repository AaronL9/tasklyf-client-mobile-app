import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import PrimaryButton from "../PrimaryButton";
import { Colors } from "@/constants/Colors";

export default function ServiceBookingBanner() {
  return (
    <View style={{ width: "100%" }}>
      <View style={styles.promoContainer}>
        <Image
          source={require("@/assets/images/hero-image.jpg")}
          style={styles.promoImage}
        />
        <View style={styles.promoOverlay}>
          <Text style={styles.promoHeaderText}>Book Services</Text>
          <Text style={styles.promoSubText}>in your area with ease</Text>
          <View style={{ marginTop: 8 }}>
            <PrimaryButton buttonLabel="Book Now"/>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          columnGap: 8,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 8,
        }}
      >
        <View style={styles.indicator}></View>
        <View
          style={[styles.indicator, { backgroundColor: Colors.blue }]}
        ></View>
        <View style={styles.indicator}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  promoContainer: {
    width: "100%",
    position: "relative",
    alignItems: "center",
    marginTop: 25,
    overflow: "hidden",
    borderRadius: 10,
    height: 153,
  },
  promoImage: {
    width: "100%",
    height: 200,
  },
  promoOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    backgroundColor: "#00000077",
    paddingLeft: 20,
    rowGap: 4,
  },
  promoHeaderText: {
    color: "white",
    fontSize: 18,
    fontFamily: "Archivo Black",
  },
  promoSubText: {
    color: "white",
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    width: 130,
  },
  indicator: {
    width: 6,
    height: 6,
    borderRadius: 12,
    backgroundColor: Colors["primary-grey"],
  },
});
