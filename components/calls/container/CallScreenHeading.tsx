import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { getWidth } from "@/lib";
import TabBarHeader from "@/components/TabBarHeader";
import Icon from "@/components/Icon";

const CallScreenHeading = () => {
  return (
    <TabBarHeader
      name="Call"
      leftComponent={<Icon name="search" onpress={() => {}} />}
      rightComponent={<Icon name="search" onpress={() => {}} />}
    />
  );
};

export default CallScreenHeading;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: getWidth(5),
  },
});
