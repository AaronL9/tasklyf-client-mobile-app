import { useEffect } from "react";
import { View, TouchableOpacity, StatusBar } from "react-native";

import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { setStatusBarStyle } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import Ionicons from "@expo/vector-icons/Ionicons";

import SearchBar from "@/components/SearchBar";
import { Colors } from "@/constants/Colors";

export default function RootLayout() {
  let statusBarHeight = 0;

  if (StatusBar.currentHeight) statusBarHeight = StatusBar.currentHeight;

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
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="search"
          options={{
            title: "",
            header: ({ navigation }) => (
              <View
                style={{
                  width: "100%",
                  height: 70,
                  marginTop: statusBarHeight,
                  marginBottom: 20,
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    paddingRight: 60,
                    paddingLeft: 15,
                    flexDirection: "row",
                    gap: 18,
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back-outline" size={24} color="black" />
                  </TouchableOpacity>
                  <SearchBar onChangeText={() => {}} placeholder="Search..." />
                </View>
              </View>
            ),
            contentStyle: { backgroundColor: "white", paddingHorizontal: 18 },
          }}
        />
      </Stack>
    </>
  );
}
