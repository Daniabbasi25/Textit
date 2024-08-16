import React, { useEffect, useState } from "react";
import { Provider, useSelector } from "react-redux";
import { Slot, useRouter } from "expo-router";
import { store } from "../store/store";
import { selectIsAuthenticated } from "@/modules/auth/authSelectors";

function AppContent() {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);
  const isLoggedIn = useSelector(selectIsAuthenticated);

  useEffect(() => {
    if (isLoggedIn) {
      setIsReady(true);
    } else {
      router.replace("/OnBoarding");
    }
  }, [isLoggedIn]);

  if (!isReady) {
    return null; // or return a loading component
  }

  return <Slot />;
}

export default function Layout() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}
