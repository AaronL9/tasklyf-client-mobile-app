import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useContext, useEffect, useState } from "react";
import BookingCard from "./BookingCard";
import { BookingContext, BookingType } from "@/context/BookingContext";
import { useFocusEffect } from "expo-router";
import BookingCardLoader from "../loader/BookingCardLoader";

export default function CancelledScreen() {
  const { getBookingHandler } = useContext(BookingContext);

  const [bookingData, setBookingData] = useState<BookingType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  async function getBookingData() {
    setIsLoading(true);
    const data = await getBookingHandler(["cancelled"]);
    if (!data) return setIsLoading(false);

    setBookingData(data);

    setIsLoading(false);
  }

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await getBookingData();
    setRefreshing(false);
  }, []);

  useEffect(() => {
    getBookingData();
  }, []);

  return (
    <View style={{ backgroundColor: "white", flex: 1, alignItems: "center" }}>
      {isLoading && <ActivityIndicator style={{ marginVertical: 20 }} size="large" color="black" />}

      <FlatList
        ListHeaderComponent={() =>
          !bookingData.length ? (
            <Text style={{ fontFamily: "Poppins" }}>No thing in here</Text>
          ) : null
        }
        data={bookingData}
        contentContainerStyle={{
          backgroundColor: "white",
          paddingTop: 20,
          paddingHorizontal: 16,
          gap: 20,
        }}
        keyExtractor={(item) => item.id}
        renderItem={(value) => <BookingCard data={value.item} />}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
