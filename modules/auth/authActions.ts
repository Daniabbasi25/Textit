import { AppDispatch } from "@/store/store";
import { loginRequest, loginSuccess, loginFailure, logout } from "./authSlice";
import { User } from "./authTypes";
import axios from "axios";

export const loginUser =
  (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loginRequest());
      const response = await axios.post("/api/auth/login", {
        username,
        password,
      });
      const { user, token }: { user: User; token: string } = response.data;

      dispatch(loginSuccess({ user, token }));
    } catch (error: any) {
      dispatch(loginFailure(error.response?.data?.message || "Login failed"));
    }
  };

export const logoutUser = () => (dispatch: AppDispatch) => {
  // You can also clear tokens from localStorage here if needed
  dispatch(logout());
};
