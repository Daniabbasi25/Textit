import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ScreenBackgroundContainer from "@/components/auth/container/ScreenBackgroundContainer";
import { fontFamilies, getFontSize, getHeight } from "@/lib";
import { Colors } from "@/theme";
import AuthButton from "@/components/auth/ui/AuthButton";

const index = () => {
  return (
    <ScreenBackgroundContainer>
      <View style={styles.contentContainer}>
        <View style={{ gap: getHeight(1) }}>
          <Text style={styles.heading}>Connect friends easily & quickly</Text>
          <Text style={styles.subText}>
            Our chat app is the perfect way to stay connected with friends and
            family.
          </Text>
        </View>
        <View style={{ gap: getHeight(1.5) }}>
          <AuthButton type="normal" text="Sign up withn mail" />
          <View style={styles.row}>
            <Text style={styles.bottomText}>Existing account?</Text>
            <TouchableOpacity>
              <Text style={styles.boldText}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
    color: Colors.transparentWhiteText,
  },
  bottomText: {
    textAlign: "center",
    color: Colors.white,
    fontFamily: fontFamilies.Popins.normal,
    fontSize: getFontSize(14),
    fontWeight: "regular",
    textAlignVertical: "center",
  },
  boldText: {
    color: Colors.white,
    fontFamily: fontFamilies.Popins.bold,
    fontSize: getFontSize(14),
    // textAlignVertical: "bottom",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  contentContainer: {
    justifyContent: "space-between",
    flex: 1,
  },
});
