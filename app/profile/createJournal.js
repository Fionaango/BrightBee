// app/profile/createJournal.js
import React, { useState, useContext } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { ThemeContext } from '../_layout';
import sharedStyles from '../sharedStyles';

export default function CreateJournal() {
  const { isDark } = useContext(ThemeContext);
  const [journalText, setJournalText] = useState('');

  const handleSubmit = () => {
    // Logic to save the journal entry
    console.log('New journal entry:', journalText);
    setJournalText('');
  };

  return (
    <ScrollView
      contentContainerStyle={[
        sharedStyles.container,
        isDark && sharedStyles.darkBackground,
        { paddingBottom: 30 },
      ]}
    >
      <Text style={[sharedStyles.header, isDark && sharedStyles.darkHeader, styles.centerText]}>
        Create Journal
      </Text>
      <TextInput
        style={[sharedStyles.input, isDark && sharedStyles.darkInput, styles.journalInput]}
        placeholder="Write your thoughts here..."
        placeholderTextColor={isDark ? '#CCC' : '#888'}
        value={journalText}
        onChangeText={setJournalText}
        multiline
      />
      <TouchableOpacity style={sharedStyles.blackButton} onPress={handleSubmit}>
        <Text style={sharedStyles.blackButtonText}>Submit Journal</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  centerText: {
    textAlign: 'center',
  },
  journalInput: {
    height: 120,
    textAlignVertical: 'top',
    marginBottom: 20,
  },
});
