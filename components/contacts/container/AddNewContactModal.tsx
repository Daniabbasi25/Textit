import { StyleSheet, Text, View } from "react-native";
import React, { FC, memo } from "react";
import Modal from "react-native-modal";
import { Colors } from "@/theme";
import { getHeight } from "@/lib";
import Heading from "@/components/Heading";
import AddContactForm from "../form/AddContactForm";

interface Props {
  isVisible: boolean;
  handleClose: () => void;
}
const AddNewContactModal: FC<Props> = ({ handleClose, isVisible }) => {
  return (
    <Modal isVisible={isVisible} onBackdropPress={handleClose}>
      <View style={styles.visibleContainer}>
        <Heading text="Add Contact" />
        <AddContactForm handleClose={handleClose} />
      </View>
    </Modal>
  );
};

export default memo(AddNewContactModal);

const styles = StyleSheet.create({
  visibleContainer: {
    backgroundColor: Colors.white,
    minHeight: getHeight(40),
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
