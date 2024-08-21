import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Avatar from "./Avatar";
import { fontFamilies, getFontSize, getWidth } from "@/lib";
import { Colors } from "@/theme";

const ChatListItem = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Avatar
        SIZE={getWidth(15)}
        uri="https://avatar.iran.liara.run/username?username=Discuss react native"
      />
      <View style={styles.mainContainer}>
        <Text style={styles.name}>Alex Linderson</Text>
        <Text style={styles.message}>How are you today?</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text
          style={[
            styles.message,
            {
              fontFamily: fontFamilies.Popins.light,
            },
          ]}
        >
          3 min ago
        </Text>
        <View style={styles.messageCount}>
          <Text style={styles.whitetext}>5</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: getWidth(5),
    marginHorizontal: getWidth(5),
    marginVertical: 5,
  },
  mainContainer: {
    flex: 1,
  },
  name: {
    fontSize: getFontSize(18),
    fontFamily: fontFamilies.Popins.medium,
    color: Colors.black,
  },
  message: {
    fontSize: getFontSize(12),
    fontFamily: fontFamilies.Popins.normal,
    color: Colors.chatListmessage,
  },
  rightContainer: {
    alignItems: "flex-end",
  },
  messageCount: {
    backgroundColor: "#F04A4C",
    width: getWidth(7),
    height: getWidth(7),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: getWidth(3.5),
    marginTop: 5,
  },
  whitetext: {
    color: Colors.white,
    fontSize: getFontSize(12),
    fontWeight: "900",
  },
});
