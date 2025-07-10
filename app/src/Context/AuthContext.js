import React, { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { useEffect } from "react";
import { createContext, useContext } from "react";
const AuthContext = React.createContext();
const ProfileContext = createContext();

const AuthProvider = ({ children }) => {
  const [userloggeduid, setUserLoggedUid] = useState(null);

  const userloggeduidHandle = (userid) => {
    setUserLoggedUid(userid);
    AsyncStorage.setItem('userloggeduid',userid);

};

    const checkIsLogged = async () => {
      try {
        const value = await AsyncStorage.getItem('userloggeduid');
        if (value !== null) {
          setUserLoggedUid(value);
          console.log("Retrieved UID from storage:", value);
        } else {
          console.log("UID not found in AsyncStorage");
        }
      } catch (error) {
        console.log("Error reading from AsyncStorage:", error);
      }
    };



  // Logout function
  const logout = async () => {
    await AsyncStorage.removeItem('userloggeduid');
    setUserLoggedUid(null);
  };

  console.log("fromContext (uid)", userloggeduid);

  const data1 = 'Context Data';

  return (
    <AuthContext.Provider value={{ data1, userloggeduid, userloggeduidHandle, checkIsLogged, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    name: 'Shubhanshi Gupta',
    email: 'shubhanshi@example.com',
    phone: '+91 9876543210',
    address: '123, Main Street, Delhi',
  });

  const updateProfile = (fields) => {
    setProfile((prev) => ({ ...prev, ...fields }));
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);

export { AuthProvider, AuthContext};
