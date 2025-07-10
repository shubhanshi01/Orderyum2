import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useCart } from '../Context/CartContext';

const ProductPage = ({ route }) => {
  const { meal } = route.params;
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.container}>
      <Image source={typeof meal.image === 'string' ? { uri: meal.image } : meal.image} style={styles.image} />
      <Text style={styles.name}>{meal.name}</Text>
      <Text style={styles.desc}>{meal.desc}</Text>
      <Text style={styles.price}>{meal.price}</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#FF914D' }]}
          onPress={() => addToCart({ ...meal, quantity })}
        >
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#43aa8b' }]}
          onPress={() => alert(`Ordered ${meal.name}!`)}
        >
          <Text style={styles.buttonText}>Order Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 16,
    marginBottom: 16,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#22223b',
    marginBottom: 4,
  },
  desc: {
    fontSize: 16,
    color: '#4a4e69',
    marginBottom: 12,
  },
  price: {
    fontSize: 22,
    fontWeight: '700',
    color: '#5f6dff',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 24,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
