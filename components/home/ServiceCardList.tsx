import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ServiceCard from "./ServiceCard";

const services: React.ComponentProps<typeof ServiceCard>[] = [
  { label: "AC Services", icon: "air-conditioner" },
  { label: "Cleaning", icon: "vacuum" },
  { label: "Painting", icon: "rollers" },
  { label: "Electrical", icon: "plug" },
];

export default function ServiceCardList() {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator
      data={services}
      contentContainerStyle={{
        flexDirection: "row",
        justifyContent: "space-between",
        columnGap: 12,
      }}
      renderItem={({ item, index }) => (
        <ServiceCard key={index} icon={item.icon} label={item.label} />
      )}
    />
  );
}

const styles = StyleSheet.create({});
