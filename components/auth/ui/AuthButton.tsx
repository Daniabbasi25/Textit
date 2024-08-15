import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import React, { FC } from "react";
import { Colors } from "@/theme";
import { fontFamilies, getFontSize } from "@/lib";

interface Props extends TouchableOpacityProps {
  type: "normal" | "gradient";
  text: string;
}
const AuthButton: FC<Props> = ({ type, text, ...extra }) => {
  return (
    <TouchableOpacity style={styles.container} {...extra}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default AuthButton;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    width: "85%",
    backgroundColor: Colors.transparentWhiteButton,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 16,
  },
  text: {
    color: Colors.white,
    fontSize: getFontSize(16),
    fontFamily: fontFamilies.Popins.normal,
  },
});
