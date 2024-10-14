import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import ChatCard from "./ChatCard";

const chatData: React.ComponentProps<typeof ChatCard>[] = [
  {
    profileUrl:
      "https://cdn.create.vista.com/api/media/small/138013506/stock-vector-user-profile-group",
    name: "Brien Myell",
    time: "Thursday",
    currentMessages: "Hello, sir, saan po sa arellano kayo na...",
  },
  {
    profileUrl:
      "https://cdn.create.vista.com/api/media/small/138013506/stock-vector-user-profile-group",
    name: "John Cena",
    time: "Thursday",
    currentMessages: "You can’t see me",
  },
  {
    profileUrl:
      "https://cdn.create.vista.com/api/media/small/138013506/stock-vector-user-profile-group",
    name: "Richard Valentino",
    time: "Wednesday",
    currentMessages: "You: Ok sir",
  },
  {
    profileUrl:
      "https://cdn.create.vista.com/api/media/small/138013506/stock-vector-user-profile-group",
    name: "Andrea Brilliant",
    time: "Monday",
    currentMessages: "Goodnight sir, mwah",
  },
];

export default function ChatCardList() {
  return (
    <FlatList
      data={chatData}
      contentContainerStyle={{ backgroundColor: "white" }}
      renderItem={({ item, index }) => (
        <ChatCard
          key={index}
          name={item.name}
          profileUrl={item.profileUrl}
          time={item.time}
          currentMessages={item.currentMessages}
        />
      )}
    />
  );
}
