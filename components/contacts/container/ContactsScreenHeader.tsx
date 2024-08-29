import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import TabBarHeader from "@/components/TabBarHeader";
import Icon from "@/components/Icon";
import AddNewContactModal from "./AddNewContactModal";

const ContactsScreenHeader = () => {
  const [showAddNewContactModal, setShowAddNewContactModal] =
    useState<boolean>(false);
  return (
    <>
      <TabBarHeader
        name="Contacts"
        leftComponent={<Icon name="search" onpress={() => {}} />}
        rightComponent={
          <Icon
            name="UserAddIcon"
            onpress={() => {
              setShowAddNewContactModal(true);
            }}
          />
        }
      />
      <AddNewContactModal
        isVisible={showAddNewContactModal}
        handleClose={() => setShowAddNewContactModal(false)}
      />
    </>
  );
};

export default ContactsScreenHeader;

const styles = StyleSheet.create({});
