import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import './global.css';

export default function RootLayout() {
  return <>
    <StatusBar
      backgroundColor={"transparent"}
      barStyle="dark-content"
    />

    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="(public)"
      />
      <Stack.Screen
        name="(private)"
      />
    </Stack>
  </>
}
