import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import MagnifyingGlass from "./svg/MagnifyingGlass";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";

type Props = {
  onChangeText: ((text: string) => void) | undefined;
  placeholder: string;
  disabled?: boolean;
};

export default function SearchBar(props: Props) {
  if (props.disabled) {
    return (
      <Link href="/search" asChild>
        <Pressable style={styles.searchBarContainer}>
          <MagnifyingGlass color={Colors["primary-grey"]} />
          <View style={[styles.searchBar, { justifyContent: "center" }]}>
            <Text style={{ color: Colors["primary-grey"] }}>Search...</Text>
          </View>
        </Pressable>
      </Link>
    );
  }

  return (
    <View style={styles.searchBarContainer}>
      <MagnifyingGlass color={Colors["primary-grey"]} />
      <TextInput
        style={styles.searchBar}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        autoFocus
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors["tertiary-grey"],
    borderRadius: 10,
    paddingHorizontal: 10,
    columnGap: 15,
  },
  searchBar: {
    width: "100%",
    height: 40,
  },
});
