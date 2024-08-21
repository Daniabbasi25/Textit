import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import AnimatedContainer from "./AnimatedContainer";
import ChatListItem from "../ui/ChatListItem";
import { ChatListDummy } from "@/constants/ChatListDummy";
import { getHeight } from "@/lib";

const ChatListContainer = () => {
  return (
    <AnimatedContainer>
      <FlatList
        data={ChatListDummy}
        renderItem={({ item }) => <ChatListItem {...item} />}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={{ height: getHeight(1) }} />}
        showsVerticalScrollIndicator={false}
      />
    </AnimatedContainer>
  );
};

export default ChatListContainer;

const styles = StyleSheet.create({});
