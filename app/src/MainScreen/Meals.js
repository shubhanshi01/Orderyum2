import { useNavigation } from '@react-navigation/native'; // Adjust the import path as necessary
import { useRef } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import mealsData from '../Component/mealsData'; 
import React, { useEffect, useState } from 'react';
import { db } from '../../firebaseConfig';
import ProductPage from '../Component/ProductPage';
import { useCart } from '../Context/CartContext';

const Meals = () => {
  const navigation = useNavigation();
  const scrollRef = useRef();
  const [meals, setMeals] = useState(mealsData.Food);
  const { addToCart } = useCart();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image source={require('../Component/images/header.jpg')} style={styles.topImage} />
        <ScrollView
          contentContainerStyle={styles.cardsContainer}
          ref={scrollRef}
        >
          {meals.map((meal, idx) => (
            <TouchableOpacity key={meal.id} onPress={() => navigation.navigate('ProductPage', { meal })}>
              <View style={styles.card}>
                {typeof meal.image === 'string' ? (
                  <Image source={{ uri: meal.image }} style={styles.cardImage} />
                ) : (
                  <Image source={meal.image} style={styles.cardImage} />
                )}
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{meal.name}</Text>
                  <Text style={styles.cardDesc}>{meal.desc}</Text>
                  <Text style={styles.cardPrice}>{meal.price}</Text>
                  <TouchableOpacity style={styles.addButton} onPress={() => addToCart(meal)}>
                    <Text style={styles.addButtonText}>Add to Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF3E2',
    alignItems: 'center',
  },
  topImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  cardsContainer: {
    alignItems: 'stretch', // allow cards to fill width
    paddingBottom: 20,
    width: '100%',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    width: '100%', // use 100% of parent width for all platforms
    marginBottom: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 3,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    boxSizing: 'border-box', // for web, ensures padding doesn't overflow
  },
  cardImage: {
    width: 120,
    height: 120,
    paddingRight: 16,
    marginLeft: 16,
    resizeMode: 'cover',
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    marginRight: 24, // add space between image and text
  },
  cardContent: {
    flex: 1,
    padding: 16,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 4,
    textAlign: 'left',
  },
  cardDesc: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    textAlign: 'left',
  },
  cardPrice: {
    fontSize: 16,
    color: '#E67E22',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
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

export default Meals;
