import { AppDispatch } from "@/store/store";
import {
  loginSignupRequest,
  loginSignUpSuccess,
  loginFailure,
  logout,
} from "./authSlice";
import { User } from "./authTypes";
import axios from "axios";
import apiClient from "@/api/axiosConfig";

export const registerUser =
  (
    name: string,
    email: string,
    password: string,
    showMessage: (type: "success" | "danger" | "info", message: string) => void,
    showLoader: () => void,
    hideLoader: () => void
  ) =>
  async (dispatch: AppDispatch) => {
    try {
      showLoader();
      dispatch(loginSignupRequest());
      const response = await apiClient.post("auth/register", {
        name,
        email,
        password,
      });

      const { user, token }: { user: User; token: string } = response.data;

      dispatch(loginSignUpSuccess({ user, token }));
      hideLoader();
      showMessage("success", "Sign Up Successfull");
    } catch (error: any) {
      hideLoader();
      dispatch(
        loginFailure(error.response?.data?.message || "Registration failed")
      );
      showMessage(
        "danger",
        error.response?.data?.message || "Registration failed"
      );
    }
  };
export const loginUser =
  (
    email: string,
    password: string,

    showMessage: (type: "success" | "danger" | "info", message: string) => void,
    showLoader: () => void,
    hideLoader: () => void
  ) =>
  async (dispatch: AppDispatch) => {
    try {
      showLoader();
      dispatch(loginSignupRequest());
      const response = await apiClient.post("auth/login", {
        email,
        password,
      });

      const { user, token }: { user: User; token: string } = response.data;

      dispatch(loginSignUpSuccess({ user, token }));
      hideLoader();
      showMessage("success", "Login Successfull");
    } catch (error: any) {
      hideLoader();
      dispatch(loginFailure(error.response?.data?.message || "Login failed"));
      showMessage("danger", error.response?.data?.message || "Login failed");
    }
  };

export const logoutUser = () => (dispatch: AppDispatch) => {
  // You can also clear tokens from localStorage here if needed
  dispatch(logout());
};
