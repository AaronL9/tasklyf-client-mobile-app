import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import MagnifyingGlass from "./icons/MagnifyingGlass";
import { Colors } from "@/constants/Colors";

export default function SearchBar() {
  return (
    <View style={styles.searchBarContainer}>
      <MagnifyingGlass color={Colors["primary-grey"]} />
      <TextInput style={styles.searchBar} placeholder="Search" />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors["tertiary-grey"],
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    columnGap: 15,
  },
  searchBar: {
    flex: 1,
    height: 40,
  },
});
