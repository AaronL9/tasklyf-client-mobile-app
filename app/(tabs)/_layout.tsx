import { StyleSheet, Text, View } from "react-native";
import { Tabs } from "expo-router";
import { Colors } from "@/constants/Colors";

import Home from "@/components/svg/Home";
import ChatRound from "@/components/svg/ChatRound";
import Calendar from "@/components/svg/Calendar";
import Profile from "@/components/svg/Profile";
import Bell from "@/components/svg/Bell";
import LocationDisplay from "@/components/home/LocationDisplay";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.blue,
        tabBarInactiveTintColor: Colors["seoncdary-grey"],
        tabBarStyle: { height: 70 },
        tabBarItemStyle: { paddingVertical: 10 },
        tabBarLabelStyle: { fontFamily: "Poppins-Medium" },
        headerStyle: { height: 100 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShadowVisible: false,
          title: "",
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => <Home color={color} />,
          headerRight: () => (
            <View style={{ marginRight: 20 }}>
              <Bell color={Colors.dark} />
            </View>
          ),
          headerLeft: () => <LocationDisplay />,
          headerStyle: { backgroundColor: "white", height: 90 },
        }}
      />

      <Tabs.Screen
        name="chat"
        options={{
          title: "Inbox",
          tabBarIcon: ({ color }) => <ChatRound color={color} />,
          headerTitleStyle: { marginLeft: 20, fontFamily: "Archivo Black" },
        }}
      />

      <Tabs.Screen
        name="booking"
        options={{
          title: "Booking",
          tabBarIcon: ({ color }) => <Calendar color={color} />,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <Profile color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({});
