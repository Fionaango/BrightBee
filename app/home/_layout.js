// app/home/_layout.js
import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="details" options={{ title: 'Details' }} />
      <Stack.Screen name="[itemId]" options={{ title: 'Item Details' }} />
    </Stack>
  );
}
