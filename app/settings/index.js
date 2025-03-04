// app/setting/index.js
import React, { useContext, useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  Switch,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { ThemeContext } from '../_layout';
import sharedStyles from '../sharedStyles';

export const username = 'Fiona Ngo';

export default function SettingScreen() {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  const [pushNotifications, setPushNotifications] = useState(true);
  const [faceID, setFaceID] = useState(false);
  const [pinCode, setPinCode] = useState(false);

  return (
    <ScrollView
      contentContainerStyle={[
        sharedStyles.container,
        isDark && sharedStyles.darkBackground,
        { paddingBottom: 30 },
      ]}
    >
      <View style={[styles.headerContainer, isDark && styles.darkHeader]}>
        <Text style={[styles.username, isDark && styles.darkText]}>{username}</Text>
      </View>

      <View style={[styles.section, isDark && styles.darkSection]}>
        <Text style={[styles.sectionTitle, isDark && styles.darkText]}>Privacy & Safety</Text>
        <TouchableOpacity style={styles.rowContainer} onPress={() => {}}>
          <View style={styles.rowLeft}>
            <FontAwesome5 name="store" size={20} color="#333" style={styles.rowIcon} />
            <Text style={[styles.rowText, isDark && styles.darkText]}>Settings</Text>
          </View>
          <FontAwesome5 name="chevron-right" size={16} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.rowContainer} onPress={() => {}}>
          <View style={styles.rowLeft}>
            <FontAwesome5 name="headset" size={20} color="#333" style={styles.rowIcon} />
            <Text style={[styles.rowText, isDark && styles.darkText]}>Support</Text>
          </View>
          <FontAwesome5 name="chevron-right" size={16} color="#999" />
        </TouchableOpacity>
      </View>

      <View style={[styles.section, isDark && styles.darkSection]}>
        <Text style={[styles.sectionTitle, isDark && styles.darkText]}>Preferences</Text>

        <View style={styles.rowContainer}>
          <View style={styles.rowLeft}>
            <FontAwesome5 name="bell" size={20} color="#333" style={styles.rowIcon} />
            <Text style={[styles.rowText, isDark && styles.darkText]}>Push notifications</Text>
          </View>
          <Switch value={pushNotifications} onValueChange={setPushNotifications} />
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.rowLeft}>
            <FontAwesome5 name="fingerprint" size={20} color="#333" style={styles.rowIcon} />
            <Text style={[styles.rowText, isDark && styles.darkText]}>Face ID</Text>
          </View>
          <Switch value={faceID} onValueChange={setFaceID} />
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.rowLeft}>
            <FontAwesome5 name="lock" size={20} color="#333" style={styles.rowIcon} />
            <Text style={[styles.rowText, isDark && styles.darkText]}>PIN Code</Text>
          </View>
          <Switch value={pinCode} onValueChange={setPinCode} />
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.rowLeft}>
            <FontAwesome5 name="moon" size={20} color="#333" style={styles.rowIcon} />
            <Text style={[styles.rowText, isDark && styles.darkText]}>Dark Mode</Text>
          </View>
          <Switch value={isDark} onValueChange={toggleTheme} />
        </View>
      </View>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => {}}
      >
        <FontAwesome5 name="sign-out-alt" size={20} color="#FF3B30" style={styles.logoutIcon} />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    paddingVertical: 30,
    marginBottom: 10,
  },
  darkHeader: {
    backgroundColor: '#555',
  },
  username: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  darkText: {
    color: '#FFF',
  },
  section: {
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  darkSection: {
    backgroundColor: '#666',
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
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginTop: 10,
  },
  logoutIcon: {
    marginRight: 10,
  },
  logoutText: {
    fontSize: 16,
    color: '#FF3B30',
    fontWeight: '600',
  },
});