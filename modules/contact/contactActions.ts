import { AppDispatch } from "@/store/store";
import {
  getAddFail,
  AddRequest,
  GetRequest,
  getSuccess,
  AddSuccess,
} from "./contactSlice";
import { Contact, ContactListType } from "./contactTypes";
import apiClient from "@/api/axiosConfig";

//  Add Contact

export const addContact =
  (
    email: string,
    showMessage: (type: "success" | "danger" | "info", message: string) => void,
    showLoader: () => void,
    hideLoader: () => void
  ) =>
  async (dispatch: AppDispatch) => {
    try {
      showLoader();

      dispatch(AddRequest());
      const response = await apiClient.post("contacts/addContact", {
        email,
      });

      const { contact, message }: { contact: Contact; message: string } =
        response.data;

      dispatch(AddSuccess({ contact, message }));
      hideLoader();
      showMessage("success", "Sign Up Successfull");
    } catch (error: any) {
      hideLoader();
      dispatch(
        getAddFail(error.response?.data?.message || "Server Request Fail")
      );
      showMessage(
        "danger",
        error.response?.data?.message || "Server Request Fail"
      );
    }
  };
export const getContacts =
  (
    showLoader: () => void,
    hideLoader: () => void,

    showMessage: (type: "success" | "danger" | "info", message: string) => void
  ) =>
  async (dispatch: AppDispatch) => {
    try {
      showLoader();
      dispatch(GetRequest());
      const response = await apiClient.get("contacts");

      const contact: ContactListType[] = response.data;

      dispatch(getSuccess({ contacts: contact }));
      hideLoader();
    } catch (error: any) {
      console.log(error);
      hideLoader();
      dispatch(
        getAddFail(error.response?.data?.message || "Server Request Fail")
      );
      showMessage(
        "danger",
        error.response?.data?.message || "Server Request Fail"
      );
    }
  };
