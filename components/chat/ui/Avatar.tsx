import { Image, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { getWidth } from "@/lib";
import { Colors } from "@/theme";

interface Props {
  uri: string;
}
const SIZE = getWidth(12);
const Avatar: FC<Props> = ({ uri }) => {
  return (
    <View>
      <Image source={{ uri }} style={styles.image} />
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  image: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: Colors.iconBackground,
    resizeMode: "cover",
  },
});
