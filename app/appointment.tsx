import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import { ServiceProviderContext } from "@/context/ServiceProviderContext";
import { Colors } from "@/constants/Colors";

export default function Appointment() {
  const local = useLocalSearchParams();
  const { providerInfo } = useContext(ServiceProviderContext);

  useEffect(() => {
    console.log(providerInfo);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <View>
          <Text style={{ fontFamily: "Archivo Black", fontSize: 18 }}>
            {providerInfo?.profession}
          </Text>
          <Text style={{ fontSize: 12, fontFamily: "Poppins" }}>
            {providerInfo?.service_details}
          </Text>
        </View>
        <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 18 }}>{providerInfo?.price}</Text>
      </View>

      <View
        style={{ borderWidth: 1, borderColor: Colors["seoncdary-grey"], marginVertical: 38 }}
      ></View>

      <Text style={{ fontFamily: "Archivo Black", fontSize: 18 }}>Schedule</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
