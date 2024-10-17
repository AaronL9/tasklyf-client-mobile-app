import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

export default function ProviderDetailsCard() {
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
          <Text style={styles.userDetailsValue}>John Doe</Text>
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
          <Text style={styles.detailsLabel}>Ratings:</Text>
          <Text style={styles.userDetailsValue}>₱1000 - ₱2000 </Text>
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
