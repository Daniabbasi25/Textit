import { StyleSheet } from "react-native";
import React from "react";
import ScreenBackgroundContainer from "@/components/auth/container/ScreenBackgroundContainer";
import ChatScreenHeader from "@/components/chat/container/ChatScreenHeader";
import StoriesContainer from "@/components/chat/container/StoriesContainer";
import AnimatedContainer from "@/components/chat/container/AnimatedContainer";

const index = () => {
  return (
    <ScreenBackgroundContainer>
      <ChatScreenHeader />
      <StoriesContainer />
      <AnimatedContainer />
    </ScreenBackgroundContainer>
  );
};

export default index;

const styles = StyleSheet.create({});
