import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

type RadioButtonPropTypes = {
  value: string;
  selectedValue: string;
};

export default function RadioButton(props: RadioButtonPropTypes) {
  const isSelected = props.selectedValue === props.value;

  return (
    <View style={[styles.radioButton, isSelected && styles.activeRadioButton]}>
      <View style={[styles.activeIndicator, !isSelected && { display: "none" }]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  radioButton: {
    padding: 2,
    borderColor: Colors["primary-grey"],
    borderWidth: 1,
    width: 15,
    height: 15,
    borderRadius: 999,
    marginLeft: "auto",
  },

  activeRadioButton: {
    borderColor: Colors.blue,
  },

  activeIndicator: {
    backgroundColor: Colors.blue,
    borderRadius: 9999,
    width: "100%",
    height: "100%",
  },
});
