import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SearchBar from "../SearchBar";
import { useNavigation } from "expo-router";

export default function SearchHeader() {
  const navigation = useNavigation();
  return (
    <View style={styles.searchHeaderContainer}>
      <View style={styles.searchBarWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <SearchBar onChangeText={() => {}} placeholder="Search..." />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchHeaderContainer: {
    width: "100%",
    height: 70,
    marginBottom: 20,
    justifyContent: "center",
  },
  searchBarWrapper: {
    paddingRight: 60,
    paddingLeft: 15,
    flexDirection: "row",
    gap: 18,
    alignItems: "center",
  },
});
