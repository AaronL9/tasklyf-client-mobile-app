import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Star from "../svg/Star";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";

type Props = {
  profileUrl: string;
  providerName: string;
  profession: string;
  numberOfRatings: number;
  avgRatings: number;
};

export default function TopProviderCard(props: Props) {
  return (
    <Link href={{ pathname: "/provider", params: { providerName: props.providerName } }}>
      <View style={styles.topProviderCardContainer}>
        <Image style={styles.topProviderCardImage} source={{ uri: props.profileUrl }} />

        <Text style={{ fontFamily: "Poppins-Medium" }}>{props.providerName}</Text>
        <Text style={{ fontFamily: "Poppins-Light", fontSize: 12, marginBottom: 12 }}>
          {props.profession}
        </Text>

        <View style={styles.topProviderCardRatingsWrapper}>
          <Text style={{ color: Colors.ratings }}>{props.avgRatings}</Text>
          <View style={{ flexDirection: "row" }}>
            <Star color={Colors.ratings} />
            <Star color={Colors.ratings} />
            <Star color={Colors.ratings} />
            <Star color={Colors.ratings} />
            <Star color={Colors.ratings} />
          </View>
          <Text>({props.numberOfRatings})</Text>
        </View>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  topProviderCardContainer: {
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors["tertiary-grey"],
    paddingVertical: 18,
    borderRadius: 10,
  },
  topProviderCardImage: { width: 40, height: 40, borderRadius: 80, marginBottom: 8 },
  topProviderCardRatingsWrapper: { flexDirection: "row", alignItems: "center", columnGap: 5 },
});
