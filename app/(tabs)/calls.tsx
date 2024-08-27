import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenBackgroundContainer from "@/components/auth/container/ScreenBackgroundContainer";
import CallScreenHeading from "@/components/calls/container/CallScreenHeading";
import CallListContainer from "@/components/calls/container/CallListContainer";
import { getHeight } from "@/lib";

const calls = () => {
  return (
    <ScreenBackgroundContainer>
      <CallScreenHeading />
      <View style={{ height: getHeight(5) }} />
      <CallListContainer />
    </ScreenBackgroundContainer>
  );
};

export default calls;

const styles = StyleSheet.create({});
