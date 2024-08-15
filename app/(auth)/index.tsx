import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";
import LoginForm from "@/components/auth/forms/LoginForm";
import ScreenBackgroundContainer from "@/components/auth/container/ScreenBackgroundContainer";
import { fontFamilies, getFontSize } from "@/lib";
import { Colors } from "@/theme";

const index = () => {
  return (
    <ScreenBackgroundContainer>
      <Text style={styles.heading}>Connect friends easily & quickly</Text>
      <Text style={styles.subText}>
        Our chat app is the perfect way to stay connected with friends and
        family.
      </Text>
    </ScreenBackgroundContainer>
  );
};

export default index;

const styles = StyleSheet.create({
  heading: {
    fontSize: getFontSize(65),
    color: Colors.white,
    fontWeight: "regular",
    fontFamily: fontFamilies.Popins.normal,
    paddingHorizontal: 17,
  },
  subText: {
    textAlign: "left",
    fontSize: getFontSize(16),
    fontWeight: "regular",
    paddingHorizontal: 17,
    fontFamily: fontFamilies.Popins.normal,
    color: Colors.transparentWhite,
  },
});
