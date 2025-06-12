import { Stack } from 'expo-router'
import React from 'react'

const _layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" />
      <Stack.Screen name="chats" />
    </Stack>
  )
}

export default _layout