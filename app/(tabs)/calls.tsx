import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenBackgroundContainer from "@/components/auth/container/ScreenBackgroundContainer";
import CallScreenHeading from "@/components/calls/container/CallScreenHeading";

const calls = () => {
  return (
    <ScreenBackgroundContainer>
      <CallScreenHeading />
    </ScreenBackgroundContainer>
  );
};

export default calls;

const styles = StyleSheet.create({});
