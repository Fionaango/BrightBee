// app/settings/_layout.js
import React from 'react';
import { Stack } from 'expo-router';

export default function SettingsLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#f5f5f5' },
        headerTintColor: '#333',
        headerTitle: 'Settings',
        headerLargeTitle: false, // Disable large iOS header title
      }}
    />
  );
}
