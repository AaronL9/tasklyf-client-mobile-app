import { Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import Star from "../svg/Star";

export default function SearchProviderCard() {
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderColor: Colors["tertiary-grey"],
        borderRadius: 8,
        justifyContent: "flex-start",
        flexDirection: "row",
        padding: 10,
        gap: 12,
      }}
    >
      <Image
        style={{ width: 70, height: "100%", borderRadius: 10 }}
        source={{
          uri: "https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg",
        }}
      />
      <View
        style={{
          borderRadius: 8,
          overflow: "hidden",
          height: 80,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flex: 1,
          gap: 4,
        }}
      >
        <Text style={{ fontFamily: "Archivo Black" }}>Aaron Lomibao</Text>
        <Text
          style={{
            fontFamily: "Poppins-SemiBold",
            backgroundColor: Colors.blue,
            paddingHorizontal: 6,
            borderRadius: 8,
            fontSize: 12,
            color: "white",
          }}
        >
          Plumbers
        </Text>
        <View
          style={{
            flexDirection: "row",
            columnGap: 4,
            justifyContent: "center",
            marginTop: "auto",
          }}
        >
          <Star color={Colors.ratings} />
          <Text style={{ color: "black" }}>5</Text>
          <Text>{"(120 Reviews)"}</Text>
        </View>
      </View>
      <View style={{ marginLeft: "auto", alignSelf: "center" }}>
        <Text style={{ fontFamily: "Poppins-SemiBold" }}>₱500</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
