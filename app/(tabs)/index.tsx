import SearchBar from "@/components/SearchBar";
import ServiceBookingBanner from "@/components/home/ServiceBookingBanner";
import ServiceCard from "@/components/home/ServiceCard";
import ServiceCardList from "@/components/home/ServiceCardList";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "white",
        paddingHorizontal: 20,
      }}
    >
      <SearchBar />
      <ServiceBookingBanner />
      <View style={{ width: "100%", marginTop: 24 }}>
        <Text
          style={{
            fontFamily: "Archivo Black",
            fontSize: 18,
            marginBottom: 18,
          }}
        >
          Services
        </Text>
        <ServiceCardList />
      </View>
    </View>
  );
}
