import React from 'react';
import Login from '../LoginSignup/Login';
import Signup from '../LoginSignup/Signup';
import NextSignup from '../LoginSignup/NextSignup';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='Signup' component={Signup} options={{headerShown:false}}/>
        <Stack.Screen name='NextSignup' component={NextSignup} options={{headerShown:false}}/>
      </Stack.Navigator>         
  );
}

export default AuthStack;

