import React from 'react';
import { View, Text,StyleSheet, Image } from 'react-native';

const Header = () => (
    <View style={styles.container}>
        <Image
            source={require('../../../assets/images/icon.png')}
            style={styles.icon}
            resizeMode="contain"
            
        />
        <View style={styles.header}>
            <Text style={styles.title}>OrderYum</Text>
            <Text style={styles.location}>📍 Your Location</Text>
        </View>
        
        </View>
    

);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 24, // reduced from 40
        paddingBottom: 8, // reduced from 16
        paddingHorizontal: 14, // reduced from 20
        backgroundColor: '#ff7043',
        elevation: 4,
        justifyContent: 'space-between',
    },
    icon: {
        width: 28, // reduced from 40
        height: 28, // reduced from 40
        marginRight: 8, // reduced from 12
    },
    title: {
        fontSize: 18, // reduced from 24
        color: '#fff',
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    header: {
        flex: 1,
        justifyContent: 'center',
    },
    location: {
        fontSize: 12, // reduced from 16
        color: '#fff',
        marginTop: 2, // reduced from 4
    },
});

export default Header;