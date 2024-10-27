import { StyleSheet, Text, View, Pressable, Alert, AppStateStatus, AppState } from "react-native";
import { Link, router, useLocalSearchParams } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { ServiceProviderContext } from "@/context/ServiceProviderContext";
import { AuthContext } from "@/context/AuthContext";

import { Colors } from "@/constants/Colors";
import Bitcoin from "@/components/svg/Bitcoin";
import RadioButton from "@/components/payments/RadioButton";
import MasterCard from "@/components/svg/MasterCard";
import PrimaryButton from "@/components/PrimaryButton";
import Gcash from "@/components/svg/Gcash";
import SuccessMessage from "@/components/payments/SuccessMessage";
import { generateRandomString } from "@/utils/stringGenerator";
import { supabase } from "@/utils/supabase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as WebBrowser from "expo-web-browser";

type BookingDataType = {
  id: string;
  provider_id: string | undefined;
  client_id: string | undefined;
  availability_id: string | string[];
  appointment_date: string | string[];
  status: string;
  service: string | undefined;
  price: number;
};

const serviceFee = 50;

export default function Payment() {
  const local = useLocalSearchParams();
  const { user } = useContext(AuthContext);
  const { providerInfo } = useContext(ServiceProviderContext);

  const [bookingData, setBookingData] = useState<BookingDataType | null>(null);

  const [selectedPayment, setSelectedPayment] = useState("gcash");
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function onPlaceOrderHandler() {
    setIsLoading(true);

    if (!bookingData) return;
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        authorization: "Basic c2tfdGVzdF82N3ZoRzRvcXdKdzc1Zzg4WUNwSEVoRk46",
      },
      body: JSON.stringify({
        data: {
          attributes: {
            billing: {
              address: {
                city: "Dagupan City",
                postal_code: "2400",
                country: "PH",
                line1: "Arellano Street",
              },
              name: "Aaron",
              email: "aaron.lomibao09@gmail.com",
              phone: "09297867879",
            },
            send_email_receipt: true,
            show_description: true,
            show_line_items: true,
            description: `Booking # ${bookingData.id}`,
            line_items: [
              {
                name: providerInfo?.profession,
                currency: "PHP",
                amount: (Number(providerInfo?.price) + serviceFee) * 100,
                description: `You book a service: ${providerInfo?.profession}`,
                quantity: 1,
              },
            ],
            payment_method_types: ["gcash"],
          },
        },
      }),
    };

    try {
      const res = await fetch("https://api.paymongo.com/v1/checkout_sessions", options);
      const json = await res.json();

      const checkoutUrl = json?.data?.attributes?.checkout_url;
      const paymentIntentId = json?.data?.attributes?.payment_intent?.id;
      const clientKey = json?.data?.attributes?.payment_intent?.attributes?.client_key;

      console.log(JSON.stringify(json, undefined, 2));

      if (!checkoutUrl) throw new Error("We can't process the payment at the moment");

      await AsyncStorage.setItem("client_key", clientKey);
      await AsyncStorage.setItem("payment_intent_id", paymentIntentId);
      await AsyncStorage.setItem("booking", JSON.stringify(bookingData));

      WebBrowser.openBrowserAsync(checkoutUrl);

      // console.log(JSON.stringify(json, undefined, 2));
    } catch (error) {
      if (error instanceof Error) Alert.alert("Payment Error", error.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function oncheckPaymentStatus() {
    try {
      setIsLoading(true);
      const client_key = await AsyncStorage.getItem("client_key");
      const payment_intent_id = await AsyncStorage.getItem("payment_intent_id");

      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          authorization: "Basic c2tfdGVzdF82N3ZoRzRvcXdKdzc1Zzg4WUNwSEVoRk46",
        },
      };

      const res = await fetch(
        `https://api.paymongo.com/v1/payment_intents/${payment_intent_id}?client_key=${client_key}`,
        options
      );
      const json = await res.json();

      console.log(JSON.stringify(json, undefined, 2));

      if (!res.ok) throw new Error("We can't add your orders. Please wait for the refund");

      const status = json?.data?.attributes?.status;
      const paidAt = json?.data.attributes?.payments[0]?.attributes?.paid_at;

      if (status === "succeeded") {
        Alert.alert("Payment Successful", "Your payment was processed successfully.");
        await insertBookingData();
        router.navigate("/booking");
      }

      console.log(status);
      console.log(JSON.stringify(json, undefined, 2));
    } catch (error) {
      if (error instanceof Error) Alert.alert("Payment Failed", error.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function insertBookingData() {
    const bookingData = await AsyncStorage.getItem("booking");

    try {
      if (!bookingData) throw new Error("No booking found");
      const { error } = await supabase.from("bookings").insert(JSON.parse(bookingData));

      if (error) throw new Error(error.message);

      setShowSuccess(true);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  }

  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (nextAppState === "active") {
        oncheckPaymentStatus();
      }
    };

    // Add AppState event listener
    const subscription = AppState.addEventListener("change", handleAppStateChange);

    return () => {
      // Clean up the event listener
      subscription.remove();
    };
  }, []);

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
        <PrimaryButton loading={isLoading} onPress={onPlaceOrderHandler} buttonLabel="Pay now" />
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
