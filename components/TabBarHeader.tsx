import { StyleSheet, Text, View } from "react-native";
import React, { FC, ReactNode } from "react";
import { getWidth } from "@/lib";
import ScreenHeading from "./ScreenHeading";

interface Props {
  leftComponent: ReactNode;
  name: string;
  rightComponent: ReactNode;
}
const TabBarHeader: FC<Props> = ({ leftComponent, name, rightComponent }) => {
  return (
    <View style={styles.container}>
      {leftComponent}
      <ScreenHeading text={name} />
      {rightComponent}
    </View>
  );
};

export default TabBarHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: getWidth(5),
  },
});
