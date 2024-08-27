import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { globalStyles } from "@/styles";
import Avatar from "@/components/Avatar";

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
      <View>
        <Text>{name}</Text>
        <Text>{lastCall}</Text>
      </View>
      <View></View>
    </View>
  );
};

export default CallListItem;

const styles = StyleSheet.create({});
