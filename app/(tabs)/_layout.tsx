import { StyleSheet, Text, View } from "react-native";
import { Tabs } from "expo-router";
import { Colors } from "@/constants/Colors";

import Home from "@/components/icons/Home";
import ChatRound from "@/components/icons/ChatRound";
import Calendar from "@/components/icons/Calendar";
import Profile from "@/components/icons/Profile";
import Bell from "@/components/icons/Bell";
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
        headerStyle: { height: 100, backgroundColor: "white" },
        headerShadowVisible: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarLabel: "Home",
          tabBarIcon: ({ color, focused }) => <Home color={color} />,
          headerRight: () => (
            <View style={{ marginRight: 20 }}>
              <Bell color={Colors["dark"]} />
            </View>
          ),
          headerLeft: () => <LocationDisplay />,
        }}
      />

      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          tabBarIcon: ({ color, focused }) => <ChatRound color={color} />,
        }}
      />

      <Tabs.Screen
        name="booking"
        options={{
          title: "Booking",
          tabBarIcon: ({ color, focused }) => <Calendar color={color} />,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => <Profile color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({});
