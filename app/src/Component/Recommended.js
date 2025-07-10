import { useNavigation } from 'expo-router'; // Adjust the import path as necessary
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ProductPage from './ProductPage';
const Recommended = () => {
    const navigation = useNavigation();
    const foodItems = [
        {
            id: 1,
            name: 'Margherita Pizza',
            desc: 'Classic delight with 100% real mozzarella cheese',
            price: '₹299',
            inStock: "Available",
            image: require('./images/Margherita.jpg'),
        },
        {
            id: 2,
            name: 'Fish Meal',
            desc: 'Fresh fish and variety of side dishes',
            price: '₹299',
            inStock: "Available",
            image: require('./images/Fish.jpg'),
        },
        {
            id: 3,
            name: 'Ramen',
            desc: 'Spicy paneer cubes grilled with saucy ramen perfection',
            price: '₹199',
            inStock: "Available",
            image: require('./images/remen.jpg'),
        },
        {
            id: 4,
            name: 'Veggie Burger',
            desc: 'Loaded with fresh veggies and sauces',
            price: '₹149',
            inStock: "Out of Stock",
            image: require('./images/burger.jpg'),
        },
        // Add more items as needed
    ];

    return (
        <ScrollView horizontal style={styles.recommended} showsHorizontalScrollIndicator={false}>
            {foodItems.map((item, idx) => (
                <TouchableOpacity
                    onPress={() => navigation.navigate(ProductPage)}
                    key={item.id || idx}
                    activeOpacity={0.85}
                >
                    <View style={styles.foodCard}>
                        {item.image && (
                            <Image source={item.image} style={styles.foodImage} />
                        )}
                        <View style={styles.cardContent}>
                            <Text style={styles.foodName}>{item.name}</Text>
                            <Text style={styles.foodDesc}>{item.desc}</Text>
                            <Text style={styles.foodPrice}>{item.price}</Text>
                            <Text style={[styles.inStock, { color: item.inStock === "Available" ? "#43aa8b" : "#e63946" }]}>
                                {item.inStock}
                            </Text>
                            <TouchableOpacity
                                style={[
                                    styles.cartButton,
                                    { backgroundColor: item.inStock === "Available" ? '#FF914D' : '#ccc' }
                                ]}
                                disabled={item.inStock !== "Available"}
                                onPress={() => alert(`Added ${item.name} to cart!`)}
                            >
                                <Text style={styles.cartButtonText}>Add to Cart</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

export default Recommended;

const styles = StyleSheet.create({
    recommended: {
        paddingVertical: 20,
        paddingLeft: 20,
        backgroundColor: '#FEF3E2',
    },
    foodCard: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 16,
        marginBottom: 10,
        marginRight: 18,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.18,
        shadowRadius: 12,
        elevation: 6,
        flexDirection: 'row',
        alignItems: 'center',
        width: 320,
        minHeight: 140,
        marginLeft: 5,
    },
    foodImage: {
        width: 90,
        height: 90,
        borderRadius: 14,
        marginRight: 18,
        backgroundColor: '#f2f2f2',
    },
    cardContent: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    foodName: {
        fontSize: 18,
        fontWeight: '700',
        color: '#22223b',
        marginBottom: 2,
        textAlign: 'left',
    },
    foodDesc: {
        fontSize: 13,
        color: '#4a4e69',
        marginTop: 2,
        textAlign: 'left',
        marginBottom: 6,
    },
    foodPrice: {
        fontSize: 16,
        color: '#5f6dff',
        marginTop: 4,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    inStock: {
        fontSize: 13,
        fontWeight: '600',
        marginTop: 2,
        marginBottom: 6,
    },
    cartButton: {
        marginTop: 6,
        paddingVertical: 8,
        paddingHorizontal: 18,
        borderRadius: 8,
        alignSelf: 'flex-start',
    },
    cartButtonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 15,
    },
});