import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenBackgroundContainer from "@/components/auth/container/ScreenBackgroundContainer";
import ChatScreenHeader from "@/components/chat/container/ChatScreenHeader";
import StoriesContainer from "@/components/chat/container/StoriesContainer";

const index = () => {
  return (
    <ScreenBackgroundContainer>
      <ChatScreenHeader />
      <StoriesContainer />
    </ScreenBackgroundContainer>
  );
};

export default index;

const styles = StyleSheet.create({});
