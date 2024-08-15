import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";

const SignUp = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Sign Up Screen</Text>
      <Button onPress={() => router.back()} title="signup" />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
