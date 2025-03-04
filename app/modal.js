// app/modal.js
import React, { useContext } from 'react';
import { ScrollView, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemeContext } from './_layout';
import sharedStyles from './sharedStyles';

export default function ModalScreen() {
  const router = useRouter();
  const { isDark } = useContext(ThemeContext);

  return (
    <ScrollView contentContainerStyle={[sharedStyles.container, isDark && sharedStyles.darkBackground]}>
      <Text style={[sharedStyles.header, isDark && sharedStyles.darkHeader]}>Modal Screen</Text>
      <Button title="Close" onPress={() => router.back()} />
    </ScrollView>
  );
}
