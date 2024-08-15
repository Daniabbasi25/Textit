import { StyleSheet, View } from "react-native";
import React from "react";

import AuthHeading from "@/components/auth/ui/AuthHeading";
import AuthSubTitle from "@/components/auth/ui/AuthSubTitle";
import { Colors } from "@/theme";
import { getHeight } from "@/lib";
import SignUpForm from "@/components/auth/forms/SignUpForm";

const SignUp = () => {
  return (
    <View style={styles.screenContainer}>
      <AuthHeading text="Sign up with Email" />
      <AuthSubTitle text="Get chatting with friends and family today by signing up for our chat app!" />
      <SignUpForm />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingBottom: getHeight(5),
  },
});
