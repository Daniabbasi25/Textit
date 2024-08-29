import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { FC } from "react";
import { fontFamilies, getFontSize, getWidth } from "@/lib";
import Avatar from "@/components/Avatar";
import { Colors } from "@/theme";
import { Contact } from "@/modules/contact/contactTypes";
import { DYNAMICIMAGE } from "@/constants/ChatListDummy";

// interface Props {
//   id: number;
//   name: string;
//   image: string;
//   stats: string;
// }
const ContactListItem: FC<Contact> = ({
  _id,
  email,
  name,
  profilePicture,
  status,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container}>
      <Avatar SIZE={getWidth(15)} uri={profilePicture ?? DYNAMICIMAGE(name)} />
      <View style={styles.mainContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.message}>{status}</Text>
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
