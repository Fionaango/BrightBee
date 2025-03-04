// app/profile/index.js
import React, { useContext } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ThemeContext } from '../_layout';
import sharedStyles from '../sharedStyles';

export const username = 'Fiona Ngo';
const email = 'fiona.nngo@gmail.com';
const avatarImage = require('../../assets/avatar.jpg');

export default function ProfileScreen() {
  const { isDark } = useContext(ThemeContext);
  const router = useRouter();

  return (
    <ScrollView
      contentContainerStyle={[
        sharedStyles.container,
        isDark && sharedStyles.darkBackground,
        { paddingBottom: 30 },
      ]}
    >
      {/* Header Section */}
      <View style={[styles.headerContainer, isDark && { backgroundColor: '#555' }]}>
        <View style={styles.avatarContainer}>
          <Image source={avatarImage} style={styles.avatar} />
        </View>
        <Text style={[styles.username, isDark && styles.darkText]}>{username}</Text>
        <Text style={[styles.email, isDark && styles.darkText]}>{email}</Text>

        <TouchableOpacity
          style={[sharedStyles.blackButton, localStyles.actionButton]}
          onPress={() => {
            // Edit profile or route to another page
            router.push('/profile/account');
          }}
        >
          <Text style={sharedStyles.blackButtonText}>Edit profile</Text>
        </TouchableOpacity>
      </View>

      {/* Account Section */}
      <View style={[styles.section, isDark && { backgroundColor: '#666' }]}>
        <Text style={[styles.sectionTitle, isDark && styles.darkText]}>Account</Text>

        <TouchableOpacity
          style={localStyles.rowContainer}
          onPress={() => router.push('/profile/account')}
        >
          <View style={styles.rowLeft}>
            <FontAwesome5 name="user-cog" size={20} color="#333" style={styles.rowIcon} />
            <Text style={[styles.rowText, isDark && styles.darkText]}>View Account</Text>
          </View>
          <FontAwesome5 name="chevron-right" size={16} color="#999" />
        </TouchableOpacity>
      </View>

      {/* Journal Section */}
      <View style={[styles.section, isDark && { backgroundColor: '#666' }]}>
        <Text style={[styles.sectionTitle, isDark && styles.darkText]}>Journal</Text>

        <TouchableOpacity
          style={localStyles.rowContainer}
          onPress={() => router.push('/profile/createJournal')}
        >
          <View style={styles.rowLeft}>
            <FontAwesome5 name="book-medical" size={20} color="#333" style={styles.rowIcon} />
            <Text style={[styles.rowText, isDark && styles.darkText]}>Create Journal</Text>
          </View>
          <FontAwesome5 name="chevron-right" size={16} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity
          style={localStyles.rowContainer}
          onPress={() => router.push('/profile/[alljournalId]')}
        >
          <View style={styles.rowLeft}>
            <FontAwesome5 name="book" size={20} color="#333" style={styles.rowIcon} />
            <Text style={[styles.rowText, isDark && styles.darkText]}>View All Journals</Text>
          </View>
          <FontAwesome5 name="chevron-right" size={16} color="#999" />
        </TouchableOpacity>
      </View>

      {/* Friend's Mood Section */}
      <View style={[styles.section, isDark && { backgroundColor: '#666' }]}>
        <Text style={[styles.sectionTitle, isDark && styles.darkText]}>Friend's Mood</Text>

        <TouchableOpacity
          style={localStyles.rowContainer}
          onPress={() => router.push('/profile/[userId]')} 
          // When tapped, this navigates to the dynamic route at /profile/[userId].js
        >
          <View style={styles.rowLeft}>
            <FontAwesome5 name="user-friends" size={20} color="#333" style={styles.rowIcon} />
            <Text style={[styles.rowText, isDark && styles.darkText]}>View Friend's Mood</Text>
          </View>
          <FontAwesome5 name="chevron-right" size={16} color="#999" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const localStyles = StyleSheet.create({
  actionButton: {
    marginVertical: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderTopColor: '#EEE',
    borderTopWidth: 1,
    marginVertical: 5,
    paddingHorizontal: 10,
  },
});

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginBottom: 10,
    paddingVertical: 30,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
    marginBottom: 10,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  username: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 2,
    color: '#333',
  },
  email: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  darkText: {
    color: '#FFF',
  },
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
