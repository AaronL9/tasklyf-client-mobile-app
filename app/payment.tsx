import { StyleSheet, Text, View, Pressable } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import { useContext, useEffect, useState } from "react";

import { Colors } from "@/constants/Colors";
import Bitcoin from "@/components/svg/Bitcoin";
import RadioButton from "@/components/payments/RadioButton";
import MasterCard from "@/components/svg/MasterCard";
import PrimaryButton from "@/components/PrimaryButton";
import Gcash from "@/components/svg/Gcash";
import { ServiceProviderContext } from "@/context/ServiceProviderContext";
import SuccessMessage from "@/components/payments/SuccessMessage";
import { AuthContext } from "@/context/AuthContext";
import { generateRandomString } from "@/utils/stringGenerator";
import { supabase } from "@/utils/supabase";

const serviceFee = 50;

export default function Payment() {
  const local = useLocalSearchParams();
  const { user } = useContext(AuthContext);

  const [bookingData, setBookingData] = useState<Object | null>(null);

  const [selectedPayment, setSelectedPayment] = useState("gcash");
  const [showSuccess, setShowSuccess] = useState(false);
  const { providerInfo } = useContext(ServiceProviderContext);

  async function insertBookingData() {
    if (!bookingData) return alert("Booking Failed");

    const { data, error } = await supabase.from("bookings").insert(bookingData).select();

    if (error) console.log(error.message);

    console.log(data);
    setShowSuccess(true);
  }

  useEffect(() => {
    setBookingData({
      id: generateRandomString(15),
      provider_id: providerInfo?.id,
      client_id: user?.id,
      availability_id: local.timeSlot,
      status: "request",
      appointment_date: local.date,
      price: Number(providerInfo?.price) + serviceFee,
      service: providerInfo?.profession,
    });
  }, []);

  return (
    <>
      <Pressable onPress={() => setSelectedPayment("gcash")} style={styles.paymentWrapper}>
        <Gcash />
        <Text style={styles.paymentText}>Pay with Gcash</Text>
        <RadioButton value="gcash" selectedValue={selectedPayment} />
      </Pressable>
      <Pressable onPress={() => setSelectedPayment("crypto")} style={styles.paymentWrapper}>
        <Bitcoin />
        <Text style={styles.paymentText}>Pay with crypto</Text>
        <RadioButton value="crypto" selectedValue={selectedPayment} />
      </Pressable>
      <Pressable onPress={() => setSelectedPayment("card")} style={styles.paymentWrapper}>
        <MasterCard />
        <Text style={styles.paymentText}>Pay with Credit Card</Text>
        <RadioButton value="card" selectedValue={selectedPayment} />
      </Pressable>
      <View style={styles.orderSummaryWrapper}>
        <View style={{ minHeight: 120, marginBottom: 20 }}>
          <Text style={{ fontFamily: "Archivo Black", fontSize: 21 }}>Order Summary</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ fontFamily: "Poppins", color: Colors["primary-grey"] }}>Subtotal</Text>
            <Text style={{ fontFamily: "Poppins" }}>₱ {providerInfo?.price}</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ fontFamily: "Poppins", color: Colors["primary-grey"] }}>Est. Tax</Text>
            <Text style={{ fontFamily: "Poppins" }}>₱ {serviceFee}</Text>
          </View>
          <View
            style={{ borderWidth: 1, borderColor: Colors["tertiary-grey"], marginVertical: 30 }}
          ></View>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ fontFamily: "Poppins" }}>Total</Text>
            <Text style={{ fontFamily: "Poppins-SemiBold" }}>
              ₱ {Number(providerInfo?.price) + serviceFee}
            </Text>
          </View>
        </View>
        <PrimaryButton onPress={insertBookingData} buttonLabel="Pay now" />
      </View>
      <SuccessMessage showSuccess={showSuccess} setShowSuccess={setShowSuccess} />
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
    padding: 2,
    borderColor: Colors["primary-grey"],
    borderWidth: 1,
    width: 15,
    height: 15,
    borderRadius: 999,
    marginLeft: "auto",
  },

  orderSummaryWrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    borderColor: Colors["tertiary-grey"],
    borderWidth: 2,
  },
});
