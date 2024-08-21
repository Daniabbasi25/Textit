import { fontFamilies, getFontSize } from "@/lib";
import { FlashBarProps } from "@/lib/interfaces";
import React, { useState, useEffect, type FC } from "react";
import { Text, StyleSheet, Dimensions, View } from "react-native";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors } from "@/theme";

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
  const getColor = () => {
    switch (type) {
      case "success":
        return "#3EAE4D";

      case "danger":
        return "#ED2828";

      case "info":
        return "#C5E6FF";
      default:
        return "#C5E6FF";
    }
  };
  return (
    <>
      {isVisibleInternal && (
        <Animated.View style={[styles.container, animatedStyle]}>
          <View style={[styles.left, getMessageStyle()]} />

          <AntDesign name="checkcircle" size={24} color={getColor()} />
          <View style={{ paddingVertical: 15 }}>
            <Text style={styles.heading}>
              {type === "danger" ? "Error" : type}
            </Text>
            <Text style={styles.message}>{message}</Text>
          </View>
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
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    backgroundColor: Colors.AuthHeading,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: "hidden",
  },
  message: {
    color: `white`,
    fontFamily: fontFamilies.Popins.normal,
    fontSize: getFontSize(10),
  },
  heading: {
    fontFamily: fontFamilies.Popins.bold,
    fontSize: getFontSize(12),
    color: `white`,
    textTransform: "capitalize",
  },
  left: {
    height: "100%",
    width: "2%",
  },
});

export default FlashBar;
