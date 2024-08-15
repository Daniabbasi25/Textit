import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "@/theme";
import AuthHeading from "@/components/auth/ui/AuthHeading";
import AuthSubTitle from "@/components/auth/ui/AuthSubTitle";
import LoginForm from "@/components/auth/forms/LoginForm";
import { fontFamilies, getFontSize, getHeight } from "@/lib";

const SignIn = () => {
  return (
    <View style={styles.screenContainer}>
      <AuthHeading text="Log in to Chatbox" />
      <AuthSubTitle text="Welcome back! Sign in using your social account or email to continue us" />
      <LoginForm />
      <TouchableOpacity>
        <Text style={styles.bottomText}>Forgot password?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingBottom: getHeight(5),
  },
  bottomText: {
    textAlign: "center",
    fontFamily: fontFamilies.Popins.medium,
    fontSize: getFontSize(14),
    color: Colors.AuthHeading,
  },
});
