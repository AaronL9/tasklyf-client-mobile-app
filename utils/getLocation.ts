import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Location from "expo-location";

export async function getLocation() {
  try {
    const cacheLocationData = await AsyncStorage.getItem("location");

    if (cacheLocationData) {
      console.log("cached data", JSON.stringify(JSON.parse(cacheLocationData), undefined, 2));
      return JSON.parse(cacheLocationData);
    }

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission denied");
      return "Permission to access location was denied";
    }

    let location = await Location.getCurrentPositionAsync({});
    let { latitude, longitude } = location.coords;

    const response = await fetch(
      `https://us1.locationiq.com/v1/reverse?key=${process.env.EXPO_PUBLIC_LOCATION_IQ_TOKEN}&lat=${latitude}&lon=${longitude}&format=json&`
    );

    if (!response.ok) {
      console.log("Error fetching reverse geocoding data");
      return "Error fetching location data";
    }

    const data = await response.json();

    if (!data) {
      console.log("No data returned from API");
      return "No data found";
    }

    await AsyncStorage.setItem("location", JSON.stringify(data));

    return data;
  } catch (error) {
    console.log("Error:", error);
    return "Unknown error occurred";
  }
}
