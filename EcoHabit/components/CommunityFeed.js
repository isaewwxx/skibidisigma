import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const CommunityFeed = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    // Fetch feed data
  }, []);

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.user}</Text>
      <Text>{item.post}</Text>
      <View>
        <Button title="Like" onPress={() => {}} />
        <Button title="Leaf" onPress={() => {}} />
        <Button title="Clap" onPress={() => {}} />
      </View>
    </View>
  );

  return (
    <View>
      <FlatList
        data={feed}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default CommunityFeed;
