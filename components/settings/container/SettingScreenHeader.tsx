import React from "react";
import TabBarHeader from "@/components/TabBarHeader";
import Icon from "@/components/Icon";

const SettingScreenHeader = () => {
  return (
    <TabBarHeader
      name="Settings"
      leftComponent={<Icon name="search" onpress={() => {}} />}
      rightComponent={<Icon name="search" onpress={() => {}} />}
    />
  );
};

export default SettingScreenHeader;
