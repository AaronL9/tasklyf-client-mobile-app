import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import TopProviderCard from "./TopProviderCard";

const topProviders: React.ComponentProps<typeof TopProviderCard>[] = [
  {
    profileUrl:
      "https://cdn.create.vista.com/api/media/small/138013506/stock-vector-user-profile-group",
    providerName: "Juan dela Cruz",
    profession: "Computer Technician",
    numberOfRatings: 150,
    avgRatings: 4.5,
  },
  {
    profileUrl:
      "https://cdn.create.vista.com/api/media/small/138013506/stock-vector-user-profile-group",
    providerName: "Maria Santos",
    profession: "Electrician",
    numberOfRatings: 200,
    avgRatings: 4.7,
  },
  {
    profileUrl:
      "https://cdn.create.vista.com/api/media/small/138013506/stock-vector-user-profile-group",
    providerName: "Rico Garcia",
    profession: "Mechanic",
    numberOfRatings: 120,
    avgRatings: 4.3,
  },
];

export default function TopProviderCardList() {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={topProviders}
      contentContainerStyle={styles.contentContaier}
      renderItem={({ item, index }) => (
        <TopProviderCard
          key={index}
          profileUrl={item.profileUrl}
          providerName={item.providerName}
          profession={item.profession}
          numberOfRatings={item.numberOfRatings}
          avgRatings={item.avgRatings}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  contentContaier: {
    flexDirection: "row",
    justifyContent: "space-between",
    columnGap: 12,
    paddingHorizontal: 20,
  },
});
