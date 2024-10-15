import ChatCardList from "@/components/Chat/ChatCardList";
import { Text, View } from "react-native";

export default function Chat() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ChatCardList/>
    </View>
  );
}
