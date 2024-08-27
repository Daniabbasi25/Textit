import { ActivityIndicator, Image, StyleSheet, View } from "react-native";
import React, { FC, memo, useState } from "react";
import { getWidth } from "@/lib";
import { Colors } from "@/theme";

interface Props {
  uri: string;
  SIZE?: number;
}

const Avatar: FC<Props> = ({ uri, SIZE = getWidth(12) }) => {
  const [isLoading, setIsloading] = useState<boolean>(true);

  return (
    <View
      style={[
        styles.container,
        {
          width: SIZE,
          height: SIZE,
          borderRadius: SIZE / 2,
          backgroundColor: Colors.skeletonBackground,
        },
      ]}
    >
      {isLoading && (
        <ActivityIndicator size="small" color="#ffffff" style={styles.loader} />
      )}
      <Image
        source={{ uri }}
        style={[
          styles.image,
          {
            width: SIZE,
            height: SIZE,
            borderRadius: SIZE / 2,
            opacity: isLoading ? 0 : 1, // Control visibility using opacity
          },
        ]}
        onLoad={() => setIsloading(false)}
      />
    </View>
  );
};

export default memo(Avatar);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  loader: {
    position: "absolute",
    zIndex: 1, // Ensure loader is on top of the image
  },
  image: {
    resizeMode: "cover",
    backgroundColor: Colors.iconBackground,
  },
});
