import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/theme";
import AuthHeading from "@/components/auth/ui/AuthHeading";
import AuthSubTitle from "@/components/auth/ui/AuthSubTitle";

const SignIn = () => {
  return (
    <View style={styles.screenContainer}>
      <AuthHeading text="Log in to Chatbox" />
      <AuthSubTitle text="Welcome back! Sign in using your social account or email to continue us" />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
