import { ProviderDataTypes } from "@/app/provider";
import { StyleSheet, Text, View, Image } from "react-native";

export default function ProviderDetailsCard({ data }: { data: ProviderDataTypes }) {
  return (
    <View style={styles.userDetailContainer}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Text style={{ fontFamily: "Archivo Black", fontSize: 16 }}>User Details</Text>
        <Image
          style={{ borderRadius: 80 }}
          width={40}
          height={40}
          source={{
            uri: data.profile_url as string,
          }}
        />
      </View>
      <View style={{ gap: 10 }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.detailsLabel}>Name:</Text>
          <Text style={styles.userDetailsValue}>
            {data.first_name} {data.last_name}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.detailsLabel}>Adress:</Text>
          <Text style={styles.userDetailsValue}>{data.address}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.detailsLabel}>Price:</Text>
          <Text style={styles.userDetailsValue}>{data.price}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.detailsLabel}>Service:</Text>
          <Text style={styles.userDetailsValue}>{data.profession}</Text>
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
