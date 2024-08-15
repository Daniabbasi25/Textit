import { StyleSheet, Text, TextProps, View } from "react-native";
import React, { FC } from "react";
import { fontFamilies, getFontSize } from "@/lib";
import { Colors } from "@/theme";

interface Props extends TextProps {
  text: string;
}
const AuthHeading: FC<Props> = ({ text, ...extra }) => {
  return (
    <Text style={styles.text} {...extra}>
      {text}
    </Text>
  );
};

export default AuthHeading;

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: getFontSize(18),
    fontFamily: fontFamilies.Popins.bold,
    color: Colors.AuthHeading,
  },
});
