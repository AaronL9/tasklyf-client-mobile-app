import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import Star from "../svg/Star";

export default function UserRatingsCard() {
  return (
    <View style={styles.userRatingsCardContainer}>
      <View style={{ flexDirection: "row", gap: 5, alignItems: "flex-start" }}>
        <Image
          style={{ borderRadius: 80 }}
          width={20}
          height={20}
          source={{
            uri: "https://cdn.vectorstock.com/i/500p/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.jpg",
          }}
        />
        <View style={{ flex: 1 }}>
          <Text style={{ fontFamily: "Poppins-Medium" }}>John Doe</Text>
          <View style={{ flexDirection: "row", marginTop: -6 }}>
            <Star color={Colors.yellow} />
            <Star color={Colors.yellow} />
            <Star color={Colors.yellow} />
            <Star color={Colors.yellow} />
            <Star color={Colors.yellow} />
          </View>
          <Text style={{ width: "100%", marginTop: 8, fontFamily: "Poppins-Light", fontSize: 13 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userRatingsCardContainer: {
    borderWidth: 1,
    borderColor: Colors["seoncdary-grey"],
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
});
