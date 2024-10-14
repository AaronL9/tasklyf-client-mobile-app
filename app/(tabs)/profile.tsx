import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileHeader from "@/components/Profile/ProfileHeader";
import ProfileButton from "@/components/Profile/ProfileButton";

export default function Profile() {
  return (
    <View style={{ alignItems: "center", paddingHorizontal: 20 }}>
      <ProfileHeader />
      <View style={{ alignItems: "flex-start", width: "100%", gap: 10 }}>
        <Text style={{ fontFamily: "Poppins-Medium", fontSize: 16 }}>
          Profile
        </Text>
        <ProfileButton buttonName="Register as Partner" icon="handshake" />
        <ProfileButton buttonName="My Booking" icon="calendar" />
        <ProfileButton buttonName="Help Center" icon="help" />
        <ProfileButton buttonName="Share & Earn" icon="share-and-earn" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
