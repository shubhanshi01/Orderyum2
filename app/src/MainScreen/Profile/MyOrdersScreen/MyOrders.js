import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import TrackOrder from './TrackOrder';
const orders = [
  {
    id: 'ORD-445545ad',
    time: '4:30 AM',
    items: ['Pizza', 'Pasta'],
    total: '$500',
    status: 'Delivered',
    image: require('../../../Component/images/samosa.jpg'),
  },
  {
    id: 'ORD-123456bc',
    time: '8:15 PM',
    items: ['Biryani', 'Samosa'],
    total: '$320',
    status: 'On the way',
    image: require('../../../Component/images/biryani.jpg'),
  },
];

const MyOrders = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Order History</Text>
      <ScrollView contentContainerStyle={styles.cardsContainer}>
        {orders.map((order, idx) => (
          <View style={styles.card} key={order.id}>
            <Image source={order.image} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{order.id}</Text>
              <Text style={styles.cardDesc}>Time: {order.time}</Text>
              <Text style={styles.cardDesc}>Items: {order.items.join(', ')}</Text>
              <Text style={styles.cardPrice}>Total: {order.total}</Text>
              <Text style={styles.cardStatus}>{order.status}</Text>
              <TouchableOpacity style={styles.addButton} onPress={() => {navigation.navigate('TrackOrder')}}>
                <Text style={styles.addButtonText}>Track Order</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF3E2',
    paddingTop: 40,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FA812F',
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 1,
  },
  cardsContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 3,
    overflow: 'hidden',
  },
  cardImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
    padding: 12,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 2,
  },
  cardDesc: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  cardPrice: {
    fontSize: 15,
    color: '#E67E22',
    fontWeight: 'bold',
    marginBottom: 2,
  },
  cardStatus: {
    fontSize: 13,
    color: '#008CBA',
    fontWeight: '600',
    marginBottom: 8,
  },
  addButton: {
    backgroundColor: '#FA812F',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 24,
    alignSelf: 'flex-start',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default MyOrders;
