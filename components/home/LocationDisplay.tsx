import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { getLocation } from "@/utils/getLocation";
import Mark from "../svg/Mark";

export default function LocationDisplay() {
  const [locationData, setLocationData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getLocation();
        setLocationData(data);
      } catch (err) {
        setError("Failed to fetch location");
        console.log(err);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Mark color={Colors["dark"]} />
      <View>
        {error ? (
          <Text>{error}</Text>
        ) : locationData ? (
          <>
            <Text style={styles.label}>{locationData.address.road}</Text>
            <Text style={styles.locationName}>{locationData.address.region}</Text>
          </>
        ) : (
          <Text>Loading location...</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    columnGap: 8,
    marginLeft: 20,
    alignItems: "center",
  },
  label: {
    fontSize: 15,
    fontFamily: "Poppins-Medium",
  },
  locationName: {
    fontSize: 10,
    fontFamily: "Poppins-Medium",
  },
});
