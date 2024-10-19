import { StatusBar, StyleSheet, Text, View } from "react-native";
import SearchProviderCard from "@/components/search/SearchProviderCard";
import SearchHeader from "@/components/search/SearchHeader";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

export default function Search() {
  const [searchValue, setSearchValue] = useState<string | undefined>();
  const search = useLocalSearchParams<{ searchQuery: string }>();

  useEffect(() => {
    console.log(search);
    setSearchValue(search.searchQuery);
  }, []);

  return (
    <View style={{ paddingTop: StatusBar.currentHeight ?? 0 }}>
      <SearchHeader searchValue={searchValue} setSearchValue={setSearchValue} />
      <View style={{ paddingHorizontal: 18 }}>
        <SearchProviderCard />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
