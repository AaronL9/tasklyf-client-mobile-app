import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import PrimaryButton from "../PrimaryButton";

export default function ProfileHeader() {
  return (
    <View style={{ alignItems: "center", marginTop: 50, gap: 8 }}>
      <Image source={require("@/assets/images/images.png")} />
      <Text style={{ fontFamily: "Archivo Black" }}>Patrick Antonio</Text>
      <Text style={{ fontFamily: "Poppins-Medium" }}>
        patrickantonio@gmail.com
      </Text>
      <PrimaryButton />
    </View>
  );
}

const styles = StyleSheet.create({});
