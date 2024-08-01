import React from 'react'
import { Tabs } from 'expo-router'
import { HomeIcon, UserIcon } from "react-native-heroicons/solid"

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ 
        title: "Home",
        headerTitle: "Home Page",
        tabBarIcon(props) {
          return <HomeIcon {...props} size={25} />
        },
        headerStyle: { backgroundColor: "#f4511e" }
        }} 
      />
      <Tabs.Screen name="users/[id]" options={{ 
        title: "User", 
        tabBarIcon(props){
          return <UserIcon {...props} size={25} />
        },
        }} 
      />
    </Tabs>
  )
}


export default TabsLayout