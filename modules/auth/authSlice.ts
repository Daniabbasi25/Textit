import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, User } from "./authTypes";

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSignupRequest(state) {
      state.loading = true;
      state.error = null;
    },
    loginSignUpSuccess(
      state,
      action: PayloadAction<{ user: User; token: string }>
    ) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loading = false;
      state.isAuthenticated = true;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
    logout(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
    dummyLogin(state) {
      state.isAuthenticated = true;
      console.log(state.isAuthenticated);
    },
  },
});

export const {
  loginSignupRequest,
  loginSignUpSuccess,
  loginFailure,
  logout,
  dummyLogin,
} = authSlice.actions;

export default authSlice.reducer;
