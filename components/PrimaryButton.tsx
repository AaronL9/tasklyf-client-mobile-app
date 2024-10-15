import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  buttonLabel: string;
};

export default function PrimaryButton({ buttonLabel }: Props) {
  return (
    <TouchableOpacity style={styles.primaryButton}>
      <Text style={styles.primaryButtonText}>{buttonLabel}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    width: 150,
  },
  primaryButtonText: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
  },
});
