import React, { useEffect, useState } from "react";
import { Provider, useSelector } from "react-redux";
import { Slot, Stack, useRouter, useSegments } from "expo-router";
import { store } from "../store/store";
import { selectIsAuthenticated } from "@/modules/auth/authSelectors";

function AppContent() {
  const router = useRouter();
  const segments = useSegments();

  const isLoggedIn = useSelector(selectIsAuthenticated);

  useEffect(() => {
    const inAuthGroup = segments[0] === "(tabs)";
    if (!isLoggedIn && inAuthGroup) {
      router.replace("/(auth)");
    } else if (isLoggedIn) {
      router.replace("/(tabs)");
    }
  }, [isLoggedIn]);

  return (
    <Stack>
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

export default function Layout() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}
