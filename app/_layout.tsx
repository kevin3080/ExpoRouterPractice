import { Stack } from 'expo-router'
import React from 'react'
import "../global.css"

function RootLayout() {
  return (
    <Stack>
      {/* <Stack.Screen name='index' options={{
        headerTitle: "Home Page",
        headerStyle: {backgroundColor: "red"},
      }}/>
      <Stack.Screen name='users/[id]' options={{
        headerTitle: "User Page",
      }}/> */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  )
}

export default RootLayout