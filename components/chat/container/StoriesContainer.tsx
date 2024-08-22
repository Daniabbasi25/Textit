import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import AvatarWithBorder from "../ui/AvatarWithBorder";
import { generateColorVariants } from "@/lib/colorGenerator";
import { userStories } from "@/constants/UserStories";
import { getHeight } from "@/lib";
import StoryItemSkeleton from "../ui/skeleton/StoryItemSkeleton";

const StoriesContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <View>
      <FlatList
        data={isLoading ? Array(10).fill({}) : userStories}
        renderItem={({ item }) =>
          isLoading ? (
            <StoryItemSkeleton />
          ) : (
            <AvatarWithBorder
              uri={item.profile}
              storyCount={item.stories.length}
              colors={generateColorVariants(item.stories.length)}
            />
          )
        }
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false} // Hide scrollbar if needed
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default StoriesContainer;

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: getHeight(3),
    gap: 20,
    paddingHorizontal: 20,
  },
});
