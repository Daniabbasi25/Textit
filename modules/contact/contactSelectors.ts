import { RootState } from "@/store/store";

export const selectGetContactLoading = (state: RootState) =>
  state.contact.getLoading;
export const selectAddContactLoading = (state: RootState) =>
  state.contact.addLoading;

export const selectContactError = (state: RootState) => state.contact.error;
export const selectAllContacts = (state: RootState) => state.contact.contacts;
