import React, { useContext } from 'react'
import {View,Text,ScrollView} from 'react-native'
import { useState } from 'react';
import { FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Home from './Home';
import { useCart } from '../Context/CartContext';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../Context/AuthContext';

const Cart = ({navigation}) => {
    const { cart, removeFromCart, getTotal, updateQuantity, clearCart } = useCart();
    const nav = useNavigation();
    const { logout } = useContext(AuthContext);
    return(
        <View style={styles.maincontainer}>
        <ScrollView showsVerticalScrollIndicator={false}>       
            <View style={{backgroundColor:'#FA812F', height:60, width:'100%', justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity onPress={()=>navigation.navigate(Home)}>
                <Text style={styles.button}>Close</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Cart Items</Text>
          {cart.length === 0 ? (
            <Text style={{textAlign:'center', color:'#888', marginTop:40}}>Your cart is empty.</Text>
          ) : (
            cart.map(item => (
              <View style={styles.containerCardList} key={item.id}>
                <Image source={item.image} style={styles.cardImage} />
                <View style={styles.cardContent}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemDetail}>Price: <Text style={styles.price}>{item.price}</Text></Text>
                  <Text style={styles.itemDetail}>Quantity: <Text style={styles.quantity}>{item.quantity}</Text></Text>
                  <Text style={styles.itemDetail}>Total: <Text style={styles.total}>₹{parseInt(item.price.replace(/[^0-9]/g, '')) * item.quantity}</Text></Text>
                  <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={styles.removeButton} onPress={() => removeFromCart(item.id)}>
                      <Text style={styles.removeButtonText}>Remove</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.removeButton} onPress={() => updateQuantity(item.id, item.quantity + 1)}>
                      <Text style={styles.removeButtonText}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.removeButton} onPress={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>
                      <Text style={styles.removeButtonText}>-</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))
          )}
          <Text style={{fontSize:20, fontWeight:'bold', color:'#27ae60', marginTop:24, textAlign:'right'}}>Total: ₹{getTotal()}</Text>
          {cart.length > 0 && (
            <TouchableOpacity style={[styles.button, {marginTop:24, alignSelf:'center'}]} onPress={clearCart}>
              <Text style={{color:'#fff', fontWeight:'bold'}}>Clear Cart</Text>
            </TouchableOpacity>
          )}
          {cart.length > 0 && (
            <TouchableOpacity style={[styles.button, {marginTop:24, alignSelf:'center', backgroundColor:'#43aa8b'}]} onPress={()=>nav.navigate('OrderDemo')}>
              <Text style={{color:'#fff', fontWeight:'bold'}}>Order</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={{
              backgroundColor: '#E74C3C',
              paddingHorizontal: 32,
              paddingVertical: 16,
              borderRadius: 24,
              marginTop: 40,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              shadowColor: '#E74C3C',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.18,
              shadowRadius: 8,
              elevation: 4,
            }}
            onPress={logout}
          >
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20, letterSpacing: 1 }}>🔒 Logout</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
    </View>
    )
}
export default Cart;

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        backgroundColor: '#FEF3E2',
    },
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 24,
        color: '#FA812F',
        textAlign: 'center',
        letterSpacing: 1,
    },
    containerCardList: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#fff',
        padding: 18,
        borderRadius: 16,
        shadowColor: '#FA812F',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 4,
        minHeight: 180, // increased min height for more space
        height: 'auto', // let height grow with content
    },
    cardImage: {
        width: 110, // increased from 70
        height: 110, // increased from 70
        borderRadius: 55, // keep it circular
        marginRight: 24, // more space from text
        borderWidth: 2,
        borderColor: '#FA812F',
        backgroundColor: '#f8f8f8',
    },
    cardContent: {
        flex: 1,
        justifyContent: 'center',
        paddingBottom: 0,
        alignItems: 'flex-end', // right align all text in card content
    },
    itemName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#222',
        marginBottom: 6,
        textAlign: 'right', // right align text
        width: '100%',
    },
    itemDetail: {
        fontSize: 15,
        color: '#666',
        marginBottom: 2,
        textAlign: 'right', // right align text
        width: '100%',
    },
    price: {
        color: '#E67E22',
        fontWeight: 'bold',
        textAlign: 'right',
    },
    quantity: {
        color: '#FA812F',
        fontWeight: 'bold',
        textAlign: 'right',
    },
    total: {
        color: '#27ae60',
        fontWeight: 'bold',
        marginBottom: 18,
        textAlign: 'right',
        width: '100%',
    },
    removeButton: {
        backgroundColor: '#fff0eb',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: '#FA812F',
        marginLeft: 10,
        alignSelf: 'flex-end', // button at the bottom right
        marginTop: 12, // space above the button
    },
    removeButtonText: {
        color: '#FA812F',
        fontWeight: 'bold',
        fontSize: 15,
    },
    button: {
        backgroundColor:'#FA812F',
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:5,
        fontWeight: 'bold',
        fontSize: 16,
        overflow: 'hidden',
        color:'#fff',
    }
})