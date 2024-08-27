import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { FC } from "react";
import { globalStyles } from "@/styles";
import Avatar from "@/components/Avatar";
import { CallsIconSvg } from "@/assets";
import Feather from "@expo/vector-icons/Feather";
import { fontFamilies, getFontSize, getWidth } from "@/lib";
import { Colors } from "@/theme";

interface Props {
  id: number;
  name: string;
  image: string;
  lastCall: string;
}
const CallListItem: FC<Props> = ({ id, image, lastCall, name }) => {
  return (
    <View style={[globalStyles.row, styles.container]}>
      <Avatar uri={image} SIZE={getWidth(15)} />
      <View style={styles.mainContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.subtitle}>{lastCall}</Text>
      </View>
      <View style={[globalStyles.row, { gap: getWidth(5) }]}>
        <TouchableOpacity>
          <CallsIconSvg width={25} height={25} color={Colors.callListIcons} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="video" size={25} color={Colors.callListIcons} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CallListItem;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    gap: getWidth(5),
    marginHorizontal: getWidth(5),
  },
  name: {
    fontFamily: fontFamilies.Popins.medium,
    fontSize: getFontSize(18),
    color: Colors.black,
  },
  subtitle: {
    fontFamily: fontFamilies.Popins.normal,
    fontSize: getFontSize(12),
    color: Colors.AuthSubTitle,
  },
});
