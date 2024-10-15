import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileHeader from "@/components/Profile/ProfileHeader";
import ProfileButton from "@/components/Profile/ProfileButton";

export default function Profile() {
  return (
    <View style={styles.profileContainer}>
      <ProfileHeader />
      <View style={styles.profileMenu}>
        <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 16, width: "100%" }}>Profile</Text>
        <ProfileButton buttonName="Register as Partner" icon="handshake" />
        <ProfileButton buttonName="My Booking" icon="calendar" />
        <ProfileButton buttonName="Help Center" icon="help" />
        <ProfileButton buttonName="Share & Earn" icon="share-and-earn" />
        <ProfileButton buttonName="Rate Us" icon="ProfileStars" />
        <ProfileButton buttonName="FAQ's" icon="QuestionAndAnswer" />
        <ProfileButton buttonName="Privacy Policy" icon="ProfilePrivacy" />
        <ProfileButton buttonName="Logout" icon="ProfileLogout" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "white",
    flex: 1,
  },
  profileMenu: {
    alignItems: "flex-start",
    width: "100%",
    gap: 10,
    marginTop: 40,
  },
});
