import { Colors } from "@/constants/Colors";
import { forwardRef, LegacyRef } from "react";
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  buttonLabel: string;
  variant?: "solid" | "outline";
  color?: string;
  onPress?: () => void;
  disable?: boolean;
  loading?: boolean;
};

export default forwardRef(function PrimaryButton(
  { buttonLabel, variant = "solid", color = Colors.blue, onPress, disable, loading }: Props,
  ref: LegacyRef<TouchableOpacity> | undefined
) {
  switch (variant) {
    case "outline":
      return (
        <TouchableOpacity
          ref={ref}
          onPress={onPress}
          style={[styles.base, styles.outline, { borderColor: color }]}
        >
          {loading ? (
            <ActivityIndicator color="white" size="small" />
          ) : (
            <Text style={[styles.text, { color: color }]}>{buttonLabel}</Text>
          )}
        </TouchableOpacity>
      );

    default:
      return (
        <TouchableOpacity
          ref={ref}
          onPress={onPress}
          style={[styles.base, { backgroundColor: color }]}
          disabled={disable}
        >
          {loading ? (
            <ActivityIndicator color="white" size="small" />
          ) : (
            <Text style={[styles.text, styles.solidText]}>{buttonLabel}</Text>
          )}
        </TouchableOpacity>
      );
  }
});

const styles = StyleSheet.create({
  base: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderRadius: 10,
  },
  text: { fontSize: 13, fontFamily: "Poppins-SemiBold" },

  solidText: {
    color: "white",
  },

  outline: {
    borderWidth: 1,
  },
});
