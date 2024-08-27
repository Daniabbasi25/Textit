import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { globalStyles } from "@/styles";
import Avatar from "@/components/Avatar";
import { CallsIconSvg } from "@/assets";
import Feather from "@expo/vector-icons/Feather";

interface Props {
  id: number;
  name: string;
  image: string;
  lastCall: string;
}
const CallListItem: FC<Props> = ({ id, image, lastCall, name }) => {
  return (
    <View style={globalStyles.row}>
      <Avatar uri={image} />
      <View style={styles.mainContainer}>
        <Text>{name}</Text>
        <Text>{lastCall}</Text>
      </View>
      <View style={globalStyles.row}>
        <CallsIconSvg width={30} height={30} />
        <Feather name="video" size={30} color="black" />
      </View>
    </View>
  );
};

export default CallListItem;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
