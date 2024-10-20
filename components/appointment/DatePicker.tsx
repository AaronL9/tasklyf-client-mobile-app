import { useState } from "react";
import { Pressable, StyleSheet, Text, View, Platform, Alert } from "react-native";

import DateTimePicker, {
  AndroidNativeProps,
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { formatDate, formatDateLong } from "@/utils/DateFormatter";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  label: string;
  setIsoDate: React.Dispatch<React.SetStateAction<string>>;
  defaultValue?: string;
};

export default function DatePicker(props: Props) {
  const [date, setDate] = useState<Date>(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (event.type === "dismissed") {
      setShow(false);
      return;
    }

    if (event.type === "set" && selectedDate) {
      const now = new Date();

      // Set the current time to midnight for comparison (ignore time part)
      now.setHours(0, 0, 0, 0);

      // Validate if selected date is in the past
      if (selectedDate < now) {
        Alert.alert("Invalid date", "You cannot select a date in the past.");
        setShow(false);
        return;
      }

      console.log(selectedDate);

      setDate(selectedDate);
      props.setIsoDate(selectedDate.toISOString());
    }

    setShow(false);
  };

  const showMode = (currentMode: AndroidNativeProps["mode"]) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange: onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  function showDatePicker() {
    if (Platform.OS === "android") {
      return showMode("date");
    }

    setShow(true);
  }

  return (
    <View
      style={{
        paddingBottom: 6,
        marginTop: 12,
      }}
    >
      <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 18 }}>{props.label}</Text>
      <Pressable
        style={{
          borderWidth: 1,
          paddingHorizontal: 10,
          borderRadius: 8,
          paddingVertical: 4,
          borderColor: Colors["seoncdary-grey"],
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        onPress={showDatePicker}
      >
        <Text style={{ fontFamily: "Poppins", fontSize: 18 }}>
          {props.defaultValue
            ? props.defaultValue
            : !date
            ? "****/**/**"
            : formatDateLong(date.toISOString())}
        </Text>
        <Ionicons name="calendar" size={20} color={Colors["seoncdary-grey"]} />
      </Pressable>
      {show && (
        <DateTimePicker value={new Date()} mode="date" display="default" onChange={onChange} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
