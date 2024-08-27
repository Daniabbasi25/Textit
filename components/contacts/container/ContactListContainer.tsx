import {
  SectionList,
  StyleSheet,
  Text,
  View,
  RefreshControl,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import AnimatedContainer from "@/components/AnimatedContainer";
import Heading from "@/components/Heading";
import { ContactList, ContactListSkeleton } from "@/constants/ContatList";
import ContactListItem from "../ui/ContactListItem";
import { fontFamilies, getFontSize, getHeight, getWidth } from "@/lib";
import { Colors } from "@/theme";
import ContactListItemSkeleton from "../ui/skeletons/ContactListItemSkeleton";

const ContactListContainer = () => {
  const [isLoading, setIsLooading] = useState<boolean>(true);

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLooading(false);
    }, 4000);
  }, []);
  return (
    <AnimatedContainer>
      <Heading text="My Contact" />

      <SectionList
        sections={isLoading ? ContactListSkeleton : ContactList}
        keyExtractor={(ite, index) => index.toString()}
        renderItem={({ item }) =>
          isLoading || item === null ? (
            <ContactListItemSkeleton />
          ) : (
            <ContactListItem {...item} />
          )
        }
        renderSectionHeader={({ section: { alphabat } }) => (
          <Text style={styles.header}>{alphabat}</Text>
        )}
        ItemSeparatorComponent={() => <View style={{ height: getHeight(1) }} />}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </AnimatedContainer>
  );
};

export default ContactListContainer;

const styles = StyleSheet.create({
  header: {
    fontFamily: fontFamilies.Popins.bold,
    fontSize: getFontSize(16),
    paddingVertical: getHeight(2),
    paddingHorizontal: getWidth(5),
    backgroundColor: Colors.white,
  },
});
