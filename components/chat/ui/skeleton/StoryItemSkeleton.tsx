import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
  useAnimatedStyle,
} from "react-native-reanimated";
import { getWidth } from "@/lib";
import { Colors } from "@/theme";

const StoryItemSkeleton = () => {
  const shimmerValue = useSharedValue(0);

  shimmerValue.value = withRepeat(
    withTiming(1, {
      duration: 1500,
      easing: Easing.linear,
    }),
    -1,
    true
  );

  const shimmerStyle = useAnimatedStyle(() => {
    return {
      opacity: shimmerValue.value,
    };
  });

  return <Animated.View style={[styles.avatar, shimmerStyle]} />;
};

export default StoryItemSkeleton;

const styles = StyleSheet.create({
  avatar: {
    width: getWidth(15),
    height: getWidth(15),
    borderRadius: getWidth(7.5),
    backgroundColor: Colors.skeletonBackground,
  },
});
