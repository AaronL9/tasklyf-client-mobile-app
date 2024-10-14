import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import PopularServiceCard from "./PopularServiceCard";

const services: React.ComponentProps<typeof PopularServiceCard>[] = [
  {
    serviceName: "Hairdresser",
    imageSource:
      "https://images.unsplash.com/photo-1593702288056-7927b442d0fa?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFpcmRyZXNzZXJ8ZW58MHx8MHx8fDA%3D",
    price: "500",
  },
  {
    serviceName: "Photographer",
    imageSource:
      "https://www.lightrocket.com/_next/image?url=%2Fimg%2Fblog%2Fcan-self-criticism-help-you-become-a-better-photographer%2FCan-Self-Criticism-Help-You-Become-a-Better-Photographer.jpeg&w=3840&q=75",
    price: "500",
  },
  {
    serviceName: "Event Makeup Artist",
    imageSource:
      "https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/SORL0723007_1560x880_desktop.jpg",
    price: "500",
  },
];

export default function PopularServiceCardList() {
  return (
    <FlatList
      horizontal
      data={services}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      renderItem={({ item, index }) => (
        <PopularServiceCard
          key={index}
          imageSource={item.imageSource}
          serviceName={item.serviceName}
          price={item.price}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    columnGap: 12,
    paddingHorizontal: 20,
  },
});
