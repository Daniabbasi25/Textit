import { fontFamilies, getFontSize } from "@/lib";
import { FlashBarProps } from "@/lib/interfaces";
import React, { useState, useEffect, type FC } from "react";
import { Text, StyleSheet, Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";

interface Props extends FlashBarProps {
  isVisible: boolean;
  onHide: () => void;
}

const FlashBar: FC<Props> = ({ type, message, isVisible, onHide }) => {
  const [isVisibleInternal, setIsVisibleInternal] = useState(false);
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(-100); // Start off-screen

  useEffect(() => {
    if (isVisible) {
      setIsVisibleInternal(true);
      opacity.value = withTiming(1, { duration: 300 });
      translateY.value = withTiming(0, { duration: 300 }); // Slide in

      // Hide the flash bar after 3 seconds
      setTimeout(() => {
        opacity.value = withTiming(0, { duration: 300 });
        translateY.value = withTiming(-100, { duration: 300 }); // Slide out
        setTimeout(() => {
          setIsVisibleInternal(false);
          onHide();
        }, 300); // Match duration with fade-out
      }, 3000); // Flash message disappears after 3 seconds
    }
  }, [isVisible]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  const getMessageStyle = () => {
    switch (type) {
      case "success":
        return { backgroundColor: "#3EAE4D" };

      case "danger":
        return { backgroundColor: "#ED2828" };

      case "info":
        return { backgroundColor: "#C5E6FF" };
      default:
        return {};
    }
  };

  return (
    <>
      {isVisibleInternal && (
        <Animated.View
          style={[styles.container, getMessageStyle(), animatedStyle]}
        >
          <Text style={styles.message}>{message}</Text>
        </Animated.View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 80,
    left: 20,
    right: 20,
    padding: 15,
    borderRadius: 5,
  },
  message: {
    color: `white`,
    fontFamily: fontFamilies.Popins.normal,
    fontSize: getFontSize(12),
  },
});

export default FlashBar;
