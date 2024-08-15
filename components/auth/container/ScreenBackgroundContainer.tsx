import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";
import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const ScreenBackgroundContainer: FC<Props> = ({ children }) => {
  return (
    <ImageBackground
      source={require("@/assets/app-images/Splash.png")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </ImageBackground>
  );
};

export default ScreenBackgroundContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
