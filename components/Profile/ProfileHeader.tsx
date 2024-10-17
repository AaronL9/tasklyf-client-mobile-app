import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import PrimaryButton from "../PrimaryButton";

export default function ProfileHeader() {
  return (
    <View style={{ alignItems: "center", gap: 8 }}>
      <Image
        style={{ width: 100, height: 100, borderRadius: 20 }}
        source={{
          uri: "https://cdn.create.vista.com/api/media/small/138013506/stock-vector-user-profile-group",
        }}
      />
      <Text style={{ fontFamily: "Archivo Black" }}>Patrick Antonio</Text>
      <Text style={{ fontFamily: "Poppins-Medium" }}>patrickantonio@gmail.com</Text>
      <View style={{ width: 200 }}>
        <PrimaryButton buttonLabel="Edit Profile" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
