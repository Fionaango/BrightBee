// app/home/details.js
import React, { useContext } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../_layout';

export default function DetailsScreen() {
  const { isDark } = useContext(ThemeContext);
  return (
    <ScrollView contentContainerStyle={[styles.container, isDark && styles.darkBackground]}>
      <Text style={[styles.text, isDark && styles.darkText]}>
        This is the Details screen in the Home tab!
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
    fontSize: 18,
    color: '#333',
  },
  darkText: {
    color: '#FFF',
  },
});
