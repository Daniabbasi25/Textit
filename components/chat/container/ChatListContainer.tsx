import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AnimatedContainer from "./AnimatedContainer";
import ChatListItem from "../ui/ChatListItem";

const ChatListContainer = () => {
  return (
    <AnimatedContainer>
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
    </AnimatedContainer>
  );
};

export default ChatListContainer;

const styles = StyleSheet.create({});
