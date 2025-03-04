// app/home/[itemId].js
import React, { useContext } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { ThemeContext } from '../_layout';

export default function ItemScreen() {
  const { itemId } = useLocalSearchParams();
  const { isDark } = useContext(ThemeContext);
  
  return (
    <ScrollView contentContainerStyle={[styles.container, isDark && styles.darkBackground]}>
      <Text style={[styles.text, isDark && styles.darkText]}>
        Item ID: {itemId}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flexGrow: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FDFDFD',
  },
  darkBackground: {
    backgroundColor: '#333',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
  darkText: {
    color: '#FFF',
  },
});
