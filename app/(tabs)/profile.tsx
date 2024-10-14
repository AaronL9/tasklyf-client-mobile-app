import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileHeader from "@/components/Profile/ProfileHeader";
import ProfileButton from "@/components/Profile/ProfileButton";

export default function Profile() {
  return (
    <View style={{ alignItems: "center", paddingHorizontal: 20 }}>
      <ProfileHeader />
      <View style={{ alignItems: "flex-start", width: "100%" }}>
        <Text style={{ fontFamily: "Poppins-Medium", fontSize: 16 }}>
          Profile
        </Text>
        <ProfileButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
