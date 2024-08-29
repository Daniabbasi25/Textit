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
import { ContactListSkeleton } from "@/constants/ContatList";
import ContactListItem from "../ui/ContactListItem";
import { fontFamilies, getFontSize, getHeight, getWidth } from "@/lib";
import { Colors } from "@/theme";
import ContactListItemSkeleton from "../ui/skeletons/ContactListItemSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { selectAllContacts } from "@/modules/contact/contactSelectors";
import { AppDispatch } from "@/store/store";
import { getContacts } from "@/modules/contact/contactActions";
import { useFlashMessage } from "@/context/FlashMessageContext";

const ContactListContainer = () => {
  const [isLoading, setIsLooading] = useState<boolean>(true);
  const dispatch = useDispatch<AppDispatch>();
  const { showMessage } = useFlashMessage();

  const [refreshing, setRefreshing] = useState(false);
  const ALLCONTACTS = useSelector(selectAllContacts);
  const onRefresh = useCallback(() => {
    dispatch(
      getContacts(
        () => setRefreshing(true),
        () => setRefreshing(false),
        showMessage
      )
    );
  }, []);

  useEffect(() => {
    dispatch(
      getContacts(
        () => setIsLooading(true),
        () => setIsLooading(false),
        showMessage
      )
    );
  }, []);
  return (
    <AnimatedContainer>
      <Heading text="My Contact" />

      <SectionList
        sections={isLoading ? ContactListSkeleton : ALLCONTACTS ?? []}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) =>
          isLoading || item === null ? (
            <ContactListItemSkeleton />
          ) : (
            <ContactListItem {...item} />
          )
        }
        renderSectionHeader={({ section: { alphabet } }) => (
          <Text style={styles.header}>{alphabet}</Text>
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
