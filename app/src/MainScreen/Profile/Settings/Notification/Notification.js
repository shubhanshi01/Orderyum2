import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const notifications = [
  {
    id: 1,
    title: 'Order Confirmed',
    message: 'Your order #ORD-123456 has been confirmed! Thank you for choosing OrderYum.',
    time: '2 min ago',
  },
  {
    id: 2,
    title: 'Order Delivered',
    message: 'Your order #ORD-123456 has been delivered. Enjoy your meal!',
    time: '1 hour ago',
  },
  {
    id: 3,
    title: 'Special Offer',
    message: 'Get 20% off on your next order. Use code YUM20 at checkout!',
    time: 'Yesterday',
  },
];

const Notification = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {notifications.map((notif) => (
          <View key={notif.id} style={styles.card}>
            <Text style={styles.title}>{notif.title}</Text>
            <Text style={styles.message}>{notif.message}</Text>
            <Text style={styles.time}>{notif.time}</Text>
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
    padding: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FA812F',
    marginBottom: 18,
    textAlign: 'center',
  },
  scrollContent: {
    paddingBottom: 24,
    alignItems: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#FA812F',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FA812F',
    marginBottom: 6,
  },
  message: {
    fontSize: 15,
    color: '#333',
    marginBottom: 8,
  },
  time: {
    fontSize: 13,
    color: '#888',
    textAlign: 'right',
  },
});

export default Notification;
