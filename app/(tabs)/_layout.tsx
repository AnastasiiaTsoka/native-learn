import { Tabs, Redirect } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: '#b400ff',
        tabBarActiveTintColor: '#E46000',
        // tabBarInactiveTintColor:'#0dd392',
        tabBarInactiveTintColor:'#99857D',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#0D0E1C',
          borderTopWidth: 1,
          borderTopColor: '#b400ff',
          height:84
        }
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown:false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="lessons"
        options={{
          title: 'Lessons',
          headerShown:false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
       <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown:false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
