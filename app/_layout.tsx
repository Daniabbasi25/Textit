import React, { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import { Stack, useRouter, useSegments } from "expo-router";
import { store } from "../store/store";
import { selectIsAuthenticated } from "@/modules/auth/authSelectors";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { LoadfontFamilies } from "@/lib";

SplashScreen.preventAutoHideAsync();

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
  const [loaded] = useFonts(LoadfontFamilies);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}
