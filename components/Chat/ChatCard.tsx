import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

type Props = {profileUrl: string, name: string, time: string, currentMessages: string}

export default function ChatCard(props: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.chatCard}>
        <Image
          source={{ uri: props.profileUrl }} // Placeholder avatar
          style={styles.avatar}
        />
        <View style={styles.textContainer}>
          <View style={styles.nameAndTime}>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.time}>{props.time}</Text>
          </View>
          <Text style={styles.message}>{props.currentMessages}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Light background
    paddingVertical: 10,
  },
  chatCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff', // White background for chat card
    borderRadius: 10,
    marginHorizontal: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  nameAndTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  name: {
    fontSize: 16,
  },
  time: {
    fontSize: 14,
    color: '#888',
  },
  message: {
    fontSize: 14,
    color: '#666',
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 25,
    marginTop: 10,
  },
});
