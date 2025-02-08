import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  ScrollView, 
  StyleSheet, 
  Switch,
  TouchableOpacity 
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

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

const generateUniqueKey = () => {
  return Date.now().toString() + '-' + Math.random().toString(36).substring(2, 7);
};

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning, how are you feeling?";
  else if (hour < 18) return "Good afternoon, how are you doing?";
  else return "Good evening, how are you doing?";
};

export default function App() {
  const [note, setNote] = useState('');
  const [showDetails, setShowDetails] = useState(true);
  const [moodHistory, setMoodHistory] = useState([]);

  const handleMoodSelect = (mood) => {
    const newEntry = {
      key: generateUniqueKey(),
      ...mood,
      note: note,
      time: new Date().toLocaleTimeString()
    };
    setMoodHistory([newEntry, ...moodHistory]);
    setNote('');
  };

  const handleDelete = (key) => {
    setMoodHistory(moodHistory.filter(entry => entry.key !== key));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mood Tracker</Text>
      <Text style={styles.greeting}>{getGreeting()}</Text>
      <View style={styles.moodContainer}>
        {moods.map(mood => (
          <TouchableOpacity 
            key={mood.id} 
            style={[styles.moodButton, { backgroundColor: mood.color }]} 
            onPress={() => handleMoodSelect(mood)}
          >
            <FontAwesome5 name={mood.icon} size={20} style={[styles.moodIcon, { color: '#555' }]} />
            <Text style={[styles.moodText, { color: '#555' }]}>{mood.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Whisper a secret (optional)."
          placeholderTextColor="#888"
          value={note}
          onChangeText={setNote}
        />
        <TouchableOpacity style={styles.addButton} onPress={() => handleMoodSelect({ name: 'Custom', icon: 'tools', color: '#cddafd' })}>
          <Text style={styles.addButtonText}>Add Mood</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Show Details</Text>
        <Switch 
          value={showDetails} 
          onValueChange={setShowDetails} 
          trackColor={{ true: '#bee1e6', false: '#ccc' }}
          thumbColor={showDetails ? '#FFF' : '#f4f3f4'}
        />
      </View>
      <ScrollView style={styles.historyContainer}>
        {moodHistory.map((entry) => (
          <View key={entry.key} style={styles.historyEntry}>
            <View style={[styles.iconContainer, { backgroundColor: entry.color }]}> 
              <FontAwesome5 name={entry.icon} size={18} color="#555" />
            </View>
            <View style={styles.entryDetails}>
              <Text style={styles.entryText}>{entry.name} - {entry.time}</Text>
              {showDetails && entry.note !== '' && (
                <Text style={styles.entryNote}>Note: {entry.note}</Text>
              )}
            </View>
            <TouchableOpacity 
              onPress={() => handleDelete(entry.key)} 
              style={styles.deleteButton}
            >
              <FontAwesome5 name="trash-alt" size={18} color="#FF6B6B" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#FDFDFD'
  },
  header: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
    color: '#555',
    padding:5,
  },
  greeting: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 20,
    color: '#555'
  },
  moodContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  moodButton: {
    width: 85,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    borderRadius: 30,
    marginVertical: 8,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  moodText: {
    marginTop: 5,
    fontWeight: '700',
    fontSize: 12
  },
  moodIcon: {
    fontWeight: '700'
  },
  inputContainer: {
    marginBottom: 20,
  },
  textInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#FFF',
    color: '#333'
  },
  addButton: {
    backgroundColor: '#bee1e6',
    padding: 10,
    marginLeft:120,
    marginRight:120,
    borderRadius: 15,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFF',
    fontWeight: '700'
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  switchLabel: {
    fontSize: 16,
    color: '#555'
  },
  historyContainer: {
    flex: 1,
    marginTop: 10,
  },
  historyEntry: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  entryDetails: {
    flex: 1
  },
  entryText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333'
  },
  entryNote: {
    fontSize: 14,
    color: '#777'
  },
  deleteButton: {
    padding: 5,
  }
});
