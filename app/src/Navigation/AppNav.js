import React, { useContext } from 'react'
import AuthStack from './AuthStack'
import Appstack from './Appstack'
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../Context/AuthContext';
import { useEffect } from 'react';
import { CartProvider } from '../Context/CartContext';
import { ProfileProvider } from '../Context/AuthContext';

const AppNav = () => {
  const {userloggeduid,checkIsLogged}=useContext(AuthContext);
  useEffect(()=>{
    checkIsLogged()

  },[])
  console.log("from AppNav (uid)",userloggeduid);

  return (
    <CartProvider>
      <ProfileProvider>
        <View style={{ flex: 1, backgroundColor: '#FEF3E2' }}>
          {userloggeduid?
            <Appstack/>
            :
            <AuthStack  />
          }
        </View>
      </ProfileProvider>
    </CartProvider>
  )
}

export default AppNav;
