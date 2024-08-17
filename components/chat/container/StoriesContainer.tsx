import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import AvatarWithBorder from "../ui/AvatarWithBorder";
import { generateColorVariants } from "@/lib/colorGenerator";
import { userStories } from "@/constants/UserStories";
import { getHeight } from "@/lib";

const StoriesContainer = () => {
  return (
    <View>
      <FlatList
        data={userStories}
        renderItem={({ item }) => (
          <AvatarWithBorder
            uri={item.profile}
            storyCount={item.stories.length}
            colors={generateColorVariants(item.stories.length)}
          />
        )}
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
