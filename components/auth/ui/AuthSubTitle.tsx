import { StyleSheet, Text, TextProps, View } from "react-native";
import React, { FC } from "react";
import { fontFamilies, getFontSize } from "@/lib";
import { Colors } from "@/theme";

interface Props extends TextProps {
  text: string;
}
const AuthSubTitle: FC<Props> = ({ text, ...extra }) => {
  return (
    <Text style={styles.text} {...extra}>
      {text}
    </Text>
  );
};

export default AuthSubTitle;

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: getFontSize(14),
    fontFamily: fontFamilies.Popins.light,
    color: Colors.AuthSubTitle,
    marginVertical: 15,
    width: "80%",
    alignSelf: "center",
  },
});
