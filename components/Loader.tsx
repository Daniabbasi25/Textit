import { StyleSheet, Text, View } from "react-native";
import React, { FC, memo } from "react";
import Modal from "react-native-modal";
import LoaderKit from "react-native-loader-kit";
import { Colors } from "@/theme";

interface Props {
  isVisible: boolean;
}
const Loader: FC<Props> = ({ isVisible }) => {
  return (
    <Modal
      animationIn={"fadeIn"}
      animationOut={"fadeOut"}
      isVisible={isVisible}
    >
      <View style={styles.container}>
        <LoaderKit
          style={{ width: 50, height: 50 }}
          name={"BallClipRotatePulse"} // Optional: see list of animations below
          color={Colors.AuthHeading} // Optional: color can be: 'red', 'green',... or '#ddd', '#ffffff',...
        />
      </View>
    </Modal>
  );
};

export default memo(Loader);

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.white,
    width: 70,
    height: 70,
    alignSelf: "center",
    borderRadius: 35,
  },
});
