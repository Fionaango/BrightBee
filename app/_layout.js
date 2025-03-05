import React, { createContext, useState } from 'react';
import { Tabs } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';
import { JournalProvider } from './context/journalContext';
import sharedStyles from './sharedStyles'; 

export const ThemeContext = createContext();

const darkBackground = '#333';
const lightText = '#333';
const darkText = '#FFF';

export default function RootLayout() {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <JournalProvider>
      <ThemeContext.Provider value={{ isDark, toggleTheme }}>
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: isDark ? darkText : lightText,
            tabBarInactiveTintColor: isDark ? '#AAA' : '#888',
            tabBarStyle: { backgroundColor: isDark ? darkBackground : '#FFF' },
          }}
        >
          {/* Example tabs */}
          <Tabs.Screen
            name="home"
            options={{
              title: 'Home',
              tabBarIcon: ({ color, size }) => (
                <FontAwesome5 name="home" size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="profile"
            options={{
              title: 'Profile',
              tabBarIcon: ({ color, size }) => (
                <FontAwesome5 name="user" size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="settings"
            options={{
              title: 'Setting',
              tabBarIcon: ({ color, size }) => (
                <FontAwesome5 name="cog" size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen name="index" options={{ href: null }} />
          <Tabs.Screen name="modal" options={{ href: null }} />
          <Tabs.Screen name="sharedStyles" options={{ href: null }} />
          <Tabs.Screen name="friend" options={{ href: null }} />
        </Tabs>
      </ThemeContext.Provider>
    </JournalProvider>
  );
}
