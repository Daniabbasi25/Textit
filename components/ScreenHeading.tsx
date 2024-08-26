import { StyleSheet, Text } from "react-native";
import React, { FC } from "react";
import { Colors } from "@/theme";
import { fontFamilies, getFontSize } from "@/lib";

interface Props {
  text: string;
}
const ScreenHeading: FC<Props> = ({ text }) => {
  return <Text style={styles.Heading}>{text}</Text>;
};

export default ScreenHeading;

const styles = StyleSheet.create({
  Heading: {
    color: Colors.white,
    fontSize: getFontSize(20),
    fontFamily: fontFamilies.Popins.medium,
    fontWeight: "500",
  },
});
