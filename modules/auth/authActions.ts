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
  (name: string, email: string, password: string) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(loginSignupRequest());
      const response = await apiClient.post("auth/register", {
        name,
        email,
        password,
      });
      const { user, token }: { user: User; token: string } = response.data;

      dispatch(loginSignUpSuccess({ user, token }));
    } catch (error: any) {
      dispatch(
        loginFailure(error.response?.data?.message || "Registration failed")
      );
    }
  };
export const loginUser =
  (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loginSignupRequest());
      const response = await axios.post("/api/auth/login", {
        username,
        password,
      });
      const { user, token }: { user: User; token: string } = response.data;

      dispatch(loginSignUpSuccess({ user, token }));
    } catch (error: any) {
      dispatch(loginFailure(error.response?.data?.message || "Login failed"));
    }
  };

export const logoutUser = () => (dispatch: AppDispatch) => {
  // You can also clear tokens from localStorage here if needed
  dispatch(logout());
};
