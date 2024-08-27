import { StyleSheet, Text, TextProps, View } from "react-native";
import React, { FC } from "react";
import { Colors } from "@/theme";
import { fontFamilies, getFontSize, getHeight, getWidth } from "@/lib";
interface Props extends TextProps {
  text: string;
}
const Heading: FC<Props> = ({ text, ...extra }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} {...extra}>
        {text}
      </Text>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  text: {
    color: Colors.black,
    fontFamily: fontFamilies.Popins.medium,
    fontSize: getFontSize(16),
  },
  container: {
    marginVertical: getHeight(1),
    marginHorizontal: getWidth(5),
  },
});
