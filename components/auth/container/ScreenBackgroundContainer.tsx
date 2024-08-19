import { LinearGradient } from "expo-linear-gradient";
import React, { FC, ReactNode, useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ActivityIndicator,
} from "react-native";

interface Props {
  children: ReactNode;
}

const ScreenBackgroundContainer: FC<Props> = ({ children }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />

      {!isImageLoaded && (
        // Placeholder content while the background image loads
        <LinearGradient
          colors={["#211440", "#0B1237"]}
          start={{ x: 0.5, y: 0.0 }}
          end={{ x: 0.5, y: 1.0 }}
          style={styles.placeholder}
        >
          <ActivityIndicator size="large" color="#ffffff" />
        </LinearGradient>
      )}
      <ImageBackground
        source={require("@/assets/app-images/Splash.png")}
        style={{ flex: 1 }}
        resizeMode="cover"
        onLoad={() => setIsImageLoaded(true)} // Mark image as loaded when ready
      >
        <SafeAreaView style={styles.container}>{children}</SafeAreaView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  placeholder: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2C2C2E", // Fallback color or your dark purple theme color
  },
});

export default React.memo(ScreenBackgroundContainer);
