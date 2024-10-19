import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";

type Props = {
  serviceName: string;
  price: string;
  imageSource: string;
};

export default function PopularServiceCard(props: Props) {
  return (
    <Link href={{ pathname: "/search", params: { searchQuery: props.serviceName } }}>
      <View style={styles.cardContainer}>
        <Image style={styles.imageStyle} source={{ uri: props.imageSource }} />
        <Text style={styles.serviceName}>{props.serviceName}</Text>
        <Text style={{ fontFamily: "Poppins-Light" }}>
          Start at <Text style={styles.price}>₱{props.price}</Text>
        </Text>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 200,
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors["tertiary-grey"],
    paddingHorizontal: 20,
    paddingVertical: 15,
    rowGap: 4,
  },
  imageStyle: { width: "100%", height: 85, borderRadius: 6 },
  serviceName: { fontFamily: "Poppins-Medium", fontSize: 16 },
  price: { fontFamily: "Poppins", color: Colors.green },
});
