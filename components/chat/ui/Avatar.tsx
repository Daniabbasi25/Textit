import { Image, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { getWidth } from "@/lib";
import { Colors } from "@/theme";

interface Props {
  uri: string;
  SIZE?: number;
}

const Avatar: FC<Props> = ({ uri, SIZE = getWidth(12) }) => {
  return (
    <View>
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
      />
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  image: {
    backgroundColor: Colors.iconBackground,
    resizeMode: "cover",
  },
});
