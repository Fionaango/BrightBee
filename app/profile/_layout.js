// app/profile/_layout.js
import { Stack } from 'expo-router';

export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Profile' }} />
      <Stack.Screen name="account" options={{ title: 'Account' }} />
      <Stack.Screen name="createJournal" options={{ title: 'Create Journal' }} />
      <Stack.Screen name="[alljournalId]" options={{ title: 'All Journal Entries' }} />
      <Stack.Screen name="[userId]" options={{ title: 'User Profile' }} />
    </Stack>
  );
}
