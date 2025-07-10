import React from 'react';
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import  { useContext} from 'react';
import { AuthContext} from '../../../Context/AuthContext';
import ChangePassword from '../Settings/ChangePassword/ChangePassword';
import AboutApp from '../Settings/AboutApp/AboutApp';
import Notification from './Notification/Notification';
const Settings = ({navigation}) => {
  const { logout } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <TouchableOpacity style={styles.Themestyle} onPress={() => {navigation.navigate('Notification')}}>
        <Text style={styles.text}>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Themestyle} onPress={()=> {navigation.navigate('ChangePassword')}}>
      <Text style={styles.text}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Themestyle} onPress={() => {navigation.navigate('AboutApp')}}>
      <Text style={styles.text}> About App</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Themestyle}>
      <Text  style={styles.text} > Share app</Text>
      </TouchableOpacity>
      <TouchableOpacity
                style={[styles.logoutButton, {marginTop: 32, backgroundColor: '#E74C3C', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', shadowColor: '#E74C3C', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.18, shadowRadius: 8, elevation: 4 }]}
                onPress={logout}
              >
                <Text style={[styles.saveButtonText, { fontSize: 18, letterSpacing: 1 }]}> Logout</Text>
              </TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
  LogText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
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
  text: {
    fontSize: 20,
    color: '#FA812F',

  },
  logoutButton:{
    marginTop: 28,
    backgroundColor: '#FA812F',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 24,
    color:"#ffff",
    
  },
  Themestyle:{
    width: '80%',
    backgroundColor: '#fff',
    borderColor: '#FA812F',
    borderWidth: 1.5,
    borderRadius: 20,
    paddingVertical: 12,
    marginTop: 12,
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: '#FA812F',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    color:'#FA812F',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  }

  
});

export default Settings;
