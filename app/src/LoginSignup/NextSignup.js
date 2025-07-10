import React, { useState } from 'react'
import { View ,Text,StyleSheet,StatusBar,TextInput,TouchableOpacity} from 'react-native';
import Login from './Login';
import { createStackNavigator } from '@react-navigation/stack';
import { useProfile } from '../Context/AuthContext';

const NextSignup = ({navigation}) => {
  const { updateProfile } = useProfile();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleSignup = () => {
    updateProfile({
      name: `${firstName} ${lastName}`.trim(),
      address,
      phone,
    });
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}> 
          <StatusBar backgroundColor={'#FA812F'} />
          <View style={{paddingVertical:12, width:'95%', alignSelf:'center', marginBottom:10}}>
          <Text style={{alignSelf:'center',fontSize:25,fontWeight:'700',padding:(12,14),color:"#FA4032",fontStyle:""}}>Sign Up</Text>
    
          <TextInput
            placeholder="First Name"
            placeholderTextColor="#888"
            style={styles.input}
            value={firstName}
            onChangeText={setFirstName}
          />
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="#888"
            style={styles.input}
            value={lastName}
            onChangeText={setLastName}
          />
          <TextInput
            placeholder="Address"
            keyboardType='default'
            placeholderTextColor="#888"
            style={styles.input}
            value={address}
            onChangeText={setAddress}
          />
          <TextInput
            placeholder="Phone Number"
            keyboardType='phone-pad'
            placeholderTextColor="#888"
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
          />
    
          <TouchableOpacity style={styles.loginButton} onPress={handleSignup}>
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
    
          <View style={{marginTop:20,alignSelf:'center',flexDirection:'row',justifyContent:'center'}}>
            <Text>
              Already have an account?{' '}
              <Text style={styles.registerLink} onPress={()=>navigation.navigate('Login')}>Login</Text>
            </Text>
          </View>
        </View>
        
    </View>

  )
}

export default NextSignup;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FEF3E2',
      // alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      width: '100%',
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: 'black',
      marginBottom: 40,
      textAlign: 'center',
      marginHorizontal: 20,
      padding: (10,20),
      
    }
    ,
    input: {
      width: '100%',
      backgroundColor: '#FFf',
      padding: 15,
      borderRadius: 10,
      marginBottom: 15,
      borderWidth: 1,
      borderColor: '#FEBE8C',
    },
    loginButton: {
      width: '100%',
      backgroundColor: '#F3C623',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 10,
    },
    buttonText: {
      color: '#333',
      fontSize: 16,
      fontWeight: '600',
    },
    registerText: {
      marginTop: 20,
      fontSize: 14,
      color: '#333',
    },
    registerLink: {
      color: '#008CBA',
      fontWeight: 'bold',
    },
});


