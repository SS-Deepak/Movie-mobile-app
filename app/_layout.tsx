import AuthProvider from "@/context/auth-context/auth.provider";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import './global.css';

export default function RootLayout() {
  return <>
    <StatusBar
      backgroundColor={"transparent"}
      barStyle="dark-content"
    />

    <AuthProvider>
      <Stack
        initialRouteName="(public)/index"
        screenOptions={{
          headerShown: false,
          animation: "fade",
          contentStyle: {
            backgroundColor: "transparent",
          },
        }}
      />
    </AuthProvider>
  </>
}
