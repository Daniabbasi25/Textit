import { StyleSheet, Text, View } from "react-native";
import React, { FC, ReactNode, memo, useEffect } from "react";
import { Colors } from "@/theme";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { getHeight } from "@/lib";

interface Props {
  children: ReactNode;
}
const AnimatedContainer: FC<Props> = ({ children }) => {
  const translateY = useSharedValue(getHeight(80));
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });
  useEffect(() => {
    translateY.value = withTiming(5, {
      duration: 1000,
    });
  }, [translateY]);
  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <View style={styles.tophandler} />
      {children}
    </Animated.View>
  );
};

export default memo(AnimatedContainer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
  },
  tophandler: {
    width: "10%",
    height: 5,
    alignSelf: "center",
    backgroundColor: Colors.handleColor,
    marginVertical: getHeight(1),
    borderRadius: 20,
  },
});
