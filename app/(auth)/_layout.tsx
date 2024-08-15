import { Colors } from "@/theme";

import { Stack } from "expo-router";

const HEADEROPTIONS = {
  // headerShown: false,
  headerTitle: "",
  headerBackTitleVisible: false,
  headerTintColor: Colors.black,
  headerShadowVisible: false,
  headerBackButtonMenuEnabled: false,
};
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="SignUp" options={HEADEROPTIONS} />
      <Stack.Screen name="SignIn" options={HEADEROPTIONS} />
    </Stack>
  );
}
