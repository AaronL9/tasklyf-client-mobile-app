import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import ActiveScreen from "@/components/booking/ActiveScreen";
import SuccessScreen from "@/components/booking/SuccessScreen";
import CancelledScreen from "@/components/booking/CancelledScreen";
import { Colors } from "@/constants/Colors";
import PendingScreen from "@/components/booking/PendingScreen";

const Tab = createMaterialTopTabNavigator();

export default function Booking() {
  return (
    <Tab.Navigator
      style={{ backgroundColor: "white" }}
      screenOptions={{
        tabBarStyle: { shadowColor: "none", borderRadius: 6, overflow: "hidden" },
        tabBarLabelStyle: { fontFamily: "Poppins-SemiBold", fontSize: 10 },
        tabBarInactiveTintColor: Colors["seoncdary-grey"],
        tabBarAndroidRipple: { color: "#1f1f1f24", borderless: true },
      }}
    >
      <Tab.Screen
        name="Pending"
        component={PendingScreen}
        options={{
          tabBarActiveTintColor: "#FBCE50",
          tabBarIndicatorStyle: { backgroundColor: "#FBCE50" },
        }}
      />
      <Tab.Screen
        name="Active"
        component={ActiveScreen}
        options={{
          tabBarActiveTintColor: Colors.blue,
          tabBarIndicatorStyle: { backgroundColor: Colors.blue },
        }}
      />
      <Tab.Screen
        name="Success"
        component={SuccessScreen}
        options={{
          tabBarActiveTintColor: "green",
          tabBarIndicatorStyle: { backgroundColor: "green" },
        }}
      />
      <Tab.Screen
        name="Cancelled"
        component={CancelledScreen}
        options={{
          tabBarActiveTintColor: "red",
          tabBarIndicatorStyle: { backgroundColor: "red" },
        }}
      />
    </Tab.Navigator>
  );
}
