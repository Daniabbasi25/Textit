import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TabBarHeader from "@/components/TabBarHeader";
import Icon from "@/components/Icon";

const ContactsScreenHeader = () => {
  return (
    <TabBarHeader
      name="Contacts"
      leftComponent={<Icon name="search" onpress={() => {}} />}
      rightComponent={<Icon name="UserAddIcon" onpress={() => {}} />}
    />
  );
};

export default ContactsScreenHeader;

const styles = StyleSheet.create({});
