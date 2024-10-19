import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Star from "./svg/Star";
import { Colors } from "@/constants/Colors";

type RatingsPropTypes = {
  ratings: number;
  variant: "five-start" | "single-star";
};

export default function Ratings() {
  return (
    <View>
      <Text>4.9</Text>
      <View>
        <Star color={Colors.ratings} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
