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
import { LinearGradient } from "expo-linear-gradient";

interface Props extends TouchableOpacityProps {
  type: "normal" | "gradient";
  text: string;
}
const AuthButton: FC<Props> = ({ type, text, ...extra }) => {
  return (
    <TouchableOpacity style={{ width: "100%" }} {...extra}>
      {type !== "gradient" ? (
        <View style={styles.container}>
          <Text style={styles.text}>{text}</Text>
        </View>
      ) : (
        <LinearGradient
          colors={["#000000", "#2B2F55", "#303568", "#374B8A"]} // Use gradient colors similar to your image
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.container}
        >
          <Text style={styles.text}>{text}</Text>
        </LinearGradient>
      )}
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
    fontFamily: fontFamilies.Popins.medium,
  },
});
