import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AuthContext } from '../Context/AuthContext';

const Settings = ({ navigation }) => {
  const { logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#E74C3C',
          paddingHorizontal: 32,
          paddingVertical: 16,
          borderRadius: 24,
          marginTop: 40,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: '#E74C3C',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.18,
          shadowRadius: 8,
          elevation: 4,
        }}
        onPress={logout}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20, letterSpacing: 1 }}>🔒 Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FEF3E2',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FA812F',
    marginBottom: 16,
  },
});

export default Settings;
