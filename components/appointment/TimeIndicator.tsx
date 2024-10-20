import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

export default function TimeIndicator() {
  return (
    <View style={{ alignItems: "center", width: 15 }}>
      <View
        style={{ width: 15, height: 15, backgroundColor: Colors.yellow, borderRadius: 9999 }}
      ></View>
      <View style={{ flex: 1, borderLeftWidth: 1, borderColor: Colors["seoncdary-grey"] }}></View>
    </View>
  );
}

const styles = StyleSheet.create({});
