import React from "react";
import Icon from "../../Icon";
import Avatar from "../../Avatar";
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
