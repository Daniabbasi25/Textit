import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contact, ContactListType, ContactState } from "./contactTypes";
import { insertContact } from "@/lib/InsertContactinList";
const initialState: ContactState = {
  contacts: [],
  addLoading: false,
  getLoading: false,
  error: null,
};
const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    AddRequest(state) {
      state.addLoading = true;
      state.error = null;
    },
    GetRequest(state) {
      state.getLoading = true;
      state.error = null;
    },
    getSuccess(state, action: PayloadAction<{ contacts: ContactListType[] }>) {
      state.contacts = action.payload.contacts;
      state.getLoading = false;
    },

    getAddFail(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.addLoading = false;
      state.getLoading = false;
    },
    AddSuccess(
      state,
      action: PayloadAction<{ contact: Contact; message: string }>
    ) {
      state.addLoading = false;
      state.contacts = insertContact(state.contacts, action.payload.contact);
    },
  },
});
export const { getAddFail, AddRequest, GetRequest, getSuccess, AddSuccess } =
  contactSlice.actions;

export default contactSlice.reducer;
