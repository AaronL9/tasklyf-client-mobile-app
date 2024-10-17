import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  buttonLabel: string;
  variant?: "solid" | "outline";
  color?: string;
};

export default function PrimaryButton({
  buttonLabel,
  variant = "solid",
  color = Colors.blue,
}: Props) {
  switch (variant) {
    case "outline":
      return (
        <TouchableOpacity style={[styles.base, styles.outline, { borderColor: color }]}>
          <Text style={[styles.text, { color: color }]}>{buttonLabel}</Text>
        </TouchableOpacity>
      );

    default:
      return (
        <TouchableOpacity style={[styles.base, { backgroundColor: color }]}>
          <Text style={[styles.text, styles.solidText]}>{buttonLabel}</Text>
        </TouchableOpacity>
      );
  }
}

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
