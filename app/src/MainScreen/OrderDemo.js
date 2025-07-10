import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrderDemo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Page</Text>
      <Text style={styles.subtitle}>This is just a demo application.</Text>
      <Text style={styles.work}>Work in progress 🚧</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FEF3E2',
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FA812F',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 20,
    color: '#333',
    marginBottom: 12,
  },
  work: {
    fontSize: 18,
    color: '#E67E22',
    marginTop: 16,
    fontWeight: 'bold',
  },
});

export default OrderDemo;
