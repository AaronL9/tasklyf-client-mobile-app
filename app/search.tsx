import { StatusBar, StyleSheet, Text, View } from "react-native";
import SearchProviderCard from "@/components/search/SearchProviderCard";
import SearchHeader from "@/components/search/SearchHeader";

export default function Search() {
  return (
    <View style={{ paddingTop: StatusBar.currentHeight ?? 0 }}>
      <SearchHeader />
      <View style={{ paddingHorizontal: 18 }}>
        <SearchProviderCard />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
