import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Switch,
  StyleSheet,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { JournalContext } from '../context/journalContext';
import { ThemeContext } from '../_layout';
import sharedStyles, { primaryColor } from '../sharedStyles';

export default function AllJournalId() {
  const { journals, deleteAllJournals, deleteJournal } = useContext(JournalContext);
  const { isDark } = useContext(ThemeContext);

  // Let the user toggle details on/off
  const [showDetails, setShowDetails] = useState(true);

  // How to render each journal entry
  const renderItem = ({ item }) => (
    <View style={[styles.historyEntry, isDark && styles.darkHistoryEntry]}>
      {/* Icon on the left */}
      <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
        <FontAwesome5 name={item.icon} size={18} color="#000" />
      </View>

      {/* Mood name, time, and optional note */}
      <Text style={[styles.entryText, isDark && styles.darkText]}>
        {item.name} - {item.time}
        {showDetails && item.note ? `\nNote: ${item.note}` : ''}
      </Text>

      {/* Trash icon to delete an individual entry */}
      <TouchableOpacity onPress={() => deleteJournal(item.key)} style={styles.deleteButton}>
        <FontAwesome5 name="trash-alt" size={18} color="#FF6B6B" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={[sharedStyles.container, isDark && sharedStyles.darkBackground]}>

      {/* Toggle switch for "Show Details" (no extra margin) */}
      <View style={[sharedStyles.row, { marginVertical: 0 }]}>
        <Text style={[sharedStyles.switchLabel, isDark && sharedStyles.darkSwitchLabel]}>
          Show Details
        </Text>
        <Switch
          value={showDetails}
          onValueChange={setShowDetails}
          trackColor={{ false: '#ccc', true: primaryColor }}
          thumbColor={showDetails ? '#FFF' : '#f4f3f4'}
        />
      </View>

      {/* List all journals in a FlatList */}
      <FlatList
        data={journals}
        keyExtractor={(item) => item.key.toString()}
        renderItem={renderItem}
      />

      {/* Use a black button style for Delete All */}
      <TouchableOpacity
        style={[sharedStyles.blackButton, { marginVertical: 10 }]}
        onPress={deleteAllJournals}
      >
        <Text style={sharedStyles.blackButtonText}>Delete All Journals</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
