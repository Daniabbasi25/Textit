import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { FC } from "react";
import { fontFamilies, getFontSize, getWidth } from "@/lib";
import Avatar from "@/components/Avatar";
import { Colors } from "@/theme";

interface Props {
  id: number;
  name: string;
  image: string;
  stats: string;
}
const ContactListItem: FC<Props> = ({ id, image, name, stats }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container}>
      <Avatar SIZE={getWidth(15)} uri={image} />
      <View style={styles.mainContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.message}>{stats}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ContactListItem;

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
});
