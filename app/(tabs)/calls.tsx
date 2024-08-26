import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenBackgroundContainer from "@/components/auth/container/ScreenBackgroundContainer";
import CallScreenHeading from "@/components/calls/container/CallScreenHeading";
import CallListContainer from "@/components/calls/container/CallListContainer";

const calls = () => {
  return (
    <ScreenBackgroundContainer>
      <CallScreenHeading />
      <CallListContainer />
    </ScreenBackgroundContainer>
  );
};

export default calls;

const styles = StyleSheet.create({});
