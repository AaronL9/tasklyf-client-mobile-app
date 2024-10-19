import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import Star from "../svg/Star";
import { Link } from "expo-router";
import { ProviderProp } from "@/app/search";

export default function SearchProviderCard(props: ProviderProp) {
  return (
    <Link href="/provider" asChild>
      <TouchableOpacity style={styles.searchProviderCardContainer}>
        <Image
          style={{ width: 70, height: "100%", borderRadius: 10 }}
          source={{
            uri: props.profile_url,
          }}
        />

        <View style={styles.searchProviderCardDetails}>
          <Text style={{ fontFamily: "Archivo Black" }}>
            {props.first_name} {props.last_name}
          </Text>
          <Text style={styles.searchProviderCardProfession}>{props.profession}</Text>

          <View style={styles.searchProviderCardRatings}>
            <Star color={Colors.ratings} />
            <Text style={{ color: "black" }}>{props.avg_ratings}</Text>
            <Text>{"(120 Reviews)"}</Text>
          </View>
        </View>

        <View style={{ marginLeft: "auto", alignSelf: "center" }}>
          <Text style={{ fontFamily: "Poppins-SemiBold" }}>{props.price}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  searchProviderCardContainer: {
    borderWidth: 1,
    borderColor: Colors["tertiary-grey"],
    borderRadius: 8,
    justifyContent: "flex-start",
    flexDirection: "row",
    padding: 10,
    gap: 12,
  },
  searchProviderCardDetails: {
    borderRadius: 8,
    overflow: "hidden",
    height: 80,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flex: 1,
    gap: 4,
  },
  searchProviderCardProfession: {
    fontFamily: "Poppins-SemiBold",
    backgroundColor: Colors.blue,
    paddingHorizontal: 6,
    borderRadius: 8,
    fontSize: 12,
    color: "white",
  },
  searchProviderCardRatings: {
    flexDirection: "row",
    columnGap: 4,
    justifyContent: "center",
    marginTop: "auto",
  },
});
