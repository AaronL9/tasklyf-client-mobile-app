import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import TopProviderCard from "./TopProviderCard";
import { supabase } from "@/utils/supabase";
import { Database } from "@/utils/database.types";
import CardLoader from "../loader/CardLoader";

type ProviderDataTypes = Pick<
  Database["public"]["Tables"]["providers"]["Row"],
  "first_name" | "last_name" | "profession" | "avg_ratings" | "profile_url" | "id"
>;

export default function TopProviderCardList() {
  const [providers, setProviders] = useState<ProviderDataTypes[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  async function getTopServiceProvider() {
    const { data: providers, error } = await supabase
      .from("providers")
      .select(
        `
      id,
      first_name,
      last_name,
      profession,
      avg_ratings,
      profile_url
      `
      )
      .order("avg_ratings", { ascending: false })
      .limit(4)
      .returns<ProviderDataTypes[] | null>();

    setProviders(providers);

    setIsLoading(false);
  }

  useEffect(() => {
    getTopServiceProvider();
  }, []);

  return (
    <>
      {isLoading ? (
        <View style={{ width: "100%", paddingLeft: 20, flexDirection: "row", gap: 25 }}>
          <CardLoader />
          <CardLoader />
        </View>
      ) : (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={providers}
          contentContainerStyle={styles.contentContaier}
          renderItem={({ item }) => (
            <TopProviderCard
              key={item.id}
              id={item.id}
              profileUrl={item.profile_url}
              providerName={`${item.first_name} ${item.last_name}`}
              profession={`${item.profession}`}
              numberOfRatings={120}
              avgRatings={item.avg_ratings}
            />
          )}
        />
      )}
    </>
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
