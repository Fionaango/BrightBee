// app/dashboard.js
import React, { useContext } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; // or from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { StudyContext } from '../StudyContext';

export default function DashboardScreen() {
  const { studyData } = useContext(StudyContext);
  const daysOrder = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

  return (
    <LinearGradient colors={['#FFF1CC', '#FFFFFF']} style={styles.gradientBackground}>
      {/* SafeAreaView ensures content isn't cut off by the notch */}
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Weekly Study Overview</Text>
          <View style={styles.chartContainer}>
            {daysOrder.map(day => (
              <View key={day} style={styles.dayRow}>
                <Text style={styles.dayLabel}>{day.substring(0,3)}</Text>
                <View style={styles.barBackground}>
                  <View style={[styles.barFill, { width: `${Math.min(studyData[day], 60)*1.5}%` }]} />
                </View>
                <Text style={styles.minutesLabel}>{studyData[day]} mins</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  container: {
    padding: 20,
    alignItems: 'center',
    // etc...
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1A1A1A',
  },
  chartContainer: {
    width: '100%',
  },
  dayRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  dayLabel: {
    width: 50,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  barBackground: {
    flex: 1,
    height: 20,
    backgroundColor: '#eee',
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
  barFill: {
    height: '100%',
    backgroundColor: '#FFC700',
    borderRadius: 10,
  },
  minutesLabel: {
    width: 60,
    fontSize: 14,
    color: '#1A1A1A',
  },
});
