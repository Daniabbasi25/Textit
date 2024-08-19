import { Tabs } from "expo-router";
import React from "react";

import {
  MessageIconSvg,
  CallsIconSvg,
  ContactsIconSvg,
  SettingIconSvg,
} from "@/assets";
import { Colors } from "@/theme";
import { fontFamilies, getFontSize, getHeight, getWidth, isIOS } from "@/lib";
import { Text } from "react-native";

const CustomTabBarLabel = ({
  label,
  focused,
}: {
  label: string;
  focused: boolean;
}) => {
  return (
    <Text
      style={{
        fontFamily: focused
          ? fontFamilies.Popins.medium
          : fontFamilies.Popins.normal,
        fontSize: getFontSize(12),
        color: focused ? Colors.activeTabTint : Colors.inactiveTabTint,
      }}
    >
      {label}
    </Text>
  );
};
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Colors.activeTabTint,
        tabBarInactiveTintColor: Colors.inactiveTabTint,
        headerShown: false,

        tabBarLabel: ({ focused }) => (
          <CustomTabBarLabel label={route.name} focused={focused} />
        ),
        tabBarStyle: {
          height: isIOS() ? getHeight(10) : getHeight(7),
        },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Message",
          tabBarIcon: ({ color, size }) => (
            <MessageIconSvg width={size} height={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="calls"
        options={{
          title: "Calls",
          tabBarIcon: ({ color, size }) => (
            <CallsIconSvg width={size} height={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="contacts"
        options={{
          title: "Contacts",
          tabBarIcon: ({ color, size }) => (
            <ContactsIconSvg width={size} height={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <SettingIconSvg width={size} height={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
