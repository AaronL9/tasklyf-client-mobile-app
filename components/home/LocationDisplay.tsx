import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Mark from "../icons/Mark";
import { Colors } from "@/constants/Colors";

export default function LocationDisplay() {
  return (
    <View style={styles.container}>
      <Mark color={Colors["dark"]} />
      <View>
        <Text style={styles.label}>Current Location</Text>
        <Text style={styles.locationName}>Dagupan City</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    columnGap: 8,
    marginLeft: 20,
    alignItems: "center",
  },
  label: {
    fontSize: 13,
    fontFamily: "Poppins-Medium",
    color: Colors["primary-grey"],
  },
  locationName: { fontSize: 14, fontFamily: "Poppins-Medium" },
});
