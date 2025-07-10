import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { AuthContext } from '../../../../Context/AuthContext';

const ChangePassword = ({ navigation }) => {
  const { logout } = useContext(AuthContext);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSave = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      setError('Please fill all fields.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('New passwords do not match.');
      return;
    }
    setError('');
    // TODO: Add your password change logic here (e.g., Firebase updatePassword)
    alert('Password changed successfully!');
    navigation.goBack();
  };

  const handleLogout = () => {
    logout();
    navigation.navigate('Login'); // Navigate to the Login screen after logout
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>Change Password</Text>
      <TextInput
        style={styles.input}
        value={currentPassword}
        onChangeText={setCurrentPassword}
        placeholder="Current Password"
        placeholderTextColor="#aaa"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        value={newPassword}
        onChangeText={setNewPassword}
        placeholder="New Password"
        placeholderTextColor="#aaa"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Confirm New Password"
        placeholderTextColor="#aaa"
        secureTextEntry
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
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
        onPress={handleLogout}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20, letterSpacing: 1 }}>🔒 Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#FEF3E2',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 32,
    color: '#FA812F',
  },
  input: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 16,
    fontSize: 16,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#FA812F22',
    color: '#222',
  },
  error: {
    color: '#E74C3C',
    fontSize: 15,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 400,
    marginTop: 16,
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#FA812F',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginRight: 8,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#FA812F',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginLeft: 8,
  },
  cancelButtonText: {
    color: '#FA812F',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ChangePassword;

