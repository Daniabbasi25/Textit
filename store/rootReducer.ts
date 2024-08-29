import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "@/modules/auth/authSlice";
import contactReducer from "@/modules/contact/contactSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  contact: contactReducer,

  // other reducers
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
