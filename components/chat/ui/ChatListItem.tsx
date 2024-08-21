import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { FC } from "react";
import Avatar from "./Avatar";
import { fontFamilies, getFontSize, getWidth } from "@/lib";
import { Colors } from "@/theme";

interface Props {
  id: number;
  name: string;
  message: string;
  unread?: number;
  time: string;
  image: string;
}
const ChatListItem: FC<Props> = ({
  id,
  image,
  message,
  name,
  time,
  unread,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container}>
      <Avatar SIZE={getWidth(15)} uri={image} />
      <View style={styles.mainContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.message}>{message}</Text>
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
          {time}
        </Text>
        {unread !== undefined && unread !== 0 && (
          <View style={styles.messageCount}>
            <Text style={styles.whitetext}>{unread}</Text>
          </View>
        )}
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
