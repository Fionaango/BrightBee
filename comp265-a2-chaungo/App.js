import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  TextInput, 
  ScrollView, 
  StyleSheet, 
  Button, 
  Switch,
  TouchableOpacity 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const moods = [
  { id: 1, name: 'Happy', icon: 'happy-outline', color: '#FFD700' },
  { id: 2, name: 'Sad', icon: 'sad-outline', color: '#87CEFA' },
];

export default function App() {
  const [note, setNote] = useState('');
  const [showDetails, setShowDetails] = useState(true);
  const [moodHistory, setMoodHistory] = useState([]);

  const handleMoodSelect = (mood) => {
    const newEntry = {
      ...mood,
      note: note,
      time: new Date().toLocaleTimeString()
    };
    setMoodHistory([newEntry, ...moodHistory]);
    setNote(''); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Mood Tracker</Text>
      
      <View style={styles.moodContainer}>
        {moods.map(mood => (
          <TouchableOpacity 
            key={mood.id} 
            style={[styles.moodButton, { backgroundColor: mood.color }]}
            onPress={() => handleMoodSelect(mood)}
          >
            <Ionicons name={mood.icon} size={32} color="#fff" />
            <Text style={styles.moodText}>{mood.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Whisper a secret (optional)."
          value={note}
          onChangeText={setNote}
        />
        <Button title="Add Mood" onPress={() => handleMoodSelect({ name: 'Custom', icon: 'construct-outline', color: '#D3D3D3' })} />
      </View>

      {/* Toggle Details Switch */}
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Show Details</Text>
        <Switch 
          value={showDetails} 
          onValueChange={setShowDetails} 
        />
      </View>

      <ScrollView style={styles.historyContainer}>
        {moodHistory.map((entry, index) => (
          <View key={index} style={styles.historyEntry}>
            <View style={[styles.iconContainer, { backgroundColor: entry.color }]}>
              <Ionicons name={entry.icon} size={24} color="#fff" />
            </View>
            <View style={styles.entryDetails}>
              <Text style={styles.entryText}>{entry.name} - {entry.time}</Text>
              {showDetails && entry.note !== '' && (
                <Text style={styles.entryNote}>Note: {entry.note}</Text>
              )}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF5EE'
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#333'
  },
  moodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
    flexWrap: 'wrap'
  },
  moodButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 5
  },
  moodText: {
    color: '#fff',
    marginTop: 5,
    fontWeight: '600'
  },
  inputContainer: {
    marginVertical: 10
  },
  textInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10
  },
  switchLabel: {
    fontSize: 16,
    color: '#333'
  },
  historyContainer: {
    flex: 1,
    marginTop: 10
  },
  historyEntry: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    elevation: 2 // adds subtle shadow on Android; on iOS, consider shadow props
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },
  entryDetails: {
    flex: 1
  },
  entryText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  entryNote: {
    fontSize: 14,
    color: '#555'
  }
});
