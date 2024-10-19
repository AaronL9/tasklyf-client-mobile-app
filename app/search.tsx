import { ActivityIndicator, FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import SearchProviderCard from "@/components/search/SearchProviderCard";
import SearchHeader from "@/components/search/SearchHeader";
import { useLocalSearchParams } from "expo-router";
import { Provider, useEffect, useRef, useState } from "react";
import { supabase } from "@/utils/supabase";
import { Colors } from "@/constants/Colors";

export type ProviderProp = {
  id: string;
  profile_url: string;
  first_name: string;
  last_name: string;
  profession: string;
  avg_ratings: number;
  price: string;
};

export default function Search() {
  const search = useLocalSearchParams<{ searchQuery: string }>();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null); // useRef to store the timeout reference

  const [providers, setProviders] = useState<ProviderProp[] | null>(null);
  const [searchValue, setSearchValue] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  const searchFilter = `first_name.ilike.%${searchValue}%,last_name.ilike.%${searchValue}%,profession.ilike.%${searchValue}%,tags.ilike.%${searchValue}%`;

  async function getServices() {
    try {
      let { data: providers, error } = await supabase
        .from("providers")
        .select(
          `
      id,
      profile_url,
      first_name,
      last_name,
      profession,
      avg_ratings,
      price
      `
        )
        .or(searchFilter)
        .returns<ProviderProp[] | null>();

      if (error) throw new Error(error.message);

      setProviders(providers);
      console.log(providers);
    } catch (error) {
      if (error instanceof Error) console.log(error);
    } finally {
      setIsLoading(false);
      console.log("off load");
    }
  }

  useEffect(() => {
    // Clear the previous timeout if searchValue changes
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setIsLoading(true);

    // Set the new timeout
    timeoutRef.current = setTimeout(() => {
      console.log("hello world");
      getServices();
    }, 1000);

    // Cleanup function to clear the timeout on component unmount or when searchValue changes
    return () => {
      setProviders([]);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [searchValue]);

  useEffect(() => {
    setSearchValue(search.searchQuery);
  }, []);

  return (
    <View style={{ paddingTop: StatusBar.currentHeight ?? 0 }}>
      <SearchHeader searchValue={searchValue} setSearchValue={setSearchValue} />
      {isLoading && (
        <ActivityIndicator style={{ marginBottom: 20 }} size="large" color={Colors.dark} />
      )}

      {!providers ? (
        <Text style={{ paddingHorizontal: 20 }}>No result was found</Text>
      ) : (
        <FlatList
          contentContainerStyle={{ paddingHorizontal: 18, gap: 20, paddingBottom: 120 }}
          data={providers}
          renderItem={({ item }) => (
            <SearchProviderCard
              key={item.id}
              id={item.id}
              first_name={item.first_name}
              last_name={item.last_name}
              avg_ratings={item.avg_ratings}
              price={item.price}
              profession={item.profession}
              profile_url={item.profile_url}
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
