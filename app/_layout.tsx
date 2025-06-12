import { Storage } from "@/services/async-storage";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import './global.css';

export default function RootLayout() {
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const user = await Storage().getItem('user');
      if (user) {
        // Parse the user data if it exists
        try {
          const parsedUser = JSON.parse(user);
          router.push('/(private)/home')
          console.log('Parsed user:', parsedUser);
        } catch (error) {
          console.error('Error parsing user data:', error);
        }
      }
      console.log('User from storage:', user);
    })();
  }, []);

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
