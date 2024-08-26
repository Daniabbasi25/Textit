import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
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
    <View>
      {isLoading ? (
        <View
          style={[
            styles.image,
            {
              width: SIZE,
              height: SIZE,
              borderRadius: SIZE / 2,
              backgroundColor: Colors.skeletonBackground,
              alignItems: "center",
              justifyContent: "center",
            },
          ]}
        >
          <ActivityIndicator size="small" color="#ffffff" />
        </View>
      ) : (
        <Image
          source={{ uri }}
          style={[
            styles.image,
            {
              width: SIZE,
              height: SIZE,
              borderRadius: SIZE / 2,
            },
          ]}
          onLoad={() => setIsloading(false)}
        />
      )}
    </View>
  );
};

export default memo(Avatar);

const styles = StyleSheet.create({
  image: {
    backgroundColor: Colors.iconBackground,
    resizeMode: "cover",
  },
});
