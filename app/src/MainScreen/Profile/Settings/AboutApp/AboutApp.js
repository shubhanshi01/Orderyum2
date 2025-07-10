import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const AboutApp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={require('../../../../Component/images/header.jpg')} style={styles.backgroundImage} />
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>OrderYum</Text>
          <Text style={styles.subtitle}>Your Favorite Food, Delivered Fast</Text>
          <Text style={styles.sectionTitle}>About the App</Text>
          <Text style={styles.text}>
            OrderYum is your one-stop solution for ordering delicious meals from your favorite restaurants. Enjoy a seamless experience, real-time order tracking, and exclusive offers—all in one app. Whether you're craving a quick snack or a full meal, OrderYum brings the best food to your doorstep, fast and fresh!
          </Text>
          <Text style={styles.sectionTitle}>Features</Text>
          <Text style={styles.text}>
            • Easy and secure sign up/login{"\n"}
            • Browse a wide variety of cuisines{"\n"}
            • Real-time order tracking{"\n"}
            • Exclusive deals and offers{"\n"}
            • User-friendly interface
          </Text>
          <Text style={styles.sectionTitle}>Contact Us</Text>
          <Text style={styles.text}>
            Email: support@orderyum.com{"\n"}
            Phone: +91 98765 43210
          </Text>
          <Text style={styles.footer}>Thank you for choosing OrderYum!</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF3E2',
    alignItems: 'center',
    padding: 0,
    justifyContent: 'center',
  },
  card: {
    width: width - 32,
    maxWidth: 500,
    backgroundColor: '#fff',
    borderRadius: 24,
    overflow: 'hidden',
    shadowColor: '#FA812F',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 4,
    alignItems: 'center',
    marginVertical: 32,
  },
  backgroundImage: {
    width: '100%',
    height: 140,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    zIndex: 0,
    opacity: 0.25,
  },
  scrollContent: {
    padding: 24,
    paddingTop: 32,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FA812F',
    marginBottom: 4,
    letterSpacing: 1,
    zIndex: 1,
  },
  subtitle: {
    fontSize: 18,
    color: '#E67E22',
    marginBottom: 18,
    fontStyle: 'italic',
    zIndex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FA812F',
    marginTop: 18,
    marginBottom: 6,
    alignSelf: 'flex-start',
    zIndex: 1,
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    lineHeight: 22,
    alignSelf: 'flex-start',
    zIndex: 1,
  },
  footer: {
    marginTop: 32,
    fontSize: 16,
    color: '#FA812F',
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    zIndex: 1,
  },
});

export default AboutApp;
