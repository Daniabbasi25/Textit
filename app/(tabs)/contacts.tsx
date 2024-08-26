import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenBackgroundContainer from "@/components/auth/container/ScreenBackgroundContainer";
import ContactsScreenHeader from "@/components/contacts/container/ContactsScreenHeader";
import ContactListContainer from "@/components/contacts/container/ContactListContainer";

const contacts = () => {
  return (
    <ScreenBackgroundContainer>
      <ContactsScreenHeader />
      <ContactListContainer />
    </ScreenBackgroundContainer>
  );
};

export default contacts;

const styles = StyleSheet.create({});
