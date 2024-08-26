import React from "react";
import Icon from "../ui/Icon";
import Avatar from "../ui/Avatar";
import TabBarHeader from "@/components/TabBarHeader";

const ChatScreenHeader = () => {
  return (
    <TabBarHeader
      leftComponent={<Icon name="search" onpress={() => {}} />}
      name="Home"
      rightComponent={
        <Avatar uri="https://avatar.iran.liara.run/username?username=Discuss react native" />
      }
    />
  );
};

export default ChatScreenHeader;
