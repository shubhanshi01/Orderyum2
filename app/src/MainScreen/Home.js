import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { db } from '../../firebaseConfig';
import Header from '../Component/Header';
import OfferSlider from '../Component/OfferSlider';
import Recommended from '../Component/Recommended';
const food = {
    
    categories: ['Pizza', 'Burger', 'Salad', 'Dessert', 'Drinks'],
    recommended: [
        { id:'' ,name: 'Margherita Pizza', desc: 'Classic pizza with fresh basil and mozzarella' },
        
    ]
};

const Home = () => {
    const Location="Delhi";
    const[search,setSearch]=useState("");
    const[FoodData,setFoodData]=useState([]);
    const foodDataQuery=collection(db,"FoodData");
    useEffect(() => {
        const unsubscribe = onSnapshot(foodDataQuery, snapshot => {
          setFoodData(snapshot.docs.map(doc => doc.data()));
        });
        console.log("Food Data:",FoodData)
        return () => unsubscribe(); // clean up listener
    }, [Location]);
    console.log("fooddata".FoodData)
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <StatusBar backgroundColor={'#FA812F'} barStyle="light-content" />
                <Header />

                {/* Search Bar */}
                <View style={styles.searchSection}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search for food or restaurants"
                        placeholderTextColor="#aaa"
                        value={search}
                        onChangeText={setSearch}
                        
                    />
                </View>

                {/* Categories */}
                <View style={styles.sectionTitle}>
                    <Text style={styles.titleText}>Popular Categories</Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
                    {food.categories.map((category, idx) => (
                        <View style={styles.categoryCard} key={idx}>
                            <TouchableOpacity>
                            <Text
                                style={styles.categoryText}
                                onPress={() => {}}
                                accessibilityRole="button"
                            >
                                {category}
                            </Text>
                            </TouchableOpacity>
                            
                        </View>
                    ))}
                </ScrollView>

                {/* Offer Slider */}
                <View style={styles.sectionTitle}>
                    <OfferSlider />
                </View>

                {/* Recommended */}
                <View style={styles.sectionTitle}>
                    <Text style={styles.titleText}>Recommended For You</Text>
                </View>
                <Recommended items={food.recommended} />
            </ScrollView>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FEF3E2',
    },
    searchSection: {
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    searchInput: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
    },
    sectionTitle: {
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    categories: {
        paddingLeft: 20,
    },
    categoryCard: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginRight: 10,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryText: {
        fontSize: 20,
    }
});
