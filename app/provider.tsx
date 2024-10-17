import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ProviderDetailsCard from "@/components/provider/ProviderDetailsCard";
import UserRatingsCard from "@/components/provider/UserRatingsCard";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import FeaturedWorkList from "@/components/provider/FeaturedWorkList";
import PrimaryButton from "@/components/PrimaryButton";

export default function Provider() {
  return (
    <View>
      <ScrollView style={{ backgroundColor: "transparent" }}>
        <View style={{ backgroundColor: "white", marginBottom: 15 }}>
          <ProviderDetailsCard />
        </View>

        <View style={styles.featuredWorkSectionWrapper}>
          <Text style={[styles.providerTitle, { paddingHorizontal: 20 }]}>Featured Work</Text>
          <FeaturedWorkList />
        </View>

        <View style={styles.reviewSectionWrapper}>
          <View style={styles.reviewSectionTitleWrapper}>
            <Text style={styles.providerTitle}>Customer Ratings</Text>
            <TouchableOpacity>
              <Text style={styles.reviewSectionButton}>
                View All <Ionicons name="chevron-forward" color={Colors["primary-grey"]} />
              </Text>
            </TouchableOpacity>
          </View>
          <UserRatingsCard />
          <UserRatingsCard />
        </View>

        <View style={{ paddingVertical: 50 }}></View>
      </ScrollView>

      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          backgroundColor: "white",
          padding: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: 18,
          },
          shadowOpacity: 0.25,
          shadowRadius: 20.0,
          elevation: 24,
        }}
      >
        <PrimaryButton buttonLabel="Book Now" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  providerTitle: { fontFamily: "Archivo Black", fontSize: 16 },

  featuredWorkSectionWrapper: { backgroundColor: "white", paddingVertical: 20, marginBottom: 15 },

  reviewSectionWrapper: { backgroundColor: "white", padding: 20, gap: 10 },
  reviewSectionTitleWrapper: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  reviewSectionButton: {
    fontFamily: "Poppins",
    color: Colors["primary-grey"],
    alignSelf: "flex-end",
  },
});
