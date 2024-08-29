export interface Contact {
  _id: string;
  name: string;
  email: string;
  status?: string;
  profilePicture?: string;
  // Add any other user properties here
}
export interface ContactListType {
  alphabet: string;
  data: Contact[];
}
export interface ContactState {
  contacts: ContactListType[];

  addLoading: boolean;
  getLoading: boolean;
  error: string | null;
}
