import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenBackgroundContainer from "@/components/auth/container/ScreenBackgroundContainer";
import SettingListContainer from "@/components/settings/container/SettingListContainer";
import SettingScreenHeader from "@/components/settings/container/SettingScreenHeader";

const settings = () => {
  return (
    <ScreenBackgroundContainer>
      <SettingScreenHeader />
      <SettingListContainer />
    </ScreenBackgroundContainer>
  );
};

export default settings;

const styles = StyleSheet.create({});
