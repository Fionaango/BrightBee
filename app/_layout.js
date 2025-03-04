import React, { createContext, useState } from 'react';
import { Tabs } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';
import { JournalProvider } from './context/journalContext';

export const ThemeContext = createContext();

export default function RootLayout() {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <JournalProvider>
      <ThemeContext.Provider value={{ isDark, toggleTheme }}>
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: isDark ? '#FFF' : '#333',
            tabBarInactiveTintColor: isDark ? '#AAA' : '#888',
            tabBarStyle: { backgroundColor: isDark ? '#333' : '#FFF' },
          }}
        >
          <Tabs.Screen name="home" />
          <Tabs.Screen name="profile" />
          <Tabs.Screen name="settings" />
          <Tabs.Screen name="modal" options={{ href: null }} />
          <Tabs.Screen name="index" options={{ href: null }} />
          <Tabs.Screen name="journal" options={{ href: null }} />
          <Tabs.Screen name="sharedStyles" options={{ href: null }} />
        </Tabs>
      </ThemeContext.Provider>
    </JournalProvider>
  );
}
