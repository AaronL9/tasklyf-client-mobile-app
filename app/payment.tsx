import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Gcash from "@/components/svg/Gcash";
import { Colors } from "@/constants/Colors";
import Bitcoin from "@/components/svg/Bitcoin";
import MasterCard from "@/components/svg/MasterCard";
import PrimaryButton from "@/components/PrimaryButton";
import { Link } from "expo-router";

export default function Payment() {
  return (
    <>
      <TouchableOpacity style={styles.paymentWrapper}>
        <Gcash />
        <Text style={styles.paymentText}>Pay with Gcash</Text>
        <View style={styles.radioButton}></View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.paymentWrapper}>
        <Bitcoin />
        <Text style={styles.paymentText}>Pay with Bitcoin</Text>
        <View style={styles.radioButton}></View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.paymentWrapper}>
        <MasterCard />
        <Text style={styles.paymentText}>Pay with Credit Card</Text>
        <View style={styles.radioButton}></View>
      </TouchableOpacity>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: 20,
          borderTopEndRadius: 40,
          borderTopStartRadius: 40,
          borderColor: Colors["tertiary-grey"],
          borderWidth: 2,
        }}
      >
        <View style={{ minHeight: 120, marginBottom: 20 }}>
          <Text style={{ fontFamily: "Archivo Black", fontSize: 21 }}>Order Summary</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ fontFamily: "Poppins", color: Colors["primary-grey"] }}>Subtotal</Text>
            <Text style={{ fontFamily: "Poppins" }}>₱ 500</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ fontFamily: "Poppins", color: Colors["primary-grey"] }}>Est. Tax</Text>
            <Text style={{ fontFamily: "Poppins" }}>₱ 00</Text>
          </View>
          <View
            style={{ borderWidth: 1, borderColor: Colors["tertiary-grey"], marginVertical: 30 }}
          ></View>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ fontFamily: "Poppins" }}>Total</Text>
            <Text style={{ fontFamily: "Poppins-SemiBold" }}>₱ 550</Text>
          </View>
        </View>
        <Link href={{ pathname: "/booking" }} asChild>
          <PrimaryButton buttonLabel="Pay now" />
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  paymentWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderWidth: 1,
    borderColor: Colors["seoncdary-grey"],
    padding: 20,
    borderRadius: 20,
  },

  paymentText: { fontFamily: "Poppins-Medium" },

  radioButton: {
    borderColor: Colors["primary-grey"],
    borderWidth: 1,
    width: 15,
    height: 15,
    borderRadius: 999,
    marginLeft: "auto",
  },
});
