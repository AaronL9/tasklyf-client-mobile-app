import {
  ActivityIndicator,
  Alert,
  Button,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useContext, useEffect, useState } from "react";
import BookingCard from "./BookingCard";
import { supabase } from "@/utils/supabase";
import { Database } from "@/utils/database.types";
import { AuthContext } from "@/context/AuthContext";
import CardLoader from "../loader/CardLoader";
import BookingCardLoader from "../loader/BookingCardLoader";
import { useFocusEffect } from "expo-router";
import * as Notifications from "expo-notifications";
import { BookingContext, BookingType } from "@/context/BookingContext";

// const channels = supabase
//   .channel("custom-all-channel")
//   .on("postgres_changes", { event: "*", schema: "public", table: "bookings" }, (payload) => {
//     console.log("Change received!", JSON.stringify(payload, undefined, 2));
//     Notifications.scheduleNotificationAsync({
//       content: {
//         title: "Look at that notification",
//         body: "I'm so proud of myself!",
//       },
//       trigger: null,
//     });
//   })
//   .subscribe();

export default function PendingScreen() {
  const { getBookingHandler } = useContext(BookingContext);

  const [bookingData, setBookingData] = useState<BookingType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  async function getBookingData() {
    setIsLoading(true);
    const data = await getBookingHandler(["request"]);
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
