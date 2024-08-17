import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "../ui/Icon";
import { getWidth } from "@/lib";

const ChatScreenHeader = () => {
  return (
    <View style={styles.container}>
      {/* Search Icon */}
      <Icon name="search" onpress={() => {}} />
      <Text>ChatScreenHeader</Text>
      {/* Avater */}
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
