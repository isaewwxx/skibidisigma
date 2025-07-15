import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const Marketplace = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products
  }, []);

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
      <Text>Eco Rating: {item.ecoRating}</Text>
      <Button title="Buy" onPress={() => {}} />
    </View>
  );

  return (
    <View>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Marketplace;
