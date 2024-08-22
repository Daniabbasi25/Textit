import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import AnimatedContainer from "./AnimatedContainer";
import ChatListItem from "../ui/ChatListItem";
import { ChatListDummy } from "@/constants/ChatListDummy";
import { getHeight } from "@/lib";
import ChatListItemSkeleton from "../ui/skeleton/ChatListItemSkeleton";

const ChatListContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <AnimatedContainer>
      <FlatList
        data={isLoading ? Array(10).fill({}) : ChatListDummy}
        renderItem={({ item }) =>
          isLoading ? <ChatListItemSkeleton /> : <ChatListItem {...item} />
        }
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={{ height: getHeight(1) }} />}
        showsVerticalScrollIndicator={false}
      />
    </AnimatedContainer>
  );
};

export default ChatListContainer;

const styles = StyleSheet.create({});
