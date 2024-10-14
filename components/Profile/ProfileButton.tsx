import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GreaterThan from "../svg/GreaterThan";
import ProfileIcons from "../svg/ProfileIcons";

type IconProps = React.ComponentProps<typeof ProfileIcons>;

type Props = IconProps & {
  buttonName: string;
};

export default function ProfileButton(props: Props) {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        gap: 10,
        marginTop: 12,
      }}
    >
      <ProfileIcons icon={props.icon} />
      <Text style={{ fontFamily: "Poppins-Medium" }}>{props.buttonName}</Text>
      <View style={{ marginLeft: "auto" }}>
        <GreaterThan />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
