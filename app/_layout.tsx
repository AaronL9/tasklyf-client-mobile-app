import { useEffect } from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { setStatusBarStyle, StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";

export default function RootLayout() {
  const [loaded] = useFonts({
    "Archivo Black": require("../assets/fonts/archivo-black/ArchivoBlack-Regular.ttf"),
    Poppins: require("../assets/fonts/poppins/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/poppins/Poppins-Medium.ttf"),
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
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
