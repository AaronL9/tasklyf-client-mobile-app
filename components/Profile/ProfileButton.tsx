import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Handshake from "../svg/HandShake";
import GreaterThan from "../svg/GreaterThan";

type Props = {
  icon: string;
  buttonName: string;
  rightIcon: string;
};

export default function ProfileButton() {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        gap: 8,
        marginTop: 12,
      }}
    >
      <Handshake />
      <Text style={{ fontFamily: "Poppins-Medium" }}>Register as Partner</Text>
      <View style={{ marginLeft: "auto" }}>
        <GreaterThan />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
