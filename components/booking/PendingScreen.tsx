import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BookingCard from "./BookingCard";

export default function PendingScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: 20,
        paddingHorizontal: 16,
      }}
    >
      <BookingCard />
    </View>
  );
}

const styles = StyleSheet.create({});
