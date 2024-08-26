import { StyleSheet, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import Feather from "@expo/vector-icons/Feather";
import { getFontSize, getWidth } from "@/lib";
import { Colors } from "@/theme";

interface Props {
  name: "search";
  onpress: () => void;
}
const SIZE = getWidth(10);
const Icon: FC<Props> = ({ name, onpress }) => {
  return (
    <TouchableOpacity onPress={onpress} style={styles.container}>
      <Feather name={name} size={SIZE / 2} color="white" />
    </TouchableOpacity>
  );
};

export default Icon;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.iconBackground,
    width: SIZE,
    height: SIZE,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZE / 2,
  },
});
