import { StyleSheet, Text, View, FlatList } from "react-native";

import SearchBar from "@/components/SearchBar";
import PopularServiceCardList from "@/components/home/PopularServiceCardList";
import ServiceBookingBanner from "@/components/home/ServiceBookingBanner";
import ServiceCardList from "@/components/home/ServiceCardList";
import TopProviderCardList from "@/components/home/TopProviderCardList";
import { Link } from "expo-router";

const sections = [
  { id: "search-bar", type: "searchBar" },
  { id: "service-card-list", type: "serviceCardList", header: "Services" },
  {
    id: "popular-service-card-list",
    type: "popularServiceCardList",
    header: "Popular Services",
  },
  {
    id: "top-provider-card-list",
    type: "topProviderCardList",
    header: "Top Service Provider",
  },
];

export default function Index() {
  const renderItem = ({ item }: { item: any }) => {
    switch (item.type) {
      case "searchBar":
        return (
          <View style={styles.sectionContainer}>
            <SearchBar onChangeText={() => {}} disabled placeholder="Search..." />
            <ServiceBookingBanner />
          </View>
        );
      case "serviceCardList":
        return (
          <View style={styles.listContainer}>
            <Text style={styles.headerText}>{item.header}</Text>
            <ServiceCardList />
          </View>
        );
      case "popularServiceCardList":
        return (
          <View style={styles.listContainer}>
            <Text style={styles.headerText}>{item.header}</Text>
            <PopularServiceCardList />
          </View>
        );
      case "topProviderCardList":
        return (
          <View style={styles.listContainer}>
            <Text style={styles.headerText}>{item.header}</Text>
            <TopProviderCardList />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <FlatList
      data={sections}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.homeContainer}
    />
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    alignItems: "stretch",
    backgroundColor: "white",
    paddingBottom: 20,
  },
  sectionContainer: {
    // fix: possible UI bug
    width: 400,
    paddingHorizontal: 20,
    marginTop: 15,
  },
  listContainer: { width: "100%", marginTop: 24 },

  headerText: {
    width: "100%",
    fontFamily: "Archivo Black",
    fontSize: 18,
    marginBottom: 18,
    marginLeft: 20,
  },
});
