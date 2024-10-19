import { useEffect } from "react";
import { StatusBar } from "react-native";

import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { setStatusBarStyle } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { ServiceContextProvider } from "@/context/ServiceProviderContext";

export default function RootLayout() {
  const [loaded] = useFonts({
    "Archivo Black": require("../assets/fonts/archivo-black/ArchivoBlack-Regular.ttf"),
    Poppins: require("../assets/fonts/poppins/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/poppins/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/poppins/Poppins-SemiBold.ttf"),
    "Poppins-Light": require("../assets/fonts/poppins/Poppins-Light.ttf"),
  });

  useEffect(() => {
    setTimeout(() => {
      setStatusBarStyle("dark");
    }, 0);

    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <StatusBar backgroundColor={"white"} />
      <ServiceContextProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="search"
            options={{
              title: "",
              contentStyle: { backgroundColor: "white" },
              headerShown: false,
            }}
          />
          <Stack.Screen name="provider" options={{ headerTitle: "Provider Profile" }} />
          <Stack.Screen
            name="appointment"
            options={{
              headerTitle: "Booking Time",
              animation: "slide_from_right",
            }}
          />
        </Stack>
      </ServiceContextProvider>
    </>
  );
}
