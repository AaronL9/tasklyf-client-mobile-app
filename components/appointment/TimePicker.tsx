import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import TimeIndicator from "./TimeIndicator";
import { TimeSlotTypes } from "@/app/appointment";
import { convertTo12HourFormat } from "@/utils/DateFormatter";
import { Code } from "react-content-loader/native";

type TimePickerPropTypes = {
  timeOfDay: string;
  timeSlots: TimeSlotTypes[] | undefined;
  takenTimeSlots: number[];
  isLoading?: boolean;
  setSelectedTimeSlot: React.Dispatch<React.SetStateAction<number | null>>;
  selectedTimeSlot: number | null;
};

export default function TimePicker(props: TimePickerPropTypes) {
  return (
    <View style={{ flexDirection: "row", minHeight: 120, gap: 8 }}>
      <TimeIndicator />
      <View>
        <Text style={{ fontFamily: "Poppins-SemiBold", marginTop: -4 }}>{props.timeOfDay}</Text>
        {props.isLoading ? (
          <Code />
        ) : props.timeSlots && props.timeSlots.length > 0 ? (
          <View style={{ flexDirection: "row", gap: 6, flexWrap: "wrap" }}>
            {props.timeSlots?.map(({ start_time, end_time, id }) => {
              const isTaken = props.takenTimeSlots.includes(id);
              const isSelected = props.selectedTimeSlot === id;

              return (
                <TouchableOpacity
                  key={id}
                  style={[
                    styles.timeSlot,
                    isTaken && styles.disableTimeSlotButton,
                    isSelected && styles.selectedTimeSlotButton,
                  ]}
                  disabled={isTaken}
                  onPress={() => props.setSelectedTimeSlot(id)}
                >
                  <Text
                    style={[
                      isTaken && styles.disableTimeSlotText,
                      isSelected && styles.selectedTimeSlotText,
                    ]}
                  >
                    {convertTo12HourFormat(start_time)} - {convertTo12HourFormat(end_time)}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ) : (
          <Text>No time slots</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  timeSlot: {
    fontFamily: "Poppins",
    borderWidth: 1,
    borderColor: "#D7D7D7",
    paddingVertical: 4,
    paddingHorizontal: 15,
    borderRadius: 8,
  },

  selectedTimeSlotButton: {
    borderColor: Colors.blue,
  },
  selectedTimeSlotText: {
    color: Colors.blue,
  },

  disableTimeSlotButton: { backgroundColor: "#D7D7D7" },
  disableTimeSlotText: { color: "white" },
});
