import { StyleSheet, View } from "react-native";
import React from "react";

import AuthHeading from "@/components/auth/ui/AuthHeading";
import AuthSubTitle from "@/components/auth/ui/AuthSubTitle";
import { Colors } from "@/theme";
import { getHeight } from "@/lib";
import SignUpForm from "@/components/auth/forms/SignUpForm";
import { KeyboardAwareScrollView as KeyboardScroller } from "react-native-keyboard-aware-scroll-view";

const SignUp = () => {
  return (
    <View style={styles.screenContainer}>
      <KeyboardScroller
        enableOnAndroid={true}
        resetScrollToCoords={{ x: 0, y: 0 }}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{ flexGrow: 1 }}
        scrollEnabled={true}
        extraHeight={getHeight(15)}
      >
        <AuthHeading text="Sign up with Email" />
        <AuthSubTitle text="Get chatting with friends and family today by signing up for our chat app!" />
        <SignUpForm />
      </KeyboardScroller>
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
