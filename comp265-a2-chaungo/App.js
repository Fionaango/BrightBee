import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  ScrollView, 
  StyleSheet, 
  Button, 
  Switch,
  TouchableOpacity 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 


const moods = [
  { id: 1, name: 'Happy', icon: 'happy-outline', color: '#FFD1DC' },    
  { id: 2, name: 'Sad', icon: 'sad-outline', color: '#BFD8B8' },         
  { id: 3, name: 'Excited', icon: 'rocket-outline', color: '#FEEAFA' },   
  { id: 4, name: 'Relaxed', icon: 'leaf-outline', color: '#C9E4DE' }      
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
      <Text style={styles.header}>Mood Tracker</Text>
      
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
          placeholder="Whisper a secret (optional)"
          placeholderTextColor="#888"
          value={note}
          onChangeText={setNote}
        />
        <Button 
          title="Add Mood" 
          color="#A3D2CA" 
          onPress={() => handleMoodSelect({ name: 'Custom', icon: 'construct-outline', color: '#E9C46A' })}
        />
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Show Details</Text>
        <Switch 
          value={showDetails} 
          onValueChange={setShowDetails} 
          trackColor={{ true: '#A3D2CA', false: '#ccc' }}
          thumbColor={showDetails ? '#FFF' : '#f4f3f4'}
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
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#FDFDFD'
  },
  header: {
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
    color: '#555'
  },
  moodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    flexWrap: 'wrap'
  },
  moodButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 5,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  moodText: {
    color: '#fff',
    marginTop: 5,
    fontWeight: '500'
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
    width: 40,
    height: 40,
    borderRadius: 20,
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
  }
});
