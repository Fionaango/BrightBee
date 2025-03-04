// app/sharedStyles.js
import { StyleSheet } from 'react-native';

const lightBackground = '#FDFDFD';
const darkBackground = '#333';
const lightText = '#333';
const darkText = '#FFF';
export const primaryColor = '#4CAF50'; // For active switch track

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 0,
    paddingHorizontal: 20,
    backgroundColor: lightBackground,
  },
  darkBackground: {
    backgroundColor: darkBackground,
  },

  // Headings
  header: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
    color: lightText,
  },
  darkHeader: {
    color: darkText,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
    color: lightText,
  },
  darkTitle: {
    color: darkText,
  },

  // General text
  text: {
    fontSize: 16,
    color: lightText,
  },
  darkText: {
    color: darkText,
  },

  // Black button style
  blackButton: {
    backgroundColor: '#000',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginVertical: 10,
  },
  blackButtonText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 16,
  },

  // Input
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#FFF',
    color: lightText,
  },
  darkInput: {
    backgroundColor: '#555',
    color: darkText,
  },

  // Switch label
  switchLabel: {
    fontSize: 16,
    color: lightText,
  },
  darkSwitchLabel: {
    color: darkText,
  },

  // Row layout
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderTopColor: '#EEE',
    borderTopWidth: 1,
  },

  // 3x3 mood layout
  moodContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  moodButton: {
    width: 90,
    height: 60,
    borderRadius: 40,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },

  moodIcon: {
    fontWeight: '700',
    color: '#000',
    marginBottom: 4,
  },
  moodText: {
    fontWeight: '700',
    fontSize: 12,
    color: '#000',
  },
});
