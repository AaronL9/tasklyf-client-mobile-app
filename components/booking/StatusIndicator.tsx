import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

type StatusIndicatorTypes = {
  status: string;
};

export default function StatusIndicator({ status }: StatusIndicatorTypes) {
  let color = "#FBCE50";

  switch (status) {
    case "pending":
      color = "##FBCE50";
      break;

    case "accepted":
      color = Colors.blue;
      break;

    case "ongoing":
      color = Colors.blue;
      break;

    case "completed":
      color = "#006400";
      break;

    case "cancelled":
      color = "#FF4500";
      break;
  }

  return (
    <Text
      style={{
        backgroundColor: `${color}34`,
        color: color,
        paddingVertical: 2,
        paddingHorizontal: 12,
        borderRadius: 8,
        fontFamily: "Poppins-SemiBold",
        textTransform: "capitalize",
      }}
    >
      {status}
    </Text>
  );
}

const styles = StyleSheet.create({});
