import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  // Add any middleware and devTools options here if necessary
});

// Export RootState type from the rootReducer
export type RootState = ReturnType<typeof rootReducer>;

// Export AppDispatch type
export type AppDispatch = typeof store.dispatch;

export default store;
