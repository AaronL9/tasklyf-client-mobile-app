import * as Location from "expo-location";

export async function getLocation() {
  try {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission denied");
      return "Permission to access location was denied";
    }

    let location = await Location.getCurrentPositionAsync({});
    let { latitude, longitude } = location.coords;

    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
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

    return data;
  } catch (error) {
    console.log("Error:", error);
    return "Unknown error occurred";
  }
}
