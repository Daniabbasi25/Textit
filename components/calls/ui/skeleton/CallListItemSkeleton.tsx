import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { getWidth } from "@/lib";
import { globalStyles } from "@/styles";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { Colors } from "@/theme";

const CallListItemSkeleton = () => {
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
    <View style={[globalStyles.row, styles.container]}>
      <Animated.View style={[styles.avatar]} />
      <View style={styles.mainContainer}>
        <Animated.View style={[styles.name, shimmerStyle]} />
        <Animated.View style={[styles.message, shimmerStyle]} />
      </View>
      <View style={[globalStyles.row, { gap: getWidth(5) }]}>
        <Animated.View style={[styles.smallIcon, shimmerStyle]} />
        <Animated.View style={[styles.smallIcon, shimmerStyle]} />
      </View>
    </View>
  );
};

export default CallListItemSkeleton;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    gap: getWidth(5),
    marginHorizontal: getWidth(5),
  },
  avatar: {
    width: getWidth(15),
    height: getWidth(15),
    borderRadius: getWidth(7.5),
    backgroundColor: Colors.skeletonBackground,
  },
  smallIcon: {
    width: getWidth(5),
    height: getWidth(5),
    borderRadius: getWidth(2),
    backgroundColor: Colors.skeletonBackground,
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
});
