import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { AuthContext, useProfile } from '../../Context/AuthContext';

const EditProfile = ({ navigation }) => {
  const { profile, updateProfile } = useProfile();
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [phone, setPhone] = useState(profile.phone);
  const [address, setAddress] = useState(profile.address);

  const { logout } = useContext(AuthContext);

  const handleSave = () => {
    updateProfile({ name, email, phone, address });
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#FEF3E2' }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Edit Profile</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Name"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="Phone"
          placeholderTextColor="#aaa"
          keyboardType="phone-pad"
        />
        <TextInput
          style={[styles.input, { height: 80 }]}
          value={address}
          onChangeText={setAddress}
          placeholder="Address"
          placeholderTextColor="#aaa"
          multiline
        />
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.logoutButton, {marginTop: 32, backgroundColor: '#E74C3C', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', shadowColor: '#E74C3C', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.18, shadowRadius: 8, elevation: 4 }]}
          onPress={logout}
        >
          <Text style={[styles.saveButtonText, { fontSize: 18, letterSpacing: 1 }]}> Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
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
  logoutButton:{
    marginTop: 28,
    backgroundColor: '#FA812F',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 24,
    color:"#ffff",
    
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

export default EditProfile;

