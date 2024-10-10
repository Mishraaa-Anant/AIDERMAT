import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Colors } from '../../constants/Colors';
export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:Colors.PRIMARY
    }}>
        <Tabs.Screen name="home"
        options={{
            tabBarLabel:'Home',
            tabBarIcon:({color})=><Ionicons name="home" 
            size={24} color={color} />
        }}
        />
        <Tabs.Screen name="facescanner"
        options={{
            tabBarLabel:'ScanHere',
            tabBarIcon:({color})=><Ionicons name="scan-circle" 
    size={24} color={color} />

        }}
        />
        <Tabs.Screen name="profile"
        options={{
            tabBarLabel:'Chat',
            tabBarIcon:({color})=><Ionicons name="chatbox-ellipses" 
            size={24} color={color} />

        }}
        />
    </Tabs>
  )
}