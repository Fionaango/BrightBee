// app/profile/account.js
import React, { useContext } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ThemeContext } from '../_layout';
import sharedStyles from '../sharedStyles';

export default function AccountPage() {
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
      <Text style={[sharedStyles.header, isDark && sharedStyles.darkHeader, styles.centerText]}>
        My Account
      </Text>

      {/* Account Settings */}
      <View style={[styles.section, isDark && { backgroundColor: '#666' }]}>
        <Text style={[styles.sectionTitle, isDark && styles.darkText]}>Account Settings</Text>

        <TouchableOpacity
          style={styles.rowContainer}
          onPress={() => {
            // e.g., router.push('/profile/account/changePassword');
          }}
        >
          <View style={styles.rowLeft}>
            <FontAwesome5 name="key" size={20} color="#333" style={styles.rowIcon} />
            <Text style={[styles.rowText, isDark && styles.darkText]}>Change Password</Text>
          </View>
          <FontAwesome5 name="chevron-right" size={16} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.rowContainer}
          onPress={() => {
            // e.g., router.push('/profile/account/editInfo');
          }}
        >
          <View style={styles.rowLeft}>
            <FontAwesome5 name="user-edit" size={20} color="#333" style={styles.rowIcon} />
            <Text style={[styles.rowText, isDark && styles.darkText]}>Edit Information</Text>
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
  darkText: {
    color: '#FFF',
  },
});
