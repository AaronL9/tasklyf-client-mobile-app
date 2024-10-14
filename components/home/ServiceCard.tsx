import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ServiceIcons from "../svg/ServiceIcons";

// Extract AirConditioner props
type ServiceIconsProps = React.ComponentProps<typeof ServiceIcons>;

// Extend ServiceIconsProps to include a 'label' prop
type ServiceCardProps = ServiceIconsProps & {
  label: string;
};

export default function ServiceCard({ icon, label }: ServiceCardProps) {
  return (
    <View style={styles.ServiceCardContainer}>
      <View style={styles.IconContainer}>
        <ServiceIcons icon={icon} />
      </View>
      <Text style={{ fontFamily: "Poppins-Medium", marginTop: 20 }}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ServiceCardContainer: {
    alignItems: "center",
  },
  IconContainer: {
    width: 100,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F6F6F6",
    borderRadius: 14,
  },
});
