import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import EditProfile from './EditProfile';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import MyOrders from './MyOrdersScreen/MyOrders';
import Settings from './Settings/Settings';
import Cart from '../Cart';
import { useEffect } from 'react';
import {firebase,db} from '../../../firebaseConfig';
import  {collection,addDoc} from 'firebase/firestore';
import { useProfile } from '../../Context/AuthContext';
const Profile = ({navigation}) => {
  const { profile } = useProfile();
  const handleData = async () => {
    try {
      const docRef = await addDoc(collection(db, 'UserProfile'), {
        name: 'John Doe',  // Sample fields
        email: 'john@example.com',
        createdAt: new Date()
      });
      console.log('Document written with ID:', docRef.id);
    } catch (error) {
      console.error('Error adding document:', error);
    }
  };
return (
  <View style={styles.container}>
    <Image source={require('../../Component/images/header.jpg')} style={styles.coverImage} />
    <View style={styles.profileContent}>
      <Text style={styles.name}>{profile.name}</Text>
      <Text style={styles.email}>{profile.email}</Text>
      <View style={styles.infoSection}>
        <Text style={styles.infoLabel}>Phone:</Text>
        <Text style={styles.infoValue}>{profile.phone}</Text>
      </View>
      <View style={styles.infoSection}>
        <Text style={styles.infoLabel}>Address:</Text>
        <Text style={styles.infoValue}>{profile.address}</Text>
      </View>
      <TouchableOpacity style={styles.profileButton} onPress={() => {navigation.navigate(MyOrders)}}>
        <Text style={styles.profileButtonText}>My Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.profileButton} onPress={() => {navigation.navigate(Cart)}}>
        <Text style={styles.profileButtonText}>My Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.profileButton} onPress={() => {navigation.navigate(Settings)}}>
        <Text style={styles.profileButtonText}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.editButton} onPress={() => {navigation.navigate(EditProfile)}}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  </View>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF3E2',
    alignItems: 'center',
    paddingTop: 0,
  },
  coverImage: {
    width: '100%',
    height: 200,
    position: 'absolute',
    top: 0,
    left: 0,
    resizeMode: 'cover',
  },
  profileContent: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 24,
    marginTop: 160,
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 20,
    shadowColor: '#FA812F',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.10,
    shadowRadius: 12,
    elevation: 4,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 8,
    marginBottom: 2,
    letterSpacing: 1,
  },
  email: {
    fontSize: 16,
    color: '#888',
    marginBottom: 18,
  },
  infoSection: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'center',
  },
  infoLabel: {
    fontWeight: 'bold',
    color: '#FA812F',
    marginRight: 6,
    fontSize: 16,
  },
  infoValue: {
    fontSize: 16,
    color: '#444',
  },
  editButton: {
    marginTop: 28,
    backgroundColor: '#FA812F',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 24,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  },
  profileButton: {
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
  },
  profileButtonText: {
    color: '#FA812F',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  },
});

export default Profile
