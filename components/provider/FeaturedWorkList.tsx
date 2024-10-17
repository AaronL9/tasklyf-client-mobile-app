import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const images = [
  "https://wordpress.bricknbolt.com/wp-content/uploads/2024/09/Plumbing-Work-1.webp",
  "https://assets.site-static.com/userFiles/2861/image/Plumbing_Inspection_for_Home_Purch.jpg",
  "https://rainaldihomeservices.com/wp-content/uploads/2023/09/AdobeStock_249711195-web-1024x683.jpeg",
];

export default function FeaturedWorkList() {
  return (
    <FlatList
      contentContainerStyle={{ gap: 20, marginTop: 10, paddingHorizontal: 20 }}
      showsHorizontalScrollIndicator={false}
      horizontal
      data={images}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => (
        <Image style={{ borderRadius: 10 }} width={150} height={100} source={{ uri: item }} />
      )}
    />
  );
}

const styles = StyleSheet.create({});
