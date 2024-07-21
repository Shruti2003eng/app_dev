import React, { useContext } from 'react';
import {  ScrollView,Text, Image, Button, StyleSheet, SafeAreaView } from 'react-native';
import { FavoriteContext } from './FavoriteContext';

const ProductCard = ({ product }) => {
  const { addFavorite } = useContext(FavoriteContext);

  return (
    <SafeAreaView style={styles.card}>
    <ScrollView>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.Discount}>Discount-{product.Discount}</Text>
      <Text style={styles.price}>Rs{product.price.toFixed()}</Text>
      <Button title="Add to Favorites" onPress={() => addFavorite(product)} />
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
});

export default ProductCard;