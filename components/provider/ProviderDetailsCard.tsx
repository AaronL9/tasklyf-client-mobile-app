import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";

export default function ProviderDetailsCard() {
  const [name, setName] = useState("John Doe");
  const local = useLocalSearchParams<{ providerName: string }>();

  useEffect(() => {
    if (local.providerName) setName(local.providerName);
  }, []);

  return (
    <View style={styles.userDetailContainer}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Text style={{ fontFamily: "Archivo Black", fontSize: 16 }}>User Details</Text>
        <Image
          style={{ borderRadius: 80 }}
          width={40}
          height={40}
          source={{
            uri: "https://cdn.vectorstock.com/i/500p/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.jpg",
          }}
        />
      </View>
      <View style={{ gap: 10 }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.detailsLabel}>Name:</Text>
          <Text style={styles.userDetailsValue}>{name}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.detailsLabel}>Adress:</Text>
          <Text style={styles.userDetailsValue}>0691 PNR Site, Dagupan City, Pangasinan</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.detailsLabel}>Phone:</Text>
          <Text style={styles.userDetailsValue}>+6398678356737</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.detailsLabel}>Price:</Text>
          <Text style={styles.userDetailsValue}>₱1000 </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.detailsLabel}>Service:</Text>
          <Text style={styles.userDetailsValue}>Plumbing </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userDetailContainer: {
    borderRadius: 8,
    padding: 20,
    gap: 20,
  },
  userDetailsValue: {
    marginLeft: "auto",
    marginRight: 20,
    width: 200,
    fontFamily: "Poppins",
  },
  detailsLabel: { fontFamily: "Poppins-SemiBold" },
});
