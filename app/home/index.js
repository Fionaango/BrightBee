// app/home/index.js

import React, { useState, useContext } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Switch,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { ThemeContext } from '../_layout';
import sharedStyles, { primaryColor } from '../sharedStyles';
import { username } from '../profile/index.js';
import { JournalContext } from '../context/journalContext.js'; // Ensure correct path

const moods = [
  { id: 1, name: 'Happy', icon: 'smile-beam', color: '#eae4e9' },
  { id: 2, name: 'Sad', icon: 'sad-cry', color: '#fff1e6' },
  { id: 3, name: 'Excited', icon: 'grin-stars', color: '#fde2e4' },
  { id: 4, name: 'Relaxed', icon: 'smile', color: '#fad2e1' },
  { id: 5, name: 'Angry', icon: 'angry', color: '#ff8680' },
  { id: 6, name: 'Surprised', icon: 'surprise', color: '#bee1e6' },
  { id: 7, name: 'Bored', icon: 'meh', color: '#f0efeb' },
  { id: 8, name: 'Anxious', icon: 'dizzy', color: '#ffd4a1' },
  { id: 9, name: 'Calm', icon: 'smile-wink', color: '#cddafd' },
];

const generateUniqueKey = () =>
  Date.now().toString() + '-' + Math.random().toString(36).substring(2, 7);

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  else if (hour < 18) return 'Good afternoon';
  else return 'Good evening';
};

export default function HomeScreen() {
  const { isDark } = useContext(ThemeContext);
  const { journals, addJournal, deleteJournal } = useContext(JournalContext);

  const [note, setNote] = useState('');
  const [showDetails, setShowDetails] = useState(true);

  const handleMoodSelect = (mood) => {
    const newEntry = {
      key: generateUniqueKey(),
      ...mood,
      note,
      time: new Date().toLocaleTimeString(),
    };
    addJournal(newEntry);
    setNote('');
  };

  const handleDelete = (key) => {
    deleteJournal(key);
  };

  return (
    <ScrollView
      contentContainerStyle={[
        sharedStyles.container,
        isDark && sharedStyles.darkBackground,
      ]}
    >
      {/* ONLY CHANGE: marginTop added to the greeting text */}
      <Text
        style={[
          sharedStyles.header,
          isDark && sharedStyles.darkHeader,
          localStyles.centerText,
          { marginTop: 20 }, // <-- add some top margin here
        ]}
      >
        {`${getGreeting()}, ${username}!`}
      </Text>
      <Text
        style={[
          sharedStyles.text,
          isDark && sharedStyles.darkText,
          localStyles.centerText,
        ]}
      >
        How are you doing today?
      </Text>

      <View style={sharedStyles.moodContainer}>
        {moods.map((mood) => (
          <TouchableOpacity
            key={mood.id}
            style={[localStyles.moodCircle, { backgroundColor: mood.color }]}
            onPress={() => handleMoodSelect(mood)}
          >
            <FontAwesome5 name={mood.icon} size={20} style={localStyles.moodIcon} />
            <Text style={localStyles.moodText}>{mood.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TextInput
        style={[sharedStyles.input, isDark && sharedStyles.darkInput]}
        placeholder="Whisper a secret (optional)."
        placeholderTextColor={isDark ? '#CCC' : '#888'}
        value={note}
        onChangeText={setNote}
      />
      <TouchableOpacity
        style={sharedStyles.blackButton}
        onPress={() =>
          handleMoodSelect({ name: 'Custom', icon: 'tools', color: '#cddafd' })
        }
      >
        <Text style={sharedStyles.blackButtonText}>Add Mood</Text>
      </TouchableOpacity>

      <View style={sharedStyles.row}>
        <Text
          style={[
            sharedStyles.switchLabel,
            isDark && sharedStyles.darkSwitchLabel,
          ]}
        >
          Show Details
        </Text>
        <Switch
          value={showDetails}
          onValueChange={setShowDetails}
          trackColor={{ false: '#ccc', true: primaryColor }}
          thumbColor={showDetails ? '#FFF' : '#f4f3f4'}
        />
      </View>

      {journals.map((entry) => (
        <View
          key={entry.key}
          style={[
            localStyles.historyEntry,
            isDark && localStyles.darkHistoryEntry,
          ]}
        >
          <View
            style={[
              localStyles.iconContainer,
              { backgroundColor: entry.color },
            ]}
          >
            <FontAwesome5 name={entry.icon} size={18} color="#000" />
          </View>
          <Text style={[localStyles.entryText, isDark && localStyles.darkText]}>
            {entry.name} - {entry.time}
            {showDetails && entry.note ? `\nNote: ${entry.note}` : ''}
          </Text>
          <TouchableOpacity
            onPress={() => handleDelete(entry.key)}
            style={localStyles.deleteButton}
          >
            <FontAwesome5 name="trash-alt" size={18} color="#FF6B6B" />
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const localStyles = StyleSheet.create({
  centerText: {
    textAlign: 'center',
  },
  moodCircle: {
    width: 80,
    height: 60,
    borderRadius: 40,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  moodIcon: {
    color: '#000',
    marginBottom: 4,
    fontWeight: '700',
  },
  moodText: {
    fontWeight: '700',
    fontSize: 12,
    color: '#000',
  },
  historyEntry: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginVertical: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  darkHistoryEntry: {
    backgroundColor: '#444',
  },
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  entryText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginRight: 10,
  },
  darkText: {
    color: '#FFF',
  },
  deleteButton: {
    padding: 5,
  },
});
