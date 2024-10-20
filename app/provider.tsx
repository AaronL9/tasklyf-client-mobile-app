import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useContext, useEffect, useState } from "react";
import { Link, useLocalSearchParams } from "expo-router";

import PrimaryButton from "@/components/PrimaryButton";
import UserRatingsCard from "@/components/provider/UserRatingsCard";
import FeaturedWorkList from "@/components/provider/FeaturedWorkList";
import ProviderDetailsCard from "@/components/provider/ProviderDetailsCard";

import { Instagram } from "react-content-loader/native";
import { supabase } from "@/utils/supabase";
import { Database } from "@/utils/database.types";
import Star from "@/components/svg/Star";
import { ServiceProviderContext } from "@/context/ServiceProviderContext";

export type ProviderDataTypes = Pick<
  Database["public"]["Tables"]["providers"]["Row"],
  | "id"
  | "first_name"
  | "last_name"
  | "address"
  | "phone"
  | "avg_ratings"
  | "price"
  | "profession"
  | "profile_url"
  | "service_details"
>;

export default function Provider() {
  const local = useLocalSearchParams<{ providerId: string }>();

  const { setProviderInfo } = useContext(ServiceProviderContext);
  const [providerData, setProviderData] = useState<ProviderDataTypes | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  async function getProviderData() {
    try {
      let { data: providers, error } = await supabase
        .from("providers")
        .select("*")
        .eq("id", local.providerId)
        .returns<ProviderDataTypes[] | null>();

      if (error) throw new Error(error.message);

      if (!providers) throw new Error("No data was found");

      const data = providers[0];
      setProviderData(data);
      setProviderInfo(data);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getProviderData();
  }, []);

  return (
    <View>
      {isLoading ? (
        <View style={{ alignItems: "center" }}>
          <Instagram backgroundColor="white" width={350} />
        </View>
      ) : providerData ? (
        <>
          <ScrollView style={{ backgroundColor: "transparent" }}>
            <View style={{ backgroundColor: "white", marginBottom: 15, paddingBottom: 10 }}>
              <ProviderDetailsCard data={providerData} />
            </View>

            <View style={styles.providerDescriptionWrapper}>
              <Text style={{ fontFamily: "Archivo Black", fontSize: 16, lineHeight: 28 }}>
                Description
              </Text>
              <Text style={{ fontFamily: "Poppins" }}>{providerData?.service_details}</Text>
            </View>

            <View style={styles.featuredWorkSectionWrapper}>
              <Text style={[styles.providerTitle, { paddingHorizontal: 20 }]}>Featured Work</Text>
              <FeaturedWorkList />
            </View>

            <View style={styles.reviewSectionWrapper}>
              <View style={styles.reviewSectionTitleWrapper}>
                <View>
                  <Text style={styles.providerTitle}>Customer Ratings</Text>
                  <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
                    <Text style={{ color: Colors.ratings }}>{providerData?.avg_ratings}</Text>
                    <Star color={Colors.ratings} />
                    <Text>{`(120)`}</Text>
                  </View>
                </View>
                <TouchableOpacity>
                  <Text style={styles.reviewSectionButton}>
                    View All <Ionicons name="chevron-forward" color={Colors["primary-grey"]} />
                  </Text>
                </TouchableOpacity>
              </View>

              <UserRatingsCard />
              <UserRatingsCard />
            </View>

            <View style={{ paddingVertical: 50 }}></View>
          </ScrollView>

          <View style={styles.bookButtonWrapper}>
            <Link
              href={{
                pathname: "/appointment",
              }}
              asChild
            >
              <PrimaryButton buttonLabel="Book Now" />
            </Link>
          </View>
        </>
      ) : (
        <Text>Page Not Found</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  providerTitle: { fontFamily: "Archivo Black", fontSize: 16 },

  featuredWorkSectionWrapper: { backgroundColor: "white", paddingVertical: 20, marginBottom: 15 },

  reviewSectionWrapper: { backgroundColor: "white", padding: 20, gap: 10 },
  reviewSectionTitleWrapper: {
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  reviewSectionButton: {
    fontFamily: "Poppins",
    color: Colors["primary-grey"],
    alignSelf: "flex-end",
  },

  providerDescriptionWrapper: {
    backgroundColor: "white",
    marginBottom: 15,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },

  bookButtonWrapper: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.0,
    elevation: 24,
  },
});
