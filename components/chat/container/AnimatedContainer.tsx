import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Colors } from "@/theme";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const AnimatedContainer = () => {
  const translateY = useSharedValue(300);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });
  useEffect(() => {
    translateY.value = withTiming(5, {
      duration: 2000,
    });
  }, [translateY]);
  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Text>AnimatedContainer</Text>
    </Animated.View>
  );
};

export default AnimatedContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
  },
});
