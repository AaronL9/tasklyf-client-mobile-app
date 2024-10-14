import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileHeader from "@/components/Profile/ProfileHeader";

export default function Profile() {
  return (
    <View style={{ alignItems: "center" }}>
      <ProfileHeader />
    </View>
  );
}

const styles = StyleSheet.create({});
