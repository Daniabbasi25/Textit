import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import AnimatedContainer from "@/components/AnimatedContainer";
import { getHeight } from "@/lib";
import CallListItem from "../ui/CallListItem";
import CallListItemSkeleton from "../ui/skeleton/CallListItemSkeleton";
import { callListDummy } from "@/constants/CallListDummy";

const CallListContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <AnimatedContainer>
      <FlatList
        data={isLoading ? Array(10).fill({}) : callListDummy}
        renderItem={({ item }) =>
          isLoading ? <CallListItemSkeleton /> : <CallListItem {...item} />
        }
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={{ height: getHeight(1) }} />}
        showsVerticalScrollIndicator={false}
      />
    </AnimatedContainer>
  );
};

export default CallListContainer;

const styles = StyleSheet.create({});
