import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Star from "../svg/Star";
import { Colors } from "@/constants/Colors";

type Props = {
  profileUrl: string;
  providerName: string;
  profession: string;
  numberOfRatings: number;
  avgRatings: number;
};

export default function TopProviderCard(props: Props) {
  return (
    <View
      style={{
        width: 200,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: Colors["tertiary-grey"],
        paddingVertical: 18,
        borderRadius: 10,
      }}
    >
      <Image
        style={{ width: 40, height: 40, borderRadius: 80, marginBottom: 8 }}
        source={{ uri: props.profileUrl }}
      />
      <Text style={{ fontFamily: "Poppins-Medium" }}>{props.providerName}</Text>
      <Text
        style={{ fontFamily: "Poppins-Light", fontSize: 12, marginBottom: 12 }}
      >
        {props.profession}
      </Text>
      <View
        style={{ flexDirection: "row", alignItems: "center", columnGap: 5 }}
      >
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
  );
}

const styles = StyleSheet.create({});
