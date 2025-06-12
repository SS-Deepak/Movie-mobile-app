import { Stack } from 'expo-router'
import React from 'react'

const _layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'fade_from_bottom',
      }}
    >
      <Stack.Screen
        name="login-email"
      />
      <Stack.Screen
        name="login-password"
      />
      <Stack.Screen
        name="forgot-password"
      />
      <Stack.Screen
        name="reset-password"
      />
      <Stack.Screen
        name="register"
      />
    </Stack>
  )
}

export default _layout