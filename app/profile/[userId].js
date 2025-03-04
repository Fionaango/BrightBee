// app/profile/[userId].js
import React, { useState, useContext } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { ThemeContext } from '../_layout';
import sharedStyles from '../sharedStyles';

export default function FriendStatusScreen() {
  const { isDark } = useContext(ThemeContext);
  const { userId } = useLocalSearchParams(); // Extracts the dynamic parameter from the route
  const [friendId, setFriendId] = useState('');
  const [loading, setLoading] = useState(false);
  const [friendStatus, setFriendStatus] = useState('');

  // Simulated submit function – replace with a real API call when ready.
  const handleSubmit = async () => {
    if (!friendId.trim()) return;
    setLoading(true);
    setFriendStatus('');

    // Simulate a network request (replace with real request)
    setTimeout(() => {
      setFriendStatus(`Friend "${friendId}" is doing great today!`);
      setLoading(false);
    }, 1500);
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
        Check Friend's Status for {userId}
      </Text>

      <View style={styles.formContainer}>
        <TextInput
          style={[styles.input, isDark && styles.inputDark]}
          placeholder="Enter friend's ID"
          placeholderTextColor={isDark ? '#CCC' : '#888'}
          value={friendId}
          onChangeText={setFriendId}
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit}
          disabled={loading || !friendId.trim()}
        >
          {loading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <Text style={styles.submitButtonText}>Submit</Text>
          )}
        </TouchableOpacity>
      </View>

      {friendStatus ? (
        <Text style={[styles.statusText, isDark && styles.darkText]}>
          {friendStatus}
        </Text>
      ) : null}

      <View style={[styles.section, isDark && { backgroundColor: '#666' }]}>
        <Text style={[styles.sectionTitle, isDark && styles.darkText]}>Friends’ IDs</Text>

        <TouchableOpacity
          style={styles.rowContainer}
          onPress={() => {
            // Logic for adding a new friend's ID
            // e.g., router.push(`/profile/${userId}/addNewId`);
          }}
        >
          <View style={styles.rowLeft}>
            <FontAwesome5 name="user-plus" size={20} color="#333" style={styles.rowIcon} />
            <Text style={[styles.rowText, isDark && styles.darkText]}>Add New ID</Text>
          </View>
          <FontAwesome5 name="chevron-right" size={16} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.rowContainer}
          onPress={() => {
            // Logic for viewing existing IDs
            // e.g., router.push(`/profile/${userId}/existingIds`);
          }}
        >
          <View style={styles.rowLeft}>
            <FontAwesome5 name="users" size={20} color="#333" style={styles.rowIcon} />
            <Text style={[styles.rowText, isDark && styles.darkText]}>View Existing IDs</Text>
          </View>
          <FontAwesome5 name="chevron-right" size={16} color="#999" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  centerText: {
    textAlign: 'center',
  },
  formContainer: {
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
  },
  inputDark: {
    borderColor: '#888',
    color: '#FFF',
  },
  submitButton: {
    backgroundColor: '#6C63FF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  statusText: {
    marginTop: 30,
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
  },
  // Reuse or adapt these styles from your original code:
  section: {
    backgroundColor: '#FFF',
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginBottom: 10,
  },
  darkText: {
    color: '#FFF',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderTopColor: '#EEE',
    borderTopWidth: 1,
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowIcon: {
    marginRight: 10,
  },
  rowText: {
    fontSize: 16,
    color: '#333',
  },
});
