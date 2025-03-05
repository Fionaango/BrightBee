import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { JournalContext } from './context/journalContext'; // Adjust path
import sharedStyles from './sharedStyles';

export default function ConfirmDeleteModal() {
  const router = useRouter();
  const { type } = useLocalSearchParams();
  const { deleteAllJournals } = useContext(JournalContext);

  const handleConfirm = () => {
    if (type === 'deleteAll') {
      deleteAllJournals();
    }
    router.back();
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Are you sure?</Text>
      <Text style={styles.subtitle}>
        This will delete all journals. You cannot undo this.
      </Text>

      <TouchableOpacity style={[sharedStyles.blackButton, styles.button]} onPress={handleConfirm}>
        <Text style={sharedStyles.blackButtonText}>Delete All</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[sharedStyles.blackButton, styles.button]} onPress={handleCancel}>
        <Text style={sharedStyles.blackButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF'
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#666'
  },
  button: {
    marginTop: 10,
    width: '80%'
  },
});
