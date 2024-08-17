import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "../ui/Icon";
import { getWidth } from "@/lib";
import Avatar from "../ui/Avatar";
import ScreenHeading from "../ui/ScreenHeading";

const ChatScreenHeader = () => {
  return (
    <View style={styles.container}>
      {/* Search Icon */}
      <Icon name="search" onpress={() => {}} />
      <ScreenHeading text="Home" />
      {/* Avater */}
      <Avatar uri="https://avatar.iran.liara.run/username?username=Discuss react native" />
    </View>
  );
};

export default ChatScreenHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: getWidth(5),
  },
});
