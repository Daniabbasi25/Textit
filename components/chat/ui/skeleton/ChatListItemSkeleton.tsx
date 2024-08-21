import React from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { getWidth } from "@/lib";
import { Colors } from "@/theme";

const ChatListItemSkeleton = () => {
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

  return (
    <View style={styles.container}>
      <View style={styles.avatar} />
      <View style={styles.mainContainer}>
        <Animated.View style={[styles.name, shimmerStyle]} />
        <Animated.View style={[styles.message, shimmerStyle]} />
      </View>
      <View style={styles.rightContainer}>
        <Animated.View style={[styles.time, shimmerStyle]} />
      </View>
    </View>
  );
};

export default ChatListItemSkeleton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: getWidth(5),
    marginHorizontal: getWidth(5),
  },
  avatar: {
    width: getWidth(15),
    height: getWidth(15),
    borderRadius: getWidth(7.5),
    backgroundColor: Colors.skeletonBackground,
  },
  mainContainer: {
    flex: 1,
  },
  name: {
    width: "60%",
    height: getWidth(6),
    backgroundColor: Colors.skeletonBackground,
    borderRadius: getWidth(3),
    marginBottom: getWidth(2),
  },
  message: {
    width: "80%",
    height: getWidth(4),
    backgroundColor: Colors.skeletonBackground,
    borderRadius: getWidth(3),
  },
  rightContainer: {
    alignItems: "flex-end",
  },
  time: {
    width: getWidth(15),
    height: getWidth(4),
    backgroundColor: Colors.skeletonBackground,
    borderRadius: getWidth(3),
    marginBottom: getWidth(2),
  },
  messageCount: {
    width: getWidth(7),
    height: getWidth(7),
    backgroundColor: Colors.skeletonBackground,
    borderRadius: getWidth(3.5),
  },
});
